
import MainHeader from '@/components/Headers/MainHeader';
import NewTickets from '@/components/Tickets/NewTickets';
import { useGetAllTicketsQuery } from '@/redux/features/tickets/ticketsApi';
import { Table } from 'antd';
import dayjs from 'dayjs';
import { MdDownloadForOffline } from 'react-icons/md';

const Tickets = () => {
    const { data, isLoading, isError, error, refetch } =
        useGetAllTicketsQuery();

    if (isError) {
        console.error(isError, error);
        // throw new Error(error);
    }

    console.log('data ', data);

    const downloadFile = async (fileUrl, filename = 'Ticket-File') => {
        try {
            const response = await fetch(fileUrl, { mode: 'no-cors' });

            // Check if the response is OK
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);

            const a = document.createElement('a');
            a.href = url;
            a.download = filename; // Customize the filename as needed
            document.body.appendChild(a);
            a.click();

            // Clean up the URL and remove the link
            window.URL.revokeObjectURL(url);
            document.body.removeChild(a);
        } catch (error) {
            console.error('Download failed:', error);
        }
    };

    const columns = [
        {
            title: 'Ticket No',
            dataIndex: 'ticketNo',
            key: 'ticketNo',
        },
        {
            title: 'Request Type',
            dataIndex: 'type',
            key: 'type',
        },
        {
            title: 'Subject',
            dataIndex: 'subject',
            key: 'subject',
        },
        {
            title: 'Description',
            dataIndex: 'description',
            key: 'description',
        },
        {
            title: 'Raised By',
            dataIndex: 'createdBy',
            key: 'createdBy',
            render: (createdBy) => <p>{createdBy?.name}</p>,
        },
        {
            title: 'File URL',
            dataIndex: 'fileUrl',
            key: 'fileUrl',
            render: (fileUrl) => (
                <MdDownloadForOffline
                    className="w-10 h-10 text-green-600 cursor-pointer"
                    onClick={() => downloadFile(fileUrl, 'Ticket-File.jpg')}
                />
            ),
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
        },
        {
            title: 'TimeStamp',
            dataIndex: 'createdAt',
            key: 'createdAt',
            render: (date) => (
                <p>{dayjs(date).format('DD-MM-YYYY, HH:mm:ss A')}</p>
            ),
        },
        {
            title: 'Action',
            dataIndex: 'createdAt',
            key: 'createdAt',
            render: (date) => (
                <MdDownloadForOffline className="w-10 h-10 text-green-600 cursor-pointer" />
            ),
        },
    ];

    return (
        <div>
            <div className="content-container">
                <MainHeader title="Tickets" />
                <NewTickets />
            </div>
            <div className="content-container">
                <MainHeader title="Previous Tickets" />
                <Table
                    columns={columns}
                    dataSource={data?.data || []}
                    rowKey={(record) => record._id}
                    className="custom-table"
                    rowClassName="custom-row"
                />
            </div>
        </div>
    );
};

export default Tickets;