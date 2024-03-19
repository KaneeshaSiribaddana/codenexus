"use client"
import { Footer } from "flowbite-react";
import type { FC, PropsWithChildren } from "react";
import Navbar from "./navbar";
import Sidebar from "./sidebar";
import { MdFacebook } from "react-icons/md";
import { FaDribbble, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import { SidebarProvider, useSidebarContext } from "../context/SidebarContext";
import classNames from "classnames";

interface NavbarSidebarLayoutProps {
  isFooter?: boolean;
}

const NavbarSidebarLayout: FC<PropsWithChildren<NavbarSidebarLayoutProps>> =
  function ({ children, isFooter = true }) {
    return (
      <SidebarProvider>
        <Navbar />
        <div className="flex items-start dark:bg-gray-900">
          <Sidebar />
          <MainContent ><div className="mx-6">{children}</div></MainContent>
        </div>
      </SidebarProvider>
    );
  };

const MainContent: FC<PropsWithChildren<NavbarSidebarLayoutProps>> = function ({
  children,
  isFooter,
}) {
  const { isOpenOnSmallScreens: isSidebarOpen } = useSidebarContext();

  return (
    <main
      className={classNames(
        "overflow-y-auto relative w-full h-full",
        isSidebarOpen ? "lg:ml-16" : "lg:ml-24"
      )}
    >
      {children}
    </main>
  );
};

export default NavbarSidebarLayout;
