"use client";

import { copyToClipboard } from "@/utils";
import React, { type SyntheticEvent } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FaCode, FaDiscord, FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer: React.FC = () => {
  const handleCopyDiscord = async (e: SyntheticEvent) => {
    e.preventDefault();
    copyToClipboard("tomheaton#7440")
      .then(() => {
        // toast.success("Discord copied to clipboard!");
        toast.success("Copied to clipboard!");
      })
      .catch(() => {
        toast.error("Copy failed!");
      });
  };

  return (
    <footer className={"mt-10 flex justify-center text-center font-medium"}>
      <Toaster toastOptions={{ position: "top-center" }} />
      <div>
        <div className={"flex w-full items-center justify-evenly text-2xl"}>
          <a
            target={"_blank"}
            rel={"me external noopener noreferrer"}
            href={"https://github.com/tomheaton/"}
          >
            <FaGithub />
          </a>
          <p
            onClick={handleCopyDiscord}
            className={"cursor-pointer transition-colors hover:text-myGreen"}
          >
            <FaDiscord />
          </p>
          <a
            target={"_blank"}
            rel={"me external noopener noreferrer"}
            href={"https://twitter.com/tomheaton_/"}
          >
            <FaTwitter />
          </a>
          <a
            target={"_blank"}
            rel={"me external noopener noreferrer"}
            href={"mailto:tom@tomheaton.dev"}
          >
            <FaEnvelope />
          </a>
          <a
            target={"_blank"}
            rel={"me external noopener noreferrer"}
            href={"https://linkedin.com/in/tomheaton7/"}
          >
            <FaLinkedin />
          </a>
        </div>
        <div className={"flex items-center justify-center space-x-2 p-2"}>
          <p>&copy; Tom Heaton {new Date().getFullYear()}</p>
          <a
            target={"_blank"}
            rel={"external noopener noreferrer"}
            href={"https://github.com/tomheaton/next-tomheaton-dev/"}
          >
            <FaCode />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
