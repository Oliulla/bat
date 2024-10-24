import MainHeader from '@/components/Headers/MainHeader';
import CmTargetFilter from '@/components/TargetLimit/CmTargetFilter';
import CmTargetTable from '@/components/TargetLimit/CmTargetTable';
import { UploadOutlined } from '@ant-design/icons';
import { Button, message, Upload } from 'antd';
import { useState } from 'react';
import { FaRegFileExcel } from 'react-icons/fa';

const CmTarget = () => {
    const [fileList, setFileList] = useState([]);
    const [uploading, setUploading] = useState(false);
    const handleUpload = () => {
        const formData = new FormData();
        fileList.forEach((file) => {
            formData.append('files[]', file);
        });
        setUploading(true);
        // You can use any AJAX library you like
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

    return (
        <div>
            <div>
                <CmTargetFilter />
            </div>
            <div>
                {' '}
                <MainHeader title="CM Target" />
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

export default CmTarget;
