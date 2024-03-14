'use client';

import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import Thumb from '@/components/common/EmblaCarouselThumbButton';
import { useCallback, useEffect, useState } from 'react';
import { EmblaOptionsType } from 'embla-carousel';
import { CommonColor } from '@/types/product';

interface CardSliderProps {
  images: string[];
  selectedImageUrl: string | string[];
  defaultImageUrl: string;
  options?: EmblaOptionsType;
  selectedColor: CommonColor | null;
  onImageSelect: (imageUrls: string[], selectedIndex: number) => void;
}

export default function CardSlider({
  images,
  selectedImageUrl,
  defaultImageUrl,
  options,
  selectedColor,
  onImageSelect,
}: CardSliderProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaMainRef, emblaMainApi] = useEmblaCarousel(options);
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: 'keepSnaps',
    dragFree: true,
  });

  const onSelect = useCallback(() => {
    if (!emblaMainApi) return;
    setSelectedIndex(emblaMainApi.selectedScrollSnap());
  }, [emblaMainApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaMainApi) return;
    onSelect();
    emblaMainApi.on('select', onSelect);
    emblaMainApi.on('reInit', onSelect);
  }, [emblaMainApi, onSelect]);

  useEffect(() => {
    if (!emblaMainApi) return;
    emblaMainApi.scrollTo(selectedIndex);
  }, [emblaMainApi, selectedIndex]);

  useEffect(() => {
    if (emblaThumbsApi && selectedImageUrl) {
      emblaThumbsApi.reInit();
    }
  }, [emblaThumbsApi, selectedImageUrl]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [selectedColor]);

  const renderThumbs = () => {
    const thumbImages = selectedColor ? images : [defaultImageUrl];

    return (
      <div className="embla-thumbs__viewport" ref={emblaThumbsRef}>
        <div className="embla-thumbs__container">
          {thumbImages.map((image, index) => (
            <Thumb
              key={index}
              selected={index === selectedIndex}
              image={image}
              onClick={() => handleThumbClick(image, index)}
            />
          ))}
        </div>
      </div>
    );
  };

  const handleThumbClick = (imageUrl: string, index: number) => {
    setSelectedIndex(index);
    onImageSelect([imageUrl], index);
  };

  return (
    <div className="lg:flex lg:flex-row lg:gap-4 flex flex-col-reverse items-center">
      <div>{renderThumbs()}</div>
      <div className="embla relative md:p-5">
        <div className="embla__viewport" ref={emblaMainRef}>
          <div className="embla__container">
            {(selectedColor ? images : [defaultImageUrl]).map(
              (image, index) => (
                <div
                  className="embla__slide gradient-background rounded-3xl flex justify-center md:py-2 py-5"
                  key={index}
                >
                  <Image
                    src={image}
                    alt={`Slide ${index}`}
                    priority
                    width={460}
                    height={460}
                    className={selectedIndex === index ? '' : 'hidden'}
                  />
                </div>
              ),
            )}
          </div>
        </div>
        {selectedColor && (
          <div className="absolute md:bottom-4 bottom-1 left-0 right-0 flex justify-center space-x-2">
            {images.map((image, index) => (
              <button
                key={index}
                className={`h-3 w-3 rounded-full ${
                  index === selectedIndex ? 'bg-pure-white' : 'bg-[#6C6C6C]'
                }`}
                onClick={() => handleThumbClick(image, index)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
