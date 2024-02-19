'use client';

import React, { useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';

interface Testimonial {
  id: number;
  title: string;
  content: string;
  stars: number;
  imageSrc: string;
  firstName: string;
  lastName: string;
  businessDetails: string;
}

interface TestimonialSliderProps {
  testimonials: Testimonial[];
}

const TestimonialSlider: React.FC<TestimonialSliderProps> = ({
  testimonials,
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    const onSelect = () => {
      if (emblaApi) {
        setSelectedIndex(emblaApi.selectedScrollSnap());
      }
    };

    if (emblaApi) {
      emblaApi.on('select', onSelect);
      return () => {
        emblaApi.off('select', onSelect);
      };
    }
  }, [emblaApi]);

  const scrollTo = (index: number) => {
    if (emblaApi) {
      emblaApi.scrollTo(index);
      setSelectedIndex(index);
    }
  };

  return (
    <div className="relative flex items-center justify-center bg-black py-14">
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          {testimonials.map((testimonial, index) => (
            <div className="embla__slide" key={testimonial.id}>
              <div
                className={` w-10/12 mx-auto p-5 ${
                  index === selectedIndex ? '' : 'hidden'
                }`}
              >
                <h2 className="text-[32px] text-pure-white font-bold text-center">
                  {testimonial.title}
                </h2>
                <p className="text-pure-white text-lg lg:w-8/12 mx-auto text-center">
                  {testimonial.content}
                </p>
                <div className="flex justify-center items-center mt-2">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-5 h-5 fill-current ${
                        i < testimonial.stars
                          ? 'text-yellow-500'
                          : 'text-gray-300'
                      }`}
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 1l2.6 5.3L18 7.4l-4.1 4.1.9 5.3L10 15.4l-4.8 2.4.9-5.3L2 7.4l5.4-.1L10 1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ))}
                </div>
                <div className="flex justify-center items-center mt-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src={testimonial.imageSrc}
                      width={64}
                      height={64}
                      alt={`${testimonial.firstName} ${testimonial.lastName}`}
                    />
                  </div>
                  <div>
                    <p className="text-pure-white text text-xl font-medium">{`${testimonial.firstName} ${testimonial.lastName}`}</p>
                    <p className="text-sm text-pure-white">
                      {testimonial.businessDetails}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`h-3 w-3 rounded-full ${
              index === selectedIndex ? 'bg-pure-white' : 'bg-[#6C6C6C]'
            }`}
            onClick={() => scrollTo(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialSlider;
