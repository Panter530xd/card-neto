'use client';
import Image from 'next/image';
import { Button } from '../ui/Button';

export default function AboutUs() {
  const handleClickOrderCard = () => {
    window.open(
      'https://docs.google.com/forms/d/e/1FAIpQLSftIicvsmIU7OAi3pcded5nPz7hovmCR5IrGP6fx4v1SFauJA/viewform?usp=sf_link',
    );
  };

  return (
    <section id="#aboutSection" className="bg-primary py-14">
      <div className="lg:w-10/12 md:w-10/12 w-11/12 max-w-screen-2xl mx-auto font-onest lg:flex-row lg:flex lg:justify-between lg:items-center flex flex-col-reverse">
        <div className="flex flex-col gap-5 lg:w-1/2">
          <p className="text-xl font-medium text-white">
            Dorian Lesnic, CEO of cardneto
          </p>
          <h2 className="text-4xl font-bold text-white leading-[48px] lg:w-10/12">
            “We connect you with right people and remain good first impression!”
          </h2>
          <p className="text-lg  text-white lg:w-11/12">
            In cardneto we create multiple things that simplify networking. Our
            mission is to turn offline meetings, conferences into place where
            people could make contacts even if they knew each other few minutes
            ago! We produce digital cards that are more customizable and
            business card that can be shared via QR codes or website links, and
            open instantly in a phone browser when shared.
          </p>
          <Button
            onClick={handleClickOrderCard}
            size={'lg'}
            className="bg-black text-pure-white text-xl font-medium mr-auto"
          >
            Order a card
          </Button>
        </div>
        <div className="lg:w-1/2 pb-10">
          <Image
            src={'/img/CEO-Photo.png'}
            width={513}
            height={616}
            alt={'CEO Image'}
            className="lg:ml-auto"
          />
        </div>
      </div>
      <div className="lg:w-10/12 md:w-10/12 w-11/12 max-w-screen-2xl mx-auto font-onest lg:flex lg:justify-between lg:items-center lg:flex-row flex flex-col pt-10">
        <div className="lg:w-1/2 pb-10 lg:pb-0">
          <Image
            src={'/img/Rectangle.png'}
            width={584}
            height={562}
            alt={'CEO Image'}
            className="md:mr-auto lg:w-[584px] lg:h-[562px] md:w-[450px] md:h-[338px] w-[336px] h-[263px]"
          />
        </div>
        <div className="flex flex-col gap-5 lg:w-1/2">
          <h2 className="text-4xl font-bold text-white leading-[48px] lg:w-[80%] lg:ml-auto justify-start">
            Why professionals need to use it?
          </h2>
          <p className="text-lg font-normal text-white lg:w-[80%] lg:ml-auto">
            Most people form opinions about a person or a company from the very
            first meeting. Cardneto digital business cards are designed to make
            sure that your first meeting leaves a lasting impression that will
            form a future communication.
          </p>
          <p className="text-lg font-normal text-white lg:w-[80%] lg:ml-auto">
            With our digital cards, not only is your contact information always
            saved when you connect with others, but they can also quickly share
            their information with you.
          </p>
          <Button
            onClick={handleClickOrderCard}
            size={'lg'}
            className="bg-black text-pure-white text-xl font-medium lg:w-[33%] lg:ml-32 mr-auto"
          >
            Order a card
          </Button>
        </div>
      </div>
    </section>
  );
}
