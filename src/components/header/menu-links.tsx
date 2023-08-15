import Link from 'next/link';
import { MenuType, MenuLinkType } from '@/components/header/menus';
import React from 'react';

type MenuLinksType = {
  menu: MenuType;
};

export default function MenuLinks({ menu }: MenuLinksType) {
  return menu.map(
    ({ title, href, target, icon, className }: MenuLinkType, i) => {
      if (icon) {
        const Icon = icon;
        return (
          <li key={title}>
            <Link href={href} target={target} className={className}>
              <Icon />
              <span className='hidden'>{title}</span>
            </Link>
          </li>
        );
      }
      return (
        <li key={title}>
          <Link href={href} target={target} className={className}>
            <span>{title}</span>
          </Link>
        </li>
      );
    }
  );
}
