import { FaDev, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const socials = [
    {
        name: "Github",
        url: "https://github.com/MegaBytee",
        icon: FaGithub,
    },
    {
        name: "DEV",
        url: "https://dev.to/MegaBytee",
        icon: FaDev,
    },
    {
        name: "Twitter",
        url: "https://x.com/mbytee",
        icon: FaXTwitter,
    },
    {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/megabytee/",
        icon: FaLinkedin,
    },
];

export default function SocialLinks() {
    return (
        <div className=" left-0 right-0 my-0 mx-auto max-w-max px-6 py-3 ">
            <ul className="flex items-center justify-center gap-8 text-slate-700 dark:text-slate-300 text-xl">
                {socials.map((social, index) => (
                    <li key={index} className="cursor-pointer hover:scale-90 duration-150  rounded-xs dark:bg-slate-100 shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] ">
                        <a className="flex items-center justify-center" href={social.url} target="_blank" rel="noreferrer">
                            <social.icon className="w-10 h-10 p-1  dark:text-slate-900" />
                        </a>
                    </li>
                ))}

            </ul>
        </div>
    );
}
