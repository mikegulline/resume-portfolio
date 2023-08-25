type WrapperProps = {
  children: React.ReactNode;
  full?: boolean;
  small?: boolean;
  large?: boolean;
};

export default function Wrapper({
  children,
  full,
  small,
  large,
}: WrapperProps) {
  if (full) return <div className='px-5 lg:px-10'>{children}</div>;
  if (small)
    return (
      <div className='relative container lg:max-w-screen-lg px-5 lg:px-10'>
        {children}
      </div>
    );
  if (large) {
    return (
      <div className='relative container m-auto px-5 lg:px-10'>{children}</div>
    );
  }
  return (
    <div className='relative container xl:max-w-screen-xl m-auto px-5 lg:px-10'>
      {children}
    </div>
  );
}
