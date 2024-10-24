import MainHeader from '@/components/Headers/MainHeader';
import SummaryFilter from '@/components/LeaveManagement/LeaveSummary/SummaryFilter';
import { useGetAllLeaveSummaryMutation } from '@/redux/features/leave-management/leaveManagementApi';
import { Table } from 'antd';
import dayjs from 'dayjs';
import { useEffect } from 'react';

const LeaveSummary = () => {
  const [triggerSummary, { data, isLoading, isError, error }] =
    useGetAllLeaveSummaryMutation({});

  const handleLeaveSummary = () => {
    try {
      triggerSummary({});
    } catch (error) {
      console.error("Error fetching leave summary:", error);
    }
  };

  useEffect(() => {
    handleLeaveSummary();
  }, []);

  const columns = [
    {
      title: "",
      dataIndex: "employee",
      render: (employee, record) => <div>{employee?.name}</div>,
      children: [
        {
          title: "EMP. Name",
          dataIndex: "employee",
          key: "name",
          render: (employee, record) => (
            <div>
              {employee?.name} <br />
              <span className="text-xs text-gray-500">
                {record.employee?.usercode}
              </span>
            </div>
          ),
        },
        {
          title: "Region",
          dataIndex: "employee",
          key: "region",
          render: (employee) => employee?.region,
        },
        {
          title: "Area",
          dataIndex: "employee",
          key: "area",
          render: (employee) => employee?.area,
        },
        {
          title: "DH",
          dataIndex: "employee",
          key: "dh",
          render: (employee) => employee?.dh,
        },
        {
          title: "Territory",
          dataIndex: "employee",
          key: "territory",
          render: (employee) => employee?.territory,
        },
        {
          title: "Point",
          dataIndex: "employee",
          key: "point",
          render: (employee) => employee?.point,
        },
      ],
    },
    {
      title: "Consumed",
      children: [
        {
          title: "Total Enlisted",
          dataIndex: "employee",
          key: "totalEnlisted",
          render: (employee) => employee?.totalConsumed,
        },
        {
          title: "Annual",
          dataIndex: "employee",
          key: "annual",
          render: (employee) => employee?.consumedAnnual,
        },
        {
          title: "Sick",
          dataIndex: "employee",
          key: "sick",
          render: (employee) => employee?.consumedSick,
        },
      ],
    },
    {
      title: "Remaining",
      children: [
        {
          title: "Total Enlisted",
          dataIndex: "employee",
          key: "totalEnlisted",
          render: (employee) => employee?.totalEntitled,
        },
        {
          title: "Annual",
          dataIndex: "employee",
          key: "annual",
          render: (employee) => employee?.remainingAnnual,
        },
        {
          title: "Sick",
          dataIndex: "employee",
          key: "sick",
          render: (employee) => employee?.remainingSick,
        },
      ],
    },
  ];

  const expandedRowRender = (record) => {
    const expandColumns = [
      {
        title: "Leave Request Date",
        dataIndex: "leaveRequestDate",
        key: "leaveRequestDate",
      },
      {
        title: "Leave Type",
        dataIndex: "leaveType",
        key: "leaveType",
      },
      {
        title: "Start Date",
        dataIndex: "startDate",
        key: "startDate",
      },
      {
        title: "End Date",
        dataIndex: "endDate",
        key: "endDate",
      },
      {
        title: "Total Days",
        dataIndex: "totalDays",
        key: "totalDays",
      },
      {
        title: "Comment",
        dataIndex: "comment",
        key: "comment",
      },
      {
        title: "Approved By",
        dataIndex: "approvedBy",
        key: "approvedBy",
      },
    ];

    const expandDataSource = record.leaveDetails?.map((item, i) => ({
      key: i.toString(),
      leaveRequestDate: dayjs(item.leaveRequestDate).format("DD-MM-YYYY"),
      leaveType: item.leaveType,
      startDate: dayjs(item.startDate).format("DD-MM-YYYY"),
      endDate: dayjs(item.endDate).format("DD-MM-YYYY"),
      totalDays: item.totalDays,
      comment: item.comment,
      approvedBy: item.approvedBy,
    }));

    return (
      <Table
        columns={expandColumns}
        dataSource={expandDataSource}
        pagination={false}
        size="small"
      />
    );
  };

  return (
    <div>
      <SummaryFilter />

      <div className="content-container">
        <MainHeader title="Leave Summary" />
        <Table
          columns={columns}
          expandable={{
            expandedRowRender,
          }}
          dataSource={data?.data}
          size="small"
          scroll={{ x: 1200 }}
          loading={isLoading}
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
            hideOnSinglePage: false,
            pageSizeOptions: ["10", "20", "50", "100"],
          }}
        />
      </div>
    </div>
  );
};

export default LeaveSummary;
