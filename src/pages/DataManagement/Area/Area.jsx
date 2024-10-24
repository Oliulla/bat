import MainHeader from '@/components/Headers/MainHeader';
import { Button, Form, Input, Popconfirm, Table } from 'antd';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import { RiRestartFill, RiStopCircleFill } from 'react-icons/ri';

const columns = [
    {
        title: 'Area ID',
        dataIndex: 'areaId',
        key: 'areaId',
    },
    {
        title: 'Region Name',
        dataIndex: 'region',
        key: 'region',
    },
    {
        title: 'Area Name',
        dataIndex: 'areaName',
        key: 'areaName',
    },

    {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
            <div className="flex gap-3">
                <Popconfirm
                    title="Are you sure edit this region?"
                    onConfirm={() => console.log('Edited')}
                >
                    <FaEdit className="size-6 cursor-pointer text-green-500" />
                </Popconfirm>
                <Popconfirm
                    title="Are you sure delete this region?"
                    onConfirm={() => console.log('Deleted')}
                >
                    <FaTrashAlt className="size-6 cursor-pointer text-red-500" />
                </Popconfirm>
                <Popconfirm
                    title="Are you sure resume this region?"
                    onConfirm={() => console.log('Resumed')}
                >
                    <RiRestartFill className="size-6 cursor-pointer text-blue-500" />
                </Popconfirm>
                <Popconfirm
                    title="Are you sure pause this region?"
                    onConfirm={() => console.log('Paused')}
                >
                    <RiStopCircleFill className="size-6 cursor-pointer text-red-500" />
                </Popconfirm>
            </div>
        ),
    },
];

const data = Array.from({ length: 89 }, (_, index) => ({
    areaId: (index + 1).toString(),
    region: `Region ${index + 1}`,
    areaName: `Area ${index + 1}`,
    url: 'https://www.google.com',
}));

const AreaPage = () => {
    const onFinish = (values) => {
        console.log('Success:', values);
    };

    return (
        <div className="space-y-8">
            <div className="rounded-xl bg-white shadow-md">
                <MainHeader title="Add Region" />
                <Form
                    name="basic"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    className="grid grid-cols-2 gap-5 p-10"
                >
                    <Form.Item
                        label="Region Name"
                        name="region"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your region!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Area Name"
                        name="area"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your area!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item className="col-span-2 mx-auto">
                        <Form.Item name="submit" noStyle>
                            <Button type="primary" htmlType="submit">
                                Add
                            </Button>
                        </Form.Item>
                    </Form.Item>
                </Form>
            </div>

            <div className="rounded-xl bg-white shadow-md">
                <MainHeader title="View Region" />
                <Table
                    dataSource={data}
                    columns={columns}
                    size="small"
                    pagination={{
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
            </div>
        </div>
    );
};

export default AreaPage;
