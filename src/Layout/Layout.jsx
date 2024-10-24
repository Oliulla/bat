import { mLenz } from "@/assets";
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
                <Footer className="flex fixed bottom-0 justify-center items-center w-full h-12">
                    <p className="">
                        Powered by HawkEyes Digital Monitoring Ltd. All rights
                        reserved.
                    </p>
                    <img
                        src={mLenz}
                        alt="logo"
                        className="justify-self-end h-10 rounded-lg"
                    />
                </Footer>
            </Layout>
        </Layout>
    );
};

export default DashboardLayout;
