import { Checkbox, Form } from 'antd';
import React from 'react';

const FormCheckbox = ({ name, label, options, rules = [], ...rest }) => {
    return (
        <Form.Item name={name} label={label} rules={rules}>
            <Checkbox.Group {...rest} options={options} />
        </Form.Item>
    );
};

export default FormCheckbox;
