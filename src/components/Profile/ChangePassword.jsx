import FormInput from "../Forms/FormInput";
import FormProvider from "../Forms/FormProvider";

const ChangePassword = () => {
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
                name="currentPassword"
                label="Current Password"
                placeholder="Enter your username"
                rules={[{ required: true }]}
            />
            <FormInput
                name="newPassword"
                label="New Password"
                tooltip="Password must contain 1 uppercase letter, 1 lowercase letter, one digit, 1 special character, and length must be minimum 8 characters."
                placeholder="Enter your new password"
                rules={[
                    { required: true },
                    {
                        pattern:
                            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(_|[^\w])).{8,}$/,
                        message:
                            'Password must contain 1 uppercase letter, 1 lowercase letter, one digit, 1 special character, and length must be minimum 8 characters.',
                    },
                ]}
            />
            <FormInput
                name="confirmPassword"
                label="Confirm New Password"
                placeholder="Enter your username"
                rules={[
                    { required: true },
                    ({ getFieldValue }) => ({
                        validator(rule, value) {
                            if (value !== getFieldValue('newPassword')) {
                                return Promise.reject(
                                    'Confirm Password does not match with New Password!',
                                );
                            }
                            return Promise.resolve();
                        },
                    }),
                ]}
            />
        </FormProvider>
    );
};

export default ChangePassword;
