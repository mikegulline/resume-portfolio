import Pan from '@/components/pan';

export default function BannerLogos() {
  return (
    <div className='bg-white border-t border-b border-gray-800 text-gray-800 py-10 w-full overflow-hidden'>
      <div className='flex whitespace-nowrap items-center text-xl '>
        <Pan>
          <>
            {[
              'JavaScript',
              'TypeScript',
              'React',
              'Next JS',
              'TailWindCSS',
              'Node',
              'UI',
              'CSS3',
              'VS Code',
              'HTML5',
              'NPM',
              'SASS',
              'MySQL',
              'API',
              'GitHub',
              '{less}',
              'Mongo DB',
              'JSX',
              'PHP',
              'UX',
            ].map((item, i) => (
              <span
                key={`strip${i}`}
                className='inline-block border border-gray-800 px-5 py-2 ml-1 rounded-full hover:bg-purple-200/70 hover:border-purple-900/50 hover:text-black cursor-pointer'
              >
                {item}
              </span>
            ))}
          </>
        </Pan>
      </div>
    </div>
  );
}
