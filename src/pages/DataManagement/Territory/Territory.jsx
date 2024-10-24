import MainHeader from '@/components/Headers/MainHeader';
import { Button, Form, Input, Popconfirm, Table, Typography } from 'antd';
import { useState } from 'react';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import { RiRestartFill, RiStopCircleFill } from 'react-icons/ri';

const EditableCell = ({
    editing,
    dataIndex,
    title,
    inputType,
    children,
    ...restProps
}) => {
    const inputNode =
        inputType === 'number' ? <Input type="number" /> : <Input />;
    return (
        <td {...restProps}>
            {editing ? (
                <Form.Item
                    name={dataIndex}
                    style={{
                        margin: 0,
                    }}
                    rules={[
                        {
                            required: true,
                            message: `Please Input ${title}!`,
                        },
                    ]}
                >
                    {inputNode}
                </Form.Item>
            ) : (
                children
            )}
        </td>
    );
};

const Territory = () => {
  const [form] = Form.useForm();
  const [data, setData] = useState(
    Array.from({ length: 89 }, (_, index) => ({
      key: (index + 1).toString(),
      areaId: (index + 1).toString(),
      region: `Region ${index + 1}`,
      areaName: `Area ${index + 1}`,
      active: true,
    }))
  );
  const [editingKey, setEditingKey] = useState("");

  const isEditing = (record) => record.key === editingKey;

  const edit = (record) => {
    form.setFieldsValue({
      areaId: "",
      region: "",
      areaName: "",
      ...record,
    });
    setEditingKey(record.key);
  };

  const cancel = () => {
    setEditingKey("");
  };

  const save = async (key) => {
    try {
      const row = await form.validateFields();
      const newData = [...data];
      const index = newData.findIndex((item) => key === item.key);
      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, {
          ...item,
          ...row,
        });
        setData(newData);
        setEditingKey("");
      } else {
        newData.push(row);
        setData(newData);
        setEditingKey("");
      }
    } catch (errInfo) {
      console.error("Validate Failed:", errInfo);
    }
  };

  const deleteRecord = (key) => {
    const newData = data.filter((item) => item.key !== key);
    setData(newData);
  };

  const toggleActive = (key) => {
    const newData = data.map((item) => {
      if (item.key === key) {
        return { ...item, active: !item.active };
      }
      return item;
    });
    setData(newData);
  };

  const columns = [
    {
      title: "Area ID",
      dataIndex: "areaId",
      key: "areaId",
      editable: true,
      sorter: (a, b) => a.areaId.localeCompare(b.areaId),
      filterDropdown: ({
        setSelectedKeys,
        selectedKeys,
        confirm,
        clearFilters,
      }) => (
        <div style={{ padding: 8 }}>
          <Input
            placeholder="Search Area ID"
            value={selectedKeys[0]}
            onChange={(e) =>
              setSelectedKeys(e.target.value ? [e.target.value] : [])
            }
            onPressEnter={() => confirm()}
            style={{
              width: 188,
              marginBottom: 8,
              display: "block",
            }}
          />
          <Button
            type="primary"
            onClick={() => confirm()}
            size="small"
            style={{ width: 90, marginRight: 8 }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters()}
            size="small"
            style={{ width: 90 }}
          >
            Reset
          </Button>
        </div>
      ),
      onFilter: (value, record) =>
        record.areaId.toLowerCase().includes(value.toLowerCase()),
    },
    {
      title: "Region Name",
      dataIndex: "region",
      key: "region",
      editable: true,
      sorter: (a, b) => a.region.localeCompare(b.region),
      filterDropdown: ({
        setSelectedKeys,
        selectedKeys,
        confirm,
        clearFilters,
      }) => (
        <div style={{ padding: 8 }}>
          <Input
            placeholder="Search Region"
            value={selectedKeys[0]}
            onChange={(e) =>
              setSelectedKeys(e.target.value ? [e.target.value] : [])
            }
            onPressEnter={() => confirm()}
            style={{
              width: 188,
              marginBottom: 8,
              display: "block",
            }}
          />
          <Button
            type="primary"
            onClick={() => confirm()}
            size="small"
            style={{ width: 90, marginRight: 8 }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters()}
            size="small"
            style={{ width: 90 }}
          >
            Reset
          </Button>
        </div>
      ),
      onFilter: (value, record) =>
        record.region.toLowerCase().includes(value.toLowerCase()),
    },
    {
      title: "Area Name",
      dataIndex: "areaName",
      key: "areaName",
      editable: true,
      sorter: (a, b) => a.areaName.localeCompare(b.areaName),
      filterDropdown: ({
        setSelectedKeys,
        selectedKeys,
        confirm,
        clearFilters,
      }) => (
        <div style={{ padding: 8 }}>
          <Input
            placeholder="Search Area Name"
            value={selectedKeys[0]}
            onChange={(e) =>
              setSelectedKeys(e.target.value ? [e.target.value] : [])
            }
            onPressEnter={() => confirm()}
            style={{
              width: 188,
              marginBottom: 8,
              display: "block",
            }}
          />
          <Button
            type="primary"
            onClick={() => confirm()}
            size="small"
            style={{ width: 90, marginRight: 8 }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters()}
            size="small"
            style={{ width: 90 }}
          >
            Reset
          </Button>
        </div>
      ),
      onFilter: (value, record) =>
        record.areaName.toLowerCase().includes(value.toLowerCase()),
    },
    // {
    //     title: 'Status',
    //     key: 'status',
    //     render: (_, record) => (
    //         <FaCircle
    //             className={
    //                 record.active ? (
    //                     <Badge status="error" />
    //                 ) : (
    //                     <Badge status="warning" />
    //                 )
    //             }
    //         />
    //     ),
    // },
    {
      title: "Action",
      key: "action",
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <span>
            <Typography.Link
              onClick={() => save(record.key)}
              style={{
                marginRight: 8,
              }}
            >
              Save
            </Typography.Link>
            <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
              <a>Cancel</a>
            </Popconfirm>
          </span>
        ) : (
          <div className="flex gap-3">
            <Popconfirm
              title="Are you sure to edit this region?"
              onConfirm={() => edit(record)}
            >
              <FaEdit className="size-6 cursor-pointer text-green-500" />
            </Popconfirm>
            <Popconfirm
              title="Are you sure to delete this region?"
              onConfirm={() => deleteRecord(record.key)}
            >
              <FaTrashAlt className="size-6 cursor-pointer text-red-500" />
            </Popconfirm>
            {record.active ? (
              <Popconfirm
                title="Are you sure to pause this region?"
                onConfirm={() => toggleActive(record.key)}
              >
                <RiStopCircleFill className="size-6 cursor-pointer text-red-500" />
              </Popconfirm>
            ) : (
              <Popconfirm
                title="Are you sure to resume this region?"
                onConfirm={() => toggleActive(record.key)}
              >
                <RiRestartFill className="size-6 cursor-pointer text-blue-500" />
              </Popconfirm>
            )}
          </div>
        );
      },
    },
  ];

  const mergedColumns = columns.map((col) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record) => ({
        record,
        inputType: col.dataIndex === "areaId" ? "number" : "text",
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });

  const onFinish = (values) => {
    const newData = [
      ...data,
      {
        key: (data.length + 1).toString(),
        areaId: (data.length + 1).toString(),
        region: values.region,
        areaName: values.area,
        active: true,
      },
    ];
    setData(newData);
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
        <Form form={form} component={false}>
          <Table
            components={{
              body: {
                cell: EditableCell,
              },
            }}
            bordered
            dataSource={data}
            columns={mergedColumns}
            rowClassName="editable-row"
            pagination={{
              onChange: cancel,
              position: ["bottomCenter"],
              size: "small",
              showSizeChanger: true,
              showTotal: (total, range) =>
                `Showing ${range[0]}-${
                  range[1]
                } of ${total} records (Page ${Math.ceil(
                  range[1] / (range[1] - range[0] + 1)
                )} of ${Math.ceil(total / (range[1] - range[0] + 1))})`,
              showQuickJumper: true,
              defaultPageSize: 10,
              defaultCurrent: 1,
              hideOnSinglePage: false,
              pageSizeOptions: ["10", "20", "50", "100"],
            }}
          />
        </Form>
      </div>
    </div>
  );
};

export default Territory;
