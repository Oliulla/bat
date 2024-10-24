import { Button, Form, Input, Select } from "antd";

const UserDetails = () => {
    const [form] = Form.useForm();

    const handleSubmit = async (values) => {
        try {
            // Dispatch your API action
            // await dispatch(myApiAction(values));
            console.log("Form submitted successfully:", values);

            // Reset the form fields after successful submission
            form.resetFields();

            // Perform any additional actions here, e.g., show a success message
            // alert('Form submitted successfully!'); // Example action
        } catch (error) {
            console.error("Submission failed:", error);
            // Handle error (e.g., show an error message)
        }
    };

    const filterOptions = [
        {
            name: "userType",
            placeholder: "User Type",
            options: [
                { value: "admin", label: "Admin" },
                { value: "superuser", label: "Super User" },
                { value: "user", label: "User" },
            ],
        },
        {
            name: "groupName",
            placeholder: "Group Name",
            options: [
                { value: "admin", label: "Admin" },
                { value: "superuser", label: "Super User" },
                { value: "user", label: "User" },
            ],
        },
        {
            name: "groupType",
            placeholder: "Group Type",
            options: [
                { value: "admin", label: "Admin" },
                { value: "superuser", label: "Super User" },
                { value: "user", label: "User" },
            ],
        },
        {
            name: "userStatus",
            placeholder: "User Status",
            options: [
                { value: "admin", label: "Admin" },
                { value: "superuser", label: "Super User" },
                { value: "user", label: "User" },
            ],
        },
    ];

    return (
        <Form
            layout="vertical"
            onFinish={handleSubmit}
            className="grid grid-cols-6 gap-y-2 gap-x-5"
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
            <Form.Item name="userName">
                <Input placeholder="Type User Name" className="w-full" />
            </Form.Item>
            <Form.Item name="name">
                <Input placeholder="Type Name" className="w-full" />
            </Form.Item>

            <Button type="primary" htmlType="submit" className="w-full">
                Apply Filters
            </Button>
            <Button type="primary" danger htmlType="submit" className="w-full">
                Download
            </Button>
        </Form>
    );
};

export default UserDetails;
