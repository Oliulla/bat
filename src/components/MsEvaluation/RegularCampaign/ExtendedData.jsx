import { useGetExecutionByIdQuery } from '@/redux/features/ms-evaluation/msEvaluationApi';
import { Collapse, Table } from 'antd';
import { useEffect } from 'react';

const { Panel } = Collapse;

const ExtendedData = (props) => {
    const { data, isLoading, isError, error, refetch } =
        useGetExecutionByIdQuery(props.panelKey, { refetchOnMount: false });

    useEffect(() => {
        refetch(props.panelKey);
    }, [props.panelKey, refetch]);

    const jobsInfo = data?.data?.jobsInfo || [];

    return (
        <Panel {...props} header="Expend" key={props.panelKey}>
            <div>
                {jobsInfo?.map(({ campaign, outletId, detected, used }) => (
                    <div
                        key={outletId}
                        className="m-2 rounded bg-purple-300 p-2"
                    >
                        <div className="flex justify-between gap-5 text-lg">
                            <div>
                                <p>
                                    <strong>Campaign :</strong> {campaign?.name}
                                </p>
                                <p>
                                    <strong>GHW:</strong> {campaign?.name}
                                </p>
                                <p>
                                    <strong>Valid Sequence:</strong>{' '}
                                    {campaign?.name}
                                </p>
                            </div>
                            <div>
                                <p>
                                    <strong>POSM Sequence:</strong>{' '}
                                    {campaign?.name}
                                </p>
                                <p>
                                    <strong>POSM Valid Sequence :</strong>{' '}
                                    {campaign?.name}
                                </p>
                            </div>
                        </div>
                        <hr className="my-2" />
                        <div>
                            {used?.map((category) => (
                                <div key={category?.category}>
                                    <p className="text-lg">
                                        <strong>Category Name:</strong>{' '}
                                        {category?.category}
                                    </p>
                                    <p className="text-lg">
                                        <strong>Category Accuracy:</strong>{' '}
                                        {category?.accuracy}%
                                    </p>
                                    <div>
                                        <Table
                                            columns={[
                                                {
                                                    title: 'Material Name',
                                                    dataIndex: 'name',
                                                    key: 'name',
                                                },
                                                {
                                                    title: 'Used Qty',
                                                    dataIndex: 'used',
                                                    key: 'used',
                                                },
                                                {
                                                    title: 'AI Qty',
                                                    dataIndex: 'detected',
                                                    key: 'detected',
                                                },
                                                {
                                                    title: 'Accuracy',
                                                    dataIndex: 'accuracy',
                                                    key: 'accuracy',
                                                    // render: (accuracy) =>
                                                    //     `${accuracy}%`,
                                                },
                                            ]}
                                            dataSource={category?.items}
                                            bordered
                                            size="small"
                                            pagination={false}
                                            className=""
                                        />
                                        {category?.blanks?.map((item) => (
                                            <Table
                                                key={item?._id}
                                                columns={[
                                                    {
                                                        title: 'Material Name',
                                                        dataIndex: 'name',
                                                        key: 'name',
                                                    },
                                                    {
                                                        title: 'Used Qty',
                                                        dataIndex: 'used',
                                                        key: 'used',
                                                    },
                                                    {
                                                        title: 'AI Qty',
                                                        dataIndex: 'detected',
                                                        key: 'detected',
                                                    },
                                                    {
                                                        title: 'Accuracy',
                                                        dataIndex: 'accuracy',
                                                        key: 'accuracy',
                                                        // render: (accuracy) =>
                                                        //     `${accuracy}%`,
                                                    },
                                                ]}
                                                dataSource={category?.items}
                                                bordered
                                                size="small"
                                                pagination={false}
                                                className=""
                                            />
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </Panel>
    );
};

export default ExtendedData;
