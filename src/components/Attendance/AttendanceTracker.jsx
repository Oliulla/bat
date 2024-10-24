import { Col, Image, Row, Segmented, Tabs } from "antd";
import dayjs from "dayjs";
import { useCallback, useState } from "react";

export function Present({ loading, presentList }) {
    return (
        <div style={{ padding: "10px", width: "100%" }}>
            <Row gutter={[10, 10]}>
                {presentList?.map(
                    ({
                        user,
                        punchInAt,
                        isFaceMatched,
                        late,
                        withinRadius,
                        image,
                    }) => (
                        <Col key={user?._id} lg={6} className="min-h-max">
                            <div
                                className={`min-h-full rounded-lg p-4 text-black shadow-md ${
                                    isFaceMatched || late || withinRadius
                                        ? "bg-white"
                                        : "bg-red-500"
                                }`}
                            >
                                <Image
                                    width={80}
                                    height={80}
                                    style={{
                                        borderRadius: "50%",
                                    }}
                                    preview={{
                                        src: `${image?.original}`,
                                    }}
                                    src={image?.thumb}
                                />
                                <h5>{user?.name}</h5>
                                <h5>{user?.usercode}</h5>
                                <h5>{user?.kind}</h5>
                                <p>{dayjs(punchInAt).format("hh:mm:ss A")}</p>
                            </div>
                        </Col>
                    )
                )}
            </Row>
        </div>
    );
}

export function Absent({ loading, absentList }) {
    return (
        <div style={{ padding: "10px", width: "100%" }}>
            <Row gutter={[10, 10]}>
                {absentList?.map(
                    ({ user, username, kind, usercode, image }) => (
                        <Col key={user?._id} lg={6} className="min-h-max">
                            <div
                                className={`bg-red-500'} min-h-full rounded-lg p-4 text-black shadow-md`}
                            >
                                <Image
                                    width={80}
                                    height={80}
                                    style={{
                                        borderRadius: "50%",
                                    }}
                                    preview={{
                                        src: `${image?.original}`,
                                    }}
                                    src={image?.thumb}
                                />
                                <h5>{name}</h5>
                                <h5>{username}</h5>
                                <h5>{usercode}</h5>
                                <h5>{kind}</h5>
                            </div>
                        </Col>
                    )
                )}
            </Row>
        </div>
    );
}

const AttendanceTracker = ({ present, absent }) => {
    const [state, setState] = useState({
        alignValue: "Present",
        activeTab: "1",
        markerRef: null,
        hoveredMarker: null,
        infoWindowVisible: false,
        infoWindowPosition: null,
        locations: [],
        loading: false,
        error: null,
        isVisible: false,
        infoWindowData: null,
        data: {
            key: "",
            name: "",
            description: "",
            img: { name: "", original: "", thumb: "" },
            location: { lat: 0, lng: 0 },
        },
    });

    const handleMarkerClick = useCallback((poi) => {
        setState((prevState) => ({
            ...prevState,
            infoWindowPosition: poi.location,
            infoWindowVisible: true,
            hoveredMarker: poi.key,
            infoWindowData: poi,
        }));
    }, []);

    const handleCloseInfoWindow = () => {
        setState((prevState) => ({
            ...prevState,
            infoWindowVisible: false,
            hoveredMarker: null,
            infoWindowData: null,
        }));
    };

    const items = [
        {
            key: "1",
            label: "1",
            children: <Present loading={false} presentList={present || []} />,
        },
        {
            key: "2",
            label: "2",
            children: <Absent loading={false} absentList={absent || []} />,
        },
    ];

    const handleSegmentChange = (value) => {
        const key = value === "Present" ? "1" : "2";
        setState((prevState) => ({
            ...prevState,
            activeTab: key,
        }));
    };

    return (
        <div className="rounded-lg">
            <h2 className="text-2xl font-bold text-center rounded-t-lg bg-primary">
                Attendance Tracker
            </h2>
            <div className="mb-2 font-bold text-center bg-white rounded-b-lg">
                <div>
                    <Segmented
                        defaultValue="Present"
                        className="border-2 border-primary"
                        onChange={handleSegmentChange}
                        options={["Present", "Absent"]}
                        block
                    />
                    <Tabs
                        className="attendance-tabs"
                        activeKey={state.activeTab}
                        onChange={(key) =>
                            setState((prevState) => ({
                                ...prevState,
                                activeTab: key,
                            }))
                        }
                        items={items}
                    />
                </div>
            </div>
        </div>
    );
};

export default AttendanceTracker;
