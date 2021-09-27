import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export const footerItemList = {
    company: [
        {
            name: "About us",
            path: "/"
        },
        {
            name: "Services",
            path: "/"
        },
        {
            name: "Team",
            path: "/"
        },
        {
            name: "Pricing",
            path: "/"
        },
        {
            name: "Project",
            path: "/"
        },
        {
            name: "Careers",
            path: "/"
        },
        {
            name: "Blog",
            path: "/"
        },
        {
            name: "Login",
            path: "/"
        }
    ],
    usefull: [
        {
            name: "Term of Service",
            path: "/"
        },
        {
            name: "Privacy Policy",
            path: "/"
        },
        {
            name: "Documentation",
            path: "/"
        },
        {
            name: "ChangeLog",
            path: "/"
        },
        {
            name: "Components",
            path: "/"
        }
    ],
    icon: [
        {
            name: "facebook",
            path: "/",
            component: <FacebookOutlinedIcon></FacebookOutlinedIcon>
        },
        {
            name: "instagram",
            path: "/",
            component: <InstagramIcon></InstagramIcon>
        },
        {
            name: "twitter",
            path: "/",
            component: <TwitterIcon></TwitterIcon>
        },
        {
            name: "Linkin",
            path: "/",
            component: <LinkedInIcon></LinkedInIcon>
        }
    ]
};

export const sidebarPriceList = [
    { title: "≤50.000", start: null, end: "50000" },
    { title: "50.000 - 200.000", start: "50000", end: "200000" },
    { title: "200.000 - 500.000", start: "200000", end: "500000" },
    { title: "500.000 - 1.000.000", start: "500000", end: "1000000" },
    { title: "1000.000 - 5.000.000", start: "1000000", end: "5000000" },
    { title: "≥5.000.000", start: "5000000", end: null }
];
