import React, { useMemo } from "react";
import { usePathname } from "next/navigation";
import clsx from "clsx";

import Anchor from "@/components/Anchor";

import { useIsMounted } from "@/hooks/useIsMounted";
import useHash from "@/hooks/useHashname";

import { getHash } from "@/utils/hash";

import "./style.css";
import Link from "next/link";

interface Props {
  containterClass: string;
}

const PageTabs: React.FC<Props> = ({ containterClass }) => {
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
    <div
      className={clsx(
        "w-full md:w-2/3 lg:w-1/2 xl:w-1/3 justify-between",
        containterClass
      )}
    >
      {tabsList.map((item) => {
        const isActive = !!defaultHash
          ? hashname === item.pathname
          : !defaultHash && pathname === item.pathname;

        if (item.pathname === "/whitepaper") {
          return (
            <Link
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-anchor"
            >
              {item.name}
            </Link>
          );
        }

        // const isActive = pathname === item.pathname;
        return (
          <Anchor
            key={item.name}
            href={item.href}
            className={clsx(
              // "text-white p-2 hover:text-secondary font-bold",
              // "text-sm md:text-base text-black dark:text-white p-2 hover:bg-dark-hover font-bold",
              isActive ? "nav-anchor-active" : "nav-anchor"
            )}
            style={{ transition: "250" }}
          >
            {item.name}
          </Anchor>
        );
      })}
    </div>
  );
};

export default PageTabs;
