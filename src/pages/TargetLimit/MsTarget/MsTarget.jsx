import InputField from '@/components/Forms/InputField';
import MainHeader from '@/components/Headers/MainHeader';
import CmTargetTable from '@/components/TargetLimit/CmTargetTable';
import MsTargetFilter from '@/components/TargetLimit/MsTarget/MsTargetFilter';
import { UploadOutlined } from '@ant-design/icons';
import { Button, message, Upload } from 'antd';
import { useState } from 'react';
import { FaRegFileExcel } from 'react-icons/fa';

const MsTarget = () => {
    const [fileList, setFileList] = useState([]);
    const [uploading, setUploading] = useState(false);
    const handleUpload = () => {
        const formData = new FormData();
        fileList.forEach((file) => {
            formData.append('files[]', file);
        });
        setUploading(true);
        fetch('https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload', {
            method: 'POST',
            body: formData,
        })
            .then((res) => res.json())
            .then(() => {
                setFileList([]);
                message.success('upload successfully.');
            })
            .catch(() => {
                message.error('upload failed.');
            })
            .finally(() => {
                setUploading(false);
            });
    };
    const props = {
        onRemove: (file) => {
            const index = fileList.indexOf(file);
            const newFileList = fileList.slice();
            newFileList.splice(index, 1);
            setFileList(newFileList);
        },
        beforeUpload: (file) => {
            setFileList([...fileList, file]);
            return false;
        },
        fileList,
    };

    ///
    const handleFormSubmit = async (values) => {
        // Here you can handle your API call or any other logic
        console.log('Submitted values:', values);
        // Return a promise or throw an error if something goes wrong
    };

    // Define your form fields
    const fields = [
        {
            name: 'username',
            label: 'Username',
            component: <InputField placeholder="Enter your username" />,
            rules: [{ required: true, message: 'Username is required!' }],
        },
        {
            name: 'email',
            label: 'Email',
            component: (
                <InputField type="email" placeholder="Enter your email" />
            ),
            rules: [{ required: true, message: 'Email is required!' }],
        },
        // Add more fields as needed
    ];
    return (
        <div>
            {/* <div>
                <h2>My Form</h2>
                <Form
                    onSubmit={handleFormSubmit}
                    fields={fields}
                    clearOnSubmit={true} // Set to true if you want to clear fields after submission
                />
            </div> */}
            <div>
                <MsTargetFilter />
            </div>
            <div>
                {' '}
                <MainHeader title="MS Target" />
                <div className="flex items-center space-x-3 bg-white p-8 align-middle">
                    <h3 className="text-2xl font-bold">Excel File Upload: </h3>
                    <FaRegFileExcel className="text-3xl" />
                    <Upload {...props}>
                        <Button variant="primary" icon={<UploadOutlined />}>
                            Select File
                        </Button>
                    </Upload>
                    <Button
                        type="primary"
                        onClick={handleUpload}
                        disabled={fileList.length === 0}
                        loading={uploading}
                    >
                        {uploading ? 'Uploading' : 'Start Upload'}
                    </Button>
                </div>
                <CmTargetTable />{' '}
            </div>
        </div>
    );
};

export default MsTarget;
