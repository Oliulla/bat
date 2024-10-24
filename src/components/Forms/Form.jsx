import { Form as AntForm, Button, notification } from 'antd';
import React from 'react';

// Reusable Form Component
const Form = ({ onSubmit, initialValues, fields, clearOnSubmit }) => {
    const [form] = AntForm.useForm();

    // Handle form submission
    const handleFinish = async (values) => {
        try {
            await onSubmit(values); // Call the onSubmit function passed as a prop
            notification.success({
                message: 'Success',
                description: 'Form submitted successfully!',
            });

            if (clearOnSubmit) {
                form.resetFields(); // Clear fields if specified
            }
        } catch (error) {
            notification.error({
                message: 'Error',
                description: error.message || 'Something went wrong!',
            });
        }
    };

    return (
        <AntForm
            form={form}
            initialValues={initialValues}
            onFinish={handleFinish}
            layout="vertical"
        >
            {fields.map((field) => (
                <AntForm.Item
                    key={field.name}
                    name={field.name}
                    label={field.label}
                    rules={field.rules}
                >
                    {field.component}
                </AntForm.Item>
            ))}
            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
                <Button
                    type="default"
                    onClick={() => form.resetFields()} // Clear fields
                    style={{ marginLeft: '8px' }}
                >
                    Clear
                </Button>
            </Form.Item>
        </AntForm>
    );
};

export default Form;
