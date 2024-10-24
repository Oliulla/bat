'use client';

import {
    useGetAllAreaMutation,
    useGetAllRegionMutation,
} from '@/redux/features/filters/filtersApi';
import { Select, Space, Spin } from 'antd';
import { useEffect } from 'react';

const handleChange = (value, onChange) => {
    onChange(value);
};

const sharedProps = {
    size: 'large',
    maxTagCount: 'responsive',
    mode: 'tags',
    tokenSeparators: [','],
    allowClear: true,
    className: 'w-full',
};

const convertToSelectOptions = (data) => {
    return data.map((item) => ({
        key: item._id,
        label: item.name,
        value: item._id,
    }));
};

export const SelectRegion = ({ onChange, selectedValue }) => {
    const [
        triggerRegion,
        {
            data: regions,
            isLoading: isRegionLoading,
            isError: isRegionError,
            error: regionError,
        },
    ] = useGetAllRegionMutation({});

    useEffect(() => {
        (async () => {
            await triggerRegion();
        })();
    }, []);

    return (
        <Select
            {...sharedProps}
            placeholder="Select Region"
            value={selectedValue}
            onChange={(value) => handleChange(value, onChange)}
            options={convertToSelectOptions(regions?.data || [])}
            loading={isRegionLoading}
            notFoundContent={isRegionLoading ? <Spin size="small" /> : null}
        />
    );
};

export const SelectArea = ({ regionId, onChange, selectedValue }) => {
    const [
        triggerArea,
        {
            data: areas,
            isLoading: isAreaLoading,
            isError: isAreaError,
            error: areaError,
        },
    ] = useGetAllAreaMutation({});

    useEffect(() => {
        (async () => {
            await triggerArea();
        })();
    }, []);

    console.log('areas', areas);

    return (
        <Space style={{ width: '100%' }} direction="vertical">
            <Select
                {...sharedProps}
                placeholder={regionId ? 'Select Area' : 'Select a Region First'}
                value={selectedValue}
                onChange={(value) => handleChange(value, onChange)}
                options={convertToSelectOptions(areas?.data || [])}
                loading={isAreaLoading}
                notFoundContent={isAreaLoading ? <Spin size="small" /> : null}
                disabled={!regionId}
            />
        </Space>
    );
};

export const SelectTerritory = ({ regionId, onChange, selectedValue }) => {
    const [
        triggerArea,
        {
            data: areas,
            isLoading: isAreaLoading,
            isError: isAreaError,
            error: areaError,
        },
    ] = useGetAllAreaMutation({});

    useEffect(() => {
        (async () => {
            await triggerArea();
        })();
    }, []);

    console.log('areas', areas);

    return (
        <Space style={{ width: '100%' }} direction="vertical">
            <Select
                {...sharedProps}
                placeholder={regionId ? 'Select Area' : 'Select a Region First'}
                value={selectedValue}
                onChange={(value) => handleChange(value, onChange)}
                options={convertToSelectOptions(areas?.data || [])}
                loading={isAreaLoading}
                notFoundContent={isAreaLoading ? <Spin size="small" /> : null}
                disabled={!regionId}
            />
        </Space>
    );
};

export const SelectDh = ({ regionId, onChange, selectedValue }) => {
    const [
        triggerArea,
        {
            data: areas,
            isLoading: isAreaLoading,
            isError: isAreaError,
            error: areaError,
        },
    ] = useGetAllAreaMutation({});

    useEffect(() => {
        (async () => {
            await triggerArea();
        })();
    }, []);

    console.log('areas', areas);

    return (
        <Space style={{ width: '100%' }} direction="vertical">
            <Select
                {...sharedProps}
                placeholder={regionId ? 'Select Area' : 'Select a Region First'}
                value={selectedValue}
                onChange={(value) => handleChange(value, onChange)}
                options={convertToSelectOptions(areas?.data || [])}
                loading={isAreaLoading}
                notFoundContent={isAreaLoading ? <Spin size="small" /> : null}
                disabled={!regionId}
            />
        </Space>
    );
};
