import Wrapper from '@/components/wrapper';
import Pan from '@/components/pan';

export default function BannerLogos() {
  return (
    <div className='bg-white border-t border-gray-800 text-gray-800 py-10 w-full overflow-hidden'>
      <div className='flex whitespace-nowrap items-center text-2xl font-medium'>
        <Pan>
          <>
            {[
              'Mike Gulline',
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
              <span key={`strip${i}`}>
                <span
                  key={`strip${i}`}
                  className='inline-block border border-white px-4 py-2 mx-1 rounded-full hover:bg-purple-200/70 hover:border-purple-900/50 hover:text-black cursor-pointer'
                >
                  {item}
                </span>
                <span>•</span>
              </span>
            ))}
          </>
        </Pan>
      </div>
    </div>
  );
}
