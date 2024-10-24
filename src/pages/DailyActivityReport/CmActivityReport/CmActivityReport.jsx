

import MainHeader from '@/components/Headers/MainHeader';
import { Table } from 'antd';
const columns = [
    {
        title: 'Region',
        dataIndex: 'region',
        key: 'region',
        fixed: 'left',
        width: 100,
    },
    {
        title: 'Area',
        dataIndex: 'area',
        key: 'area',
        fixed: 'left',
        width: 100,
    },
    {
        title: 'DH',
        dataIndex: 'dh',
        key: 'dh',
        fixed: 'left',
        width: 100,
    },
    {
        title: 'Territory',
        dataIndex: 'territory',
        key: 'territory',
        fixed: 'left',
        width: 100,
    },
    {
        title: 'Point',
        dataIndex: 'point',
        key: 'point',
        fixed: 'left',
        width: 100,
    },
    {
        title: 'EMP Code',
        dataIndex: 'empCode',
        key: 'empCode',
        fixed: 'left',
        width: 80,
    },
    {
        title: 'EMP Name',
        dataIndex: 'empName',
        key: 'empName',
        fixed: 'left',
        width: 110,
    },
    {
        title: 'Attendance Marked',
        dataIndex: 'attendanceMarked',
        key: 'attendanceMarked',
        width: 150,
    },
    {
        title: 'Dayend Marked',
        dataIndex: 'dayendMarked',
        key: 'dayendMarked',
        width: 120,
    },
    {
        title: 'Activity',
        dataIndex: 'activity',
        key: 'activity',
        width: 250,
    },
    {
        title: 'Regular Market Visit',
        dataIndex: 'regularMarketVisit',
        key: 'regularMarketVisit',
        width: 100,
    },
    {
        title: 'Others Market Visit',
        dataIndex: 'othersMarketVisit',
        key: 'othersMarketVisit',
        width: 100,
    },
    {
        title: 'NMSM Market Visit',
        dataIndex: 'nmsmMarketVisit',
        key: 'nmsmMarketVisit',
        width: 100,
    },
    {
        title: 'NVSM Virtual Visit',
        dataIndex: 'nvsmVirtualVisit',
        key: 'nvsmVirtualVisit',
        width: 100,
    },
    {
        title: 'Survey',
        dataIndex: 'survey',
        key: 'survey',
        width: 100,
    },
    {
        title: 'Strike Rate',
        dataIndex: 'strikeRate',
        key: 'strikeRate',
        width: 100,
    },
    {
        title: 'New Outlet',
        dataIndex: 'newOutlet',
        key: 'newOutlet',
        width: 100,
    },
];

const dataSource = Array.from({
    length: 100,
}).map((_, i) => ({
    key: i,
    region: `Region ${i}`,
    area: `Area ${i}`,
    dh: `DH ${i}`,
    territory: `Territory ${i}`,
    point: `Point ${i}`,
    empCode: `EMP Code ${i}`,
    empName: `EMP Name ${i}`,
    attendanceMarked: `Yes`,
    dayendMarked: `No`,
    activity: `Regular Campaign, Others Campaign, NMSM Campaign`,
    regularMarketVisit: `${i}%(1/3)`,
    othersMarketVisit: ` ${i}%(1/3)`,
    nmsmMarketVisit: `  ${i}%(1/3)`,
    nvsmVirtualVisit: `   ${i}%(1/3)`,
    survey: `${i}%(1/3)`,
    strikeRate: `${i}%`,
    newOutlet: `${i}`,
}));
const App = () => (
    <div>
        <div className="content-container">
            <MainHeader title={'CM Activity Report'} />
            <Table
                columns={columns}
                dataSource={dataSource}
                scroll={{
                    x: 1500,
                }}
                pagination={{
                    size: 'small',
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

export default App;
