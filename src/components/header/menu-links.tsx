import Link from 'next/link';
import { MenuType, MenuLinkType } from '@/components/header/menus';

type MenuLinksType = {
  menu: MenuType;
  className?: string;
};

export default function MenuLinks({ menu, className }: MenuLinksType) {
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
              >
                {Icon && <Icon />}
                <span>{title}</span>
              </Link>
            </li>
          );
        }
      )}
    </ul>
  );
}
