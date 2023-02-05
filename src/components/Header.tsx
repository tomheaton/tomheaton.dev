"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { handleToggleTheme } from "@/utils";
import avatar from "../../public/avatar.jpg";
import { getTheme, setTheme } from "@/utils/theme";

const Header: React.FC = () => {
    useEffect(() => {
        // TODO: remove this?
        /*if (typeof window !== "undefined") {
            window.matchMedia("(prefers-color-scheme: light)").addEventListener("change", (e) => {
                setTheme(e.matches ? "light" : "dark");
            });
        }*/
        setTheme(getTheme());
        console.log("follow the white rabbit...");
    }, []);

    return (
        <header className={"flex w-full flex-col items-center text-center md:flex-row"}>
            <div className={"w-1/3 cursor-pointer rounded-full"}>
                <Image
                    src={avatar}
                    width={100}
                    height={100}
                    alt={"Tom Heaton Avatar"}
                    onClick={handleToggleTheme}
                    className={"m-auto rounded-full"}
                />
            </div>
            <h1 className={"mx-5 w-2/3 text-4xl font-bold md:text-5xl"}>
                Tom Heaton <span className={"text-3xl font-medium text-myGreen"}>developer</span>
            </h1>
        </header>
    );
};

export default Header;
