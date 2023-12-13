"use client";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button, useDisclosure, useMediaQuery } from "@chakra-ui/react";
import clsx from "clsx";
import {
  DollarOutlined,
  LineChartOutlined,
  MenuOutlined,
} from "@ant-design/icons";

import PageTabs from "../PageTabs";
import { NavbarDrawer } from "./Drawer";

import { grotesk } from "@/utils/font";

import AppLogo from "@/assets/logo-app.png";

import "./style.css";

interface Props {}

const contractAddress = "0x016c4225ae87FEC52A5230158fb9dF7f93B87921";
const pairAddress = "0x1e053b6d2f0a578505bfd8bfe344295a9a08bbd2";

const Navbar: React.FC<Props> = () => {
  const {
    isOpen: isScroll,
    onOpen: onOpenScroll,
    onClose: onCloseScroll,
  } = useDisclosure();
  const {
    isOpen: isOpenDrawer,
    onOpen: onOpenDrawer,
    onClose: onCloseDrawer,
  } = useDisclosure();

  // const router = useRouter()
  const [isEqual640] = useMediaQuery("(min-width: 640px)");

  useEffect(() => {
    if (isEqual640) {
      onCloseDrawer();
    }
  }, [isEqual640]);

  useEffect(() => {
    window?.addEventListener("scroll", handleScroll);
    return () => window?.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = (e: Event) => {
    const { scrollY } = e.currentTarget as Window;
    if (scrollY > 160) {
      onOpenScroll();
    }
    if (scrollY === 0) {
      onCloseScroll();
    }
  };

  return (
    <div className={clsx("navbar-container", grotesk.className)}>
      <div className={clsx(isScroll ? "navbar-scroll" : "navbar")}>
        <div className="w-1/4 md:w-[70%] flex items-center">
          <Link href="/" className={`logo-container text-white`}>
            <Image
              src={AppLogo}
              alt="mystic-logo"
              className="w-14 lg:w-16 h-14 lg:h-16 rounded-full"
            />
          </Link>
          <PageTabs containterClass="hidden md:flex ml-2" />
        </div>
        <div
          className={clsx("!hidden md:!flex justify-end w-1/3 font-semibold")}
        >
          <Link
            href={`https://app.uniswap.org/tokens/ethereum/${contractAddress}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-auto mr-4"
          >
            <Button
              className="w-full bg-olive-green hover:bg-mint-green active:bg-mint-green focus:bg-mint-green text-white"
              leftIcon={<DollarOutlined style={{ fontSize: "1.5em" }} />}
            >
              Buy Now!
            </Button>
          </Link>

          <Link
            href={`http://dextools.io/app/ether/pair-explorer/${pairAddress}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-auto"
          >
            <Button
              className="w-full bg-lush-green hover:bg-forest-green active:bg-forest-green focus:bg-forest-green text-white"
              leftIcon={<LineChartOutlined style={{ fontSize: "1.5em" }} />}
            >
              Chart
            </Button>
          </Link>
        </div>

        {/* small devices */}
        <div className="small-title">
          Ventura <span className="hidden sm:block ml-3">Chain</span>
        </div>
        <div className="md:hidden w-1/4 text-right animate-fadeInBasic">
          <Button
            className="bg-emerald-green hover:bg-emerald-green active:bg-emerald-green focus:bg-emerald-green"
            onClick={onOpenDrawer}
          >
            <MenuOutlined
              className="font-extrabold text-white"
              style={{ fontSize: "1.5em" }}
            />
          </Button>
        </div>
      </div>
      <NavbarDrawer isOpen={isOpenDrawer} onClose={onCloseDrawer} />
    </div>
  );
};

export default Navbar;
