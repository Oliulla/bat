import { Select } from 'antd';
const RegularCampaignFilters = ({
    filterData,
    isLoadingFilters,
    onFilterChange,
}) => {
    const handleSelectChange = (key, value) => {
        onFilterChange({ [key]: value });
    };

    const selectProps = {
        size: 'large',
        mode: 'multiple',
        style: { width: '100%' },
        placeholder: 'Select Region',
        loading: isLoadingFilters,
        maxTagCount: 'responsive',
    };

    return (
        <>
            <Select
                {...selectProps}
                placeholder="Select Regions"
                onChange={(value) => handleSelectChange('regionId', value)}
                value={filterData?.regionId}
                options={filterData?.data?.regionList}
            />
            <Select
                {...selectProps}
                placeholder="Select areaList"
                value={filterData?.regionId}
                options={filterData?.data?.areaList}
                onChange={(value) => handleSelectChange('areaList', value)}
            />
            <Select
                {...selectProps}
                placeholder="Select Points"
                onChange={(value) => handleSelectChange('pointList', value)}
                value={filterData?.regionId}
                options={filterData?.data?.pointList}
            />
            <Select
                {...selectProps}
                placeholder="Select DH List"
                onChange={(value) => handleSelectChange('dhList', value)}
                value={filterData?.regionId}
                options={filterData?.data?.dhList}
            />
            <Select
                {...selectProps}
                placeholder="Select Territory"
                onChange={(value) => handleSelectChange('territoryList', value)}
                value={filterData?.regionId}
                options={filterData?.data?.territoryList}
            />
        </>
    );
};

export default RegularCampaignFilters;
