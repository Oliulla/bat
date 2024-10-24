import MainHeader from '@/components/Headers/MainHeader';
import { Button, DatePicker, Form, Input, Select } from 'antd';
import TextArea from 'antd/es/input/TextArea';

const ImageDownload = () => {
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
  ];

  return (
    <div>
      <MainHeader title="Image Download" />
      <Form
        layout="vertical"
        onFinish={handleSubmit}
        className="mb-8 grid grid-cols-6 gap-x-5 gap-y-2 rounded-xl bg-white p-10"
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
          <Input placeholder="Type User Name" className="w-full" />
        </Form.Item>
        <Form.Item name="name">
          <Input placeholder="Type Name" className="w-full" />
        </Form.Item>
        <Form.Item name="notice" className="col-span-4">
          <TextArea placeholder="Input Your Notice" className="w-full" />
        </Form.Item>

        <Button type="primary" htmlType="submit" className="w-full">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default ImageDownload;
