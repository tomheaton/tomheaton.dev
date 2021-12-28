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
        <div className={"bg-white dark:bg-[#212529] dark:text-white"}>
            <SEO/>
            <p>{currentTheme}</p>
            <main className="wrapper" style={{height: "100vh", padding: "60px"}}>
                <div className="d-flex flex-row flex-wrap align-items-center justify-content-center"
                     style={{padding: "20px"}}>
                    <Image id="theme-toggle" className="avatar btn" src="/avatar.jpg" alt="Tom Heaton"
                           width={100} height={100} onClick={handleThemeToggle} />
                    <h1 className="m-2 name">
                        Tom Heaton
                        {" "}
                        <small>developer</small>
                    </h1>
                </div>
                <div>
                    <p className="lead m-2">
                        hey, I am a{age === 18 && "n"} {toWords(age)} year old who likes to code things.
                    </p>
                </div>
                {/*<Cards/>*/}
                <footer className="d-flex fixed-bottom justify-content-center">
                    <div className="wrapper-footer d-flex-col">
                        <div className="socials">
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
                        </div>
                        <p className="copyright">
                            &#169; Tom Heaton {new Date().getFullYear()}
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
