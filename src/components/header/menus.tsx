'use client';
import React from 'react';
import { IoLogoLinkedin, IoLogoGithub } from 'react-icons/io';

//////////////
//////////////
// link styles

const linkStyles = {
  mainMenuLink:
    'font-medium hover:text-purple-600 data-[ui=active]:underline data-[ui=active]:text-purple-600',
  button:
    'px-3 lg:px-5 h-10 lg:h-12 flex font-medium items-center justify-center bg-purple-600 border border-purple-900 text-white rounded-full data-[ui=active]:bg-purple-100 data-[ui=active]:text-purple-600 data-[ui=active]:border-purple-600 hover:bg-white hover:text-purple-600 hover:border-purple-600',
  icon: 'flex items-center justify-center h-10 w-10 bg-white text-purple-600 border border-purple-600 rounded-full text-xl hover:bg-purple-100',
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
    title: 'Contact',
    href: '/contact',
    className: button,
  },
];
