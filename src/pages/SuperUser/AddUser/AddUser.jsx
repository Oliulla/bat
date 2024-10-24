import MainHeader from "@/components/Headers/MainHeader";
import { Avatar, Button, Flex, Form, Input } from "antd";
import React from "react";

const AddUser = () => {
    const onSubmit = (values) => {
        console.log("Received values of form: ", values);
    };

    return (
        <div className="content-container">
            <MainHeader title="Add User" />
            <div className="p-10 w-full">
                <Form
                    layout="horizontal"
                    labelAlign="left"
                    labelCol={{ span: 7 }}
                    className="grid grid-cols-2 gap-x-5"
                    onFinish={onSubmit}
                >
                    <Form.Item
                        name="avatar"
                        label={false}
                        className="flex col-span-2 justify-center w-full"
                    >
                        <Avatar
                            size={100}
                            className="rounded-full"
                            src="https://avatars.githubusercontent.com/u/101519463?s=200&v=4"
                        />
                    </Form.Item>
                    <Form.Item
                        name="name"
                        label="Name"
                        rules={[
                            {
                                required: true,
                                message: "Please input your name!",
                            },
                        ]}
                    >
                        <Input placeholder="Please input your name!" />
                    </Form.Item>
                    <Form.Item
                        name="userName"
                        label="User Name"
                        rules={[
                            {
                                required: true,
                                message: "Please input your user name!",
                            },
                        ]}
                    >
                        <Input placeholder="Please input your user name!" />
                    </Form.Item>
                    <Form.Item
                        name="email"
                        label="Email"
                        rules={[
                            {
                                required: true,
                                message: "Please input your email!",
                            },
                        ]}
                    >
                        <Input placeholder="Please input your email!" />
                    </Form.Item>
                    <Form.Item
                        name="accessLevel"
                        label="Access Level"
                        rules={[
                            {
                                required: true,
                                message: "Please input your access level!",
                            },
                        ]}
                    >
                        <Input placeholder="Please input your access level!" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        label="Password"
                        rules={[
                            {
                                required: true,
                                message: "Please input your password!",
                            },
                        ]}
                    >
                        <Input placeholder="Please input your password!" />
                    </Form.Item>
                    <Form.Item
                        name="confirmPassword"
                        label="Confirm Password"
                        rules={[
                            {
                                required: true,
                                message: "Please input your confirm password!",
                            },
                        ]}
                    >
                        <Input placeholder="Please input your confirm password!" />
                    </Form.Item>
                    <Form.Item
                        name="groupName"
                        label="Group Name"
                        rules={[
                            {
                                required: true,
                                message: "Please input your group name!",
                            },
                        ]}
                    >
                        <Input placeholder="Please input your group name!" />
                    </Form.Item>
                    <Form.Item
                        name="landingPage"
                        label="Landing Page"
                        rules={[
                            {
                                required: true,
                                message: "Please input your landing page!",
                            },
                        ]}
                    >
                        <Input placeholder="Please input your landing page!" />
                    </Form.Item>

                    <Flex justify="center" className="col-span-2 mt-5">
                        <Button type="primary" htmlType="submit" className="">
                            Add User
                        </Button>
                    </Flex>
                </Form>
            </div>
        </div>
    );
};

export default AddUser;
