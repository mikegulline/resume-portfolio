import Link from 'next/link';
import { MenuType, MenuLinkType } from '@/data/menus';

type MenuLinksType = {
  menu: MenuType;
};

export default function MenuLinks({ menu }: MenuLinksType) {
  return menu.map(({ title, href, target, icon, wrapper }: MenuLinkType, i) => {
    const Wrapper = wrapper || Link;
    if (icon) {
      const Icon = icon;
      return (
        <li key={title}>
          <Wrapper href={href} target={target}>
            <Icon />
            <span className='hidden'>{title}</span>
          </Wrapper>
        </li>
      );
    }
    return (
      <li key={title}>
        <Wrapper href={href} target={target}>
          <span>{title}</span>
        </Wrapper>
      </li>
    );
  });
}
