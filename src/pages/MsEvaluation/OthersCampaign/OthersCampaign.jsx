import ExecutionData from '@/components/MsEvaluation/OthersCampaign/ExecutionData';
import { useGetAllAreaMutation, useGetAllRegionMutation } from '@/redux/features/filters/filtersApi';
import { useGetAllRegularCampaignMutation } from '@/redux/features/ms-evaluation/msEvaluationApi';
import dayjs from 'dayjs';
import { useEffect, useState } from 'react';

const OthersCampaign = () => {
  const [getCampaign, { data, isLoading, isError, error }] =
    useGetAllRegularCampaignMutation({});

  const [
    triggerRegion,
    {
      data: regions,
      isLoading: isRegionLoading,
      isError: isRegionError,
      error: regionError,
    },
  ] = useGetAllRegionMutation({});
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
    handleApplyFilter();

    (async () => {
      await triggerRegion();
    })();

    (async () => {
      await triggerArea();
    })();
  }, []);

  const [filterState, setFilterState] = useState({
    page: 1,
    limit: 10,
    from: dayjs(),
    to: dayjs(),
    regionId: [],
    areaId: [],
    territoryId: [],
  });

  const handleFilterChange = (key, value) => {
    setFilterState((prevState) => ({
      ...prevState,
      [key]: value,
    }));
    if (key === "regionId") {
      fetchAreas(value);
    }
  };

  const fetchAreas = async (regionIds) => {
    try {
      await triggerArea({ regionIds });
    } catch (error) {
      console.error("Error fetching areas:", error);
    }
  };

  const handleApplyFilter = () => {
    try {
      // console.log('Filtered Data:', filterState);
      triggerCampaignData({
        ...filterState,
      });
    } catch (error) {
      console.error("Regular Campaign Error: =>", error.error);
    }
  };

  const triggerCampaignData = async (filters) => {
    try {
      await getCampaign(filters);
    } catch (error) {
      console.log("error from ms-evaluation , regular campaign ", error);
    }
  };

  const convertToSelectOptions = (data) => {
    return data?.map((item) => ({
      key: item._id,
      label: item.name,
      value: item._id,
    }));
  };

  const SelectProps = {
    size: "large",
    allowClear: true,
    className: "w-full",
    mode: "tags",
    maxTagCount: "responsive",
    tokenSeparators: [","],
  };

  const filteredAreas = areas?.data?.filter((area) =>
    filterState.regionId.includes(area.regionId)
  );

  return (
    <div>
      <div>
        <ExecutionData
          data={data}
          isLoading={isLoading}
          isError={error}
          error={error}
          // filterState={filterState}
          // setFilterState={setFilterState}
          // triggerCampaignData={(filters) =>
          //     triggerCampaignData(filters)
          // }
        />
      </div>
    </div>
  );
};

export default OthersCampaign;
