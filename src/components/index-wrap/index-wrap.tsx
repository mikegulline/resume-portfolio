'use client';
import React, { useRef, useEffect } from 'react';

type IndexWrapProps = {
  children: string | React.ReactNode;
  index: number;
  className?: string;
};

export default function IndexWrap({
  children,
  index,
  className,
}: IndexWrapProps) {
  const ref = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    if (ref?.current) {
      ref.current.style.setProperty('--index', index.toString());
    }
  }, [ref, index]);

  return (
    <span className={className} ref={ref}>
      {children}
    </span>
  );
}
