'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { MenuType, MenuLinkType } from '@/components/header/menus';

type MenuLinksType = {
  menu: MenuType;
  className?: string;
};

export default function MenuLinks({ menu, className }: MenuLinksType) {
  const pathname = usePathname();
  return (
    <ul role='menu' className={className}>
      {menu.map(
        ({ title, href, target, className, icon: Icon }: MenuLinkType) => {
          return (
            <li key={title} role='menuitem'>
              <Link
                href={href}
                target={target}
                className={className}
                aria-label={title}
                data-ui={pathname === href ? 'active' : ''}
              >
                {Icon && <Icon />}
                <span className={Icon ? 'hidden' : ''}>{title}</span>
              </Link>
            </li>
          );
        }
      )}
    </ul>
  );
}
