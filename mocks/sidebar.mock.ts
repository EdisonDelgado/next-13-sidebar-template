import { SideBarItem } from '@/types';
import { HiHome, HiMail , HiUserGroup} from 'react-icons/hi';

export const sideBarMock: SideBarItem[] = [
  {
    label: 'Home',
    icon: HiHome,
    href: '/'
  },
  {
    label: 'Users',
    icon: HiUserGroup,
    href: '/users'
  },
  {
    label: 'Contact',
    icon: HiMail,
    href: '/contact'
  },
  {
    label: 'Parent',
    icon: HiMail,
    href: '#',
    childrens: [
      {
        label: 'Child 1',
        href: '#'
      },
      {
        label: 'Child 2',
        href: '#'
      }
    ]  
  },
   {
    label: 'Parent 2',
    icon: HiMail,
    href: '#',
    childrens: [
      {
        label: 'Child 1',
        href: '#'
      },
      {
        label: 'Child 2',
        href: '#'
      }
    ]  
  }
];