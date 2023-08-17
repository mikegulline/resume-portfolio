import Image from 'next/image';
import Image1 from '@/public/images/ltf1.jpg';
import Image2 from '@/public/images/ltf2.jpg';
import Image3 from '@/public/images/ltf3.jpg';
import Image4 from '@/public/images/ltf4.jpg';
import Wrapper from '@/components/wrapper';
import PillTags from '@/components/pill-tags';
import TextAnimation from '@/components/text-animation';
import FrameAnimation from '@/components/frame-animation';

const content = {
  headline: 'Loyal to Few®',
  title: 'Full-Stack Web Developer, Designer',
  from: '2022',
  to: '2023',
  subhead: 'Custom shopping experience for a boutique clothing manufacturer.',
  body: 'Loyal To Few® is a family-owned business started by two brothers – the younger, a retired firefighter paramedic, and the older, a former troublemaker turned successful entrepreneur/businessman.  What began as a mindset turned into a tattoo, and evolved into a one-of-a-kind clothing brand that anyone who has overcome adversity can relate to.',
  link: {
    text: 'Product',
    title: 'Learn more about Product',
    href: '/product',
  },
  stack: [
    'javascript',
    'react js',
    'next js',
    'tailwindcss',
    'node',
    'mongodb',
    'easypost api',
    'snipcart api',
    'sendgrid api',
  ],
  services: [
    'web design',
    'ux/ui',
    'front-end engineering',
    'back-end development',
    'webhooks',
    'apis',
    'seo',
  ],
  images: [
    { image: Image4, alt: 'Loyal to Few product page' },
    { image: Image2, alt: 'Loyal to Few category page' },
    { image: Image3, alt: 'Loyal to Few cart drawr' },
    { image: Image1, alt: 'Loyal to Few sign up page' },
  ],
};
const contentHL = {
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
    <section className='py-10 md:py-16 xl:py-32 bg-gray-900 text-gray-300/50'>
      <Wrapper>
        <h1 className='font-medium text-[10.3vw]  md:text-7xl  xl:text-8xl mb-8 pb-4  md:mb-10 md:pb-5 lg:mb-14 lg:pb-8 xl:mb-20 xl:pb-10 border-b border-gray-400 border-dashed text-white'>
          <TextAnimation text='Featured Project' />
        </h1>

        <div className='lg:flex items-start relative lg:gap-14 xl:gap-32 lg:mb-14 xl:mb-20 '>
          <div className='lg:w-80 flex flex-col lg:h-[350px]'>
            <h1 className='text-lg font-medium flex'>
              <div className='-ml-2 px-2 mt-[6px] bg-purple-300 text-black rounded-full mb-1'>
                {content.headline}
              </div>
            </h1>
            <p className='text-sm mb-1 font-medium text-gray-300'>
              {content.title}
            </p>
            <p className='text-xs mb-8 lg:mb-1 flex items-center gap-1'>
              <span>{content.from}</span>
              <span className='grow border-b border-gray-400 mt-[2px]'></span>
              <span>{content.to}</span>
            </p>
            <div className='grow'></div>
            <ul className='flex gap-4 lg:block mb-8 lg:mb-0'>
              <li>
                <div className='font-medium uppercase text-xs text-gray-300'>
                  Services:
                </div>
                <PillTags
                  tags={content.services}
                  className='text-xs border-gray-600 bg-gray-900  hover:border-purple-300 hover:text-black hover:bg-purple-300'
                />
              </li>
              <li>
                <div className='font-medium uppercase text-xs lg:mt-4 text-gray-300'>
                  Stack:
                </div>
                <PillTags
                  tags={content.stack}
                  className='text-xs border-gray-600 bg-gray-900  hover:border-purple-300 hover:text-black hover:bg-purple-300'
                />
              </li>
            </ul>
          </div>
          <div className='grow lg:mb-0'>
            <div className='lg:w-[568px] xl:w-[700px] flex flex-col lg:h-[350px]'>
              <div className='grow  mb-8 lg:mb-0 lg:w-[520px] xl:w-[640px] '>
                <h3 className='font-bold text-4xl lg:text-3xl xl:text-4xl mb-4 text-white'>
                  <TextAnimation text={content.subhead} />
                </h3>
                <p className='text-sm'>{content.body}</p>
              </div>
              <FrameAnimation index={0} className='fade-up'>
                <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
                  <div className='aspect-video border border-gray-100 bg-gray-700 rounded-lg overflow-hidden shadow-[0_10px_40px_-10px_rgba(0,0,0,0.3)]'>
                    <Image
                      src={content.images[0].image}
                      alt={content.images[0].alt}
                      placeholder='blur'
                    />
                  </div>

                  <div className='aspect-video border border-gray-100 bg-gray-700 rounded-lg overflow-hidden shadow-[0_10px_40px_-10px_rgba(0,0,0,0.3)]'>
                    <Image
                      src={content.images[1].image}
                      alt={content.images[1].alt}
                      placeholder='blur'
                    />
                  </div>

                  <div className='col-span-2 md:col-auto aspect-video border border-gray-100 bg-gray-700 rounded-lg overflow-hidden shadow-[0_10px_40px_-10px_rgba(0,0,0,0.3)]'>
                    <Image
                      src={content.images[2].image}
                      alt={content.images[2].alt}
                      placeholder='blur'
                    />
                  </div>
                </div>
              </FrameAnimation>
            </div>
          </div>
        </div>
        <FrameAnimation index={0} className='fade-up'>
          <div className='bg-gray-700 aspect-video border border-gray-100 rounded-lg overflow-hidden md:mt-4 hidden lg:block shadow-[0_20px_80px_-20px_rgba(0,0,0,0.3)]'>
            <div className='w-full h-full flex items-center justify-center'>
              <Image
                src={content.images[3].image}
                alt={content.images[3].alt}
                placeholder='blur'
              />
            </div>
          </div>
        </FrameAnimation>
      </Wrapper>
    </section>
  );
}

// export default function HeroProductGallery() {
//   return (
//     <section className='py-10 md:py-16 xl:py-32 bg-white'>
//       <Wrapper>
//         <h1 className='font-medium text-[10.3vw]  md:text-7xl  xl:text-8xl mb-8 pb-4  md:mb-10 md:pb-5 lg:mb-14 lg:pb-8 xl:mb-20 xl:pb-10 border-b border-gray-400 border-dashed'>
//           <TextAnimation text='Featured Project' />
//         </h1>

//         <div className='lg:flex items-start relative lg:gap-14 xl:gap-32 lg:mb-14 xl:mb-20'>
//           <div className='lg:w-80 flex flex-col lg:h-[350px]'>
//             <h1 className='text-lg font-medium flex'>
//               <div className='-ml-2 px-2 mt-[6px] bg-purple-100 rounded mb-1'>
//                 {content.headline}
//               </div>
//             </h1>
//             <p className='text-sm mb-1 font-medium'>{content.title}</p>
//             <p className='text-xs mb-8 lg:mb-1 flex items-center gap-1'>
//               <span>{content.from}</span>
//               <span className='grow border-b border-gray-400 mt-[2px]'></span>
//               <span>{content.to}</span>
//             </p>
//             <div className='grow'></div>
//             <ul className='flex gap-4 lg:block mb-8 lg:mb-0'>
//               <li>
//                 <div className='font-medium uppercase text-xs'>Services:</div>
//                 <PillTags tags={content.services} />
//               </li>
//               <li>
//                 <div className='font-medium uppercase text-xs lg:mt-4'>
//                   Stack:
//                 </div>
//                 <PillTags tags={content.stack} />
//               </li>
//             </ul>
//           </div>
//           <div className='grow lg:mb-0'>
//             <div className='lg:w-[568px] xl:w-[700px] flex flex-col lg:h-[350px]'>
//               <div className='grow  mb-8 lg:mb-0 lg:w-[520px] xl:w-[640px] '>
//                 <h3 className='font-bold text-4xl lg:text-3xl xl:text-4xl mb-4'>
//                   <TextAnimation text={content.subhead} />
//                 </h3>
//                 <p className='text-sm'>{content.body}</p>
//               </div>
//               <FrameAnimation index={0} className='fade-up'>
//                 <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
//                   <div className='aspect-video bg-gray-700 rounded-lg overflow-hidden shadow-[0_10px_40px_-10px_rgba(0,0,0,0.3)]'>
//                     <Image
//                       src={content.images[0].image}
//                       alt={content.images[0].alt}
//                       placeholder='blur'
//                     />
//                   </div>

//                   <div className='aspect-video bg-gray-700 rounded-lg overflow-hidden shadow-[0_10px_40px_-10px_rgba(0,0,0,0.3)]'>
//                     <Image
//                       src={content.images[1].image}
//                       alt={content.images[1].alt}
//                       placeholder='blur'
//                     />
//                   </div>

//                   <div className='col-span-2 md:col-auto aspect-video bg-gray-700 rounded-lg overflow-hidden shadow-[0_10px_40px_-10px_rgba(0,0,0,0.3)]'>
//                     <Image
//                       src={content.images[2].image}
//                       alt={content.images[2].alt}
//                       placeholder='blur'
//                     />
//                   </div>
//                 </div>
//               </FrameAnimation>
//             </div>
//           </div>
//         </div>
//         <FrameAnimation index={0} className='fade-up'>
//           <div className='bg-gray-700 aspect-video rounded-lg overflow-hidden md:mt-4 hidden lg:block shadow-[0_20px_80px_-20px_rgba(0,0,0,0.3)]'>
//             <div className='w-full h-full flex items-center justify-center'>
//               <Image
//                 src={content.images[3].image}
//                 alt={content.images[3].alt}
//                 placeholder='blur'
//               />
//             </div>
//           </div>
//         </FrameAnimation>
//       </Wrapper>
//     </section>
//   );
// }
