import { Col, Row, Tree } from "antd";
import { useState } from "react";

const AddGroup = () => {
    const onFinish = (values) => {
        console.log("Received values of form: ", values);
    };

    return (
        <div className="content-container">
            <MainHeader title="Add Group" />
            <FormProvider
                layout="horizontal"
                labelAlign="left"
                labelWidth={6}
                onSubmit={onFinish}
                submitText="Create"
                classStyles="p-10"
            >
                <Row gutter={10}>
                    <Col span={12}>
                        <FormInput
                            name="groupName"
                            label="Group Name"
                            rules={[{ required: true }]}
                        />
                    </Col>
                    <Col span={12}>
                        <FormInput
                            name="groupType"
                            label="Group Type"
                            rules={[{ required: true }]}
                        />
                    </Col>

                    <Col span={6}>
                        <App />
                    </Col>
                    <Col span={6}>
                        <App />
                    </Col>
                    <Col span={6}>
                        <App />
                    </Col>
                    <Col span={6}>
                        <App />
                    </Col>
                </Row>
            </FormProvider>
        </div>
    );
};

export default AddGroup;

import MainHeader from "@/components/Headers/MainHeader";
import FormInput from "@/components/Forms/FormInput";
import FormProvider from "@/components/Forms/FormProvider";

const treeData = [
    {
        title: "Super User",
        key: "0-0",
        children: [
            {
                title: "Add Group",
                key: "0-0-0",
            },
            {
                title: "View Groups",
                key: "0-0-1",
            },
            {
                title: "Edit Group",
                key: "0-0-2",
            },
            {
                title: "Add User",
                key: "0-0-3",
            },
            {
                title: "View Users",
                key: "0-0-4",
            },
            {
                title: "Edit User",
                key: "0-0-5",
            },
        ],
    },
];

const App = () => {
    const [expandedKeys, setExpandedKeys] = useState(["0-0-0", "0-0-1"]);
    const [checkedKeys, setCheckedKeys] = useState(["0-0-0"]);
    const [selectedKeys, setSelectedKeys] = useState([]);
    const [autoExpandParent, setAutoExpandParent] = useState(true);

    const onExpand = (expandedKeysValue) => {
        console.log("onExpand", expandedKeysValue);
        // if not set autoExpandParent to false, if children expanded, parent can not collapse.
        // or, you can remove all expanded children keys.
        setExpandedKeys(expandedKeysValue);
        setAutoExpandParent(false);
    };

    const onCheck = (checkedKeysValue) => {
        console.log("onCheck", checkedKeysValue);
        setCheckedKeys(checkedKeysValue);
    };

    const onSelect = (selectedKeysValue, info) => {
        console.log("onSelect", info);
        setSelectedKeys(selectedKeysValue);
    };

    return (
        <Tree
            checkable
            onCheck={onCheck}
            checkedKeys={checkedKeys}
            treeData={treeData}
            className="border-2"
            // onSelect={(keys, info) => onCheck(keys)}
            // onExpand={onExpand}
            // expandedKeys={expandedKeys}
            // autoExpandParent={autoExpandParent}
            // onSelect={onSelect}
            // selectedKeys={selectedKeys}
            // showLine={true}
        />
    );
};
