import {
    AdvancedMarker,
    APIProvider,
    InfoWindow,
    Map,
    Pin,
} from "@vis.gl/react-google-maps";
import { Image, Modal } from "antd";
import dayjs from "dayjs";
import { useCallback, useState } from "react";

const ReportLocator = ({ data, isOpen, onClose }) => {
    const [infoWindowVisible, setInfoWindowVisible] = useState(false);
    const [infoWindowPosition, setInfoWindowPosition] = useState(null);

    const handleMarkerClick = useCallback((location) => {
        setInfoWindowVisible(true);
        setInfoWindowPosition(location);
    }, []);

    const handleCloseInfoWindow = () => {
        setInfoWindowVisible(false);
        setInfoWindowPosition(null);
    };

    console.log("report data=> ", data);

    return (
        <Modal
            title="Report Location"
            open={isOpen}
            onCancel={onClose}
            footer={null}
            className="className top-8 !w-[800px] pb-0"
            wrapClassName="wrapClassName"
        >
            <APIProvider
                apiKey={import.meta.env.VITE_GOOGLE_MAP_API_KEY || ""}
                onLoad={() => console.log("Maps API has loaded.")}
                className="ApiProvider"
            >
                <Map
                    className="map !h-[calc(100vh-200px)]"
                    mapId={"mapbox/streets-v11"}
                    defaultZoom={10}
                    defaultCenter={data?.location}
                >
                    <AdvancedMarker
                        key={data?._id}
                        position={data?.location}
                        onClick={() => handleMarkerClick(data?.location)}
                        onMouseEnter={() => console.log("Mouse entered")}
                        onMouseLeave={() => console.log("Mouse left")}
                    >
                        <Pin
                            background={"#FBBC04"}
                            glyphColor={"#000"}
                            borderColor={"#000"}
                        />
                    </AdvancedMarker>

                    {infoWindowVisible && infoWindowPosition && (
                        <InfoWindow
                            position={infoWindowPosition}
                            onClose={handleCloseInfoWindow}
                            style={{
                                transition: "opacity 0.3s ease",
                            }}
                        >
                            <div>
                                <Image
                                    width={120}
                                    height={130}
                                    src={data?.image?.thumb}
                                    alt={data?.image?.name}
                                />
                                <h2>{data?.user?.name}</h2>
                                <p>{data?.user?.usercode}</p>
                                <p>
                                    {dayjs(data?.punchInAt).format(
                                        "DD-MM-YYYY HH:mm A"
                                    )}
                                </p>
                            </div>
                        </InfoWindow>
                    )}
                </Map>
            </APIProvider>
        </Modal>
    );
};

export default ReportLocator;
