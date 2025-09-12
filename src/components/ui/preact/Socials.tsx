import { IconBrandGithubFilled, IconBrandLinkedin, IconBrandX } from "@tabler/icons-preact";

const socials = [
    {
        name: "Github",
        url: "https://github.com/MegaBytee",
        icon: IconBrandGithubFilled,
    },

    {
        name: "Twitter",
        url: "https://x.com/mbytee",
        icon: IconBrandX,
    },
    {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/megabytee/",
        icon: IconBrandLinkedin,
    },
];

export default function SocialLinks() {
    return (
        <div className=" left-0 right-0 my-0 mx-auto max-w-max px-6 py-3 ">
            <ul className="flex items-center justify-center gap-8 text-slate-700 dark:text-slate-300 text-xl">

                {socials.map((social, index) => (
                    <li key={index} className="cursor-pointer hover:scale-90 duration-150  rounded-xs  shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] ">
                        <a className="btn" href={social.url} target="_blank" rel="noreferrer">
                            <social.icon size="25" />
                        </a>
                    </li>
                ))}

            </ul>
        </div>
    );
}
