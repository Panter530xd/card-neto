import Image from 'next/image';
import { Button } from '../ui/Button';
import Hero from '/img/Hero-bg.png';
export default function HeroComponent() {
  return (
    <section className="bg-[url('/img/Hero-bg.png')] ">
      <div className="lg:flex lg:flex-row flex flex-col justify-between items-center lg:w-10/12 md:w-10/12 w-11/12 max-w-screen-2xl mx-auto lg:py-10 pt-5">
        <div className="flex flex-col lg:w-1/2 gap-7">
          <h1 className="md:text-6xl lg:text-6xl text-5xl text-black font-bold md:leading-[78px] xl:leading-[78px] leading-[64px] lg:w-11/12">
            Grow your network rapidly and in a professional way!
          </h1>
          <p className="text-black text-lg lg:w-10/12">
            An All-In-One Digital Business Card solution to help you seize
            opportunities and make more connections.
          </p>

          <Button size={'lg'} className="font-medium text-xl mr-auto">
            Order a card
          </Button>
          <Image src="/img/Rating.png" width={289} height={56} alt={'Rating'} />
        </div>
        <div className="lg:w-1/2">
          <Image
            className="lg:ml-auto -ml-[10px]"
            src={'/img/Hero-Illustration.png'}
            width={513}
            height={615}
            alt={'Hero Illustration'}
          />
        </div>
      </div>
    </section>
  );
}
