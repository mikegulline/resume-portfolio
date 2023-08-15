import React from 'react';
import { IoLogoLinkedin, IoLogoGithub } from 'react-icons/io';

//////////////
//////////////
// link styles

const linkStyles = {
  mainMenuLink: 'text-lg hover:text-purple-600 hover:underline',
  button:
    'px-5 h-12 flex items-center justify-center bg-purple-600 border border-purple-900 text-white rounded text-lg',
  icon: 'flex items-center justify-center h-12 w-12 bg-white text-purple-600 border border-purple-400 rounded-full text-2xl',
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
