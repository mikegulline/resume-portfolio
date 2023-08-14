import Link from 'next/link';
import { IoLogoLinkedin, IoLogoGithub } from 'react-icons/io';

//////////////
//////////////

type LinkProps = {
  children: React.ReactNode;
};

const MainMenuLink = ({ children, ...rest }: LinkProps) => (
  <Link {...rest} className='text-lg hover:text-purple-600 hover:underline'>
    {children}
  </Link>
);

const Button = ({ children, ...rest }: LinkProps) => (
  <Link
    {...rest}
    className='px-5 h-12 flex items-center justify-center bg-purple-600 border border-purple-900 text-white rounded text-lg'
  >
    {children}
  </Link>
);

const Icon = ({ children, ...rest }: LinkProps) => (
  <Link
    {...rest}
    className='flex items-center justify-center h-12 w-12 bg-white text-purple-600 border border-purple-400 rounded-full text-2xl'
  >
    {children}
  </Link>
);

//////////////
//////////////

export type MenuLinkType = {
  title: string;
  href: `http://${string}` | `https://${string}` | `/${string}`;
  target?: '_blank' | '_parent' | '_self' | '_top';
  icon?: React.ReactNode;
  wrapper?: React.ReactNode;
};

export type MenuType = MenuLinkType[];

//////////////
//////////////

export const mainMenu: MenuType = [
  {
    title: 'Home',
    href: '/',
    wrapper: MainMenuLink,
  },
  {
    title: 'About',
    href: 'about',
    wrapper: MainMenuLink,
  },
  {
    title: 'Resume',
    href: '/resume',
    wrapper: MainMenuLink,
  },
];

export const secondaryMenu = [
  {
    title: 'LinkedIn',
    href: 'https://www.linkedin.com/in/mikegulline/',
    target: '_blank',
    icon: IoLogoLinkedin,
    wrapper: Icon,
    bob: 'what',
  },
  {
    title: 'GitHub',
    href: 'https://github.com/mikegulline',
    target: '_blank',
    icon: IoLogoGithub,
    wrapper: Icon,
  },
  {
    title: 'Contact',
    href: '/contact',
    wrapper: Button,
  },
] as MenuType;
