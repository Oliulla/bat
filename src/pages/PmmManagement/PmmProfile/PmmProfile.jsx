import MainHeader from '@/components/Headers/MainHeader';
import { EnvironmentOutlined } from '@ant-design/icons';
import { Image, Table } from 'antd';

const data = Array.from({ length: 5 }, (_, index) => ({
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

const PmmProfile = () => {
  const columns = [
    {
      title: "Outlet Data",
      dataIndex: "outlet",
      key: "outlet",
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
      title: "Point Data",
      dataIndex: "point",
      key: "point",
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
      title: "Other Data",
      dataIndex: "distance",
      key: "distance",
      render: (_, record) => (
        <div>
          <p>
            <strong>Within Radius:</strong>{" "}
            {record?.withinRadius ? "Yes" : "No"}
          </p>
          <p>
            <strong>Distance:</strong> {record?.distance} km
          </p>
        </div>
      ),
    },
    {
      title: "Image",
      key: "image",
      render: () => (
        <Image
          width={50}
          src="https://via.placeholder.com/50" // Replace with your image URL
          alt="example"
        />
      ),
    },
    {
      title: "Map Pin",
      key: "mapPin",
      render: (_, record) => (
        <a
          href={`https://www.google.com/maps?q=${record.lat},${record.lon}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <EnvironmentOutlined style={{ fontSize: "24px", color: "#1890ff" }} />
        </a>
      ),
    },
  ];

  return (
    <div>
      <div>
        <MainHeader title="PMM Profile" />
        <Table
          showHeader={false}
          columns={columns}
          dataSource={data}
          rowKey="outlet.id"
          rowClassName="styled__table"
        />
      </div>
    </div>
  );
};

export default PmmProfile;
