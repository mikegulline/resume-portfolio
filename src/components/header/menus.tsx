'use client';
import React from 'react';
import { IoLogoLinkedin, IoLogoGithub, IoMdMenu } from 'react-icons/io';

//////////////
//////////////
// link styles
// 'font-medium hover:text-purple-900/70 data-[ui=active]:underline data-[ui=active]:text-purple-900/70',
const linkStyles = {
  mainMenuLink:
    'h-10  border border-gray-800 rounded-full inline-block flex items-center justify-center px-5 font-medium data-[ui=active]:bg-purple-200/70 data-[ui=active]:border-purple-900/50 data-[ui=active]:text-black hover:text-white hover:bg-gray-800 hover:border-gray-800',
  button:
    'h-10 w-10  flex md:hidden font-medium items-center justify-center bg-white border border-gray-800 text-gray-800 rounded-full hover:bg-purple-200/70 hover:border-purple-900/50 hover:text-black',
  icon: 'flex items-center justify-center h-10 w-10 bg-gray-800 text-white border border-gray-800  rounded-full text-xl hover:bg-purple-200/70 hover:border-purple-900/50 hover:text-black',
} as const;

const { mainMenuLink, button, icon } = linkStyles;

//////////////
//////////////
// menu and menu link types

export type MenuLinkType = {
  title: string;
  href: `http://${string}` | `https://${string}` | `/${string}`;
  target?: '_blank' | '_parent' | '_self' | '_top';
  className?: (typeof linkStyles)[keyof typeof linkStyles];
  icon?: React.ComponentType;
};

export type MenuType = MenuLinkType[];

//////////////
//////////////
// menus

export const mainMenu: MenuType = [
  {
    title: 'Home',
    href: '/',
    className: mainMenuLink,
  },
  {
    title: 'About',
    href: '/about',
    className: mainMenuLink,
  },
  {
    title: 'Resume',
    href: '/resume',
    className: mainMenuLink,
  },
  {
    title: 'Contact',
    href: '/contact',
    className: mainMenuLink,
  },
];

export const secondaryMenu: MenuType = [
  {
    title: 'LinkedIn',
    href: 'https://www.linkedin.com/in/mikegulline/',
    target: '_blank',
    icon: IoLogoLinkedin,
    className: icon,
  },
  {
    title: 'GitHub',
    href: 'https://github.com/mikegulline',
    target: '_blank',
    icon: IoLogoGithub,
    className: icon,
  },
  {
    title: 'Menu',
    href: '/',
    icon: IoMdMenu,
    className: button,
  },
];
