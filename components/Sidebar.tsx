
// import { useState } from 'react'
import { SideBarItem } from '@/types';
import { Sidebar } from 'flowbite-react'

function MainSidebar({ items }: { items: SideBarItem[] }) {
  return (

    <div className='w-fit h-screen'>
      <Sidebar>
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            {items.map((item: SideBarItem) => {
              return (
                <Sidebar.Item
                  key={item.label}
                  href={item.href}
                  icon = {item?.icon}
                >
                  {item.label}
                </Sidebar.Item>
              );
            })}
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </div>
  );
}

export default MainSidebar
