import MainHeader from '@/components/Headers/MainHeader';
import FilterLoginDetails from '@/components/TeamManagement/FilterLoginDetails';
import { Table } from 'antd';

const data = [
    {
        id: 1,
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
    },
    {
        id: 2,
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
    },
    {
        id: 3,
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
    },
];

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
    },
];

const LoginDetails = () => {
  return (
    <div>
      <FilterLoginDetails />
      <div className="content-container">
        <MainHeader title="Login Details" />
        <Table
          columns={columns}
          dataSource={data}
          rowKey={(record) => record.id}
          pagination={false}
        />
      </div>
    </div>
  );
};

export default LoginDetails;
