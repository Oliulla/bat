import { useState, useEffect } from 'react';
import {
    useGetAllRegionMutation,
    useGetAllAreaMutation,
} from '@/redux/features/filters/filtersApi';

const useFilters = () => {
    const [filterState, setFilterState] = useState({
        regionId: [],
        areaId: [],
        territoryId: [],
        from: null,
        to: null,
    });

    const [triggerRegion, { data: regions }] = useGetAllRegionMutation();
    const [triggerArea, { data: areas }] = useGetAllAreaMutation();

    useEffect(() => {
        triggerRegion(); // Fetch regions initially
    }, []);

    // Fetch areas when regionId changes
    useEffect(() => {
        if (filterState.regionId.length) {
            triggerArea({ regionIds: filterState.regionId });
        }
    }, [filterState.regionId]);

    const handleFilterChange = (key, value) => {
        setFilterState((prevState) => ({
            ...prevState,
            [key]: value,
        }));
    };

    return {
        filterState,
        regions,
        areas,
        handleFilterChange,
        setFilterState,
    };
};

export default useFilters;
