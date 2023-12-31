'use client';
import { useRef, useEffect } from 'react';
import { useIntersectionObserver } from 'usehooks-ts';
import IndexWrap from '@/components/index-wrap';

type TextAnimationProps = {
  text: string;
};
export default function TextAnimation({ text }: TextAnimationProps) {
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

  let index = 0;

  const newText = text.split(' ').map((word, i) => (
    <IndexWrap key={`${word}-${i}`} className='word' index={index}>
      {word.split('').map((letter, x) => {
        index++;
        return (
          <span key={`${letter}-${x}`} className='letter-wrapper'>
            <IndexWrap className='letter' index={index}>
              {letter}
            </IndexWrap>
            <IndexWrap className='letter2' index={index}>
              {letter}
            </IndexWrap>
          </span>
        );
      })}
      <span className='letter'>&nbsp;</span>
    </IndexWrap>
  ));

  return (
    <div ref={ref} className='sentence'>
      {newText}
    </div>
  );
}
