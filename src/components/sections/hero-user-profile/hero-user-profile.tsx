import Wrapper from '@/components/wrapper';
import Link from 'next/link';
import Image from 'next/image';
import { BsArrowUpRight } from 'react-icons/bs';
import TextAnimation from '@/components/text-animation';
import PillTags from '@/components/pill-tags';
import ProfilePic from '@/public/images/mike-gulline.jpg';

// Professional Full-Stack Web Development.
const content = {
  headline: 'Creative Full-Stack Web Engineer.',
  tags: ['Design', 'Develop', 'Deploy'],
  link: {
    text: '@mikegulline',
    title: "Let's connect on LinkedIn",
    href: 'https://www.linkedin.com/in/mikegulline/',
    body: "If you like what you see, let's connect! You can find me reluctently 😜 on LinkedIn.",
  },
};

export default function HeroUserProfile() {
  return (
    <section>
      <Wrapper>
        <div className='lg:columns-2 gap-10 xl:gap-20 py-10 md:py-20 xl:py-32'>
          <div className='flex flex-col justify-between gap-4 md:gap-6 xl:gap-8  lg:aspect-[4/3]'>
            <h1 className='text-[10.3vw] lg:w-auto md:text-[5.8rem] lg:text-[3.6rem] xl:text-7xl leading-[1] md:leading-[1] lg:leading-[1] xl:leading-[1]  font-medium'>
              <TextAnimation text={content.headline} />
            </h1>
            <div className='grow '>
              <PillTags
                tags={content.tags}
                className='text-xs border-gray-600  hover:border-purple-900/50 hover:text-black hover:bg-purple-200/70'
              />
            </div>
            <ul className='flex gap-8 border-t border-dashed border-gray-400 pt-5 mt-5'>
              <li className='flex grow items-start'>
                <Link
                  href={content.link.href}
                  target='_blank'
                  className='group'
                  title={content.link.title}
                >
                  <div className='flex items-center gap-2 text-sm md:text-base text-purple-900/70 group-hover:text-black'>
                    <span>{content.link.text}</span> <BsArrowUpRight />
                  </div>
                </Link>
              </li>
              <li className='text-xs w-60 md:w-64'>{content.link.body}</li>
            </ul>
          </div>

          <div className='relative rounded-lg overflow-hidden mt-10 lg:mt-0'>
            <div className='bg-gray-800 aspect-[4/3]'>
              <Image src={ProfilePic} alt='Mike Gulline' placeholder='blur' />
              <div className='absolute right-5 bottom-5 z-10'>
                <ul className='rounded-full backdrop-blur-sm bg-white/30 p-1 flex gap-2 items-center'>
                  <li>
                    <div className='rounded-full bg-gray-800 text-white w-10 h-10 flex justify-center items-center'>
                      <span className='rotate-90'>:)</span>
                    </div>
                  </li>
                  <li className='pr-10'>Hello! My name is Mike.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
}
