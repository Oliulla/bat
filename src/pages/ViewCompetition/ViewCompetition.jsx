import { Image, Table } from 'antd';

const ViewCompetition = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  return (
    <div className="space-y-8">
      <div>
        <MsTargetFilter />
      </div>

      <div className="rounded-xl bg-white shadow-md">
        <MainHeader title="View Competition" />

        {/* <Table
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
                /> */}
        <PMMProfile />
      </div>
    </div>
  );
};

export default ViewCompetition;

import ReportLocator from '@/components/MapComponents/ReportLocator';
import { EnvironmentOutlined } from '@ant-design/icons';
import { useState } from 'react';
import MsTargetFilter from '@/components/TargetLimit/MsTarget/MsTargetFilter';
import MainHeader from '@/components/Headers/MainHeader';

const data = Array.from({ length: 59 }, (_, index) => ({
    outlet: {
        id: `60d9f2f5a0e1234567890123-${index}`,
        name: `Outlet Name ${index + 1}`,
        cluster: `Cluster ${index + 1}`,
        route: `Route ${index + 1}`,
        outletcode: `OUT${index + 1}23`,
        contact: `+123456789${index}`,
        lat: 23.8103,
        lon: 90.4125,
    },
    point: {
        id: `66c5bb8ad405d632c4685e25-${index}`,
        name: `Point Name ${index + 1}`,
        region: `North Badda ${index + 1}`,
        area: `Area ${index + 1}`,
        territory: `Territory ${index + 1}`,
        dh: `DH Name ${index + 1}`,
    },
    withinRadius: true,
    distance: 2,
    lat: 23.8103,
    lon: 90.4125,
    question: [{ label: `Ques${index + 1}.`, value: `${28 + index}` }],
}));

export const PMMProfile = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);

    const data2 = [
        {
            key: '1',
            name: 'John Doe',
            location: { lat: 40.7128, lng: -74.006 }, // Example location (New York)
            image: 'https://via.placeholder.com/50',
            submissionTime: '2024-10-19 10:30 AM',
        },
        // More user data...
    ];

    // Open the modal with the selected user's data
    const handleOpenModal = (user) => {
        setSelectedUser(user);
        setIsModalOpen(true);
    };

    // Close the modal
    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedUser(null);
    };

    const columns = [
        {
            title: 'Outlet Data',
            dataIndex: 'outlet',
            key: 'outlet',
            render: (outlet) => (
                <div>
                    <p>
                        <strong>Name:</strong> {outlet?.name}
                    </p>
                    <p>
                        <strong>ID:</strong> {outlet?.id}
                    </p>
                    <p>
                        <strong>Cluster:</strong> {outlet?.cluster}
                    </p>
                    <p>
                        <strong>Route:</strong> {outlet?.route}
                    </p>
                    <p>
                        <strong>Contact:</strong> {outlet?.contact}
                    </p>
                </div>
            ),
        },
        {
            title: 'Point Data',
            dataIndex: 'point',
            key: 'point',
            render: (point) => (
                <div>
                    <p>
                        <strong>Name:</strong> {point.name}
                    </p>
                    <p>
                        <strong>Region:</strong> {point.region}
                    </p>
                    <p>
                        <strong>Area:</strong> {point.area}
                    </p>
                    <p>
                        <strong>Territory:</strong> {point.territory}
                    </p>
                </div>
            ),
        },
        {
            title: 'Other Data',
            dataIndex: 'distance',
            key: 'distance',
            render: (_, record) => (
                <div>
                    <p>
                        <strong>Within Radius:</strong>{' '}
                        {record?.withinRadius ? 'Yes' : 'No'}
                    </p>
                    <p>
                        <strong>Distance:</strong> {record?.distance} km
                    </p>
                </div>
            ),
        },
        {
            title: 'Image',
            key: 'image',
            render: () => (
                <Image
                    width={50}
                    src="https://via.placeholder.com/50" // Replace with your image URL
                    alt="example"
                />
            ),
        },
        {
            title: 'Map Pin',
            key: 'mapPin',
            render: (_, record) => (
                <div
                    onClick={() => handleOpenModal(record)}
                    className="cursor-pointer"
                >
                    <span role="img" aria-label="map">
                        <EnvironmentOutlined
                            style={{ fontSize: '24px', color: '#1890ff' }}
                            className="cursor-pointer"
                        />
                    </span>
                </div>
            ),
        },
    ];

    return (
        <div>
            <Table
                showHeader={false}
                columns={columns}
                dataSource={data}
                rowKey="outlet.id"
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

            {selectedUser && (
                <ReportLocator
                    isOpen={isModalOpen}
                    data={selectedUser}
                    onClose={handleCloseModal}
                />
            )}
        </div>
    );
};
