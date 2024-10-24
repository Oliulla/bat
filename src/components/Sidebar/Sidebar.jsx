import { mLenz } from "@/assets";
import { items } from "@/data/menudata";
import { useLogoutMutation } from "@/redux/features/auth/authApi";
import { setCurrentPath } from "@/redux/features/others/pathSlice";
import { useAppDispatch } from "@/redux/hooks";
import { Button, Image, Menu, notification } from "antd";
import Sider from "antd/es/layout/Sider";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const [selectedKey, setSelectedKey] = useState();
    const [openKeys, setOpenKeys] = useState([]);
    const [logout, { isLoading, isError, error }] = useLogoutMutation();
    const getOpenKeys = (path) => {
        const pathParts = path.split("/").filter(Boolean);
        if (pathParts.length > 1) {
            return [pathParts[0]];
        }
        return [];
    };

    useEffect(() => {
        const path = window.location.pathname;
        dispatch(setCurrentPath(path));
        setSelectedKey(path);
        console.log("path", path);
        // setOpenKeys(getOpenKeys(path));
    }, [dispatch]);

    const handleMenuClick = ({ key }) => {
        dispatch(setCurrentPath(key));
        navigate(key);
        setSelectedKey(key);
    };

    const handleLogout = async () => {
        const result = await logout();

        if (result?.data?.statusCode === 200) {
            localStorage.removeItem("authData");
            document.cookie = `authToken=; max-age=-99999999; path=/`;
            notification.success({
                message: `Logout Successfully`,
                description: `You have been logged out successfully`,
                duration: 3,
                showProgress: true,
                pauseOnHover: false,
            });
        } else {
            notification.error({
                message: `Logout Failed ${result?.error?.error}`,
                description: `${result?.error?.message}`,
                duration: 3,
                showProgress: true,
            });
        }
    };

    return (
        <Sider
            width={270}
            collapsible
            className="sticky bottom-0 top-0 h-[calc(100vh-48px)] min-h-[calc(100vh)] overflow-auto"
        >
            <div className="flex justify-center items-center p-4 m-4 h-16 bg-white rounded-md">
                <Image
                    src={mLenz}
                    alt="logo"
                    className="w-full h-auto"
                    preview={false}
                />
            </div>
            <Menu
                theme="dark"
                mode="inline"
                openKeys={openKeys}
                onOpenChange={setOpenKeys}
                onClick={handleMenuClick}
                items={items}
                defaultSelectedKeys={[selectedKey]}
            />
            <div className="flex justify-center items-center m-4">
                <Button
                    danger
                    type="primary"
                    variant="primary"
                    onClick={() => handleLogout()}
                    className="mx-auto mb-16 w-full animate-bounce-reveal"
                    loading={isLoading}
                    disabled={isLoading}
                >
                    Logout
                </Button>
            </div>
        </Sider>
    );
};

export default Sidebar;
