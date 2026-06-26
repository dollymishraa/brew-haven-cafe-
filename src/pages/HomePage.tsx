import Hero from '../components/home/Hero';
import FeaturedExperiences from '../components/home/FeaturedExperiences';
import CustomerFavorites from '../components/home/CustomerFavorites';
import GallerySection from '../components/home/GallerySection';
import FounderStory from '../components/home/FounderStory';
import Testimonials from '../components/home/Testimonials';
import ContactSection from '../components/home/ContactSection';

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedExperiences />
      <CustomerFavorites />
      <GallerySection />
      <FounderStory />
      <Testimonials />
      <ContactSection />
    </>
  );
}
