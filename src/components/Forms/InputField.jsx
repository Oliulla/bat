import { Input } from 'antd';

// Reusable Input Field Component
const InputField = ({ type = 'text', ...props }) => {
    return <Input type={type} {...props} />;
};

export default InputField;
