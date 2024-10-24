import routeData from "@/data/routeData";
import { Route, Routes } from "react-router-dom";
import DashboardLayout from "./Layout/Layout";

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
    </Routes>
  );
}
export default App;
