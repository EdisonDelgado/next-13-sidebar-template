import { SideBarItem } from '@/types';
import { HiHome, HiInformationCircle, HiMail } from 'react-icons/hi';

export const sideBarMock: SideBarItem[] = [
  {
    label: 'Home',
    icon: HiHome,
    href: '/'
  },
  {
    label: 'About',
    icon: HiInformationCircle,
    href: '/about'
  },
  {
    label: 'Contact',
    icon: HiMail,
    href: '/contact'
  }
];