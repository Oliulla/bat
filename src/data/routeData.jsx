import Attendance from "@/pages/Attendance/Attendance";
import NMSM from "@/pages/CampaignManagement/NMSM/NMSM";
import OthersCampaign from "@/pages/CampaignManagement/OthersCampaign/OthersCampaign";
import PriceComplience from "@/pages/CampaignManagement/PriceComplience/PriceComplience";
import RegularCampaign from "@/pages/CampaignManagement/RegularCampaign/RegularCampaign";
import Survey from "@/pages/CampaignManagement/Survey/Survey";
import TSR from "@/pages/CampaignManagement/TSR/TSR";
import Dashboard from "@/pages/Dashboard/Dashboard";
import CmHistory from "@/pages/InventoryManagement/CmHistory/CmHistory";
import CmSummary from "@/pages/InventoryManagement/CmSummary/CmSummary";
import DamageAndLost from "@/pages/InventoryManagement/DamageAndLost/DamageAndLost";
import PointHistory from "@/pages/InventoryManagement/PointHistory/PointHistory";
import PointSummary from "@/pages/InventoryManagement/PointSummary/PointSummary";
import MyProfile from "@/pages/MyProfile/MyProfile";
import Notice from "@/pages/Notice/Notice";
import AddGroup from "@/pages/SuperUser/AddGroup/AddGroup";
import AddUser from "@/pages/SuperUser/AddUser/AddUser";
import LoginDetails from "@/pages/SuperUser/LoginDetails/LoginDetails";
import ViewGroups from "@/pages/SuperUser/ViewGroups/ViewGroups";
import UserDetails from "@/pages/SuperUser/ViewUsers/ViewUsers";
import Tickets from "@/pages/Tickets/Tickets";

const routeData = [
    {
        name: "My Profile",
        path: "/",
        element: <MyProfile />,
    },
    {
        name: "Super User",
        path: "/super-user",
    },
    // INFO: super user childrens
    {
        name: "Add Group",
        path: "/super-user/add-group",
        element: <AddGroup />,
    },
    {
        name: "View Groups",
        path: "/super-user/view-groups",
        element: <ViewGroups />,
    },
    {
        name: "Add User",
        path: "/super-user/add-user",
        element: <AddUser />,
    },
    {
        name: "View Users",
        path: "/super-user/view-users",
        element: <UserDetails />,
    },
    {
        name: "Login Details",
        path: "/super-user/login-details",
        element: <LoginDetails />,
    },
    {
        name: "Dashboard",
        path: "/dashboard",
        element: <Dashboard />,
    },
    {
        name: "Tickets",
        path: "/tickets",
        element: <Tickets />,
    },
    {
        name: "Notice",
        path: "/notice",
        element: <Notice />,
    },
    {
        name: "Attendance",
        path: "/attendance",
        element: <Attendance />,
    },
    {
        name: "Inventory Management",
        path: "/inventory-management",
    },
    // INFO: inventory management childrens
    {
        name: "Point History ",
        path: "/inventory-management/point-history",
        element: <PointHistory />,
    },
    {
        name: "Point Summary ",
        path: "/inventory-management/point-summary",
        element: <PointSummary />,
    },
    {
        name: "Damage And Lost",
        path: "/inventory-management/damage-and-lost",
        element: <DamageAndLost />,
    },
    {
        name: "CM History",
        path: "/inventory-management/cm-history",
        element: <CmHistory />,
    },
    {
        name: "CM Summary",
        path: "/inventory-management/cm-summary",
        element: <CmSummary />,
    },
    // INFO: pmm management module
    {
        name: "PMM Management",
        path: "/pmm-management",
        element: <MyProfile />,
    },

    // INFO: Visit call children's
    {
        name: "Regular Campaign",
        path: "/visit-call/regular-campaign",
        element: <RegularCampaign />,
    },
    {
        name: "Others Campaign",
        path: "/visit-call/others-campaign",
        element: <OthersCampaign />,
    },
    {
        name: "NMSM",
        path: "/visit-call/nmsm",
        element: <NMSM />,
    },
    {
        name: "Price Compliance",
        path: "/visit-call/price-compliance",
        element: <PriceComplience />,
    },
    {
        name: "TSR",
        path: "/visit-call/tsr",
        element: <TSR />,
    },
    {
        name: "Survey",
        path: "/visit-call/survey",
        element: <Survey />,
    },
];

export default routeData;
