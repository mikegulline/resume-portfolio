import IndexWrap from '@/components/index-wrap';

type TextAnimationProps = {
  text: string;
};
export default function TextAnimation({ text }: TextAnimationProps) {
  let index = 0;

  const newText = text.split(' ').map((word, i) => (
    <IndexWrap key={`${word}-${i}`} className='word' index={index}>
      {word.split('').map((letter, x) => {
        index++;
        return (
          <IndexWrap key={`${letter}-${x}`} className='letter' index={index}>
            {letter}
          </IndexWrap>
        );
      })}
      <span className='letter'>&nbsp;</span>
    </IndexWrap>
  ));

  return <div>{newText}</div>;
}
