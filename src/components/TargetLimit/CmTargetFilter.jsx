import { Button, DatePicker, Form, Select } from 'antd';

const CmTargetFilter = () => {
    const [form] = Form.useForm();

    const handleSubmit = async (values) => {
        try {
            console.log('Form submitted successfully:', values);

            form.resetFields();
        } catch (error) {
            console.error('Submission failed:', error);
        }
    };

    const filterOptions = [
        {
            name: 'region',
            placeholder: 'Region',
            options: [
                { value: 'Dhaka', label: 'Dhaka' },
                { value: 'Chittagong', label: 'Chittagong' },
                { value: 'Khulna', label: 'Khulna' },
                { value: 'Rajshahi', label: 'Rajshahi' },
                { value: 'Narayanganj', label: 'Narayanganj' },
            ],
        },
        {
            name: 'area',
            placeholder: 'Area',
            options: [
                { value: 'Domar', label: 'Domar' },
                { value: 'Dhaka', label: 'Dhaka' },
                { value: 'Chittagong', label: 'Chittagong' },
                { value: 'Khulna', label: 'Khulna' },
                { value: 'Rajshahi', label: 'Rajshahi' },
                { value: 'Narayanganj', label: 'Narayanganj' },
            ],
        },
        {
            name: 'territory',
            placeholder: 'Territory',
            options: [
                { value: 'Dhaka', label: 'Dhaka' },
                { value: 'Chittagong', label: 'Chittagong' },
                { value: 'Khulna', label: 'Khulna' },
                { value: 'Rajshahi', label: 'Rajshahi' },
                { value: 'Narayanganj', label: 'Narayanganj' },
            ],
        },
        {
            name: 'dhName',
            placeholder: 'DH Name',
            options: [
                { value: 'joni', label: 'joni' },
                { value: 'joni', label: 'joni' },
                { value: 'superuser', label: 'Super User' },
                { value: 'user', label: 'User' },
            ],
        },
        {
            name: 'point',
            placeholder: 'Point',
            options: [
                { value: 'bazar', label: 'Bazar' },
                { value: 'mor', label: 'Mor' },
                { value: 'dhaka', label: 'Dhaka' },
            ],
        },
        {
            name: 'userType',
            placeholder: 'User Type',
            options: [
                { value: 'admin', label: 'Admin' },
                { value: 'superuser', label: 'Super User' },
                { value: 'user', label: 'User' },
            ],
        },
        {
            name: 'empLavel',
            placeholder: 'EMP Level',
            options: [
                { value: 'CM', label: 'CM' },
                { value: 'MS', label: 'MS' },
                { value: 'Admin', label: 'Admin' },
            ],
        },
    ];

    return (
        <Form
            layout="vertical"
            onFinish={handleSubmit}
            className="mb-4 grid grid-cols-6 gap-x-4"
        >
            {filterOptions?.map((option, index) => (
                <Form.Item key={index} name={option.name} label={false}>
                    <Select
                        options={option.options}
                        placeholder={option.placeholder}
                        className="w-full"
                    />
                </Form.Item>
            ))}
            <Form.Item name="date">
                <DatePicker className="w-full" />
            </Form.Item>
            <Form.Item name="userName">
                <DatePicker className="w-full" />
            </Form.Item>

            <Button type="primary" htmlType="submit" className="w-full">
                Search
            </Button>
            <Button danger type="primary" htmlType="submit" className="w-full">
                Download List
            </Button>
        </Form>
    );
};

export default CmTargetFilter;
