"use client";
import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import MainNavbar from "../components/Navbar";
import MainSidebar from "../components/Sidebar";
import { sideBarMock } from "../mocks/sidebar.mock";
import { navbarLinks } from "../mocks/navbar.mock";

interface MainWrapperProps {
  children: React.ReactNode;
}
export const MainWrapper = ({ children }: MainWrapperProps) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const [isSidebarOpen, setIsSidebarOpen] = useState(!isMobile);

  useEffect(() => {
    setIsSidebarOpen(!isMobile);
  }, [isMobile]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <div
        className={`fixed z-10 transform top-0 left-0 w-64 overflow-auto transition-transform duration-200 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <MainSidebar items={sideBarMock} />
      </div>
      <div
        className={`flex h-screen flex-col w-0 flex-1 overflow-hidden transition-all duration-200 ease-in-out ${
          isSidebarOpen ? "ml-64" : "ml-0"
        }`}
      >
        <MainNavbar toggleSidebar={toggleSidebar} navbarLinks={navbarLinks} />
        <main className="flex-1 relative z-0 overflow-auto focus:outline-none dark:bg-gray-700 bg-gray-100">
          {children}
        </main>
      </div>
    </>
  );
};
