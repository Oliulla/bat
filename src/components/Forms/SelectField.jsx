'use client';

import {
    useGetAllAreaMutation,
    useGetAllRegionMutation,
    useGetAllTerritoryMutation,
} from '@/redux/features/filters/filtersApi'; // Import your API hooks
import { Button, Select, Spin } from 'antd';
import { useEffect, useState } from 'react';

const sharedProps = {
    size: 'large',
    maxTagCount: 'responsive',
    mode: 'tags',
    tokenSeparators: [','],
    allowClear: true,
    className: 'w-full',
};

const convertToSelectOptions = (data) => {
    return data?.map((item) => ({
        key: item._id,
        label: item.name,
        value: item._id,
    }));
};

const RegularCampaignFilters = ({ filterState, onFilterChange }) => {
    const selectFields = [
        {
            type: 'region',
            stateKey: 'region',
            placeholder: 'Select Region',
            sortOptions: ['asc'],
        },
        {
            type: 'area',
            stateKey: 'area',
            placeholder: 'Select Area',
            dependencies: [filterState.region[0]],
        },
        {
            type: 'territory',
            stateKey: 'territory',
            placeholder: 'Select Territory',
            dependencies: [filterState.region[0]],
        },
    ];

    return (
        <div className="grid grid-cols-4 gap-4">
            {selectFields?.map((field) => (
                <SelectField
                    key={field.type}
                    type={field.type}
                    selectedValue={filterState[field.stateKey]}
                    onChange={(value) => onFilterChange(field.stateKey, value)} // Update to use the passed handler
                    dependencies={field.dependencies || []}
                    sortOptions={field.sortOptions || []}
                    placeholder={field.placeholder}
                />
            ))}
            <Button
                size="large"
                type="primary"
                onClick={() => console.log('Filtered Data:', filterState)}
            >
                Filter
            </Button>
        </div>
    );
};

export default RegularCampaignFilters;

export const SelectField = ({
    type,
    onChange,
    selectedValue,
    dependencies = [],
    sortOptions = [],
    placeholder,
}) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    // API hooks based on the type
    const [getAllRegions] = useGetAllRegionMutation();
    const [getAllAreas] = useGetAllAreaMutation();
    const [getAllTerritories] = useGetAllTerritoryMutation();

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                let response;
                if (type === 'region') {
                    response = await getAllRegions(); // Fetch regions
                } else if (type === 'area') {
                    response = await getAllAreas({ regionId: dependencies[0] }); // Fetch areas based on selected region
                } else if (type === 'territory') {
                    response = await getAllTerritories({
                        areaId: dependencies[0],
                    }); // Fetch territories based on selected area
                }
                setData(response.data || []); // Set the fetched data
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData(); // Call the fetchData function
    }, [type, dependencies]); // Re-fetch data when type or dependencies change

    // const sortedData =
    //     sortOptions.length > 0
    //         ? data?.sort((a, b) => {
    //               const aValue = sortOptions.includes('asc') ? a.name : b.name;
    //               const bValue = sortOptions.includes('asc') ? b.name : a.name;
    //               return aValue.localeCompare(bValue);
    //           })
    //         : null;

    return (
        <>
            {loading ? (
                <Spin /> // Show loading spinner while fetching data
            ) : (
                <Select
                    {...sharedProps}
                    placeholder={placeholder}
                    value={selectedValue}
                    onChange={onChange}
                    options={convertToSelectOptions(data || [])}
                    disabled={dependencies.some((dep) => !dep)}
                />
            )}
        </>
    );
};
