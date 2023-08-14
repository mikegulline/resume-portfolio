import Branding from './branding';
import MenuLinks from './menu-links';
import { mainMenu, secondaryMenu } from '@/components/header/menus';

type HeaderProps = {
  children: React.ReactNode;
};

export default function Header() {
  const Wrapper = ({ children }: HeaderProps) => (
    <div className='m-auto container max-w-screen-xl flex justify-between items-center gap-5 h-24'>
      {children}
    </div>
  );

  const MainMenu = () => {
    return (
      <nav
        role='navigation'
        aria-label='Main menu'
        className='flex grow justify-start'
      >
        <ul className='flex gap-10 items-center '>
          <MenuLinks menu={mainMenu} />
        </ul>
      </nav>
    );
  };

  const SecondaryMenu = () => {
    return (
      <nav role='navigation' aria-label='Secondary menu'>
        <ul className='flex gap-2 items-center'>
          <MenuLinks menu={secondaryMenu} />
        </ul>
      </nav>
    );
  };

  return (
    <Wrapper>
      <Branding />
      <MainMenu />
      <SecondaryMenu />
    </Wrapper>
  );
}
