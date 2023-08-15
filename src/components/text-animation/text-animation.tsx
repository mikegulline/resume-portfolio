type TextAnimationProps = {
  text: string;
};
export default function TextAnimation({ text }: TextAnimationProps) {
  let count = 0;
  const newText = text.split(' ').map((word, i) => (
    <span key={`${word}-${i}`} className='word'>
      {word.split('').map((letter, x) => {
        count++;
        return (
          <span
            key={`${letter}-${x}`}
            data-wait={count}
            className='letter'
            style={{ ['--index']: count }}
          >
            {letter}
          </span>
        );
      })}
      <span className='letter'>&nbsp;</span>
    </span>
  ));

  return <div>{newText}</div>;
}
