import { items } from "@/data/menudata";
import { Button, Menu } from "antd";
import Sider from "antd/es/layout/Sider";

const Sidebar = ({ role }) => {
  return (
    <Sider
      width={270}
      collapsible
      className="sticky bottom-0 top-0 h-[calc(100vh-48px)] min-h-[calc(100vh)] overflow-auto"
    >
      <div className="m-4 flex h-16 items-center justify-center rounded-md bg-white p-4">
        {/* <img src={mLenz} alt="logo" className="h-auto w-full" /> */}
      </div>
      <Menu
        theme="dark"
        mode="inline"
        // selectedKeys={selectedKeys}
        // openKeys={openKeys}
        // onOpenChange={setOpenKeys}
        // onClick={handleMenuClick}
        items={items}
      />
      <div className="m-4 flex items-center justify-center">
        <Button
          danger
          type="primary"
          variant="primary"
          // onClick={() => handleLogout()}
          className="animate-bounce-reveal mx-auto mb-16 w-full"
          // loading={isLoading}
          // disabled={isLoading}
        >
          Logout
        </Button>
      </div>
    </Sider>
  );
};

export default Sidebar;
