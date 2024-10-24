import AttendanceLocator from "@/components/Attendance/AttendanceLocator";
import AttendanceTracker from "@/components/Attendance/AttendanceTracker";
import { useGetAllAttendanceMutation } from "@/redux/features/attendance/attendanceApi";
import { Col, Row } from "antd";
import { useEffect } from "react";

const Attendance = () => {
    const [getAttendance, { data: attendanceData, isLoading, isError, error }] =
        useGetAllAttendanceMutation();

    useEffect(() => {
        TriggerAttendance();
    }, []);

    const TriggerAttendance = async (params) => {
        try {
            const { data } = await getAttendance(params);
            // console.log('data attendance', data);
        } catch (err) {
            // console.log('error attendance', err);
        }
    };

    // console.log(attendanceData?.data?.presentList);

    return (
        <div className="">
            <Row gutter={[16, 16]} className="">
                <Col xs={24} md={12}>
                    <AttendanceTracker
                        present={attendanceData?.data?.presentList}
                        absent={attendanceData?.data?.absentList}
                    />
                </Col>
                <Col xs={24} md={12} className="">
                    <AttendanceLocator
                        attendance={attendanceData?.data?.prese || []}
                    />
                </Col>
            </Row>
        </div>
    );
};

export default Attendance;
