import { Button } from 'antd';
import FormInput from '../Forms/FormInput';
import FormProvider from '../Forms/FormProvider';

const ProfileDetails = () => {
    const handleFormSubmit = (values) => {
        console.log('Form Submitted with values:', values);
    };

    return (
        <FormProvider
            layout="vertical"
            initialValues={{ username: '', email: '' }}
            onSubmit={handleFormSubmit}
            submitText="Register"
            maxWidth="500px"
            labelAlign="left"
            // formStyle={{ padding: "20px", border: "1px solid #d9d9d9" }} // Add custom form styles
            validateMessages={{
                required: '${label} is a required!',
                types: { email: 'Please input a valid ${label}' },
            }}
        >
            <FormInput
                name="name"
                label="Name"
                placeholder="Enter your name"
                rules={[{ required: true }]}
            />
            <FormInput
                name="email"
                label="Email"
                placeholder="Enter your email"
                rules={[
                    { required: true },
                    {
                        type: 'email',
                        message: 'Please enter a valid email address.',
                    },
                ]}
            />

            <Button type="primary" variant="solid" size="large">
                Submit
            </Button>
        </FormProvider>
    );
};

export default ProfileDetails;
