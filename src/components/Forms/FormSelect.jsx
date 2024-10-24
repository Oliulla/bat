import { Form, Select } from 'antd';

const { Option } = Select;

const FormSelect = ({ name, label, options, rules = [], ...rest }) => {
    return (
        <Form.Item name={name} label={label} rules={rules}>
            <Select {...rest}>
                {options.map((option) => (
                    <Option key={option.value} value={option.value}>
                        {option.label}
                    </Option>
                ))}
            </Select>
        </Form.Item>
    );
};

export default FormSelect;
