import Link, { LinkProps } from 'next/link';
import React from 'react';
import { IoLogoLinkedin, IoLogoGithub } from 'react-icons/io';

//////////////
//////////////

export type MenuLinkType = {
  title: string;
  href: `http://${string}` | `https://${string}` | `/${string}`;
  target?: '_blank' | '_parent' | '_self' | '_top';
  icon?: React.ComponentType;
  wrapper?: React.ComponentType;
};

export type MenuType = MenuLinkType[];

//////////////
//////////////

type MyLinkProps = {
  children: React.ReactNode;
} & LinkProps &
  Omit<LinkProps, 'href'>;

const MainMenuLink = ({ children, ...rest }: MyLinkProps) => (
  <Link {...rest} className='text-lg hover:text-purple-600 hover:underline'>
    {children}
  </Link>
);

const Button = ({ children, ...rest }: MyLinkProps) => (
  <Link
    {...rest}
    className='px-5 h-12 flex items-center justify-center bg-purple-600 border border-purple-900 text-white rounded text-lg'
  >
    {children}
  </Link>
);

const Icon = ({ children, ...rest }: MyLinkProps) => (
  <Link
    {...rest}
    className='flex items-center justify-center h-12 w-12 bg-white text-purple-600 border border-purple-400 rounded-full text-2xl'
  >
    {children}
  </Link>
);

//////////////
//////////////

export const mainMenu: MenuType = [
  {
    title: 'Home',
    href: '/',
    // @ts-expect-error
    wrapper: MainMenuLink,
  },
  {
    title: 'About',
    href: '/about',
    // @ts-expect-error
    wrapper: MainMenuLink,
  },
  {
    title: 'Resume',
    href: '/resume',
    // @ts-expect-error
    wrapper: MainMenuLink,
  },
];

export const secondaryMenu: MenuType = [
  {
    title: 'LinkedIn',
    href: 'https://www.linkedin.com/in/mikegulline/',
    target: '_blank',
    icon: IoLogoLinkedin,
    // @ts-expect-error
    wrapper: Icon,
  },
  {
    title: 'GitHub',
    href: 'https://github.com/mikegulline',
    target: '_blank',
    icon: IoLogoGithub,
    // @ts-expect-error
    wrapper: Icon,
  },
  {
    title: 'Contact',
    href: '/contact',
    // @ts-expect-error
    wrapper: Button,
  },
];
