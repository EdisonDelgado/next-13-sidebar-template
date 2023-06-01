'use client'
import { Navbar } from 'flowbite-react'
import { HiMenu } from 'react-icons/hi'
import DarkModeBtn from './DarkModeBtn'

export default function MainNavbar ({ toggleSidebar, navbarLinks } : {toggleSidebar : () => void,  navbarLinks: {label: string, href: string}[]}) {
  return (
    <Navbar fluid>
      <div className="p-2">
        <HiMenu
          className="text-2xl cursor-pointer  dark:text-gray-400 text-gray-500"
          onClick={toggleSidebar}
        />
      </div>
      <Navbar.Toggle />
      <Navbar.Collapse>
        {navbarLinks.map((link) => {
          return <Navbar.Link key={link.label}>{link.label}</Navbar.Link>;
        })}
        <DarkModeBtn />
      </Navbar.Collapse>
    </Navbar>
  );
}
