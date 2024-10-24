import MainHeader from '@/components/Headers/MainHeader';
import SummaryFilter from '@/components/LeaveManagement/LeaveSummary/SummaryFilter';
import ReportLocator from '@/components/MapComponents/ReportLocator';
import { useGetAllTsrMutation } from '@/redux/features/visit-call/visitCallApi';
import { Image, Table } from 'antd';
import { useEffect, useState } from 'react';
import { FaFileDownload } from 'react-icons/fa';
import { PiMapPinLineFill } from 'react-icons/pi';

const Page = () => {
    const [state, setState] = useState({
        mapData: {},
        isMapOpen: false,
    });

    const [triggerTsr, { data, isLoading, isError, error }] =
        useGetAllTsrMutation({});

    useEffect(() => {
        handleTsr();
    }, []);

    const handleTsr = () => {
        triggerTsr({});
    };

    const handleOpenModal = (data) => {
        setState({ ...state, mapData: data, isMapOpen: true });
    };

    const handleCloseModal = () => {
        setState({ ...state, mapData: {}, isMapOpen: false });
    };

    const columns = [
        {
            dataIndex: 'user',
            key: 'user',
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
            dataIndex: 'outlet',
            key: 'outlet',
            render: (outlet, record) => (
                <div>
                    <p>
                        <strong>Route:</strong> {outlet?.route}
                    </p>
                    <p>
                        <strong>Outlet Code:</strong> {outlet?.outletcode}
                    </p>
                    <p>
                        <strong>Outlet Name:</strong> {outlet?.name}
                    </p>
                    <p>
                        <strong>Cluster:</strong> {outlet.cluster}
                    </p>
                </div>
            ),
        },
        {
            dataIndex: 'question',
            key: 'question',
            render: (question) => (
                <div>
                    {question?.map(({ label, value }) => (
                        <p key={label}>
                            <strong>{label}:</strong> {value}
                        </p>
                    ))}
                </div>
            ),
        },
        {
            title: 'Map Pin',
            key: 'mapPin',
            render: (_, record) => (
                <div className="flex flex-row items-center justify-end gap-5">
                    <div>
                        <Image
                            src="https://a.storyblok.com/f/191576/1200x800/b7ad4902a2/signature_maker_after_.webp"
                            preview={
                                // show preview
                                true
                            }
                            alt="signature maker"
                            width={200}
                            height={100}
                            className="rounded-lg border-2"
                        />
                    </div>
                    <div onClick={() => handleOpenModal(record)}>
                        <span role="img" aria-label="map">
                            <PiMapPinLineFill className="h-10 w-10 cursor-pointer text-red-600" />
                        </span>
                    </div>
                    <div onClick={() => handleOpenModal(record)}>
                        <span role="img" aria-label="pdf">
                            <FaFileDownload className="h-10 w-10 cursor-pointer text-green-600" />
                        </span>
                    </div>
                </div>
            ),
        },
    ];

    return (
        <div>
            <div>
                <SummaryFilter />
            </div>
            <div>
                <MainHeader title="Price Complience Visit" />
                <Table
                    showHeader={false}
                    columns={columns}
                    dataSource={data?.data}
                    pagination={{
                        size: 'small',
                        position: ['bottomCenter'],
                        showSizeChanger: true,
                        showTotal: (total, range) =>
                            `Showing ${range[0]}-${range[1]} of ${total} records (Page ${Math.ceil(range[1] / (range[1] - range[0] + 1))} of ${Math.ceil(total / (range[1] - range[0] + 1))})`,
                        defaultPageSize: 10,
                        defaultCurrent: 1,
                        hideOnSinglePage: false,
                        pageSizeOptions: ['10', '20', '50', '100'],
                        showQuickJumper: true,
                    }}
                />

                {state?.isMapOpen && (
                    <ReportLocator
                        data={state?.mapData}
                        isOpen={state?.isMapOpen}
                        onClose={handleCloseModal}
                    />
                )}
            </div>
        </div>
    );
};

export default Page;
