import { DatePicker, Form } from 'antd';

const FormDatePicker = ({ name, label, rules = [], ...rest }) => {
    return (
        <Form.Item name={name} label={label} rules={rules}>
            <DatePicker {...rest} />
        </Form.Item>
    );
};

export default FormDatePicker;
