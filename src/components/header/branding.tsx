import Link from 'next/link';

type WithChildren = {
  children: React.ReactNode;
};

export default function Branding() {
  const styles = {
    wrapper: 'flex gap-2 flex-row-reverse items-center pr-2 group',
    h1: 'font-medium text-xl text-gray-900 leading-7',
    tagline: 'text-xs font-medium  text-gray-400 uppercase leading-4 hidden',
    avatar:
      'rounded-full bg-gray-800 w-10 h-10  shadow-[inset_0_7px_4px_rgba(0,0,0,0.25)] text-white flex justify-center items-center',
  };

  const Wrapper = ({ children }: WithChildren) => (
    <Link
      href='/'
      className='block select-none focus:outline-none focus:shadow-none focus:bg-none active:bg-none active:outline-none active:shadow-none  active:focus:bg-none active:focus:outline-none active:focus:shadow-none'
    >
      <div className={styles.wrapper}>{children}</div>
    </Link>
  );

  const Logo = () => (
    <div className='select-none'>
      <h1 className={styles.h1}>Mike Gulline</h1>
      <p className={styles.tagline}>Full-Stack Web Developer</p>
    </div>
  );

  const Avatar = () => (
    <div className={styles.avatar}>
      <span className='rotate-90 text-xl'>
        <span className='group-hover:[&:not(:active)]:hidden group-hover:[&:not(:focus)]:hidden'>
          :)
        </span>
        <span className='hidden group-hover:[&:not(:active)]:inline group-hover:[&:not(:focus)]:inline'>
          :O
        </span>
      </span>
    </div>
  );

  return (
    <Wrapper>
      <Logo />
      <Avatar />
    </Wrapper>
  );
}
