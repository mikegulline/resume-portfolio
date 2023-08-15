type WrapperProps = {
  children: React.ReactNode;
  full?: boolean;
  small?: boolean;
};

export default function Wrapper({ children, full, small }: WrapperProps) {
  if (full) return <div className='px-5 lg:px-10'>{children}</div>;
  if (small)
    return (
      <div className='container lg:max-w-screen-lg px-5 lg:px-10'>
        {children}
      </div>
    );
  return (
    <div className='container xl:max-w-screen-xl m-auto px-5 lg:px-10'>
      {children}
    </div>
  );
}
