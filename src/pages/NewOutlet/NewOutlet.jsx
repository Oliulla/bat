import MainHeader from '@/components/Headers/MainHeader';
import ReportLocator from '@/components/MapComponents/ReportLocator';
import MsTargetFilter from '@/components/TargetLimit/MsTarget/MsTargetFilter';
import { useGetAllOutletQuery } from '@/redux/features/new-outlet/newOutletApi';
import { Image, Table } from 'antd';
import dayjs from 'dayjs';
import { useState } from 'react';
import { PiMapPinLineFill } from 'react-icons/pi';

const NewOutlet = () => {
  const [state, setState] = useState({
    mapData: {},
    isMapOpen: false,
  });

  const handleOpenModal = (data) => {
    const { _id, outlet, user, point, presence } = data || {};
    setState({
      ...state,
      mapData: {
        _id,
        location: { lat: outlet.lat, lng: outlet.lon },
        outlet,
        user,
        point,
        presence,
      },
      isMapOpen: true,
    });
  };

  const handleCloseModal = () => {
    setState({ ...state, mapData: {}, isMapOpen: false });
  };
  const { data, isLoading, isError, error } = useGetAllOutletQuery();
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
            <strong>Route: </strong> {outlet?.name}
          </p>
          <p>
            <strong>Address:</strong> {outlet?.address}
          </p>
          <p>
            <strong>Owner Name:</strong> {outlet?.contact?.name}
          </p>
          <p>
            <strong>Owner Contact:</strong> {outlet?.contact?.phone}
          </p>
          <p>
            <strong>Outlet Name:</strong> {outlet?.name}
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
            <strong>Competitor Presence: </strong> {record?.presence}
          </p>
          <p>
            <strong>Merchandising Opportunities:</strong> {record?.opportunity}
          </p>
          <p>
            <strong>Submit Time:</strong>{" "}
            {dayjs(record?.updatedAt).format("DD-MM-YYYY, HH:mm A")}
          </p>
          <p>
            <strong>Status:</strong> {record?.status}
          </p>
        </div>
      ),
    },
    {
      dataIndex: "image",
      key: "image",
      render: (image) => (
        <div className="flex max-w-52 flex-wrap content-start justify-center gap-1">
          <Image.PreviewGroup>
            {image?.map((img, index) => (
              <Image
                key={index}
                width={70}
                height={100}
                src={img?.thumb}
                preview={{
                  src: img?.original,
                }}
                wrapperClassName="rounded h-10 w-10"
                alt={img?.name || "execution"}
                className="rounded"
              />
            ))}
          </Image.PreviewGroup>
        </div>
      ),
    },
    {
      title: "Map Pin",
      key: "mapPin",
      render: (_, record) => (
        <div onClick={() => handleOpenModal(record)}>
          <span role="img" aria-label="map">
            <PiMapPinLineFill className="h-10 w-10 cursor-pointer text-red-600" />
          </span>
        </div>
      ),
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <MsTargetFilter />
      </div>

      <div className="rounded-xl bg-white shadow-md">
        <MainHeader title="New Outlet " />
        <Table
          showHeader={false}
          columns={columns}
          dataSource={data?.data}
          rowKey="outlet.id"
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

export default NewOutlet;
