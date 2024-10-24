import MainHeader from '@/components/Headers/MainHeader';
import { Button, Form, Input, Popconfirm, Table, Typography } from 'antd';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import { RiRestartFill, RiStopCircleFill } from 'react-icons/ri';

const columns = [
    {
        title: 'DH ID',
        dataIndex: 'dhId',
        key: 'dhId',
    },
    {
        title: 'Region Name',
        dataIndex: 'regionName',
        key: 'regionName',
        filters: [
            {
                text: 'Joe',
                value: 'Joe',
            },
            {
                text: 'Region 40',
                value: 'Region 40',
            },
            {
                text: 'Region 77',
                value: 'Region 77',
            },
        ],
        filterMode: 'tree',
        filterSearch: true,
        onFilter: (value, record) => record.regionName.startsWith(value),
        // width: '30%',
    },

    {
        title: 'Area Name',
        dataIndex: 'areaName',
        key: 'areaName',
        filters: [
            {
                text: 'Joe',
                value: 'Joe',
            },
            {
                text: 'Region 40',
                value: 'Region 40',
            },
            {
                text: 'Region 77',
                value: 'Region 77',
            },
        ],
        filterMode: 'tree',
        filterSearch: true,
        onFilter: (value, record) => record.areaName.startsWith(value),
    },
    {
        title: 'Territory',
        dataIndex: 'territory',
        key: 'territory',
        filters: [
            {
                text: 'Joe',
                value: 'Joe',
            },
            {
                text: 'Region 40',
                value: 'Region 40',
            },
            {
                text: 'Region 77',
                value: 'Region 77',
            },
        ],
        filterMode: 'tree',
        filterSearch: true,
        onFilter: (value, record) => record.territory.startsWith(value),
    },
    {
        title: 'DH Name',
        dataIndex: 'dhName',
        key: 'dhName',
        filters: [
            {
                text: 'Joe',
                value: 'Joe',
            },
            {
                text: 'Region 40',
                value: 'Region 40',
            },
            {
                text: 'Region 77',
                value: 'Region 77',
            },
        ],
        filterMode: 'tree',
        filterSearch: true,
        onFilter: (value, record) => record.dhName.startsWith(value),
    },
    {
        title: 'Action',
        key: 'action',
        render: (_, record) => {
            const editable = true;
            return editable ? (
                <span>
                    <Typography.Link
                        // onClick={() => save(record.key)}
                        style={{
                            marginRight: 8,
                        }}
                    >
                        Save
                    </Typography.Link>
                    <Popconfirm
                        title="Sure to cancel?"
                        // onConfirm={cancel}
                    >
                        <a>Cancel</a>
                    </Popconfirm>
                </span>
            ) : (
                <div className="flex gap-3">
                    <Popconfirm
                        title="Are you sure to edit this region?"
                        // onConfirm={() => edit(record)}
                    >
                        <FaEdit className="size-6 cursor-pointer text-green-500" />
                    </Popconfirm>
                    <Popconfirm
                        title="Are you sure to delete this region?"
                        // onConfirm={() => deleteRecord(record.key)}
                    >
                        <FaTrashAlt className="size-6 cursor-pointer text-red-500" />
                    </Popconfirm>
                    {record.active ? (
                        <Popconfirm
                            title="Are you sure to pause this region?"
                            // onConfirm={() => toggleActive(record.key)}
                        >
                            <RiStopCircleFill className="size-6 cursor-pointer text-red-500" />
                        </Popconfirm>
                    ) : (
                        <Popconfirm
                            title="Are you sure to resume this region?"
                            // onConfirm={() => toggleActive(record.key)}
                        >
                            <RiRestartFill className="size-6 cursor-pointer text-blue-500" />
                        </Popconfirm>
                    )}
                </div>
            );
        },
    },
];

const data = Array.from({ length: 89 }, (_, index) => ({
    dhId: (index + 1).toString(),
    regionName: `Region ${index + 1}`,
    areaName: `Area ${index + 1}`,
    territory: `Territory ${index + 1}`,
    dhName: `DH Name ${index + 1}`,
    active: true,
}));

const DistributionHousesPage = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  return (
    <div className="space-y-8">
      <div className="rounded-xl bg-white shadow-md">
        <MainHeader title="Add Distribution House" />
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
                message: "Please input your region!",
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
                message: "Please input your area!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Territory"
            name="territory"
            rules={[
              {
                required: true,
                message: "Please input your territory!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="DH Name"
            name="dhName"
            rules={[
              {
                required: true,
                message: "Please input your DH Name!",
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
        <MainHeader title="View Distribution House" />
        <Table
          dataSource={data}
          columns={columns}
          size="small"
          pagination={{
            position: ["bottomCenter"],
            showSizeChanger: true,
            showTotal: (total, range) =>
              `Showing ${range[0]}-${
                range[1]
              } of ${total} records (Page ${Math.ceil(
                range[1] / (range[1] - range[0] + 1)
              )} of ${Math.ceil(total / (range[1] - range[0] + 1))})`,
            defaultPageSize: 10,
            defaultCurrent: 1,
            hideOnSinglePage: false,
            pageSizeOptions: ["10", "20", "50", "100"],
            showQuickJumper: true,
          }}
        />
      </div>
    </div>
  );
};

export default DistributionHousesPage;
