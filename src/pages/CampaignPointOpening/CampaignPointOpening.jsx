import MainHeader from '@/components/Headers/MainHeader';
import MsTargetFilter from '@/components/TargetLimit/MsTarget/MsTargetFilter';
import { Badge, Switch, Table } from 'antd';

const columns = [
    {
        title: 'Region Name',
        dataIndex: 'regionName',
        key: 'regionName',
    },

    {
        title: 'Area Name',
        dataIndex: 'areaName',
        key: 'areaName',
    },
    {
        title: 'DH Name',
        dataIndex: 'dhName',
        key: 'dhName',
    },
    {
        title: 'Territory',
        dataIndex: 'territory',
        key: 'territory',
    },
    {
        title: 'Point Name',
        dataIndex: 'pointName',
        key: 'pointName',
    },
    {
        title: 'Status',
        key: 'status',
        dataIndex: 'status',
        render: (status) => (
            <Switch
                checkedChildren={<Badge status="success" text="ON" />}
                unCheckedChildren={<Badge status="error" text="OFF" />}
                checked={status}
            />
        ),
    },
];

const data = Array.from({ length: 89 }, (_, index) => ({
    regionName: `Region ${index + 1}`,
    areaName: `Area ${index + 1}`,
    dhName: `DH Name ${index + 1}`,
    territory: `Territory ${index + 1}`,
    pointName: `Point Name ${index + 1}`,
    empCode: `EMP Code ${index + 1}`,
    empName: `EMP Name ${index + 1}`,
    status: true,
}));

const CampaignPointOpening = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  return (
    <div className="space-y-8">
      <div>
        <MsTargetFilter />
      </div>

      <div className="rounded-xl bg-white shadow-md">
        <MainHeader title="Auto Return Marking" />
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

export default CampaignPointOpening;
