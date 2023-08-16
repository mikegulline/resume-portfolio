import Wrapper from '@/components/wrapper';
import PillTags from '@/components/pill-tags';

const content = {
  headline: 'HempLand® USA',
  title: 'Full-Stack Web Developer, Designer',
  from: '2015',
  to: '2023',
  subhead: "America's Finest Homegrown Hemp CBD Products",
  body: 'Started in 2015, HempLand® USA was one of the original hemp CBD oil manufactures in, you guessed it, the USA. Renowned for their proprietary hemp strain, HempLand® USA is able to produce hemp oil with high levels of CBD and virtually no THC.',
  link: {
    text: 'Product',
    title: 'Learn more about Product',
    href: '/product',
  },

  stack: [
    'html',
    'css',
    'less',
    'sass',
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
    <section className='py-40'>
      <Wrapper>
        <h1 className='font-medium text-8xl mb-20 pb-10 border-b border-gray-400 border-dashed'>
          Featured Project
        </h1>

        <div className='flex items-start relative gap-32 '>
          <div className='w-80 flex flex-col'>
            <h1 className='text-lg font-medium mt-1 flex'>
              {content.headline}
            </h1>
            <p className='text-sm mb-1'>{content.title}</p>
            <p className='text-xs mb-10 flex items-center gap-1'>
              <span>{content.from}</span>
              <span className='grow border-b border-gray-400 mt-[2px]'></span>
              <span>{content.to}</span>
            </p>
            <div className='font-medium uppercase text-xs mb-1'>Services:</div>
            <PillTags tags={content.services} />
            <div className='font-medium uppercase text-xs mb-1 mt-4'>
              Stack:
            </div>
            <PillTags tags={content.stack} />
          </div>
          <div className='grow h-full '>
            <div className='w-[600px] flex flex-col'>
              <h3 className='font-bold text-4xl mb-10 grow'>
                {content.subhead}
              </h3>
              <p className='text-sm'>{content.body}</p>
            </div>
          </div>
        </div>

        <div className='bg-gray-600 aspect-video mt-10 rounded-lg overflow-hidden'>
          <div className='w-full h-full flex items-center justify-center'>
            <span>image</span>
          </div>
        </div>
      </Wrapper>
    </section>
  );
}
