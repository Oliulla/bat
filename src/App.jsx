import routeData from "@/data/routeData";
import { Route, Routes } from "react-router-dom";
import DashboardLayout from "./Layout/Layout";
import UnAuthorized from "./components/Auth/Unauthoraized/Unauthorized";
import LoginPage from "./pages/Login/Login";
import NotFound from "./components/Ui/NotFound";

function App() {
  return (
    <Routes>
      {routeData.map(({ path, element }, i) => (
        <Route
          key={i}
          path={path}
          element={<DashboardLayout>{element}</DashboardLayout>}
        />
      ))}

      <Route path="/un-authorized" element={<UnAuthorized />} />
      <Route path="/" element={<LoginPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
export default App;
