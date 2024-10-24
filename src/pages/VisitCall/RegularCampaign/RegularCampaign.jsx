
import RegularCampaignData from '@/components/VisitCall/RegularCampaign/RegularCampaignData';
import RegularCampaignFilters from '@/components/VisitCall/RegularCampaign/RegularCampaignFilters';
import { useManagementDataMutation } from '@/redux/features/others/filtersApi';
import { useGetAllRegularCampaignMutation } from '@/redux/features/visit-call/visitCallApi';
import { Button, Form } from 'antd';
import dayjs from 'dayjs';
import { useEffect, useState } from 'react';

const RegularCampaign = () => {
  const [filterState, setFilterState] = useState({
    page: 1,
    limit: 10,
    from: dayjs(),
    to: dayjs(),
    regionId: [],
    areaId: [],
    territoryId: [],
  });

  const [getCampaign, { data, isLoading, isError, error }] =
    useGetAllRegularCampaignMutation({});
  const [triggerFilters, { data: filterData, isLoading: isLoadingFilters }] =
    useManagementDataMutation({});

  useEffect(() => {
    handleDataTrigger({});
  }, []);

  useEffect(() => {
    handleFiltersTrigger({});
  }, []);

  const handleDataTrigger = async (filters) => {
    try {
      await getCampaign(filters);
    } catch (error) {
      console.log("Error fetching campaign data:", error);
    }
  };

  const handleFiltersTrigger = async (filters) => {
    try {
      await triggerFilters(filters);
    } catch (error) {
      console.log("Error fetching campaign filters :", error);
    }
  };

  const handleFilterChange = (newFilters) => {
    setFilterState((prev) => ({ ...prev, ...newFilters }));
    handleFiltersTrigger({ ...filterState, ...newFilters });
  };

  return (
    <div className="space-y-8">
      <div>
        <Form className="grid grid-cols-4 gap-4">
          <RegularCampaignFilters
            filterData={filterData}
            isLoadingFilters={isLoadingFilters}
            onFilterChange={handleFilterChange}
            handleFiltersTrigger={handleFiltersTrigger}
          />

          <Button
            size="large"
            type="primary"
            onClick={() => handleDataTrigger(filterState)}
          >
            Filter
          </Button>
        </Form>
      </div>

      <RegularCampaignData
        data={data}
        isLoading={isLoading}
        isError={isError}
        error={error}
        filterState={filterState}
        setFilterState={setFilterState}
      />
    </div>
  );
};

export default RegularCampaign;
