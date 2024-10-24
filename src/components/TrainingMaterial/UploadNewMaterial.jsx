import { useManagementDataMutation } from '@/redux/features/others/filtersApi';
import { useUploadNewTrainingMaterialMutation } from '@/redux/features/training-materials/trainingMaterials';
import { UploadOutlined } from '@ant-design/icons';
import { Button, DatePicker, Form, message, Select, Upload } from 'antd';
import dayjs from 'dayjs';
import { useEffect, useState } from 'react';

const props = {
  name: "file",
  action: import.meta.env.VITE_FILE_UPLOAD_URL + dayjs().format("DD-MM-YYYY"),
  multiple: false,

  onChange(info) {
    const { name, type, response } = info.file;
    if (info.file.status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === "done") {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

const UploadNewMaterial = () => {
    const [form] = Form.useForm();
    const [filterValues, setFilterValues] = useState({
        regionId: [],
        areaId: [],
        territoryId: [],
        dhId: [],
        pointId: [],
    });

    const [uploadMaterial, { isLoading, isSuccess, isError, error }] =
        useUploadNewTrainingMaterialMutation({});
    const [
        triggerData,
        {
            data: managementData,
            isLoading: isLoadingFilters,
            isError: isErrorFilters,
            error: errorFilters,
        },
    ] = useManagementDataMutation({});

    const handleDataTrigger = async (filters) => {
        try {
            triggerData({ ...filterValues, ...filters });
        } catch (error) {
            console.log('Error fetching campaign data:', error);
        }
    };

    useEffect(() => {
        handleDataTrigger({});
    }, []);

    const handleSetFilterValue = async (params) => {
        setFilterValues({ ...filterValues, ...params });
        handleDataTrigger({ ...filterValues, ...params });
    };

    const handleSubmit = async (data) => {
        try {
            const { name, type, response } = data.file || {};
            data.fileName = name;
            data.fileType = type;
            data.fileUrl = response?.original;

            const res = await uploadMaterial(data);
            if (res) {
                console.log('res ', res);
                message.success('File uploaded successfully');
                form.resetFields();
            } else {
                message.error('File upload failed');
            }

            form.resetFields();
        } catch (error) {
            console.error('Submission failed:', error);
        }
    };

    console.log('manageMentData', filterValues);

    const { regionList, areaList, territoryList, dhList, points } =
        managementData?.data || {};

    return (
        <Form
            layout="vertical"
            onFinish={handleSubmit}
            className="mb-8 grid grid-cols-4 gap-x-5 gap-y-2 rounded-b-xl bg-white p-6"
        >
            {/* {Object.keys(managementData?.data || {}).map(
                (key) =>
                    managementData?.data[key]?.length > 0 && (
                        <Form.Item key={key} name={key} label={false}>
                            <Select
                                mode="multiple "
                                options={managementData?.data[key]}
                                placeholder={`Select ${key}`}
                                className="w-full"
                                onChange={(value) =>
                                    handleFilterChange(
                                        managementData?.data[key],
                                        value,
                                    )
                                }
                                loading={isLoadingFilters}
                            />
                        </Form.Item>
                    ),
            )} */}
            <Form.Item name="regionList" label={false} onsubmit={handleSubmit}>
                <Select
                    mode="multiple"
                    options={regionList}
                    placeholder="Select Region"
                    className="w-full"
                    onChange={(value) =>
                        handleSetFilterValue({ regionList: value })
                    }
                    loading={isLoadingFilters}
                />
            </Form.Item>
            <Form.Item name="areaList" label={false}>
                <Select
                    mode="multiple"
                    options={areaList}
                    placeholder="Select Area"
                    className="w-full"
                    onChange={(value) =>
                        handleSetFilterValue({ areaList: value })
                    }
                    loading={isLoadingFilters}
                />
            </Form.Item>
            <Form.Item name="territoryList" label={false}>
                <Select
                    mode="multiple"
                    options={territoryList}
                    placeholder="Select Territory"
                    className="w-full"
                />
            </Form.Item>
            <Form.Item name="dhList" label={false}>
                <Select
                    mode="multiple"
                    options={dhList}
                    placeholder="Select DH"
                    className="w-full"
                />
            </Form.Item>
            <Form.Item name="points" label={false}>
                <Select
                    mode="multiple"
                    options={points}
                    placeholder="Select Points"
                    className="w-full"
                />
            </Form.Item>
            <Form.Item name="empLevel" label={false}>
                <Select
                    options={[
                        {
                            key: '1',
                            label: 'CM',
                            value: 'CM',
                        },
                        {
                            key: '2',
                            label: 'MS',
                            value: 'MS',
                        },
                    ]}
                    placeholder="Select Points"
                    className="w-full"
                />
            </Form.Item>
            <Form.Item name="publishData">
                <DatePicker className="w-full" />
            </Form.Item>
            <Form.Item name="expireDate">
                <DatePicker className="w-full" />
            </Form.Item>
            <Form.Item name="file">
                <Upload {...props}>
                    <Button className="w-full" icon={<UploadOutlined />}>
                        Click to Upload
                    </Button>
                </Upload>
            </Form.Item>

            <Button type="primary" htmlType="submit" className="w-full">
                Upload
            </Button>
        </Form>
    );
};

export default UploadNewMaterial;
