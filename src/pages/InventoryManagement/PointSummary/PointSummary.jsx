
import MainHeader from '@/components/Headers/MainHeader';
import MsTargetFilter from '@/components/TargetLimit/MsTarget/MsTargetFilter';
import { Table } from 'antd';

const columns = [
    {
        title: 'Material Name',
        dataIndex: 'materialName',
        key: 'materialName',
    },
    {
        title: 'Type',
        dataIndex: 'type', // or you can use dataIndex={['name', 'age']}
        key: 'type',
    },
    {
        title: 'Allocated to Point',
        dataIndex: 'allocatedToPoint',
        key: 'allocatedToPoint',
    },
    {
        title: 'Received',
        dataIndex: 'received',
        key: 'received',
    },
    {
        title: 'Pending Received',
        dataIndex: 'pendingReceived',
        key: 'pendingReceived',
    },
    {
        title: 'Transfer Sent',
        dataIndex: 'transferSent',
        key: 'transferSent',
    },
    {
        title: 'Transfer Received',
        dataIndex: 'transferReceived',
        key: 'transferReceived',
    },
    {
        title: 'Damage On Point',
        dataIndex: 'damageOnPoint',
        key: 'damageOnPoint',
    },
    {
        title: 'Lost On Point',
        dataIndex: 'lostOnPoint',
        key: 'lostOnPoint',
    },
    {
        title: 'In Handed',
        dataIndex: 'inHanded',
        key: 'inHanded',
    },
    {
        title: 'Allocated By CM',
        dataIndex: 'allocatedByCm',
        key: 'allocatedByCm',
    },
    {
        title: 'Damage By CM',
        dataIndex: 'damageByCm',
        key: 'damageByCm',
    },
    {
        title: 'Lost By CM',
        dataIndex: 'lostByCm',
        key: 'lostByCm',
    },
    {
        title: 'Return By CM',
        dataIndex: 'returnByCm',
        key: 'returnByCm',
    },
    {
        title: 'Used By CM',
        dataIndex: 'usedByCM',
        key: 'usedByCM',
    },
    {
        title: 'Used',
        dataIndex: 'used',
        key: 'used',
    },
    {
        title: 'Used %',
        dataIndex: 'usedParcentage',
        key: 'usedParcentage',
    },
];

const data = Array.from({ length: 15 }, (_, index) => ({
    key: index,
    materialName: `Material ${index + 1}`,
    type: `Type ${(index % 3) + 1}`,
    allocatedToPoint: Math.floor(Math.random() * 100),
    received: Math.floor(Math.random() * 100),
    pendingReceived: Math.floor(Math.random() * 50),
    transferSent: Math.floor(Math.random() * 30),
    transferReceived: Math.floor(Math.random() * 30),
    damageOnPoint: Math.floor(Math.random() * 10),
    lostOnPoint: Math.floor(Math.random() * 5),
    inHanded: Math.floor(Math.random() * 20),
    allocatedByCm: Math.floor(Math.random() * 50),
    damageByCm: Math.floor(Math.random() * 5),
    lostByCm: Math.floor(Math.random() * 3),
    returnByCm: Math.floor(Math.random() * 10),
    usedByCM: Math.floor(Math.random() * 40),
    used: Math.floor(Math.random() * 80),
    usedParcentage: `${Math.floor(Math.random() * 100)}%`,
}));

const PointSummary = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  return (
    <div className="space-y-8">
      <div>
        <MsTargetFilter />
      </div>

      <div className="rounded-xl bg-white shadow-md">
        <MainHeader title="Point Summary" />
        <div className="flex flex-wrap gap-5 p-4 text-xl">
          <h3>
            <strong>Region: </strong> {"Dhaka South"}
          </h3>
          <h3>
            <strong>Region: </strong> {"Dhaka Central"}
          </h3>
          <h3>
            <strong>Region: </strong> {"Territory"}
          </h3>
          <h3>
            <strong>Region: </strong> {"Dhaka South"}
          </h3>
          <h3>
            <strong>Region: </strong> {"Dhaka South"}
          </h3>
          <h3>
            <strong>Region: </strong> {"Dhaka South"}
          </h3>
        </div>
        <Table
          dataSource={data}
          columns={columns}
          size="small"
          pagination={false}
          scroll={{ x: 1900 }}
        />
      </div>
    </div>
  );
};

export default PointSummary;
