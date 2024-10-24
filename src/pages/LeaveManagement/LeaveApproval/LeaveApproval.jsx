import MainHeader from '@/components/Headers/MainHeader';
import SummaryFilter from '@/components/LeaveManagement/LeaveSummary/SummaryFilter';
import { useGetAllLeaveRequestMutation, useUpdateLeaveRequestMutation } from '@/redux/features/leave-management/leaveManagementApi';
import { notification, Popconfirm, Table } from 'antd';
import dayjs from 'dayjs';
import { useEffect } from 'react';
import { IoIosCheckmarkCircle, IoIosCloseCircle } from 'react-icons/io';

const LeaveApproval = () => {
  const [triggerRequest, { data, isLoading, isError, error }] =
    useGetAllLeaveRequestMutation({});

  const [
    updateRequest,
    {
      data: updateData,
      isLoading: updateIsLoading,
      isError: updateIsError,
      error: updateError,
    },
  ] = useUpdateLeaveRequestMutation({});

  useEffect(() => {
    handleApplyFilter();
  }, []);

  const handleApplyFilter = () => {
    try {
      triggerRequest({});
    } catch (error) {
      console.error("Regular Campaign Error: =>", error.error);
    }
  };

  const handleApprove = async (record, status) => {
    try {
      const { user, leave, year, kind } = record || {};
      const res = await updateRequest({
        userId: user?._id,
        leaveId: leave?._id,
        year: year,
        reason: kind,
        startAt: leave?.startAt,
        endAt: leave?.endAt,
        day: leave?.day,
        status: status,
        modifiedOn: "Portal",
      });

      if (res?.data?.status === 201 || res?.data?.status === 200) {
        if (status === "Approve") {
          notification.info({
            message: "Leave Approved Successfully",
            description: `Leave Approved Successfully from ${dayjs(
              leave?.startAt
            ).format("DD-MM-YYYY")} to ${dayjs(leave?.endAt).format(
              "DD-MM-YYYY"
            )} `,
            duration: leave?.day,
          });
        } else {
          notification.info({
            message: "Leave Rejected",
            description: "Leave Rejected Successfully",
          });
        }
      }
    } catch (error) {
      console.error("Leave Approval Error: =>", error.error);
    }
  };
  const columns = [
    {
      title: "Details",
      dataIndex: "user",
      key: "user",
      render: (user, record) => (
        <div>
          <p>
            <span className="font-bold">Employee Name:</span> {user?.name}
          </p>
          <p>
            <span className="font-bold">Level:</span> {user?.userType}
          </p>
          <p>
            <span className="font-bold">Code:</span> {user?.usercode}
          </p>
          <p>
            <span className="font-bold">Request Date:</span>{" "}
            {dayjs(record?.leave?.requestDate).format("DD-MM-YYYY")}
          </p>
          <p>
            <span className="font-bold">Leave Date:</span>{" "}
            {dayjs(record?.leave?.startAt).format("DD-MM-YYYY")} to{" "}
            {dayjs(record?.leave?.endAt).format("DD-MM-YYYY")}
          </p>
          <p>
            <span className="font-bold">Total Days:</span>{" "}
            {record?.leaves?.leave?.day}
          </p>
          <p>
            <span className="font-bold">Reason for Leave:</span>{" "}
            {record?.leaves?.kind}
          </p>
          <p>
            <span className="font-bold">Additional Comments:</span>{" "}
            {record?.leaves?.leave?.comment}
          </p>
        </div>
      ),
    },
    {
      title: "Total Entitled",
      dataIndex: "entitled",
      key: "entitled",
      render: () => "22",
    },
    {
      title: "Total Consumed",
      dataIndex: "totalConsumed",
      key: "totalConsumed",
    },
    {
      title: "Annual",
      dataIndex: "remaining",
      key: "annual",
      render: (remaining) => {
        const annual = remaining?.find(({ kind }) => kind === "Annual");
        return annual ? annual.remaining : null;
      },
    },
    {
      title: "Sick",
      dataIndex: "remaining",
      key: "sick",
      render: (remaining) => {
        const sick = remaining?.find(({ kind }) => kind === "Sick");
        return sick ? sick.remaining : null;
      },
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (_, record) => (
        <div className="flex flex-row gap-x-2">
          <Popconfirm
            title="Are you sure to approved the application!"
            onConfirm={() => handleApprove(record, "Approve")}
            okText="Yes"
            cancelText="No"
          >
            <IoIosCheckmarkCircle className="cursor-pointer text-4xl text-green-500" />
          </Popconfirm>
          <Popconfirm
            title="Are you sure to reject the application!"
            onConfirm={() => handleApprove(record, "Decline")}
            okText="Yes"
            cancelText="No"
          >
            <IoIosCloseCircle className="cursor-pointer text-4xl text-red-500" />
          </Popconfirm>
        </div>
      ),
    },
  ];

  return (
    <div>
      <SummaryFilter />

      <div className="content-container">
        <MainHeader title="Leave Summary" />
        <Table
          rowClassName=" mb-2 rounded-xl  border-2 border-gray-200 "
          className="bg-white p-6"
          columns={columns}
          dataSource={data?.data}
          pagination={{
            position: ["bottomCenter"],
            size: "small",
            showSizeChanger: true,
            showTotal: (total, range) =>
              `Showing ${range[0]}-${
                range[1]
              } of ${total} records (Page ${Math.ceil(
                range[1] / (range[1] - range[0] + 1)
              )} of ${Math.ceil(total / (range[1] - range[0] + 1))})`,
            showQuickJumper: true,
            defaultPageSize: 10,
            defaultCurrent: 1,
            pageSizeOptions: ["10", "20", "50", "100"],
            hideOnSinglePage: true,
          }}
        />
      </div>
    </div>
  );
};

export default LeaveApproval;
