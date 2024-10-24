import MainHeader from '@/components/Headers/MainHeader';
import { CaretRightOutlined } from '@ant-design/icons';
import { Collapse, Image, Spin } from 'antd';
import dayjs from 'dayjs';
import ExtendedData from './ExtendedData';

const NmsmData = ({ data, isLoading, isError, error }) => {
    return (
        <div>
            <div className="content-container mb-2 flex justify-around gap-5 bg-white p-8 text-xl">
                <div>
                    <h3>Total Evaluation Complete: 100</h3>
                </div>
                <div>
                    <h3>Total Evaluation Complete: 100</h3>
                </div>
                <div>
                    <h3>Total Evaluation Complete: 100</h3>
                </div>
            </div>
            <div>
                <MainHeader title="Execution Data" />
                <Spin spinning={isLoading}>
                    <div className="execution-items">
                        {data?.data?.map(
                            ({
                                _id,
                                user,
                                msDetails,
                                outlet,
                                point,
                                campaign,
                                executionStartAt,
                                executionEndAt,
                                duration,
                                withinRadius,
                                distance,
                                lat,
                                lon,
                                image,
                                updatedAt,
                                activityType,
                            }) => (
                                <div
                                    key={_id}
                                    className="mt-2 rounded-lg bg-white p-3 shadow-md"
                                >
                                    <div className="flex justify-between rounded bg-red-600 p-3 text-white">
                                        <div>
                                            <p>
                                                <strong>CM Name:</strong>{' '}
                                                {user?.name}
                                            </p>
                                            <p>
                                                <strong>CM Code:</strong>{' '}
                                                {user?.usercode}
                                            </p>
                                            <p>
                                                <strong>MS Name:</strong>{' '}
                                                {msDetails?.name}
                                            </p>
                                            <p>
                                                <strong>MS Code:</strong>{' '}
                                                {msDetails?.usercode}
                                            </p>

                                            <p>
                                                <strong>Point Name:</strong>{' '}
                                                {point?.name}
                                            </p>
                                            <p>
                                                <strong>Route:</strong>{' '}
                                                {outlet?.route}
                                            </p>
                                        </div>
                                        <div>
                                            <p>
                                                <strong>Outlet Code:</strong>{' '}
                                                {outlet?.outletcode}
                                            </p>
                                            <p>
                                                <strong>Outlet Name:</strong>{' '}
                                                {outlet?.name}
                                            </p>
                                            <p>
                                                <strong>Cluster:</strong>{' '}
                                                {outlet?.cluster}
                                            </p>
                                            <p>
                                                <strong>Outlet Mobile:</strong>{' '}
                                                {outlet?.contact}
                                            </p>
                                            <p>
                                                <strong>
                                                    Reason for no Execution:
                                                </strong>{' '}
                                                {/* TODO: {noExecutionReasons} */}
                                            </p>
                                            <p>
                                                <strong>Remarks:</strong>{' '}
                                                {/* {TODO: remarks} */}
                                            </p>
                                        </div>
                                        <div>
                                            <p>
                                                <strong>Activity Type:</strong>{' '}
                                                {activityType
                                                    ?.map((type) => type)
                                                    .join(', ')}
                                            </p>
                                            <p>
                                                <strong>Campaign Name:</strong>{' '}
                                                {campaign?.name}
                                            </p>
                                            <p>
                                                <strong>AI Accuracy:</strong>{' '}
                                                TODO:
                                                {/* {visitTypes} */}
                                            </p>
                                            <p>
                                                <strong>Submission T.S:</strong>{' '}
                                                {dayjs(updatedAt).format(
                                                    'DD-MM-YYYY',
                                                    'hh:mm:ss A',
                                                )}
                                            </p>
                                            <p>
                                                <strong>
                                                    Execution Duration:
                                                </strong>{' '}
                                                {campaign?.duration}
                                            </p>
                                            <p>
                                                <strong>
                                                    Reason for Error:
                                                </strong>{' '}
                                                TODO:
                                                {/* {visitTypes} */}
                                            </p>
                                            <p>
                                                <strong>Rewrite by MS:</strong>{' '}
                                                TODO:
                                                {/* {visitTypes} */}
                                            </p>
                                        </div>
                                        <div className="flex max-w-52 flex-wrap content-start justify-center gap-1">
                                            <Image.PreviewGroup>
                                                {image?.map((img, index) => (
                                                    <Image
                                                        key={index}
                                                        width={40}
                                                        height={40}
                                                        src={img?.thumb}
                                                        preview={{
                                                            src: img?.original,
                                                        }}
                                                        wrapperClassName="rounded h-10 w-10"
                                                        alt={
                                                            img?.name ||
                                                            'execution'
                                                        }
                                                        className="rounded"
                                                    />
                                                ))}
                                            </Image.PreviewGroup>
                                        </div>
                                    </div>

                                    <Collapse
                                        collapsible="header"
                                        expandIcon={({ isActive }) => (
                                            <CaretRightOutlined
                                                rotate={isActive ? 90 : 0}
                                            />
                                        )}
                                        // onChange={}
                                    >
                                        <ExtendedData key={_id} />
                                    </Collapse>
                                </div>
                            ),
                        )}
                    </div>
                </Spin>
            </div>
        </div>
    );
};

export default NmsmData;
