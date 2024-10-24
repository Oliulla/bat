import Contents from "@/components/Contents/Contents";
import Sidebar from "@/components/Sidebar/Sidebar";
import { Layout } from "antd";
import { Footer } from "antd/es/layout/layout";

// eslint-disable-next-line react/prop-types
const DashboardLayout = ({ children }) => {
  return (
    <Layout>
      <Sidebar />
      <Layout>
        {/* <HeaderFile /> */}
        <Contents>{children}</Contents>
        <Footer className="fixed bottom-0 flex h-12 w-full items-center justify-center">
          <p className="">
            Powered by HawkEyes Digital Monitoring Ltd. All rights reserved.
          </p>
          <img
            src={"HELogo"}
            alt="logo"
            className="h-10 justify-self-end rounded-lg"
          />
        </Footer>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;
