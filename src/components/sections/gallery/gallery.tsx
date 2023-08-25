import Image from 'next/image';
import Link from 'next/link';
import TextAnimation from '@/components/text-animation';
import Wrapper from '@/components/wrapper';

import immImage from '@/public/images/long-imm-01.jpg';
import aroImage from '@/public/images/long-aro-01.jpg';
import hluImage from '@/public/images/long-hlu-01.jpg';
import iwmImage from '@/public/images/long-iwm-01.jpg';
import ijaImage from '@/public/images/long-ija-01.jpg';
import kumImage from '@/public/images/long-kum-01.jpg';
import ltfImage from '@/public/images/long-ltf-01.jpg';

const gallery = [
  {
    title: 'IMMUNOCORP®',
    image: immImage,
    link: '/',
    description: '',
  },
  {
    title: 'Arctic Ruby® Oil',
    image: aroImage,
    link: '/',
    description: '',
  },
  {
    title: 'HempLand® USA',
    image: hluImage,
    link: '/',
    description: '',
  },
  {
    title: 'I want my CBD',
    image: iwmImage,
    link: '/',
    description: '',
  },
  {
    title: 'I. J. A. T.',
    image: ijaImage,
    link: '/',
    description: '',
  },
  {
    title: 'Kumato Labs®',
    image: kumImage,
    link: '/',
    description: '',
  },
  // {
  //   title: 'Loyal to Few®',
  //   image: ltfImage,
  //   link: '/',
  //   description: '',
  // },
];

export default function Gallery() {
  return (
    <section className='py-10 bg-static'>
      <Wrapper>
        <h1 className='font-medium text-[10.3vw]  md:text-7xl  xl:text-8xl mb-8 pb-4  md:mb-10 md:pb-5 lg:mb-14 lg:pb-8 xl:mb-20 xl:pb-10 border-b border-gray-800'>
          <TextAnimation text='Work Gallery' />
        </h1>
      </Wrapper>
      <Wrapper large>
        <ul className='grid grid-cols-2 md:grid-cols-3 gap-5'>
          {gallery.map(({ title, image, link, description }, i) => (
            <li
              key={`${i}-${title}`}
              className='border border-gray-800 rounded-lg overflow-hidden'
            >
              <Image
                src={image}
                alt={title}
                width={499.667}
                height={789.55}
                placeholder='blur'
              />
              {/* <p>{title}</p> */}
            </li>
          ))}
        </ul>
      </Wrapper>
    </section>
  );
}
