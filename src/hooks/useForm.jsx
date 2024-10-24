// src/hooks/useForm.tsx
import { Select as AntSelect, Col, Form, Input, notification, Row } from 'antd';

const { Option } = AntSelect;

export const useForm = ({
    fields,
    initialValues,
    onFinish,
    submitButtonLabel = 'Submit',
}) => {
    const [form] = Form.useForm();

    const handleFinish = (values) => {
        try {
            onFinish(values);
            notification.success({ message: 'Form submitted successfully!' });
        } catch (error) {
            notification.error({
                message: 'Form submission failed!',
                description: error?.message || 'Unknown error',
            });
        }
    };

    const handleFinishFailed = (error) => {
        notification.error({ message: 'Form submission failed!' });
    };

    return {
        FormComponent: (
            <Form
                form={form}
                initialValues={initialValues}
                onFinish={handleFinish}
                onFinishFailed={handleFinishFailed}
                layout="vertical"
            >
                <Row gutter={[16, 16]}>
                    {fields.map((field) => {
                        const colSpan = field.colSpan || 24; // Default full width

                        switch (field.type) {
                            case 'input':
                                return (
                                    <Col key={field.name} span={colSpan}>
                                        <Form.Item
                                            label={field.label}
                                            name={field.name}
                                            rules={[
                                                {
                                                    required: true,
                                                    message: `Please enter ${field.name}`,
                                                },
                                            ]}
                                        >
                                            <Input
                                                placeholder={field.placeholder}
                                            />
                                        </Form.Item>
                                    </Col>
                                );
                            case 'select':
                                return (
                                    <Col key={field.name} span={colSpan}>
                                        <Form.Item
                                            label={field.label}
                                            name={field.name}
                                            rules={[
                                                {
                                                    required: true,
                                                    message: `Please select ${field.name}`,
                                                },
                                            ]}
                                        >
                                            <AntSelect
                                                mode={
                                                    field.isMultiple
                                                        ? 'multiple'
                                                        : undefined
                                                }
                                                placeholder={field.placeholder}
                                                allowClear
                                                style={{ width: '100%' }}
                                            >
                                                {field.options?.map(
                                                    (option) => (
                                                        <Option
                                                            key={option.value}
                                                            value={option.value}
                                                            disabled={
                                                                option.disabled
                                                            }
                                                        >
                                                            {option.label}
                                                        </Option>
                                                    ),
                                                )}
                                            </AntSelect>
                                        </Form.Item>
                                    </Col>
                                );
                            default:
                                return null;
                        }
                    })}
                </Row>
                <Form.Item>
                    <button type="submit">{submitButtonLabel}</button>
                </Form.Item>
            </Form>
        ),
    };
};
