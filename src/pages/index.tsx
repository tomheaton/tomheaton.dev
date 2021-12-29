import Image from "next/image";
import {toWords} from "number-to-words";
import getAge from "../utils/age";
import SEO from "../components/seo";
import {useEffect, useState} from "react";

const Index = () => {

    const age = getAge(new Date("09/30/2002"));

    // TODO: move theme things to `_app.tsx`?
    const [currentTheme, setCurrentTheme] = useState<"light" | "dark">("light");

    const handleThemeToggle = async (e: any) => {
        e.preventDefault();
        let theme: "light" | "dark" = currentTheme === "light" ? "dark" : "light"
        setCurrentTheme(theme);
        localStorage.setItem("theme", theme);
    }

    useEffect(() => {
        let b = (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches))
        setCurrentTheme(b ? "dark" : "light");
    }, []);

    useEffect(() => {
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [currentTheme]);

    return (
        <div className={"transition ease-in-out duration-500 bg-white text-[#212529] dark:bg-[#212529] dark:text-[#e3e3e3]"}>
            <SEO/>
            <main className="h-screen pt-20 w-full">
                <div className="flex flex-row flex-wrap items-center justify-center">
                    <Image className="max-h-[20px] px-[210px] rounded-full cursor-pointer"
                           src="/avatar.jpg" alt="Tom Heaton" width={100} height={100} onClick={handleThemeToggle} />
                    <h1 className="m-2 text-4xl font-medium">
                        Tom Heaton
                        {" "}
                        <span className={"text-3xl text-[#66b193]"}>developer</span>
                    </h1>
                </div>
                <div>
                    <p className="m-2 text-xl pt-4 font-light">
                        hey, I am a{age === 18 && "n"} {toWords(age)} year old who likes to code things.
                    </p>
                    <p className="animate-pulse m-2 text-xl pt-12">
                        🚧 new things are on their way... 🚧
                    </p>
                </div>
                {/*<Cards/>*/}
                <footer className="flex justify-center fixed bottom-0 left-0 right-0">
                    <div className="flex flex-col">
                        <div className="text-[24px] space-x-4">
                            <a target="_blank" href="https://www.github.com/tomheaton" rel="noopener noreferrer">
                                <i className="bi bi-github" aria-label="Github" />
                            </a>
                            <a target="_blank" rel="noopener noreferrer"
                               href="https://www.discord.com/users/325306360004739072">
                                <i className="bi bi-discord" aria-label="Discord" />
                            </a>
                            <a target="_blank" rel="noopener noreferrer"
                               href="https://www.twitter.com/tomheaton_">
                                <i className="bi bi-twitter" aria-label="Twitter" />
                            </a>
                            <a target="_blank" rel="noopener noreferrer"
                               href="mailto:tom@tomheaton.dev">
                                <i className="bi bi-envelope-fill" aria-label="Email" />
                            </a>
                            <a target="_blank" rel="noopener noreferrer"
                               href="https://www.linkedin.com/in/tom-heaton-39b107220/">
                                <i className="bi bi-linkedin" aria-label="LinkedIn" />
                            </a>
                        </div>
                        <p className="p-2">
                            &copy; Tom Heaton {new Date().getFullYear()}
                            {" "}
                            <a target="_blank" rel="noopener noreferrer"
                               href="https://www.github.com/tomheaton/next-tomheaton-dev">
                                <i className="bi bi-code-slash" aria-label="Source Code" />
                            </a>
                        </p>
                    </div>
                </footer>
            </main>
        </div>
    );
}

export default Index;
