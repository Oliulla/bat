import { BiHistory, BiSolidReport } from "react-icons/bi";
import { BsActivity, BsReceiptCutoff } from "react-icons/bs";
import { FaEdit, FaMapMarkedAlt } from "react-icons/fa";
import { FaTableCells, FaUser, FaUsers } from "react-icons/fa6";
import { GiDamagedHouse, GiMovementSensor, GiTeamIdea } from "react-icons/gi";
import { GrUserManager, GrUserWorker } from "react-icons/gr";
import { ImProfile } from "react-icons/im";
import {
    MdCampaign,
    MdDashboard,
    MdGroups,
    MdInventory,
    MdMapsHomeWork,
    MdOutlineCoPresent,
    MdSummarize,
    MdVerified,
} from "react-icons/md";
import { RiEjectFill, RiSurveyFill } from "react-icons/ri";
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
                label: "Add User",
                key: "/super-user/add-user",
                icon: <FaEdit />,
            },
            {
                label: "View Users",
                key: "/super-user/view-users",
                icon: <FaUser />,
            },
            {
                label: "Login Details",
                key: "/super-user/login-details",
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
        label: "PMM Management",
        key: "/pmm-management",
        icon: <GrUserManager />,
        serial: 5,
        children: [
            {
                label: "PMM Dashboard",
                key: "/pmm-dashboard",
                icon: <MdMapsHomeWork />,
            },
            {
                label: "PMM Monitoring",
                key: "/pmm-monitoring",
                icon: <FaEdit />,
            },
            {
                label: "PMM Profile",
                key: "/pmm-profile",
                icon: <MdVerified />,
            },
        ],
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
        label: "Visit Call",
        key: "/visit-call",
        icon: <FaTableCells />,
        serial: 13,
        children: [
            {
                label: "Regular Campaign ",
                key: "/visit-call/regular-campaign",
                icon: <MdCampaign />,
                serial: 13,
            },
            {
                label: "Others Campaign ",
                key: "/visit-call/others-campaign",
                icon: <MdCampaign />,
            },
            {
                label: "NMSM ",
                key: "/visit-call/nmsm",
                icon: <MdCampaign />,
            },
            {
                label: "Price Compliance ",
                key: "/visit-call/price-compliance",
                icon: <MdCampaign />,
            },
            {
                label: "TSR",
                key: "/visit-call/tsr",
                icon: <MdCampaign />,
            },
            {
                label: "Survey",
                key: "/visit-call/survey",
                icon: <RiSurveyFill />,
            },
        ],
    },
    {
        label: "MS Evaluation",
        key: "/ms-evaluation",
        icon: <FaTableCells />,
        serial: 13,
        children: [
            {
                label: "Regular Campaign ",
                key: "/ms-evaluation/regular-campaign",
                icon: <MdCampaign />,
                serial: 13,
            },
            {
                label: "Others Campaign ",
                key: "/ms-evaluation/others-campaign",
                icon: <MdCampaign />,
            },
        ],
    },
    {
        label: "Material Movement",
        key: "/material-movement",
        icon: <FaTableCells />,
        serial: 13,
        children: [
            {
                label: "Point To Point Transfer ",
                key: "/material-movement/point-to-point",
                icon: <GiMovementSensor />,
                serial: 13,
            },
            {
                label: "Approve/Reject Transfer ",
                key: "/material-movement/approve-reject",
                icon: <RiEjectFill />,
            },
        ],
    },
    {
        label: "Daily Activity Report",
        key: "/daily-activity-report",
        icon: <BsActivity />,
        serial: 13,
        children: [
            {
                label: "CM Activity Report ",
                key: "/daily-activity-report/cm-activity-report",
                icon: <GiMovementSensor />,
                serial: 13,
            },
            {
                label: "MS Activity Report ",
                key: "/daily-activity-report/ms-activity-report",
                icon: <RiEjectFill />,
            },
        ],
    },
    {
        label: "Inventory Management",
        key: "/inventory-management",
        icon: <MdInventory />,
        serial: 13,
        children: [
            {
                label: "Point History ",
                key: "/inventory-management/point-history",
                icon: <BiHistory />,
                serial: 13,
            },
            {
                label: "Point Summary ",
                key: "/inventory-management/point-summary",
                icon: <MdSummarize />,
            },
            {
                label: "Damage And Lost",
                key: "/inventory-management/damage-and-lost",
                icon: <GiDamagedHouse />,
            },
            {
                label: "CM History",
                key: "/inventory-management/cm-history",
                icon: <GiDamagedHouse />,
            },
            {
                label: "CM Summary",
                key: "/inventory-management/cm-summary",
                icon: <GiDamagedHouse />,
            },
        ],
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
