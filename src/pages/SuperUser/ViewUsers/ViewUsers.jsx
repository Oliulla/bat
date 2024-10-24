import MainHeader from "@/components/Headers/MainHeader";
import UserDetails from "@/components/SuperUser/ViewUsers";
import { Table } from "antd";

const columns = [
    {
        title: "User ID",
        dataIndex: "age",
    },
    {
        title: "User Picture",
        dataIndex: "name",
        render: () => <img src="https://joeschmoe.io/api/v1/random" />,
    },
    {
        title: "Full Name",
        dataIndex: "name",
    },
    {
        title: "Username",
        dataIndex: "address",
    },
    {
        title: "User Type",
        dataIndex: "address",
    },
    {
        title: "Access Of",
        dataIndex: "groupName",
    },
    {
        title: "Login Page",
        dataIndex: "address",
    },
    {
        title: "Group Name",
        dataIndex: "groupName",
    },
    {
        title: "Group Type",
        dataIndex: "groupType",
    },
    {
        title: "Action",
        key: "action",
        render: () => <button>Edit</button>,
    },
];

const data = Array.from({ length: 153 }).map((_, i) => ({
    key: i,
    name: "John Brown",
    age: Number(`${i}2`),
    address: `New York No. ${i} Lake Park`,
    groupName: `Group ${i}`,
    groupType: "Super User",
    description: `My name is John Brown, I am ${i}2 years old, living in New York No. ${i} Lake Park. I am very happy to meet you! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
}));

const ViewUsers = () => {
    const tableColumns = columns?.map((item) => ({ ...item }));

    return (
        <div>
            <div className="mb-8 filters">
                <UserDetails />
            </div>
            <div className="content-container">
                <MainHeader title="View Users" />
                <Table
                    pagination={{
                        position: ["bottomCenter"],
                        size: "small",
                        showSizeChanger: true,
                        showTotal: (total) => `Total ${total} items`,
                        defaultPageSize: 10,
                        defaultCurrent: 1,
                        hideOnSinglePage: true,
                        pageSizeOptions: ["10", "20", "50", "100"],
                        showQuickJumper: true,
                    }}
                    columns={tableColumns}
                    dataSource={data ? data : []}
                />
            </div>
        </div>
    );
};

export default ViewUsers;
