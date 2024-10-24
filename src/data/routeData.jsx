import Attendance from "@/pages/Attendance/Attendance";
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
        element: <MyProfile />,
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
        name: "PMM Management",
        path: "/pmm-management",
        element: <MyProfile />,
    },
];

export default routeData;
