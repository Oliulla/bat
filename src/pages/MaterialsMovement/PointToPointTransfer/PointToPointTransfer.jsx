import MainHeader from '@/components/Headers/MainHeader';
import { Button, Input, Table } from 'antd';
import { useState } from 'react';

const PointToPointTransfer = () => {
  const [dataSource, setDataSource] = useState(
    Array.from({ length: 110 }, (_, index) => ({
      key: `row-${index}`,
      materialName: `Material ${index + 1}`,
      inStockQty: 100 + index,
      transferQty: 10 + index,
      type: "POSM",
    }))
  );

  const handleInputChange = (key, value) => {
    const newData = dataSource.map((item) =>
      item.key === key ? { ...item, transferQty: value } : item
    );
    setDataSource(newData);
  };

  const handleSubmit = () => {
    console.log("Submitting data:", dataSource);
  };

  const columns = [
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
      width: 250,
    },
    {
      title: "Transfer Qty",
      dataIndex: "transferQty",
      key: "transferQty",
      width: 150,
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
        <MainHeader title="Point to Point Transfer" />
        <Table
          size="small "
          dataSource={dataSource}
          columns={columns}
          pagination={false}
          footer={() => (
            <div style={{ textAlign: "center" }}>
              <Button onClick={handleSubmit} type="primary">
                Transfer
              </Button>
            </div>
          )}
        />
      </div>
    </div>
  );
};

export default PointToPointTransfer;
