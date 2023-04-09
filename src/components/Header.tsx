import Image from "next/image";
import React from "react";

const Header: React.FC = () => {
  return (
    <header className={"flex w-full flex-col items-center text-center md:flex-row"}>
      <div className={"w-1/3 rounded-full"}>
        <Image
          src={"/avatar.jpg"}
          width={100}
          height={100}
          alt={"Tom Heaton Avatar"}
          className={"m-auto rounded-full"}
          priority
        />
      </div>
      <h1 className={"mx-5 w-2/3 text-4xl font-bold md:text-5xl"}>
        Tom Heaton <span className={"text-3xl font-medium text-myGreen"}>developer</span>
      </h1>
    </header>
  );
};

export default Header;
