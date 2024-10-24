import { useGetExecutionByIdQuery } from '@/redux/features/visit-call/visitCallApi';
import { Collapse } from 'antd';
import { useEffect } from 'react';

const { Panel } = Collapse;

const ExtendedData = (props) => {
    const { data, isLoading, isError, error, refetch } =
        useGetExecutionByIdQuery(props.panelKey, { refetchOnMount: false });

    useEffect(() => {
        refetch(props.panelKey);
    }, [props.panelKey, refetch]);

    const { jobsInfo } = data?.data || [];

    // Sort and separate categories by name
    const sortedCategories = (categories) => {
        const order = ['POSM', 'Planogram', 'Toolkit'];
        // Clone the array before sorting to avoid mutating the original array
        return [...categories]?.sort(
            (a, b) => order.indexOf(a?.category) - order.indexOf(b?.category),
        );
    };

    // Assign background color based on category
    const getCategoryBgColor = (category) => {
        switch (category) {
            case 'POSM':
                return 'bg-green-200';
            case 'Planogram':
                return 'bg-blue-200';
            case 'Toolkit':
                return 'bg-yellow-200';
            default:
                return 'bg-gray-200';
        }
    };

    // Header groups for different categories
    const headerGroups = {
        POSM: ['Material Name', 'Used Qty', 'AI Qty', 'Accuracy'],
        Planogram: ['Material Name', 'Used Qty', 'AI Qty', 'Accuracy'],
        Toolkit: ['Material Name', '', 'Used'],
    };

    return (
        <Panel {...props} header="Expend" key={props.panelKey}>
            <div className="grid grid-cols-2">
                {jobsInfo?.map(({ campaign, outletId, detected, used }) => (
                    <div
                        key={outletId}
                        className="m-2 h-fit rounded-lg bg-purple-300 p-2"
                    >
                        <div>
                            <p>
                                Campaign: <strong>{campaign?.name}</strong>
                            </p>

                            {/* Detected Categories */}
                            {detected?.map((category) => (
                                <div
                                    key={category?.category}
                                    className={`m-2 rounded-lg p-2 ${getCategoryBgColor(category?.category)}`}
                                >
                                    <div className="grid grid-cols-2">
                                        {category?.items?.map((item) => (
                                            <p key={item?.label}>
                                                {item?.label}:{' '}
                                                <strong>{item?.value}</strong>
                                            </p>
                                        ))}
                                    </div>
                                </div>
                            ))}

                            <hr className="my-2" />

                            {/* Used Categories */}
                            {sortedCategories(used)?.map((category) => (
                                <div
                                    key={category?.category}
                                    className={`m-2 rounded-lg p-2 ${getCategoryBgColor(category?.category)}`}
                                >
                                    <p>
                                        <strong>Category Name:</strong>{' '}
                                        {category?.category}
                                    </p>
                                    {category?.category !== 'Toolkit' && (
                                        <p>
                                            <strong>Category Accuracy:</strong>{' '}
                                            {category?.accuracy}%
                                        </p>
                                    )}

                                    {/* Render header based on category */}
                                    {category?.items?.length > 0 && (
                                        <div className="mb-2 grid grid-cols-4 gap-4 font-bold text-blue-600">
                                            {headerGroups[
                                                category?.category
                                            ]?.map((header, index) => (
                                                <span key={index}>
                                                    {header}
                                                </span>
                                            ))}
                                        </div>
                                    )}

                                    {/* Render items based on category */}
                                    {category?.items?.map((item, index) => (
                                        <div
                                            key={index}
                                            className={`mb-2 grid gap-4 ${
                                                category?.category === 'Toolkit'
                                                    ? 'grid-cols-2'
                                                    : 'grid-cols-4'
                                            }`}
                                        >
                                            <span>{item?.name}</span>
                                            <span>
                                                {item?.used ? 'Yes' : 'No'}
                                            </span>
                                            {/* For categories other than Toolkit */}
                                            {category?.category !==
                                                'Toolkit' && (
                                                <>
                                                    <span>
                                                        {item?.detected}
                                                    </span>
                                                    <span>
                                                        {item?.accuracy}%
                                                    </span>
                                                </>
                                            )}
                                        </div>
                                    ))}

                                    {/* Check if blanks exist */}
                                    {category?.items
                                        ?.flatMap((item) => item?.blanks || [])
                                        ?.filter((blank) => blank)?.length >
                                        0 && (
                                        <div className="rounded-lg border-2 border-gray-300 bg-white p-2">
                                            {category?.items
                                                ?.flatMap(
                                                    (item) => item?.blanks,
                                                )
                                                ?.map((blank, index) => (
                                                    <div
                                                        key={index}
                                                        className="grid grid-cols-4 gap-4"
                                                    >
                                                        <span>
                                                            {blank?.name}
                                                        </span>
                                                        <span>
                                                            {blank?.used}
                                                        </span>
                                                        <span>
                                                            {blank?.detected}
                                                        </span>
                                                        <span>
                                                            {blank?.accuracy}%
                                                        </span>
                                                    </div>
                                                ))}
                                        </div>
                                    )}
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
