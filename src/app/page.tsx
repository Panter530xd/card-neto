'use client';

import AboutUs from '@/components/common/AboutUs';
import HeroComponent from '@/components/common/HeroSection';
import Slider from '@/components/ui/Slider';
import HowDoesWork from '@/components/common/HowDoesWork';
import Features from '@/components/common/Features';
import CardsSection from '@/components/common/Cards';
import TestimonialSlider from '@/components/common/Testimonial';
import { testimonials } from '@/testimonial/testimonialsData';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

export default function Home() {
  const controls = useAnimation();

  // Set up useInView for each section
  const [heroRef, heroInView] = useInView();
  const [sliderRef, sliderInView] = useInView();
  const [aboutUsRef, aboutUsInView] = useInView();
  const [howDoesWorkRef, howDoesWorkInView] = useInView();
  const [featuresRef, featuresInView] = useInView();
  const [cardsRef, cardsInView] = useInView();
  const [testimonialRef, testimonialInView] = useInView();

  useEffect(() => {
    // Animate each section when it comes into view
    if (heroInView) {
      controls.start('visible');
    }
    if (sliderInView) {
      controls.start('visible');
    }
    if (aboutUsInView) {
      controls.start('visible');
    }
    if (howDoesWorkInView) {
      controls.start('visible');
    }
    if (featuresInView) {
      controls.start('visible');
    }
    if (cardsInView) {
      controls.start('visible');
    }
    if (testimonialInView) {
      controls.start('visible');
    }
  }, [
    controls,
    heroInView,
    sliderInView,
    aboutUsInView,
    howDoesWorkInView,
    featuresInView,
    cardsInView,
    testimonialInView,
  ]);

  const fadeAnimation = {
    hiddenLeft: { opacity: 0, x: -50 },
    hiddenRight: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1, ease: 'easeInOut' },
    }, // Longer transition duration for a smoother fade
  };

  return (
    <main className="w-full">
      {/* Hero Section */}
      <motion.div
        ref={heroRef}
        variants={fadeAnimation}
        initial="hiddenLeft"
        animate={heroInView ? 'visible' : 'hiddenLeft'}
      >
        <HeroComponent />
      </motion.div>

      {/* Slider Section */}
      <motion.div
        ref={sliderRef}
        variants={fadeAnimation}
        initial="hiddenRight"
        animate={sliderInView ? 'visible' : 'hiddenRight'}
      >
        <Slider />
      </motion.div>

      {/* About Us Section */}
      <motion.div
        ref={aboutUsRef}
        variants={fadeAnimation}
        initial="hiddenLeft"
        animate={aboutUsInView ? 'visible' : 'hiddenLeft'}
      >
        <AboutUs />
      </motion.div>

      {/* How Does Work Section */}
      <motion.div
        ref={howDoesWorkRef}
        variants={fadeAnimation}
        initial="hiddenRight"
        animate={howDoesWorkInView ? 'visible' : 'hiddenRight'}
      >
        <HowDoesWork />
      </motion.div>

      {/* Features Section */}
      <motion.div
        ref={featuresRef}
        variants={fadeAnimation}
        initial="hiddenLeft"
        animate={featuresInView ? 'visible' : 'hiddenLeft'}
      >
        <Features />
      </motion.div>

      {/* Cards Section */}
      <motion.div
        ref={cardsRef}
        variants={fadeAnimation}
        initial="hiddenRight"
        animate={cardsInView ? 'visible' : 'hiddenRight'}
      >
        <CardsSection />
      </motion.div>

      {/* Testimonial Section */}
      <motion.div
        ref={testimonialRef}
        variants={fadeAnimation}
        initial="hiddenLeft"
        animate={testimonialInView ? 'visible' : 'hiddenLeft'}
      >
        <TestimonialSlider testimonials={testimonials} />
      </motion.div>
    </main>
  );
}
