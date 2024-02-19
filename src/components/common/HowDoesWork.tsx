import { Button } from '../ui/Button';
import Image from 'next/image';

export default function HowDoesWork() {
  return (
    <section className="py-14 bg-white">
      <div className="md:w-10/12 w-11/12 max-w-screen-2xl mx-auto lg:flex lg:justify-between lg:items-center flex flex-col gap-5">
        <h2 className="text-5xl font-bold md:text-center lg:text-center w-11/12 text-left">
          How does it work?
        </h2>
        <div className="lg:flex justify-center items-center gap-10">
          <div className="flex flex-col justify-center items-center gap-5 pb-7 lg:pb-0">
            <Button className="text-lg text-pure-white">1</Button>
            <h3 className="text-2xl text-black font-medium">
              Get a digital card
            </h3>
            <p className="text-lg text-center lg:w-11/12 md:w-11/12">
              Start by signing up on Cardneto to create your own digital
              business card. It&apos;s like having a virtual version of your
              business info that you can easily share.
            </p>
            <Image
              src="/img/Illustrations.png"
              width={332}
              height={270}
              alt={'Illustrations'}
            />
          </div>
          <Image
            src="/img/Vector-border.svg"
            width={2}
            height={527}
            alt={'Border'}
            className="hidden lg:flex"
          />
          <Image
            src="/img/Dividers.svg"
            width={648}
            height={2}
            alt={'Border'}
            className="lg:hidden block"
          />
          <div className="flex flex-col justify-center items-center gap-5 py-7 lg:py-0">
            <Button className="text-lg text-pure-white">2</Button>
            <h3 className="text-2xl text-black font-medium">
              Fill your card contacts
            </h3>
            <p className="text-lg text-center lg:w-11/12 md:w-11/12">
              Tell us your contact details, social media links, and a little
              about yourself. We&apos;ve made it super easy to update and keep
              your digital card info current.
            </p>
            <Image
              src="/img/Illustrations1.png"
              width={285}
              height={278}
              alt={'Illustrations'}
            />
          </div>
          <Image
            src="/img/Vector-border.svg"
            width={2}
            height={527}
            alt={'Border'}
            className="hidden lg:flex"
          />
          <Image
            src="/img/Dividers.svg"
            width={648}
            height={2}
            alt={'Border'}
            className="lg:hidden block"
          />
          <div className="flex flex-col justify-center items-center gap-5 pt-7 lg:pt-0">
            <Button className="text-lg text-pure-white">3</Button>
            <h3 className="text-2xl text-black font-medium">
              Use it and make connections
            </h3>
            <p className="text-lg text-center lg:w-10/12 md:w-11/12">
              When you meet someone at events, just share your digital card by
              scanning a QR code or attaching it to a phone. It&apos;s a quick
              way to keep your professional network growing with.
            </p>
            <Image
              src="/img/Illustrations2.png"
              width={340}
              height={258}
              alt={'Illustrations'}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
