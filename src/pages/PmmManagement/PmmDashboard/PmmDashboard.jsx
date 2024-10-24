import { bluePin, greenPin, redPin } from "@/assets";
import MainHeader from "@/components/Headers/MainHeader";
import { Image, Table } from "antd";

const PmmDashboard = () => {
    const columns = [
        {
            title: "Region",
            dataIndex: "region",
            key: "region",
        },
        {
            title: "Channel",
            dataIndex: "channel",
            key: "channel",
        },
        {
            title: "Sub-Channel",
            dataIndex: "subChannel",
            key: "subChannel",
        },
        {
            title: "Total PMM",
            dataIndex: "totalPMM",
            key: "totalPMM",
        },
        {
            title: "Scanned PMM",
            dataIndex: "scannedPMM",
            key: "scannedPMM",
        },
        {
            title: "Not Scanned PMM",
            dataIndex: "notScannedPMM",
            key: "notScannedPMM",
        },
        {
            title: "Last Month Scanned",
            dataIndex: "lastMonthScanned",
            key: "lastMonthScanned",
        },
        {
            title: "PMM Movement",
            dataIndex: "pmmMovement",
            key: "pmmMovement",
        },
    ];

    const data = [
        {
            key: "1",
            region: "Dhaka",
            channel: "Dhaka",
            subChannel: "Dhaka",
            totalPMM: "10",
            scannedPMM: "10",
            notScannedPMM: "10",
            lastMonthScanned: "10",
            pmmMovement: "10",
        },
        {
            key: "2",
            region: "Dhaka",
            channel: "Dhaka",
            subChannel: "Dhaka",
            totalPMM: "10",
            scannedPMM: "10",
            notScannedPMM: "10",
            lastMonthScanned: "10",
            pmmMovement: "10",
        },
        {
            key: "3",
            region: "Dhaka",
            channel: "Dhaka",
            subChannel: "Dhaka",
            totalPMM: "10",
            scannedPMM: "10",
            notScannedPMM: "10",
            lastMonthScanned: "10",
            pmmMovement: "10",
        },
        {
            key: "4",
            region: "Dhaka",
            channel: "Dhaka",
            subChannel: "Dhaka",
            totalPMM: "10",
            scannedPMM: "10",
            notScannedPMM: "10",
            lastMonthScanned: "10",
            pmmMovement: "10",
        },
        {
            key: "5",
            region: "Dhaka",
            channel: "Dhaka",
            subChannel: "Dhaka",
            totalPMM: "10",
            scannedPMM: "10",
            notScannedPMM: "10",
            lastMonthScanned: "10",
            pmmMovement: "10",
        },
    ];

    return (
        <div className="bg-gray-100">
            <div className="mb-3 bg-white rounded-b-lg">
                <MainHeader title="PMM Dashboard" />
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.8353805319084!2d90.39745917594627!3d23.859978678595812!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c1ca8cdb0293%3A0xfb1f57ffe44bb014!2sHawkEyes%20Digital%20Monitoring%20Ltd.!5e0!3m2!1sen!2sbd!4v1727847633482!5m2!1sen!2sbd"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="h-[calc(100vh-200px)] w-full border-none px-3"
                ></iframe>
                <div className="flex gap-10 p-5">
                    <p className="flex gap-2 items-center">
                        <Image src={greenPin} alt="logo" className="w-8 h-8" />
                        <p>PJP Info</p>
                    </p>
                    <p className="flex gap-2 items-center">
                        <Image src={redPin} alt="logo" className="w-8h-8" />
                        <p>CM Info</p>
                    </p>
                </div>
            </div>
            <div className="p-3 bg-white rounded-lg">
                <Table columns={columns} dataSource={data} />
            </div>
        </div>
    );
};

export default PmmDashboard;
