import MainHeader from "@/components/Headers/MainHeader";
import ReportLocator from "@/components/MapComponents/ReportLocator";
import { useGetAllPmmMonitoringMutation } from "@/redux/features/pmm-monitoring/pmmMonitoringApi";
import { EnvironmentOutlined } from "@ant-design/icons"; // For map pin icon
import { Image, notification, Table } from "antd";
import { useEffect, useState } from "react";

const PmmMonitoring = () => {
    const [triggerPmm, { data, isLoading, isError, error }] =
        useGetAllPmmMonitoringMutation();
    console.log("data", data);
    const [state, setState] = useState({
        mapData: {},
        isMapOpen: false,
    });

    useEffect(() => {
        handleTriggerPmm();
    }, []);

    const handleTriggerPmm = (filters) => {
        try {
            triggerPmm({
                from: "2024-10-10T14:17:19.425Z",
                to: "2024-10-23T14:17:19.425Z",
            });
        } catch (error) {
            notification.error({
                message: "Error",
                description: error?.message,
            });
        }
    };

    const handleOpenModal = (data) => {
        const { _id, lat, lon, user, outlet, campaign, point } = data || {};
        setState({
            ...state,
            mapData: {
                _id,
                location: { lat, lng: lon },
                user,
                outlet,
                campaign,
                point,
            },
            isMapOpen: true,
        });
    };

    const handleCloseModal = () => {
        setState({ ...state, mapData: {}, isMapOpen: false });
    };

    const columns = [
        {
            title: "User Information",
            dataIndex: "user",
            key: "user",
            render: (user, record) => (
                <div>
                    <p>
                        <strong>CM Name:</strong> {user?.name}
                    </p>
                    <p>
                        <strong>CM Code:</strong> {user?.usercode}
                    </p>
                    <p>
                        <strong>MS Name:</strong> {user?.supervisor?.name}
                    </p>
                    <p>
                        <strong>MS Code:</strong> {user?.supervisor?.usercode}
                    </p>
                    <p>
                        <strong>Point Name:</strong> {record?.point?.name}
                    </p>
                </div>
            ),
        },
        {
            title: "Outlet Data",
            dataIndex: "outlet",
            key: "outlet",
            render: (outlet) => (
                <div>
                    <p>
                        <strong>Route:</strong> {outlet?.route}
                    </p>
                    <p>
                        <strong>Cluster:</strong> {outlet?.cluster}
                    </p>
                    <p>
                        <strong>Address:</strong> {outlet?.address}
                    </p>
                    <p>
                        <strong>Outlet Nmae:</strong> {outlet?.name}
                    </p>
                    <p>
                        <strong>Owner Nmae:</strong> {outlet?.name}
                    </p>
                    <p>
                        <strong>Owner Contact No:</strong> {outlet?.contact}
                    </p>
                </div>
            ),
        },
        {
            title: "Questions",
            dataIndex: "question",
            key: "question",
            render: (questions) => (
                <div>
                    {questions?.map((question) => (
                        <p key={question?.label}>
                            <strong>{question?.label}: </strong>{" "}
                            {question?.value}
                        </p>
                    ))}
                </div>
            ),
        },
        {
            title: "Image",
            dataIndex: "image",
            key: "image",
            render: (image) => (
                <div className="flex flex-wrap gap-1 justify-center content-start max-w-52">
                    <Image.PreviewGroup>
                        {image?.map((img, index) => (
                            <Image
                                key={index}
                                width={40}
                                height={40}
                                src={img?.thumb}
                                preview={{
                                    src: img?.original,
                                }}
                                wrapperClassName="rounded h-10 w-10"
                                alt={img?.name || "execution"}
                                className="rounded"
                            />
                        ))}
                    </Image.PreviewGroup>
                </div>
            ),
        },
        {
            title: "Map Pin",
            key: "mapPin",
            render: (_, record) => (
                <div onClick={() => handleOpenModal(record)}>
                    <span role="img" aria-label="map">
                        <EnvironmentOutlined
                            style={{ fontSize: "24px", color: "#1890ff" }}
                            className="cursor-pointer"
                        />
                    </span>
                </div>
            ),
        },
    ];

    return (
        <div>
            <div>
                <MainHeader title="PMM Monitoring" />
                <Table
                    showHeader={false}
                    columns={columns}
                    dataSource={data?.data}
                    rowKey="outlet.id"
                    rowClassName="styled__table"
                    pagination={{
                        size: "small",
                        position: ["bottomCenter"],
                        showSizeChanger: true,
                        showTotal: (total, range) =>
                            `Showing ${range[0]}-${
                                range[1]
                            } of ${total} records (Page ${Math.ceil(
                                range[1] / (range[1] - range[0] + 1)
                            )} of ${Math.ceil(
                                total / (range[1] - range[0] + 1)
                            )})`,
                        defaultPageSize: 10,
                        defaultCurrent: 1,
                        hideOnSinglePage: false,
                        pageSizeOptions: ["10", "20", "50", "100"],
                    }}
                />
            </div>

            {state?.isMapOpen && (
                <ReportLocator
                    data={state?.mapData}
                    isOpen={state?.isMapOpen}
                    onClose={handleCloseModal}
                />
            )}
        </div>
    );
};

export default PmmMonitoring;
