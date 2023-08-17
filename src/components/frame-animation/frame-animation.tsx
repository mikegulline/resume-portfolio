'use client';
import { useRef, useEffect } from 'react';
import { useIntersectionObserver } from 'usehooks-ts';

type FrameAnimationProps = {
  children: React.ReactNode;
  index: number;
  className: string;
};
export default function FrameAnimation({
  children,
  index,
  className,
}: FrameAnimationProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const entry = useIntersectionObserver(ref, {});

  useEffect(() => {
    console.log(entry?.isIntersecting);
    if (entry?.isIntersecting && ref.current) {
      ref.current.classList.add('inView');
    } else {
      ref.current?.classList.remove('inView');
    }
  }, [entry]);

  useEffect(() => {
    if (ref?.current) {
      ref.current.style.setProperty('--index', index.toString());
    }
  }, [ref, index]);

  return (
    <div ref={ref}>
      <span className={className}>{children}</span>
    </div>
  );
}
