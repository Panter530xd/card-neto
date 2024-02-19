'use client';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';

export default function AutoSliderImages() {
  return (
    <Marquee
      className="bg-secondary py-5"
      direction="right"
      speed={50}
      autoFill
    >
      <div className="w-full">
        <div className="lg:flex lg:flex-row md:flex-row md:flex grid grid-cols-4 gap-4 justify-between items-center lg:w-10/12 lg:justify-stretch md:w-10/12 w-11/12 mx-auto">
          <div className="flex-shrink-0 lg:mx-10 md:mx-4">
            <Image
              src="/slider-img/Orange.svg"
              alt="Image 1"
              width={147}
              height={37}
              className="lg:w-[147px] lg:h-[37px] md:w-[87px] md:h-[23px] w-[105px] h-[27px]"
            />
          </div>
          <div className="flex-shrink-0 lg:mx-10 md:mx-4">
            <Image
              src="/slider-img/Mediacor.svg"
              alt="Image 2"
              width={92}
              height={65}
              className="lg:w-[92px] lg:h-[65px] md:w-[92px] md:h-[57px] w-[40px] h-[39px]"
            />
          </div>
          <div className="flex-shrink-0 lg:mx-10 md:mx-4">
            <Image
              src="/slider-img/Group.svg"
              alt="Image 3"
              width={45}
              height={45}
              className="lg:w-[45px] lg:h-[45px] md:w-[31px] md:h-[31px] w-[38.67px] h-[38.67px]"
            />
          </div>
          <div className="flex-shrink-0 lg:mx-10 md:mx-4">
            <Image
              src="/slider-img/MaskGroup.svg"
              alt="Image 4"
              width={100}
              height={50}
              className="lg:w-[100px] lg:h-[50px] md:w-[62px] md:h-[31px] w-[75px] h-[37.67px]"
            />
          </div>
          <div className="flex-shrink-0 lg:mx-10 md:mx-4">
            <Image
              src="/slider-img/Maskgroup3.png"
              alt="Image 5"
              width={64}
              height={64}
              className="lg:w-[64px] lg:h-[64px] md:w-[42px] md:h-[42px] w-[62px] h-[60px]"
            />
          </div>
          <div className="flex-shrink-0 lg:mx-10 md:mx-4">
            <Image
              src="/slider-img/XYLogo.png"
              alt="Image 6"
              width={76}
              height={52}
              className="lg:w-[76px] lg:h-[52px] md:w-[46px] md:h-[31px] w-[58px] h-[40px]"
            />
          </div>
          <div className="flex-shrink-0 lg:mx-10 md:mx-4">
            <Image
              src="/slider-img/Bridge.svg"
              alt="Image 7"
              width={111}
              height={43}
              className="lg:w-[111px] lg:h-[43px] md:w-[75px] md:h-[29px] w-[89px] h-[34px]"
            />
          </div>
        </div>
      </div>
    </Marquee>
  );
}
