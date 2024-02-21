import AboutUs from '@/components/common/AboutUs';
import HeroComponent from '@/components/common/HeroSection';
import Slider from '@/components/ui/Slider';
import HowDoesWork from '@/components/common/HowDoesWork';
import Features from '@/components/common/Features';
import CardsSection from '@/components/common/Cards';
import TestimonialSlider from '@/components/common/Testimonial';
import { testimonials } from '@/testimonial/testimonialsData';

import { EmblaOptionsType } from 'embla-carousel';

export default function Home() {
  return (
    <main className="w-full">
      <HeroComponent />
      <Slider />
      <AboutUs />
      <HowDoesWork />
      <Features />
      <CardsSection />
      <TestimonialSlider testimonials={testimonials} />
    </main>
  );
}
