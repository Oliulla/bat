import {
    LogoutOutlined,
    ProfileOutlined,
    UserOutlined,
} from "@ant-design/icons";
import { Avatar, Dropdown, message, Space } from "antd";
import { Header } from "antd/es/layout/layout";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import { logo } from "@/assets/logo_name.png";
import { useLogoutMutation } from "@/redux/features/auth/authApi";
import { useAppDispatch } from "@/redux/hooks";

const HeaderFile = () => {
    const router = useRouter();
    const [logout, { isLoading }] = useLogoutMutation();
    const dispatch = useAppDispatch();

    const handleLogout = async () => {
        const result = await Swal.fire({
            title: "Are you sure?",
            text: "You will be logged out!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, Logout!",
            cancelButtonText: "No, cancel!",
        });

        if (result.isConfirmed) {
            // {{ edit_1 }}
            try {
                // await logout().unwrap();
                await logout().unwrap(); // Ensure to await and unwrap the promise
                Swal.fire({
                    title: "Logout Successful",
                    icon: "success",
                    text: "You have been logged out! Redirecting to Login...",
                    confirmButtonText: "OK",
                    timer: 3000,
                }).then(
                    () => router.push("/login") // Redirect to login
                );
            } catch (error) {
                Swal.fire("Oops...", "Something went wrong!", "error");
                console.error("Logout failed:", error);
            }
        }
    };

    const onClick = ({ key }) => {
        if (key === "1") {
            handleLogout();
        } else {
            message.info(`Click on item ${key}`);
        }
    };

    const items = [
        {
            label: "Logout",
            key: "1",
            icon: <LogoutOutlined />,
            danger: true,
            onClick: onClick,
        },
        {
            label: "Profile",
            key: "2",
            icon: <ProfileOutlined />,
        },
    ];

    return (
        <Header className="lead-[3rem] sticky top-0 z-10 flex h-12 w-full items-center justify-between">
            <Image src={logo} alt="logo" className="w-24 h-10" />

            <Dropdown menu={{ items }} arrow trigger={["click"]}>
                <Space>
                    <Avatar
                        size={35}
                        icon={<UserOutlined />}
                        className="bg-slate-600"
                    />
                </Space>
            </Dropdown>
        </Header>
    );
};

export default HeaderFile;
