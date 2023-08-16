import Wrapper from '@/components/wrapper';
import Link from 'next/link';
import { BsArrowUpRight } from 'react-icons/bs';
import TextAnimation from '@/components/text-animation';

export default function HeroUserProfile() {
  return (
    <section>
      <Wrapper>
        <div className='lg:columns-2 gap-10 xl:gap-20 py-14 xl:py-20'>
          <div className='flex flex-col grow justify-between gap-8 xl:gap-16  lg:aspect-[4/3]'>
            <h1 className='text-[8.5vw] lg:w-auto md:text-7xl lg:text-5xl xl:text-6xl leading-[1.1] md:leading-[1.1] lg:leading-[1.1] xl:leading-[1.1] uppercase flex flex-col grow justify-center font-medium'>
              <TextAnimation text='Professional Full-Stack Web Development.' />
            </h1>
            <ul className='flex gap-2 border-t border-dashed border-gray-400 pt-5'>
              <li className='flex grow items-start'>
                <Link
                  href='https://www.linkedin.com/in/mikegulline/'
                  target='_blank'
                  className='group'
                  title="Let's connect on LinkedIn"
                >
                  <div className='flex items-center gap-2 text-sm md:text-base group-hover:text-purple-600'>
                    <span>@mikegulline</span> <BsArrowUpRight />
                  </div>
                </Link>
              </li>
              <li className='text-xs w-60 md:w-64'>
                If you like what you see, let&rsquo;s connect! You can find me
                reluctently on LinkedIn.
              </li>
            </ul>
          </div>

          <div className='relative rounded-lg overflow-hidden mt-16 lg:mt-0'>
            <div className='bg-gray-800 aspect-[4/3]'>
              <div className='absolute right-5 bottom-5 z-10'>
                <ul className='rounded-full backdrop-blur-sm bg-white/30 p-1 flex gap-2 items-center'>
                  <li>
                    <div className='rounded-full bg-gray-800 text-gray-400 w-10 h-10 flex justify-center items-center'>
                      <span className='rotate-90'>:)</span>
                    </div>
                  </li>
                  <li className='pr-10'>hello</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
}
