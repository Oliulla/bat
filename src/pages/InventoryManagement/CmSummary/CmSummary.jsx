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
        dataIndex: 'type',
        key: 'type',
    },
    {
        title: 'Allocated',
        dataIndex: 'allocated',
        key: 'allocated',
    },
    {
        title: 'Rcvd From Point',
        dataIndex: 'rcvdFromPoint',
        key: 'rcvdFromPoint',
    },
    {
        title: 'Lost Qty',
        dataIndex: 'lostQty',
        key: 'lostQty',
    },
    {
        title: 'Return Qty',
        dataIndex: 'returnQty',
        key: 'returnQty',
    },
    {
        title: 'In Hand Qty',
        dataIndex: 'inHandQty',
        key: 'inHandQty',
    },
    {
        title: 'Used By CM',
        dataIndex: 'usedByCM',
        key: 'usedByCM',
    },
    {
        title: 'Used Qty',
        dataIndex: 'usedQty',
        key: 'usedQty',
    },
    {
        title: 'Used %',
        dataIndex: 'used',
        key: 'used',
    },
];

const data = Array.from({ length: 15 }, (_, index) => ({
    key: index,
    materialName: `Material ${index + 1}`,
    type: `Type ${(index % 3) + 1}`,
    allocated: (index + 1) * 10,
    rcvdFromPoint: (index + 1) * 8,
    lostQty: index * 2,
    returnQty: index * 3,
    inHandQty: (index + 1) * 5,
    usedByCM: (index + 1) * 4,
    usedQty: (index + 1) * 6,
    used: `${((((index + 1) * 6) / ((index + 1) * 10)) * 100).toFixed(1)}%`,
}));

const CmSummary = () => {
    const onFinish = (values) => {
        console.log('Success:', values);
    };

    return (
        <div className="space-y-8">
            <div>
                <MsTargetFilter />
            </div>

            <div className="rounded-xl bg-white shadow-md">
                <MainHeader title="CM Summary" />
                <Table
                    dataSource={data}
                    columns={columns}
                    size="small"
                    pagination={false}
                />
            </div>
        </div>
    );
};

export default CmSummary;
