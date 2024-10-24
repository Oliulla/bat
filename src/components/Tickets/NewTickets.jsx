'use client';

import { useCreateTicketMutation } from '@/redux/features/tickets/ticketsApi';
import { UploadOutlined } from '@ant-design/icons';
import {
    Button,
    Form,
    Input,
    message,
    notification,
    Select,
    Upload,
} from 'antd';
import TextArea from 'antd/es/input/TextArea';
import dayjs from 'dayjs';
import { useState } from 'react';
const props = {
    name: 'file',
    action:
        `${import.meta.env.VITE_FILE_UPLOAD_URL}` +
        dayjs().format('DD-MM-YYYY'),

    onChange(info) {
        const { name, type, percent, status } = info?.file || {};

        console.log('info', info);
        if (info.file.status !== 'uploading') {
            message.loading({
                loading: 'Uploading...',
                duration: 0,
            });
        }
        if (info.file.status === 'done') {
            message.success(`${info.file.name} file uploaded successfully`);
            const { name, type } = info.file;
        } else if (info.file.status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
            console.log('error', info.file.status);
        }
    },
};

const NewTickets = () => {
    const [form] = Form.useForm();
    const [createTicket, { isLoading }] = useCreateTicketMutation();
    const [state, setState] = useState({
        fileName: '',
        fileType: '',
        fileUrl: '',
    });

    const handleSubmit = async (data) => {
        try {
            const result = await createTicket(data);

            if (result) {
                notification.success({
                    message: 'Success',
                    description: 'Ticket created successfully!',
                    duration: 3,
                    showProgress: true,
                });
                form.resetFields();
            }
        } catch (error) {
            console.error('Submission failed:', error);

            notification.error({
                message: 'Error',
                description: 'Ticket creation failed!',
                duration: 3,
                showProgress: true,
            });
        }
    };

    return (
        <Form
            layout="horizontal"
            labelCol={{ span: 5 }}
            labelAlign="left"
            onFinish={handleSubmit}
            className="grid grid-cols-2 gap-y-2 gap-x-5 p-10 mb-8 bg-white rounded-b-xl"
        >
            <Form.Item name="type" label="Type" rules={[{ required: true }]}>
                <Select
                    options={[
                        {
                            key: '1',
                            value: 'Request',
                            label: 'Request',
                        },
                        {
                            key: '2',
                            value: 'Complaint',
                            label: 'Complaint',
                        },
                    ]}
                    placeholder="Request Type"
                    className="w-full"
                />
            </Form.Item>

            <Form.Item
                name="subject"
                label="Subject"
                rules={[{ required: true }]}
            >
                <Input placeholder="Ticket Subject" className="w-full" />
            </Form.Item>
            <Form.Item name="file" label="File">
                <Upload {...props}>
                    <Button className="w-full" icon={<UploadOutlined />}>
                        Upload File
                    </Button>
                </Upload>
            </Form.Item>
            <Form.Item
                name="description"
                label="Description"
                rules={[{ required: true }]}
            >
                <TextArea placeholder="Ticket Description" className="w-full" />
            </Form.Item>

            <Button
                type="primary"
                htmlType="submit"
                className="col-span-2 mx-auto"
            >
                Raise Ticket
            </Button>
        </Form>
    );
};

export default NewTickets;