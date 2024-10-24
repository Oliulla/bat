import MyProfile from "@/pages/MyProfile/MyProfile";

const routeData = [
  {
    name: "My Profile",
    path: "/",
    element: <MyProfile />,
  },
  {
    name: "Super User",
    path: "/super-user",
    element: <div>this is super user</div>,
  },
  {
    name: "Dashboard",
    path: "/dashboard",
    element: <MyProfile />,
  },
  {
    name: "Tickets",
    path: "/tickets",
    element: <MyProfile />,
  },
  {
    name: "Notice",
    path: "/notice",
    element: <MyProfile />,
  },
  {
    name: "PMM Management",
    path: "/pmm-management",
    element: <MyProfile />,
  },
];

export default routeData;
