import React from "react";
import Image from "next/image";
import {handleToggleTheme} from "@utils/index";

const Header: React.FC = () => {
    return (
        <header className={"flex flex-col md:flex-row items-center text-center w-full"}>
            <div className={"w-1/3 rounded-full cursor-pointer"}>
                <Image
                    src={"/avatar.jpg"}
                    width={100}
                    height={100}
                    alt={"Tom Heaton Avatar"}
                    onClick={handleToggleTheme}
                    className={"rounded-full"}
                />
            </div>
            <h1 className={"w-2/3 mx-5 text-4xl md:text-5xl font-bold"}>
                Tom Heaton
                {" "}
                <span className={"text-3xl text-mygreen font-medium"}>
                    developer
                </span>
            </h1>
        </header>
    );
}

export default Header;
