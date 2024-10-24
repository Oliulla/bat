import MainHeader from '@/components/Headers/MainHeader';
import { Button, Checkbox, Input, Table, message } from 'antd';
import { useState } from 'react';

const ApproveRejectTransfer = () => {
  const [dataSource, setDataSource] = useState(
    Array.from({ length: 110 }, (_, index) => ({
      key: `row-${index}`,
      materialName: `Material ${index + 1}`,
      inStockQty: 100 + index,
      transferQty: 10 + index,
      type: "POSM",
      fromPoint: "Gulshan",
      toEvent: "GnH 150Y Lep Campaign",
      toPoint: "Badda",
      selected: false,
    }))
  );

  const [selectedKeys, setSelectedKeys] = useState([]);

  const handleInputChange = (key, value) => {
    const newData = dataSource.map((item) =>
      item.key === key ? { ...item, transferQty: value } : item
    );
    setDataSource(newData);
  };

  const handleSubmit = () => {
    if (selectedKeys.length === 0) {
      message.warning("Please select at least one item to approve.");
      return;
    }
    const selectedData = dataSource.filter((item) =>
      selectedKeys.includes(item.key)
    );
    console.log("Submitting data:", selectedData);
  };

  const handleReject = () => {
    if (selectedKeys.length === 0) {
      message.warning("Please select at least one item to reject.");
      return;
    }
    const selectedData = dataSource.filter((item) =>
      selectedKeys.includes(item.key)
    );
    console.log("Rejecting data:", selectedData);
  };

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedKeys(dataSource.map((item) => item.key));
    } else {
      setSelectedKeys([]);
    }
  };

  const columns = [
    {
      title: (
        <Checkbox
          onChange={handleSelectAll}
          checked={selectedKeys.length === dataSource.length}
        />
      ),
      dataIndex: "selected",
      key: "selected",
      render: (_, record) => (
        <Checkbox
          type="checkbox"
          checked={selectedKeys.includes(record.key)}
          onChange={(e) => {
            const newSelectedKeys = e.target.checked
              ? [...selectedKeys, record.key]
              : selectedKeys.filter((key) => key !== record.key);
            setSelectedKeys(newSelectedKeys);
          }}
        />
      ),
    },
    {
      title: "Material Name",
      dataIndex: "materialName",
      key: "materialName",
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
    },
    {
      title: "InStock Qty",
      dataIndex: "inStockQty",
      key: "inStockQty",
    },
    {
      title: "From Point",
      dataIndex: "fromPoint",
      key: "fromPoint",
    },
    {
      title: "To Event",
      dataIndex: "toEvent",
      key: "toEvent",
    },
    {
      title: "To Point",
      dataIndex: "toPoint",
      key: "toPoint",
    },
    {
      title: "Transfer Qty",
      dataIndex: "transferQty",
      key: "transferQty",
      width: 200,
      render: (text, record) => (
        <Input
          style={{ width: "150px" }}
          value={text}
          onChange={(e) => handleInputChange(record.key, e.target.value)}
        />
      ),
    },
  ];

  return (
    <div>
      <div className="content-container">
        <MainHeader title="Approve/Reject Transfer" />
        <Table
          size="small"
          dataSource={dataSource}
          columns={columns}
          pagination={false}
          footer={() => (
            <div style={{ textAlign: "center" }}>
              <Button
                onClick={handleSubmit}
                type="primary"
                style={{ marginRight: "10px" }}
              >
                Approve
              </Button>
              <Button onClick={handleReject} type="danger">
                Reject
              </Button>
            </div>
          )}
        />
      </div>
    </div>
  );
};

export default ApproveRejectTransfer;
