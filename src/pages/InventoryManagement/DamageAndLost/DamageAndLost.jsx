import MainHeader from '@/components/Headers/MainHeader';
import MsTargetFilter from '@/components/TargetLimit/MsTarget/MsTargetFilter';
import { Image, Table } from 'antd';
import dayjs from 'dayjs';

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
        dataIndex: 'distributionHouse',
        key: 'distributionHouse',
    },
    {
        title: ' Point',
        dataIndex: 'point',
        key: 'point',
    },
    {
        title: 'CM Code',
        dataIndex: 'cmCode',
        key: 'cmCode',
    },
    {
        title: 'CM Name',
        dataIndex: 'cmName',
        key: 'cmName',
    },
    {
        title: 'Material Name',
        dataIndex: 'materialName',
        key: 'materialName',
    },
    {
        title: 'Damaged Qty',
        dataIndex: 'damagedQty',
        key: 'damagedQty',
    },
    {
        title: 'Lost Qty',
        dataIndex: 'lostQty',
        key: 'lostQty',
    },
    {
        title: 'Material Qty',
        dataIndex: 'type',
        key: 'type',
    },
    {
        title: 'Timestamp',
        key: 'timestamp',
        dataIndex: 'timestamp',
        render: (timestamp) => dayjs(timestamp).format('DD-MM-YYYY HH:mm:ss A'),
    },
    {
        title: 'Image',
        key: 'image',
        dataIndex: 'image',
        render: (image) => (
            <Image src={image} alt="avatar" width={50} height={50} />
        ),
    },
];

const data = Array.from({ length: 89 }, (_, index) => ({
    region: `Region ${index + 1}`,
    area: `Area ${index + 1}`,
    territory: `Territory ${index + 1}`,
    distributionHouse: `Distribution House ${index + 1}`,
    fromPoint: `From Point ${index + 1}`,
    toPoint: `To Point ${index + 1}`,
    materialName: `Material Name ${index + 1}`,
    materialQty: `Material Qty ${index + 1}`,
    type: `Type ${index + 1}`,
    cmCode: `CM Code ${index + 1}`,
    cmName: `CM Name ${index + 1}`,
    timestamp: new Date().toISOString(),
    lostQty: `${index}`,
    damagedQty: `${index}`,
}));

const DamageAndLost = () => {
    const onFinish = (values) => {
        console.log('Success:', values);
    };

    return (
        <div className="space-y-8">
            <div>
                <MsTargetFilter />
            </div>

            <div className="rounded-xl bg-white shadow-md">
                <MainHeader title="Damege and Lost" />
                <Table
                    dataSource={data}
                    columns={columns}
                    size="small"
                    pagination={{
                        position: ['bottomCenter'],
                        showSizeChanger: true,
                        showTotal: (total, range) =>
                            `Showing ${range[0]}-${range[1]} of ${total} records (Page ${Math.ceil(range[1] / (range[1] - range[0] + 1))} of ${Math.ceil(total / (range[1] - range[0] + 1))})`,
                        defaultPageSize: 10,
                        defaultCurrent: 1,
                        hideOnSinglePage: false,
                        pageSizeOptions: ['10', '20', '50', '100'],
                        showQuickJumper: true,
                    }}
                />
            </div>
        </div>
    );
};

export default DamageAndLost;
