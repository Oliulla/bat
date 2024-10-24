import bg from "@/assets/login_bg.png";
import logo from "@/assets/logo_name.png";
import { useLoginMutation } from "@/redux/features/auth/authApi";
import { setCredentials } from "@/redux/features/auth/authSlice";
import { useAppDispatch } from "@/redux/hooks";
import {
    Button,
    Checkbox,
    Col,
    Form,
    Image,
    Input,
    message,
    notification,
    Row,
} from "antd";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
    const navigate = useNavigate();
    const [form] = Form.useForm();
    const dispatch = useAppDispatch();
    const [login, { isLoading }] = useLoginMutation();

    const onFinish = async (values) => {
        try {
            const result = await login({
                username: values.username,
                password: values.password,
                loggedOn: "Web",
            }).unwrap();

            if (result?.statusCode === 200) {
                dispatch(
                    setCredentials({
                        accessToken: result.data.access_token,
                        user: result.data.payload,
                    })
                );
                notification.success({
                    message: "Login Successful",
                    description: "You have successfully logged in",
                    duration: 2,
                    showProgress: true,
                    pauseOnHover: false,
                });
                navigate("/");
            }
        } catch (error) {
            message.error("Login failed");
            console.error("Login error:", error);
        }
    };

    return (
        <div className="flex justify-center items-center w-full h-screen">
            <Row className="container mx-auto max-w-[1200px] shadow-2xl">
                <Col span={12}>
                    <Image src={bg} alt="Background" className="h-[650px]" />
                </Col>
                <Col
                    span={12}
                    className="flex h-[650px] flex-col items-center justify-center bg-white p-20"
                >
                    <Image src={logo} alt="Logo" width={150} height={80} />
                    <h2 className="py-5 text-3xl font-bold">Login</h2>
                    <Form
                        form={form}
                        name="login"
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        className="w-full"
                    >
                        <Form.Item
                            name="username"
                            rules={[
                                {
                                    required: true,
                                    message: "Please input your Email!",
                                },
                            ]}
                            className="mb-1.5"
                            hasFeedback
                        >
                            <Input
                                placeholder="Username"
                                size="large"
                                className="rounded-none border-l-4 border-l-primary"
                            />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: "Please input your Password!",
                                },
                            ]}
                            className="mb-1.5"
                            hasFeedback
                        >
                            <Input.Password
                                className="rounded-none border-l-4 border-l-primary"
                                size="large"
                                placeholder="Password"
                            />
                        </Form.Item>
                        <Form.Item>
                            <div className="flex justify-between items-center">
                                <Form.Item
                                    name="remember"
                                    valuePropName="checked"
                                    noStyle
                                >
                                    <Checkbox>Keep me signed in</Checkbox>
                                </Form.Item>
                                <a href="" className="text-sm text-blue-600">
                                    Forgot password
                                </a>
                            </div>
                        </Form.Item>
                        <Form.Item>
                            <Button
                                block
                                type="primary"
                                htmlType="submit"
                                loading={isLoading}
                                className="rounded-full"
                                size="large"
                            >
                                Log in
                            </Button>
                        </Form.Item>
                        <Form.Item>
                            <p className="pt-3 text-sm text-center text-gray-600">
                                Powered By <br />
                                &copy; HawkEyes Digital Monitoring Ltd. All
                                rights reserved.
                            </p>
                        </Form.Item>
                    </Form>
                </Col>
            </Row>
        </div>
    );
};

export default LoginPage;
