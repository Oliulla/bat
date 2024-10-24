
import MainHeader from '@/components/Headers/MainHeader';
import UploadNewMaterial from '@/components/TrainingMaterial/UploadNewMaterial';
import { useGetAllTrainingMaterialsMutation } from '@/redux/features/training-materials/trainingMaterials';
import { Table } from 'antd';
import dayjs from 'dayjs';
import { useEffect } from 'react';
import { FaDownload, FaFilePdf, FaFileVideo } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';

const TrainingMaterials = () => {
    const [triggerMaterials, { data, isLoading, isError, error }] =
        useGetAllTrainingMaterialsMutation({});

    useEffect(() => {
        handleTriggerMaterials({});
    }, []);

    const handleTriggerMaterials = async (filters) => {
        try {
            await triggerMaterials(filters);
        } catch (error) {
            console.log('Error fetching training materials:', error);
        }
    };

    const columns = [
        {
            title: '',
            dataIndex: 'fileType',
            key: 'fileType',
            render: (fileType) => (
                <div>
                    {fileType === 'pdf' ? (
                        <FaFilePdf className="h-10 w-10 cursor-pointer text-green-600" />
                    ) : (
                        <FaFileVideo className="h-10 w-10 cursor-pointer text-red-600" />
                    )}
                </div>
            ),
        },
        {
            title: 'Name',
            dataIndex: 'fileName',
            key: 'fileName',
        },
        {
            title: 'Uploaded Date',
            dataIndex: 'publishAt',
            key: 'publishAt',
            render: (date) => <p>{dayjs(date).format('DD MMMM, YYYY')}</p>,
        },
        {
            title: 'Published Date',
            dataIndex: 'publishedDate',
            key: 'publishedDate',
            render: (date) => <p>{dayjs(date).format('DD MMMM, YYYY')}</p>,
        },
        {
            title: 'Expire Date',
            dataIndex: 'expireDate',
            key: 'expireDate',
            render: (date) => <p>{dayjs(date).format('DD MMMM, YYYY')}</p>,
        },
        {
            title: 'Emp. Level',
            dataIndex: 'targetOf',
            key: 'targetOf',
            render: (targetOf) =>
                targetOf?.map((target, index) => <p key={index}>{target}</p>),
        },
        {
            title: 'Action',
            dataIndex: 'action',
            key: 'action',
            render: () => (
                <div className="align-center flex gap-5">
                    <FaDownload className="h-10 w-10 cursor-pointer text-green-600" />
                    <MdDelete className="h-10 w-10 cursor-pointer text-red-600" />
                </div>
            ),
        },
    ];

    return (
        <div>
            <div className="content-container">
                <MainHeader title="Training Module" />
                <UploadNewMaterial />
            </div>
            <div className="content-container">
                <MainHeader title="Previous Training Modules" />
                <Table
                    columns={columns}
                    dataSource={data?.data}
                    rootClassName="info__table"
                    rowClassName="first__row__column"
                />
            </div>
        </div>
    );
};

export default TrainingMaterials;
