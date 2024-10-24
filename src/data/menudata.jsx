import { BiSolidReport } from "react-icons/bi";
import { BsReceiptCutoff } from "react-icons/bs";
import { FaEdit, FaMapMarkedAlt } from "react-icons/fa";
import { FaTableCells, FaUser, FaUsers } from "react-icons/fa6";
import { GiTeamIdea } from "react-icons/gi";
import { GrUserWorker } from "react-icons/gr";
import { ImProfile } from "react-icons/im";
import {
    MdDashboard,
    MdGroups,
    MdMapsHomeWork,
    MdOutlineCoPresent,
    MdVerified,
} from "react-icons/md";
import { TbReport } from "react-icons/tb";

export const items = [
    {
        label: "My Profile",
        key: "/",
        icon: <FaUser />,
        serial: -1,
    },
    {
        label: "Super User",
        key: "/super-user",
        icon: <FaUsers />,
        serial: 0,
        children: [
            {
                label: "Add Group",
                key: "/super-user/add-group",
                icon: <MdGroups />,
            },
            {
                label: "View Groups",
                key: "/super-user/view-groups",
                icon: <FaUsers />,
            },
            {
                label: "Edit Group",
                key: "/super-user/edit-group",
                icon: <FaEdit />,
            },
            {
                label: "Add User",
                key: "/super-user/add-user",
                icon: <FaUser />,
            },
            {
                label: "View Users",
                key: "/super-user/view-users",
                icon: <FaUsers />,
            },
        ],
    },
    {
        label: "Dashboard",
        key: "/dashboard",
        icon: <MdDashboard />,
        serial: 1,
    },
    {
        label: "Tickets",
        key: "/tickets",
        icon: <GiTeamIdea />,
        serial: 2,
    },
    {
        label: "Notice",
        key: "/notice",
        icon: <MdOutlineCoPresent />,
        serial: 3,
    },
    {
        label: "PMM Management",
        key: "/student-labor/report",
        icon: <GrUserWorker />,
        serial: 5,
    },
    {
        label: "Training Materials",
        key: "/training-materials",
        icon: <FaMapMarkedAlt />,
        serial: 4,
    },

    {
        label: "Communication",
        key: "/communication",
        icon: <ImProfile />,
        serial: 6,
    },
    {
        label: "Attendance",
        key: "/attendance",
        icon: <BiSolidReport />,
        serial: 7,
    },
    {
        label: "Attendance Tracker",
        key: "/attendance-tracker",
        icon: <TbReport />,
        serial: 8,
    },

    {
        label: "Leave Management",
        key: "/leave-management",
        icon: <BsReceiptCutoff />,
        serial: 10,
    },
    {
        label: "Team Management",
        key: "/team-management",
        icon: <MdMapsHomeWork />,
        serial: 11,
    },
    {
        label: "Data Management",
        key: "/data-management",
        icon: <MdVerified />,
        serial: 12,
    },
    {
        label: "Target Limit",
        key: "/target-limit",
        icon: <FaTableCells />,
        serial: 13,
    },
    {
        label: "NMSM PJP",
        key: "/nmsm-pjp",
        icon: <FaTableCells />,
        serial: 13,
    },
    {
        label: "Campaign Point Opening",
        key: "/campaign-point-opening",
        icon: <FaTableCells />,
        serial: 13,
    },
    {
        label: "Inventory Management",
        key: "/inventory-management",
        icon: <FaTableCells />,
        serial: 13,
    },
    {
        lagel: "Material Management",
        key: "/material-management",
        icon: <FaTableCells />,
        serial: 13,
    },
    {
        label: "Daily Activity Report",
        key: "/daily-activity-report",
        icon: <FaTableCells />,
        serial: 13,
    },
    {
        label: "Visit Call",
        key: "/visit-call",
        icon: <FaTableCells />,
        serial: 13,
    },
    {
        label: "MS Evaluation ",
        key: "/ms-evaluation",
        icon: <FaTableCells />,
        serial: 13,
    },
    {
        label: "New Outlet",
        key: "/new-outlet",
        icon: <FaUsers />,
        serial: 965,
    },
    {
        label: "Download Report",
        key: "/download-report",
        icon: <FaUser />,
        serial: 5642,
    },
    {
        label: "Image Download ",
        key: "/image-download",
        icon: <FaUser />,
        serial: 5642,
    },
];
