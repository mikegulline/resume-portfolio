import Wrapper from '@/components/wrapper';
import PillTags from '@/components/pill-tags';
import TextAnimation from '@/components/text-animation';

const content = {
  headline: 'HempLand® USA',
  title: 'Full-Stack Web Developer, Designer',
  from: '2015',
  to: '2023',
  subhead: 'HempLand® USA came to me with an idea. I gave them a brand.',
  body: 'Started in 2015, HempLand® USA was one of the original hemp CBD oil manufactures in, you guessed it, the USA. Renowned for their proprietary hemp strain, HempLand® USA is able to produce hemp oil with high levels of CBD and virtually no THC.',
  link: {
    text: 'Product',
    title: 'Learn more about Product',
    href: '/product',
  },
  stack: [
    'html',
    'css',
    'less/sass',
    'javascript',
    'php',
    'mysql',
    'wordpress',
    'woocommerce',
    'mailchimp',
  ],
  services: [
    'front-end engineering',
    'back-end development',
    'branding',
    'web design',
    'graphic design',
    'ux/ui',
    'email marketing',
  ],
};

type HeroProductGalleryProps = typeof content;

export default function HeroProductGallery() {
  return (
    <section className='py-10 md:py-16 xl:py-32'>
      <Wrapper>
        <h1 className='font-medium text-[10.3vw]  md:text-7xl  xl:text-8xl mb-8 pb-4  md:mb-10 md:pb-5 lg:mb-14 lg:pb-8 xl:mb-20 xl:pb-10 border-b border-gray-400 border-dashed'>
          <TextAnimation text='Featured Project' />
          <div className=' absolute right-4 -mt-6 lg:right-14  lg:-mt-28 rotate-12 w-28 h-28 lg:w-40 lg:h-40 xl:w-48 xl:h-48 bg-purple-100 border border-purple-600 rounded-full text-base font-normal flex items-center justify-center shadow-[20px_40px_80px_-40px_rgba(0,0,0,0.4)]'>
            <span>Very Impressive </span>
          </div>
        </h1>

        <div className='lg:flex items-start relative lg:gap-14 xl:gap-32 lg:mb-14 xl:mb-20'>
          <div className='lg:w-80 flex flex-col lg:h-[350px]'>
            <h1 className='text-lg font-medium flex'>
              <div className='-ml-2 px-2 bg-purple-100 rounded mb-1'>
                {content.headline}
              </div>
            </h1>
            <p className='text-sm mb-1 font-medium'>{content.title}</p>
            <p className='text-xs mb-8 lg:mb-1 flex items-center gap-1'>
              <span>{content.from}</span>
              <span className='grow border-b border-gray-400 mt-[2px]'></span>
              <span>{content.to}</span>
            </p>
            <div className='grow'></div>
            <ul className='flex gap-4 lg:block mb-8 lg:mb-0'>
              <li>
                <div className='font-medium uppercase text-xs'>Services:</div>
                <PillTags tags={content.services} />
              </li>
              <li>
                <div className='font-medium uppercase text-xs lg:mt-4'>
                  Stack:
                </div>
                <PillTags tags={content.stack} />
              </li>
            </ul>
          </div>
          <div className='grow lg:mb-0'>
            <div className='lg:w-[568px] xl:w-[700px] flex flex-col lg:h-[350px]'>
              <div className='grow  mb-8 lg:mb-0 lg:w-[520px] xl:w-[640px] '>
                <h3 className='font-bold text-4xl lg:text-3xl xl:text-4xl mb-4'>
                  <TextAnimation text={content.subhead} />
                </h3>
                <p className='text-sm'>{content.body}</p>
              </div>
              <div className='md:columns-3 gap-4'>
                <div className='aspect-video bg-gray-700 rounded-lg mb-4 md:mb-0'></div>
                <div className='aspect-video bg-gray-700 rounded-lg mb-4 md:mb-0'></div>
                <div className='aspect-video bg-gray-700 rounded-lg mb-4 md:mb-0'></div>
              </div>
            </div>
          </div>
        </div>

        <div className='bg-gray-700 aspect-video rounded-lg overflow-hidden md:mt-4'>
          <div className='w-full h-full flex items-center justify-center'>
            <span>image</span>
          </div>
        </div>
      </Wrapper>
    </section>
  );
}
