import Link, { LinkProps } from 'next/link';
import React from 'react';
import { IoLogoLinkedin, IoLogoGithub } from 'react-icons/io';

//////////////
//////////////

export type MenuLinkType = {
  title: string;
  href: `http://${string}` | `https://${string}` | `/${string}`;
  target?: '_blank' | '_parent' | '_self' | '_top';
  className?: string;
  icon?: React.ComponentType;
};

export type MenuType = MenuLinkType[];

//////////////
//////////////

type MyLinkProps = {
  children: React.ReactNode;
} & LinkProps &
  Omit<LinkProps, 'href'>;

const MainMenuLink = 'text-lg hover:text-purple-600 hover:underline';

const Button =
  'px-5 h-12 flex items-center justify-center bg-purple-600 border border-purple-900 text-white rounded text-lg';

const Icon =
  'flex items-center justify-center h-12 w-12 bg-white text-purple-600 border border-purple-400 rounded-full text-2xl';

//////////////
//////////////

export const mainMenu: MenuType = [
  {
    title: 'Home',
    href: '/',
    className: MainMenuLink,
  },
  {
    title: 'About',
    href: '/about',
    className: MainMenuLink,
  },
  {
    title: 'Resume',
    href: '/resume',
    className: MainMenuLink,
  },
];

export const secondaryMenu: MenuType = [
  {
    title: 'LinkedIn',
    href: 'https://www.linkedin.com/in/mikegulline/',
    target: '_blank',
    icon: IoLogoLinkedin,
    className: Icon,
  },
  {
    title: 'GitHub',
    href: 'https://github.com/mikegulline',
    target: '_blank',
    icon: IoLogoGithub,
    className: Icon,
  },
  {
    title: 'Contact',
    href: '/contact',
    className: Button,
  },
];
