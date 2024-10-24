import {
    AdvancedMarker,
    APIProvider,
    InfoWindow,
    Map,
    Pin,
} from "@vis.gl/react-google-maps";
import { Image } from "antd";
import dayjs from "dayjs";
import { useCallback, useState } from "react";

const AttendanceLocator = ({ attendance }) => {
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
        infoWindowData: {},
        data: {
            key: "",
            name: "",
            description: "",
            img: { name: "", original: "", thumb: "" },
            location: { lat: 0, lng: 0 },
        },
    });

    const handleMarkerClick = useCallback((user) => {
        setState((prevState) => ({
            ...prevState,
            infoWindowPosition: {
                lat: user?.lat,
                lng: user?.lon,
            },
            infoWindowVisible: true,
            hoveredMarker: user?.user?.key,
            infoWindowData: user,
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

    return (
        <div className="rounded-lg">
            <h2 className="text-2xl font-bold text-center rounded-t-lg bg-primary">
                Attendance Locator
            </h2>
            <APIProvider
                apiKey={import.meta.env.VITE_GOOGLE_MAP_API_KEY || ""}
                onLoad={() => console.log("Maps API has loaded.")}
            >
                <Map
                    className="p-3 w-full h-screen bg-white rounded-b-lg"
                    mapId={"mapbox/streets-v11"}
                    defaultZoom={7}
                    defaultCenter={{
                        lat: 23.777176,
                        lng: 90.399452,
                    }}
                    // onCameraChanged={(ev) =>
                    //     console.log(
                    //         'camera changed:',
                    //         ev.detail.center,
                    //         'zoom:',
                    //         ev.detail.zoom,
                    //     )
                    // }
                >
                    {attendance?.map((user) => (
                        <AdvancedMarker
                            key={user?.user?._id}
                            position={{ lat: user?.lat, lng: user?.lon }}
                            onClick={() => handleMarkerClick(user)}
                            onMouseEnter={() =>
                                setState((prevState) => ({
                                    ...prevState,
                                    hoveredMarker: user?.user?._id,
                                }))
                            }
                            onMouseLeave={() =>
                                setState((prevState) => ({
                                    ...prevState,
                                    hoveredMarker: null,
                                }))
                            }
                        >
                            <Pin
                                background={"#FBBC04"}
                                glyphColor={"#000"}
                                borderColor={"#000"}
                                scale={
                                    state.hoveredMarker === user?.user?._id
                                        ? 1.3
                                        : 1
                                }
                            />
                        </AdvancedMarker>
                    ))}
                    {state.infoWindowVisible && state.infoWindowPosition && (
                        <InfoWindow
                            position={state.infoWindowPosition}
                            onClose={handleCloseInfoWindow}
                            style={{
                                transition: "opacity 0.3s ease",
                            }}
                        >
                            <div>
                                <Image
                                    width={120}
                                    height={130}
                                    src={state.infoWindowData?.image?.thumb}
                                    alt={state.infoWindowData?.image?.name}
                                />
                                <h2>{state.infoWindowData?.user?.name}</h2>
                                <p>{state.infoWindowData?.user?.usercode}</p>
                                <p>
                                    {dayjs(
                                        state.infoWindowData?.punchInAt
                                    ).format("DD-MM-YYYY HH:mm A")}
                                </p>
                            </div>
                        </InfoWindow>
                    )}
                </Map>
            </APIProvider>
        </div>
    );
};

export default AttendanceLocator;
