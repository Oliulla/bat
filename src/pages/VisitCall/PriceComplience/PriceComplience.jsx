import MainHeader from '@/components/Headers/MainHeader';
import SummaryFilter from '@/components/LeaveManagement/LeaveSummary/SummaryFilter';
import ReportLocator from '@/components/MapComponents/ReportLocator';
import { useGetPriceComplienceMutation } from '@/redux/features/price-complience/priceComplience';
import { EnvironmentOutlined } from '@ant-design/icons';
import { Table } from 'antd';
import { useEffect, useState } from 'react';

const PriceComplience = () => {
  const [state, setState] = useState({
    mapData: {},
    isMapOpen: false,
  });

  const [triggerComplience, { data, isLoading, isError, error }] =
    useGetPriceComplienceMutation({});

  useEffect(() => {
    handleComplience();
  }, []);

  const handleComplience = () => {
    triggerComplience({});
  };

  const handleOpenModal = (data) => {
    setState({ ...state, mapData: data, isMapOpen: true });
  };

  const handleCloseModal = () => {
    setState({ ...state, mapData: {}, isMapOpen: false });
  };

  const columns = [
    {
      dataIndex: "user",
      key: "user",
      render: (user, record) => (
        <div>
          <p>
            <strong>CM Name:</strong> {user?.name}
          </p>
          <p>
            <strong>CM Code:</strong> {user?.usercode}
          </p>
          <p>
            <strong>MS Name:</strong> {user?.supervisor?.name}
          </p>
          <p>
            <strong>MS Code:</strong> {user?.supervisor?.usercode}
          </p>
          <p>
            <strong>Point Name:</strong> {record?.point?.name}
          </p>
        </div>
      ),
    },
    {
      dataIndex: "outlet",
      key: "outlet",
      render: (outlet, record) => (
        <div>
          <p>
            <strong>Route:</strong> {outlet?.route}
          </p>
          <p>
            <strong>Outlet Code:</strong> {outlet?.outletcode}
          </p>
          <p>
            <strong>Outlet Name:</strong> {outlet?.name}
          </p>
          <p>
            <strong>Cluster:</strong> {outlet.cluster}
          </p>
        </div>
      ),
    },
    {
      dataIndex: "question",
      key: "question",
      render: (question) => (
        <div>
          {question?.map(({ label, value }) => (
            <p key={label}>
              <strong>{label}:</strong> {value}
            </p>
          ))}
        </div>
      ),
    },
    {
      title: "Map Pin",
      key: "mapPin",
      render: (_, record) => (
        <div onClick={() => handleOpenModal(record)}>
          <span role="img" aria-label="map">
            <EnvironmentOutlined
              style={{ fontSize: "24px", color: "#1890ff" }}
              className="cursor-pointer"
            />
          </span>
        </div>
      ),
    },
  ];

  return (
    <div>
      <div>
        <SummaryFilter />
      </div>
      <div>
        <MainHeader title="Price Complience Visit" />
        <Table
          showHeader={false}
          columns={columns}
          dataSource={data?.data}
          pagination={{
            size: "small",
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

        {state?.isMapOpen && (
          <ReportLocator
            data={state?.mapData}
            isOpen={state?.isMapOpen}
            onClose={handleCloseModal}
          />
        )}
      </div>
    </div>
  );
};

export default PriceComplience;
