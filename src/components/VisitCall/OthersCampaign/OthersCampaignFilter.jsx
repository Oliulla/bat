import { SelectArea, SelectRegion } from '@/components/Forms/Select';
import { Button } from 'antd';
import { useState } from 'react';

const OthersCampaignFilter = () => {
    const [filterState, setFilterState] = useState({
        region: [],
        area: [],
        territory: [],
    });

    const handleFilterChange = (key, value) => {
        setFilterState((prevState) => ({
            ...prevState,
            [key]: value,
        }));
    };

    const handleApplyFilter = () => {
        console.log('Filtered Data:', filterState);
    };

    return (
        <div className="grid grid-cols-4 gap-4">
            <SelectRegion
                selectedValue={filterState.region}
                onChange={(value) => handleFilterChange('region', value)}
            />

            <SelectArea
                regionId={filterState.region[0]}
                selectedValue={filterState.area}
                onChange={(value) => handleFilterChange('area', value)}
            />

            <SelectRegion
                selectedValue={filterState.region}
                onChange={(value) => handleFilterChange('region', value)}
            />

            <SelectArea
                regionId={filterState.region[0]}
                selectedValue={filterState.area}
                onChange={(value) => handleFilterChange('area', value)}
            />

            <Button size="large" type="primary" onClick={handleApplyFilter}>
                Filter
            </Button>
        </div>
    );
};

export default OthersCampaignFilter;
