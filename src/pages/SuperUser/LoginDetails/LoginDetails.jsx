import MainHeader from "@/components/Headers/MainHeader";
import LoginDetailsFilter from "@/components/SuperUser/LoginDetails";
import { Table } from "antd";
import { useState } from "react";

const columns = [
    {
        title: "User ID",
        dataIndex: "age",
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
        title: "Group Name",
        dataIndex: "groupName",
    },
    {
        title: "Login Details",
        dataIndex: "description",
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

const defaultExpandable = {
    expandedRowRender: (record) => <p>{record.description}</p>,
};

const LoginDetails = () => {
    const [hasData, setHasData] = useState(true);
    const [ellipsis, setEllipsis] = useState(false);
    const [yScroll, setYScroll] = useState(false);
    const [xScroll, setXScroll] = useState();

    const scroll = {};
    if (yScroll) {
        scroll.y = 240;
    }
    if (xScroll) {
        scroll.x = "100vw";
    }

    const tableColumns = columns.map((item) => ({ ...item, ellipsis }));

    // const tableProps: TableProps  = {
    //     bordered,
    //     loading,
    //     size,
    //     expandable,
    //     title: showTitle ? defaultTitle : undefined,
    //     showHeader,
    //     footer: showFooter ? defaultFooter : undefined,
    //     rowSelection,
    //     scroll,
    //     tableLayout,
    // };

    return (
        <div>
            <LoginDetailsFilter />
            <div className="content-container">
                <MainHeader title="Login Details" />
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
                    dataSource={hasData ? data : []}
                    scroll={scroll}
                />
            </div>
        </div>
    );
};

export default LoginDetails;
