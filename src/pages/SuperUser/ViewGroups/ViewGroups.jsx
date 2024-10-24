import MainHeader from "@/components/Headers/MainHeader";
import { Table } from "antd";
import React, { useState } from "react";

const columns = [
    {
        title: "Group ID",
        dataIndex: "age",
    },
    {
        title: "Group Name",
        dataIndex: "name",
    },
    {
        title: "Group Type",
        dataIndex: "address",
    },
    {
        title: "Modules",
        dataIndex: "description",
    },
    {
        title: "Action",
        key: "action",
        render: () => (
            <>
                <button>Edit</button>
                <button>Delete</button>
            </>
        ),
    },
];

const data = Array.from({ length: 10 }).map((_, i) => ({
    key: i,
    name: "John Brown",
    age: Number(`${i}2`),
    address: `New York No. ${i} Lake Park`,
    description: `My name is John Brown, I am ${i}2 years old, living in New York No. ${i} Lake Park. I am very happy to meet you! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
}));

const defaultExpandable = {
    expandedRowRender: (record) => <p>{record.description}</p>,
};

const App = () => {
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
        <div className="content-container">
            <MainHeader title="View Groups" />
            <Table
                columns={tableColumns}
                dataSource={hasData ? data : []}
                scroll={scroll}
            />
        </div>
    );
};

export default App;
