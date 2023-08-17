import Wrapper from '@/components/wrapper';
import Link from 'next/link';
import { BsArrowUpRight } from 'react-icons/bs';
import TextAnimation from '@/components/text-animation';
import PillTags from '@/components/pill-tags';

const content = {
  headline: 'Professional Full-Stack Web Development.',
  tags: ['Design', 'Develop', 'Deploy'],
  link: {
    text: '@mikegulline',
    title: "Let's connect on LinkedIn",
    href: 'https://www.linkedin.com/in/mikegulline/',
    body: "If you like what you see, let's connect! You can find me reluctently on LinkedIn.",
  },
};

export default function HeroUserProfile() {
  return (
    <section>
      <Wrapper>
        <div className='lg:columns-2 gap-10 xl:gap-20 py-10 md:py-14 xl:py-20'>
          <div className='flex flex-col justify-between gap-2 xl:gap-4  lg:aspect-[4/3]'>
            <h1 className='text-[10.3vw] lg:w-auto md:text-7xl lg:text-5xl xl:text-7xl leading-[1] md:leading-[1] lg:leading-[1] xl:leading-[1]  flex flex-col justify-center font-medium'>
              <TextAnimation text={content.headline} />
            </h1>
            <div className='grow '>
              <PillTags tags={content.tags} />
            </div>
            <ul className='flex gap-8 border-t border-dashed border-gray-400 pt-5 mt-5'>
              <li className='flex grow items-start'>
                <Link
                  href={content.link.href}
                  target='_blank'
                  className='group'
                  title={content.link.title}
                >
                  <div className='flex items-center gap-2 text-sm md:text-base group-hover:text-purple-600'>
                    <span>{content.link.text}</span> <BsArrowUpRight />
                  </div>
                </Link>
              </li>
              <li className='text-xs w-60 md:w-64'>{content.link.body}</li>
            </ul>
          </div>

          <div className='relative rounded-lg overflow-hidden mt-10 lg:mt-0'>
            <div className='bg-gray-700 aspect-[4/3]'>
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
