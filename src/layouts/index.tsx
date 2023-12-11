"use client";
import React, { PropsWithChildren } from "react";
import clsx from "clsx";

import Navbar from "./Navbar";
import Footer from "./Footer";

import Provider from "@/library/Provider";

import { grotesk } from "@/utils/font";

import "./style.css";

interface Props extends PropsWithChildren {}

const BaseLayout: React.FC<Props> = ({ children }) => {
  return (
    <Provider>
      <Navbar />
      <main className={clsx("base-main-container", grotesk.className)}>
        {children}
      </main>
      <Footer />
    </Provider>
  );
};

export default BaseLayout;
