import MainHeader from '@/components/Headers/MainHeader';
import { Button, Form, Input, Table } from 'antd';

const columns = [
    {
        title: 'Region ID',
        dataIndex: 'key',
        key: 'key',
    },
    {
        title: 'Region',
        dataIndex: 'region',
        key: 'region',
    },
    {
        title: 'Action',
        key: 'action',
        render: (text, record) => <a href={record.url}>View</a>,
    },
];

const data = [
    {
        key: '1',
        region: 'Region 1',
        url: 'https://www.google.com',
    },
    {
        key: '2',
        region: 'Region 2',
        url: 'https://www.google.com',
    },
];

const RegionPage = () => {
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
                    className="p-10"
                >
                    <Form.Item
                        label="Region"
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

                    <Form.Item>
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
                    pagination={{
                        // onChange: cancel,
                        position: ['bottomCenter'],
                        size: 'small',
                        showSizeChanger: true,
                        showTotal: (total, range) =>
                            `Showing ${range[0]}-${range[1]} of ${total} records (Page ${Math.ceil(range[1] / (range[1] - range[0] + 1))} of ${Math.ceil(total / (range[1] - range[0] + 1))})`,
                        showQuickJumper: true,
                        defaultPageSize: 10,
                        defaultCurrent: 1,
                        hideOnSinglePage: false,
                        pageSizeOptions: ['10', '20', '50', '100'],
                    }}
                />
            </div>
        </div>
    );
};

export default RegionPage;
