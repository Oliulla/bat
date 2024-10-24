import FormInput from "@/components/Forms/FormInput";
import MainHeader from "@/components/Headers/MainHeader";
import { useManagementDataMutation } from "@/redux/features/others/filtersApi";
import { useAppSelector } from "@/redux/hooks";
import { Avatar, Button, Col, Form, Row, Select } from "antd";
import dayjs from "dayjs";
import { useEffect, useState } from "react";

const MyProfile = () => {
  const [regions, setRegions] = useState([]);
  const user = useAppSelector((state) => state.auth.user);
  const accessToken = useAppSelector((state) => state.auth.accessToken);
  const [form] = Form.useForm();
  const onSubmit = (values) => {
    console.log(values);
  };

  const [filterState, setFilterState] = useState({
    page: 1,
    limit: 10,
    from: dayjs(),
    to: dayjs(),
    regionId: [],
    areaId: [],
    territoryId: [],
  });

  const [
    triggerFilters,
    { data: filterData, isLoading: isLoadingFilters, isSuccess },
  ] = useManagementDataMutation({});

  useEffect(() => {
    handleFiltersTrigger({});
  }, []);

  const handleFiltersTrigger = async (filters) => {
    try {
      await triggerFilters(filters);
      console.log("filtaer", filterData);
      // setRegions(filterData?.data?.region);
    } catch (error) {
      console.log("Error fetching campaign filters :", error);
    }
  };

  const handleFilterChange = (newFilters) => {
    setFilterState((prev) => ({ ...prev, ...newFilters }));
    handleFiltersTrigger({ ...filterState, ...newFilters });
  };

  const handleSelectChange = (key, value) => {
    handleFilterChange({ [key]: value });
  };

  useEffect(() => {
    setRegions(filterData?.data?.regionList);
  }, [filterData]);

  const selectProps = {
    size: "large",
    mode: "multiple",
    style: { width: "100%" },
    placeholder: "Select Region",
    loading: isLoadingFilters,
    maxTagCount: "responsive",
  };

  const handleSubmit = (data) => {
    console.log("submitted data=> ", data);
  };

  console.log("regions", regions);
  return (
    <div className="content-container">
      <Form className="grid grid-cols-4 gap-5" onSubmit={handleSubmit}>
        <Select
          {...selectProps}
          placeholder="Select Regions"
          onChange={(value) => handleSelectChange("regionId", value)}
          value={filterData?.regionId}
          options={regions}
        />
        <Select
          {...selectProps}
          placeholder="Select areaList"
          value={filterData?.regionId}
          options={filterData?.data?.areaList}
          onChange={(value) => handleSelectChange("areaList", value)}
        />
        <Select
          {...selectProps}
          placeholder="Select Points"
          onChange={(value) => handleSelectChange("pointList", value)}
          value={filterData?.regionId}
          options={filterData?.data?.pointList}
        />
        <Select
          {...selectProps}
          placeholder="Select DH List"
          onChange={(value) => handleSelectChange("dhList", value)}
          value={filterData?.regionId}
          options={filterData?.data?.dhList}
        />
        <Select
          {...selectProps}
          placeholder="Select Territory"
          onChange={(value) => handleSelectChange("territoryList", value)}
          value={filterData?.regionId}
          options={filterData?.data?.territoryList}
        />
      </Form>
      <MainHeader title="My Profile" />
      <div className="w-full p-10">
        <Form
          onFinish={onSubmit}
          layout="horizontal"
          labelCol={{ span: 6 }}
          labelAlign="left"
          form={form}
        >
          <Row gutter={[16, 0]}>
            <Col span={24} className="flex justify-center">
              <Avatar
                size={100}
                className="rounded-full"
                src="https://avatars.githubusercontent.com/u/101519463?s=200&v=4"
              />
            </Col>
            <Col span={12}>
              <FormInput name="name" label="Name" />
            </Col>
            <Col span={12}>
              <FormInput name="newPassword" label="New Password" />
            </Col>
            <Col span={12}>
              <FormInput name="email " label="Email" />
            </Col>
            <Col span={12}>
              <FormInput name="confirmPassword" label="Confirm Password" />
            </Col>
            <Col span={12}>
              <FormInput name="currentPassword" label="Current Password" />
            </Col>
          </Row>

          <Form.Item className="flex justify-center">
            <Button type="primary" htmlType="submit" className="">
              Update
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default MyProfile;
