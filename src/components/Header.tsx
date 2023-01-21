"use client";

import React, {useEffect} from "react";
import Image from "next/image";
import {handleToggleTheme} from "@/utils";
import avatar from "../../public/avatar.jpg";
import {getTheme, setTheme} from "@/utils/theme";

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
        <header className={"flex flex-col md:flex-row items-center text-center w-full"}>
            <div className={"w-1/3 rounded-full cursor-pointer"}>
                <Image
                    src={avatar}
                    width={100}
                    height={100}
                    alt={"Tom Heaton Avatar"}
                    onClick={handleToggleTheme}
                    className={"rounded-full m-auto"}
                />
            </div>
            <h1 className={"w-2/3 mx-5 text-4xl md:text-5xl font-bold"}>
                Tom Heaton
                {" "}
                <span className={"text-3xl text-myGreen font-medium"}>
                    developer
                </span>
            </h1>
        </header>
    );
}

export default Header;
