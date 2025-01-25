"use client";

import { copyToClipboard } from "@/utils";
import type { SyntheticEvent } from "react";
import toast, { Toaster } from "react-hot-toast";
import {
  FaCode,
  FaDiscord,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export function Footer() {
  const handleCopyDiscord = async (e: SyntheticEvent) => {
    e.preventDefault();
    copyToClipboard("tomheaton")
      .then(() => {
        // toast.success("Discord copied to clipboard!");
        toast.success("Copied to clipboard!");
      })
      .catch(() => {
        toast.error("Copy failed!");
      });
  };

  return (
    <footer className="mt-auto flex justify-center pt-10 text-center font-medium">
      <Toaster toastOptions={{ position: "top-center" }} />
      <div>
        <div className="flex w-full items-center justify-evenly text-2xl">
          <a
            target="_blank"
            rel="me external noopener noreferrer"
            href="https://github.com/tomheaton/"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <button
            onClick={handleCopyDiscord}
            className="cursor-pointer transition-colors hover:text-my-green"
            aria-label="Discord"
          >
            <FaDiscord />
          </button>
          <a
            target="_blank"
            rel="me external noopener noreferrer"
            href="https://twitter.com/tomheaton_/"
            aria-label="Twitter"
          >
            <FaXTwitter />
          </a>
          <a
            target="_blank"
            rel="me external noopener noreferrer"
            href="mailto:tom@tomheaton.dev"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
          <a
            target="_blank"
            rel="me external noopener noreferrer"
            href="https://linkedin.com/in/tomheaton7/"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>
        <div className="flex items-center justify-center space-x-2 p-2">
          <p>&copy; Tom Heaton {new Date().getFullYear()}</p>
          <a
            target="_blank"
            rel="external noopener noreferrer"
            href="https://github.com/tomheaton/tomheaton.dev/"
            aria-label="Source Code"
          >
            <FaCode />
          </a>
        </div>
      </div>
    </footer>
  );
}
