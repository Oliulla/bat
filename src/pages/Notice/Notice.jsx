import MainHeader from "@/components/Headers/MainHeader";
import AddNewNotice from "@/components/Notice/AddNewNotice";
import { useGetNoticeQuery } from "@/redux/features/notice/noticeApi";
import { Table } from "antd";
import dayjs from "dayjs";
import { FaTrash } from "react-icons/fa";
import { MdDownloadForOffline } from "react-icons/md";

const Notice = () => {
    const { data, isLoading, isError, error } = useGetNoticeQuery({});

    const columns = [
        {
            title: "",
            dataIndex: "date",
            render: (date) => <p>{dayjs(date).format("DD MMMM, YYYY")}</p>,
        },
        {
            title: "Description",
            dataIndex: "description",
            key: "description",
        },
        {
            title: "Uploaded Date",
            dataIndex: "createdAt",
            key: "createdAt",
            render: (date) => <p>{dayjs(date).format("DD MMMM, YYYY")}</p>,
        },
        {
            title: "Published Date",
            dataIndex: "publishAt",
            key: "publishAt",
            render: (date) => <p>{dayjs(date).format("DD MMMM, YYYY")}</p>,
        },
        {
            title: "Expire Date",
            dataIndex: "expireAt",
            key: "expireAt",
            render: (date) => <p>{dayjs(date).format("DD MMMM, YYYY")}</p>,
        },
        {
            title: "Emp. Level",
            dataIndex: "targetOf",
            key: "targetOf",
            render: (targetOf) => (
                <div>
                    {targetOf.map((target, index) => (
                        <p key={index}>{target}</p>
                    ))}
                </div>
            ),
        },
        {
            title: "Action",
            dataIndex: "_id",
            key: "_id",
            render: (id) => (
                <div className="flex flex-row gap-5 justify-center items-center">
                    <MdDownloadForOffline
                        className="w-10 h-10 text-green-600 cursor-pointer"
                        onClick={() => console.log(id)}
                    />
                    <FaTrash
                        className="w-10 h-10 text-red-600 cursor-pointer"
                        onClick={() => console.log(id)}
                    />
                </div>
            ),
        },
    ];

    return (
        <div>
            <div className="content-container">
                <MainHeader title="Notice" />
                <AddNewNotice />
            </div>
            <div className="content-container">
                <MainHeader title="Previous Notice" />
                <Table
                    columns={columns}
                    dataSource={data?.data}
                    rootClassName="info__table"
                    rowClassName="first__row__column"
                />
            </div>
        </div>
    );
};

export default Notice;
