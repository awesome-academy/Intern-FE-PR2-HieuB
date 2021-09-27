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
