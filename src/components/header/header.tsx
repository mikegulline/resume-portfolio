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
    const passUlClassName = 'flex gap-10 items-center';
    return (
      <nav aria-label='Main menu' className='flex grow justify-start'>
        <MenuLinks menu={mainMenu} className={passUlClassName} />
      </nav>
    );
  };

  const SecondaryMenu = () => {
    const passUlClassName = 'flex gap-2 items-center';
    return (
      <nav aria-label='Secondary menu'>
        <MenuLinks menu={mainMenu} className={passUlClassName} />
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
