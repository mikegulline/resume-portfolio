import Branding from './branding';
import MenuLinks from './menu-links';
import Wrapper from '@/components/wrapper';
import { mainMenu, secondaryMenu } from '@/components/header/menus';

type HeaderProps = {
  children: React.ReactNode;
};

export default function Header() {
  const Container = ({ children }: HeaderProps) => (
    <div className='border-b border-gray-200'>
      <Wrapper full>
        <div className='flex justify-between items-center gap-5 h-16 lg:h-20'>
          {children}
        </div>
      </Wrapper>
    </div>
  );

  const MainMenu = () => {
    const passUlClassName = 'flex gap-8 items-center';
    return (
      <nav aria-label='Main menu' className='md:flex grow justify-end hidden'>
        <MenuLinks menu={mainMenu} className={passUlClassName} />
      </nav>
    );
  };

  const SecondaryMenu = () => {
    const passUlClassName = 'flex gap-1 items-center';
    return (
      <nav aria-label='Secondary menu'>
        <MenuLinks menu={secondaryMenu} className={passUlClassName} />
      </nav>
    );
  };

  return (
    <Container>
      <Branding />
      <MainMenu />
      <SecondaryMenu />
    </Container>
  );
}
