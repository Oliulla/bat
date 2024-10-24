import { Table } from 'antd';

const columns = [
    {
        title: 'Region',
        dataIndex: 'region',
        key: 'region',
    },
    {
        title: 'Area',
        dataIndex: 'area',
        key: 'area',
    },
    {
        title: 'Territory',
        dataIndex: 'territory',
        key: 'territory',
    },
    {
        title: 'Distribution House',
        key: 'distributionHouse',
        dataIndex: 'distributionHouse',
    },
    {
        title: 'Point',
        key: 'point',
        dataIndex: 'point',
    },
    {
        title: 'EMP.Name',
        key: 'empName',
        dataIndex: 'empName',
    },
    {
        title: 'EMP Level',
        key: 'empLevel',
        dataIndex: 'empLevel',
    },
];

const data = Array.from({ length: 89 }, (_, index) => ({
    key: index,
    region: 'Dhaka',
    area: 'Dhaka',
    territory: 'Dhaka',
    distributionHouse: 'Dhaka',
    point: 'Dhaka',
    empName: 'Dhaka',
    empLevel: 'Dhaka',
}));

const MsTargetTable = () => {
    const onFinish = (values) => {
        console.log('Success:', values);
    };

    return (
        <div className="rounded-xl bg-white shadow-md">
            <Table
                dataSource={data}
                columns={columns}
                size="small"
                pagination={{
                    position: ['bottomCenter'],
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
    );
};

export default MsTargetTable;
