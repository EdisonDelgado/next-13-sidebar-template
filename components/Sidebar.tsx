"use client";
import React, { useState, useEffect } from "react";
import { SideBarItem, SideBarSubItem } from "@/types";
import { Sidebar } from "flowbite-react";
import { HiChevronDown } from "react-icons/hi";
import { usePathname, useRouter } from "next/navigation";

function MainSidebar({ items }: { items: SideBarItem[] }) {
  const pathname = usePathname();
  const router = useRouter();

  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const activeItem = items.find((item) => pathname.startsWith(item.href));
    if (activeItem) {
      setActive(activeItem.label);
    }
  }, [pathname, items]);

  const handleClick = (e: React.MouseEvent, item: SideBarItem) => {
    if (item.childrens) {
      e.preventDefault();
      // Si el elemento ya está activo, desactívalo. De lo contrario, hazlo activo.
      setActive(active === item.label ? null : item.label);
    } else {
      setActive(item.label);
      router.push(item.href);
    }
  };

  return (
    <div className="w-fit h-screen">
      <Sidebar>
        <Sidebar.Logo
          href="/"
          img="next.svg"
          imgAlt="Flowbite logo"
          className="mb-4"
        ></Sidebar.Logo>
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            {items.map((item: SideBarItem) => {
              return (
                <div key={item.label}>
                  <Sidebar.Item
                    href={item.href}
                    icon={item.icon}
                    className={`${
                      pathname === item.href
                        ? "bg-gray-200 dark:bg-gray-600"
                        : ""
                    }`}
                    onClick={(e: React.MouseEvent) => handleClick(e, item)}
                  >
                    {item.label}
                    {item.childrens && (
                      <HiChevronDown className="inline-flex text-2xl float-right pr-0 mr-0" />
                    )}
                  </Sidebar.Item>
                  {item.childrens && active === item.label && (
                    <Sidebar.ItemGroup
                      className={`ml-4 transition-all duration-200 ease-in-out overflow-hidden ${
                        active === item.label
                          ? "max-h-full opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      {item.childrens.map((subItem: SideBarSubItem) => (
                        <Sidebar.Item key={subItem.label} href={subItem.href}>
                          {subItem.label}
                        </Sidebar.Item>
                      ))}
                    </Sidebar.ItemGroup>
                  )}
                </div>
              );
            })}
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </div>
  );
}

export default MainSidebar;
