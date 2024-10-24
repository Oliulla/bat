import { Form, Input } from 'antd';
import React from 'react';

const FormInput = ({ name, label, tooltip, rules = [], ...rest }) => {
    return (
        <Form.Item name={name} label={label} rules={rules} tooltip={tooltip}>
            <Input {...rest} />
        </Form.Item>
    );
};

export default FormInput;
