'use client';
import { useRef, useEffect } from 'react';
type TextAnimationProps = {
  text: string;
};
export default function TextAnimation({ text }: TextAnimationProps) {
  let count = 0;

  const newText = text.split(' ').map((word, i) => (
    <span key={`${word}-${i}`} className='word'>
      {word.split('').map((letter, x) => {
        count++;
        return <Letter key={`${letter}-${x}`} letter={letter} count={count} />;
      })}
      <span className='letter'>&nbsp;</span>
    </span>
  ));

  return <div>{newText}</div>;
}

type LetterProps = {
  letter: string;
  count: number;
};

function Letter({ letter, count }: LetterProps) {
  const ref = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    if (ref?.current) {
      ref.current.style.setProperty('--index', count.toString());
    }
  }, [ref, count]);

  return (
    <span className='letter' ref={ref}>
      {letter}
    </span>
  );
}
