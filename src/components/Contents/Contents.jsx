import { Layout } from "antd";

const { Content } = Layout;

// eslint-disable-next-line react/prop-types
const Contents = ({ children }) => (
  <Layout className="mx-5 mb-16 mt-8 h-fit max-h-fit rounded-2xl">
    <Content className="rounded-2xl">{children}</Content>
  </Layout>
);

export default Contents;
