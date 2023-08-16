import HeroUserProfile from '@/components/sections/hero-user-profile';
import BannerLogos from '@/components/sections/banner-logos/banner-logos';
import HeroProductGallery from '@/components/sections/hero-product-gallery';

export default function Home() {
  return (
    <main>
      <HeroUserProfile />

      <BannerLogos />

      <HeroProductGallery />
    </main>
  );
}
