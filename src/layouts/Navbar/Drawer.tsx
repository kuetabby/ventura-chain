import { useMemo, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  List,
  ListItem,
} from "@chakra-ui/react";
import { DollarOutlined, LineChartOutlined } from "@ant-design/icons";
import clsx from "clsx";

import Anchor from "@/components/Anchor";

import { useIsMounted } from "@/hooks/useIsMounted";
import { getHash } from "@/utils/hash";
import useHash from "@/hooks/useHashname";

import "../style.css";
import "./style.css";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const contractAddress = "GizMkhTQzVhicwbmPHLfmrWesg3c4acqbxFyjdfFpump";
// const pairAddress = "0x1e053b6d2f0a578505bfd8bfe344295a9a08bbd2";

export const NavbarDrawer: React.FC<Props> = ({ isOpen, onClose }) => {
  const btnRef = useRef() as any;

  const pathname = usePathname();
  const hashname = useHash();

  const isMounted = useIsMounted();

  const defaultHash = getHash();

  const tabsList = useMemo(() => {
    return [
      {
        href: "/",
        pathname: `/`,
        name: "HOME",
      },
      {
        href: "#about",
        pathname: `#about`,
        name: "ABOUT US",
      },
      {
        href: "https://t.me/VenturaPortal",
        pathname: `https://t.me/VenturaPortal`,
        name: "COMMUNITY",
      },
      {
        href: "https://app.venturadao.xyz/",
        pathname: `https://app.venturadao.xyz/`,
        name: "EXPLORE",
      },
    ];
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <Drawer
      size={"xs"}
      isOpen={isOpen}
      placement="right"
      onClose={onClose}
      finalFocusRef={btnRef}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton
          className="mt-2 font-extrabold text-red-500"
          style={{ fontSize: 20 }}
        />
        <DrawerHeader className="bg-dark-main text-3xl">
          <span className="navbar-title">Ventura Chain</span>
        </DrawerHeader>

        <DrawerBody className="bg-dark-main">
          <List spacing={3}>
            {tabsList.map((item) => {
              const isActive = !!defaultHash
                ? hashname === item.pathname
                : !defaultHash && pathname === item.pathname;

              if (item.pathname === "/whitepaper") {
                return (
                  <ListItem key={item.name} onClick={onClose}>
                    <Link
                      key={item.name}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="nav-anchor"
                    >
                      {item.name}
                    </Link>
                  </ListItem>
                );
              }

              return (
                <ListItem key={item.name} onClick={onClose}>
                  <Anchor
                    href={item.href}
                    className={clsx(
                      "font-bold",
                      // "text-white p-2 hover:text-secondary font-bold",
                      // "text-sm md:text-base text-black dark:text-white p-2 hover:bg-dark-hover font-bold",
                      // isActive ? "#bf00ff" : "text-white"
                      isActive ? "nav-anchor-active" : "nav-anchor"
                    )}
                    style={{ transition: "250" }}
                  >
                    {item.name}
                  </Anchor>
                </ListItem>
              );
            })}
          </List>
        </DrawerBody>
        <DrawerFooter className="bg-dark-main flex justify-between">
          <Link
            href={`https://pump.fun/coin/${contractAddress}`}
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
            href={`https://dexscreener.com/solana/${contractAddress}`}
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
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
