import getAge from "../utils/age";
import SEO from "../components/seo";
import {useEffect, useState} from "react";
import type {NextPage} from "next";

const Index: NextPage = () => {

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
                    <div className={""}>
                        <h1 className={"text-4xl"}>Tom Heaton</h1>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Index;
