import { Button, Form } from 'antd';
import React from 'react';

const FormProvider = ({
    layout = 'horizontal',
    initialValues = {},
    onSubmit,
    formInstance,
    children,
    submitText = 'Submit',
    labelAlign = 'right',
    validateMessages = {
        required: '${label} is required!',
        types: { email: '${label} is not a valid email!' },
    },
    labelWidth = 8,
    labelWarp = 24,
    classStyles = '',
}) => {
    const [form] = Form.useForm(formInstance);

    const handleFinish = (values) => {
        onSubmit(values);
    };

    return (
        <Form.Provider>
            <Form
                form={form}
                layout={layout}
                initialValues={initialValues}
                onFinish={handleFinish}
                labelAlign={labelAlign}
                validateMessages={validateMessages}
                labelCol={{ span: labelWidth }}
                wrapperCol={{ span: labelWarp }}
                className={classStyles}
            >
                {children}

                <Form.Item className="mb-0 flex items-center justify-center">
                    <Button type="primary" htmlType="submit">
                        {submitText}
                    </Button>
                </Form.Item>
            </Form>
        </Form.Provider>
    );
};

export default FormProvider;
