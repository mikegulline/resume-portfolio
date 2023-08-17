'use client';
import React from 'react';
import { IoLogoLinkedin, IoLogoGithub, IoMdMenu } from 'react-icons/io';

//////////////
//////////////
// link styles

const linkStyles = {
  mainMenuLink:
    'font-medium hover:text-purple-900/70 data-[ui=active]:underline data-[ui=active]:text-purple-900/70',
  button:
    'h-10 w-10  flex md:hidden font-medium items-center justify-center bg-gray-200 border border-gray-700 text-gray-700 rounded-full data-[ui=active]:bg-gray-800 data-[ui=active]:text-white data-[ui=active]:border-gray-800 hover:bg-gray-800 hover:text-white',
  icon: 'flex items-center justify-center h-10 w-10 bg-white text-gray-700 border border-gray-500 rounded-full text-xl hover:bg-purple-900/70 hover:text-white hover:border-purple-900/70',
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
