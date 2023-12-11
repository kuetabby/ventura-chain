"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
import { CopyrightOutlined } from "@ant-design/icons";

import { useIsMounted } from "@/hooks/useIsMounted";

import TwitterLogo from "@/assets/logo-twitter.png";
// import DiscordLogo from "@/assets/logo-discord.png";
import TelegramLogo from "@/assets/logo-telegram.png";
import MediumLogo from "@/assets/logo-medium.png";

import "./style.css";

interface Props {}

const AppFooter: React.FC<Props> = () => {
  if (!useIsMounted) {
    return null;
  }

  return (
    <footer className={clsx("app-footer bg-dark-primary")}>
      <div className="app-footer-wrapper">
        <div className="w-full flex flex-wrap items-center sm:justify-end mb-2">
          <Link
            href="mailto:venturaerc20@ventura-chain.tech"
            rel="noopener noreferrer"
            className="app-footer-email"
          >
            venturaerc20@ventura-chain.tech
          </Link>

          <div className="w-full xs:w-1/2 flex sm:justify-end">
            <Link
              href="https://twitter.com/VenturaERC20"
              target="_blank"
              rel="noopener noreferrer"
              className="w-auto hover:text-green-500"
            >
              <Image
                src={TwitterLogo}
                alt="tw-logo"
                className="w-10 lg:w-8 h-10 lg:h-8"
              />
            </Link>
            <Link
              href="https://medium.com/@venturaerc20"
              target="_blank"
              rel="noopener noreferrer"
              className="w-auto mx-2 hover:text-green-500"
            >
              <Image
                src={MediumLogo}
                alt="dc-logo"
                className="w-10 lg:w-8 h-10 lg:h-8 !rounded-full"
              />
            </Link>
            <Link
              href="https://t.me/VenturaERC20"
              target="_blank"
              rel="noopener noreferrer"
              className="w-auto hover:text-green-500"
            >
              <Image
                src={TelegramLogo}
                alt="tele-logo"
                className="w-10 lg:w-8 h-10 lg:h-8"
              />
            </Link>
          </div>
        </div>

        <div className="all-reserved">
          <div className="app-footer-title">Ventura Chain</div>

          <div className="w-full sm:w-3/5 flex sm:justify-end items-center my-2">
            <div className="sm:ml-2 text-xs font-semibold">
              Copyright{" "}
              <CopyrightOutlined className="mx-1" style={{ fontSize: "1em" }} />{" "}
              2023. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default AppFooter;
