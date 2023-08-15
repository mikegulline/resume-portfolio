import Link from 'next/link';

export default function Branding() {
  const styles = {
    wrapper: 'flex gap-3 flex-row-reverse items-center pr-10',
    h1: 'font-black uppercase text-2xl text-gray-700 leading-7',
    tagline:
      'text-xs font-medium tracking-wider text-gray-400 uppercase leading-4',
    avatar:
      'rounded-full bg-gray-700 w-14 h-14 border border-gray-800 shadow-[inset_0_10px_5px_rgba(0,0,0,0.25)] text-white flex justify-center items-center ',
  };

  const Wrapper = ({ children }) => (
    <Link href='/'>
      <div className={styles.wrapper}>{children}</div>
    </Link>
  );

  const Logo = () => (
    <div>
      <h1 className={styles.h1}>Mike Gulline</h1>
      <p className={styles.tagline}>Full-Stack Web Developer</p>
    </div>
  );

  const Avatar = () => (
    <div className={styles.avatar}>
      <span className='text-2xl rotate-90'>:)</span>
    </div>
  );

  return (
    <Wrapper>
      <Logo />
      <Avatar />
    </Wrapper>
  );
}
