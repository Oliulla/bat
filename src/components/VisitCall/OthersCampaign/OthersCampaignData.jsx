import { CaretRightOutlined } from '@ant-design/icons';
import { Collapse, Image, Spin } from 'antd';
import ExtendedData from './ExtendedData';
import MainHeader from '@/components/Headers/MainHeader';

const OthersCampaignData = ({ data, isLoading, isError, error }) => {
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
                                campaignType,
                                ms,
                                kind,
                                executionStartAt,
                                executionEndAt,
                                withinRadius,
                                remarks,
                                distance,
                                question,
                                execution,
                                outlet,
                                point,
                                image,
                                visitTypes,
                                usercode,
                                supervisor,
                                noExecutionReasons,
                                duration,
                            }) => (
                                <div
                                    key={_id}
                                    className="mt-2 rounded-lg bg-white p-3 shadow-md"
                                >
                                    <div className="flex justify-between rounded bg-red-600 p-3 text-white">
                                        <div>
                                            <p>
                                                <strong>Call Type:</strong>{' '}
                                                {visitTypes}
                                            </p>
                                            <p>
                                                <strong>MS Name:</strong>{' '}
                                                {user?.name}
                                            </p>
                                            <p>
                                                <strong>MS Code:</strong>{' '}
                                                {usercode}
                                            </p>
                                            <p>
                                                <strong>CM Name:</strong>{' '}
                                                {supervisor?.name}
                                            </p>
                                            <p>
                                                <strong>CM Code:</strong>{' '}
                                                {supervisor?.usercode}
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
                                                {noExecutionReasons}
                                            </p>
                                            <p>
                                                <strong>Remarks:</strong>{' '}
                                                {remarks}
                                            </p>
                                            <p>
                                                <strong>Total Rating:</strong>{' '}
                                                {'NO Name'}
                                            </p>
                                        </div>
                                        <div>
                                            TODO: ai result not available
                                            <p>
                                                <strong>Activity Type:</strong>{' '}
                                                {visitTypes}
                                            </p>
                                            <p>
                                                <strong>Campaign Name:</strong>{' '}
                                                {visitTypes}
                                            </p>
                                            <p>
                                                <strong>AI Accuracy:</strong>{' '}
                                                {visitTypes}
                                            </p>
                                            <p>
                                                <strong>CM Submission:</strong>{' '}
                                                {visitTypes}
                                            </p>
                                            <p>
                                                <strong>
                                                    Execution Duration:
                                                </strong>{' '}
                                                {duration}
                                            </p>
                                            <p>
                                                <strong>
                                                    Reason for Error:
                                                </strong>{' '}
                                                {visitTypes}
                                            </p>
                                            <p>
                                                <strong>MS Submission:</strong>{' '}
                                                {visitTypes}
                                            </p>
                                            <p>
                                                <strong>MS Feedback:</strong>{' '}
                                                {visitTypes}
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

export default OthersCampaignData;
