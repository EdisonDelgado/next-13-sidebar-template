'use client'
import './globals.css'
import { Inter } from 'next/font/google'
import React, { useState } from 'react'
import MainNavbar from '../components/Navbar'
import MainSidebar from '../components/Sidebar'
import { sideBarMock } from '../mocks/sidebar.mock'
import { navbarLinks } from '../mocks/navbar.mock' 

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout ({
  children
} : {children : React.ReactNode}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }
  return (
    <html lang='es'>
      <body className={`${inter.className} flex h-screen overflow-hidden`}>
        <div className={`fixed z-10 transform top-0 left-0 w-64 overflow-auto transition-transform duration-200 ease-in-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <MainSidebar items={sideBarMock}/>
        </div>
        <div className={`flex flex-col w-0 flex-1 overflow-hidden transition-all duration-200 ease-in-out ${isSidebarOpen ? 'ml-64' : 'ml-0'}`}>
          <MainNavbar toggleSidebar={toggleSidebar} navbarLinks={navbarLinks} />
          <main className='flex-1 relative z-0 overflow-y-auto focus:outline-none'>
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
