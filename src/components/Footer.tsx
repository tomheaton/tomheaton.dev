"use client";

import { copyToClipboard } from "@/utils";
import React, { type SyntheticEvent } from "react";
import toast, { Toaster } from "react-hot-toast";

const Footer: React.FC = () => {
  const handleCopyDiscord = async (e: SyntheticEvent) => {
    e.preventDefault();
    copyToClipboard("tomheaton#7440")
      .then(() => {
        toast.success("Copied to clipboard!");
      })
      .catch(() => {
        toast.error("Copy failed!");
      });
  };

  return (
    <footer className={"mt-10 flex justify-center text-center font-medium"}>
      {/*TODO: is toaster best here?*/}
      <Toaster toastOptions={{ position: "top-center" }} />
      {/*TODO: fix bootstrap icons*/}
      <div className={"flex flex-col"}>
        <div className={"space-x-4 text-[24px]"}>
          <a
            target={"_blank"}
            rel={"me external noopener noreferrer"}
            href={"https://www.github.com/tomheaton"}
          >
            <i className={"bi bi-github"} aria-label={"GitHub"} />
          </a>
          <a
            onClick={handleCopyDiscord}
            className={"cursor-pointer"}
            // target={"_blank"}
            // rel={"me external noopener noreferrer"}
            // href={"https://www.discord.com/users/325306360004739072"}
          >
            <i className={"bi bi-discord"} aria-label={"Discord"} />
          </a>
          <a
            target={"_blank"}
            rel={"me external noopener noreferrer"}
            href={"https://www.twitter.com/tomheaton_"}
          >
            <i className={"bi bi-twitter"} aria-label={"Twitter"} />
          </a>
          <a
            target={"_blank"}
            rel={"me external noopener noreferrer"}
            href={"mailto:tom@tomheaton.dev"}
          >
            <i className={"bi bi-envelope-fill"} aria-label={"Email"} />
          </a>
          <a
            target={"_blank"}
            rel={"me external noopener noreferrer"}
            href={"https://www.linkedin.com/in/tomheaton7/"}
          >
            <i className={"bi bi-linkedin"} aria-label={"LinkedIn"} />
          </a>
        </div>
        <p className={"p-2 text-lg"}>
          &copy; Tom Heaton {new Date().getFullYear()}{" "}
          <a
            target={"_blank"}
            rel={"external noopener noreferrer"}
            href={"https://www.github.com/tomheaton/next-tomheaton-dev"}
          >
            <i className={"bi bi-code-slash"} aria-label={"Source Code"} />
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
