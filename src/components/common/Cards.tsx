import Image from 'next/image';

export default function CardsSection() {
  return (
    <section className="bg-pure-white py-10">
      <div className="lg:w-10/12 md:w-10/12 w-11/12 max-w-screen-2xl mx-auto">
        <h2 className="text-5xl font-bold pb-10 text-center md:w-full w-11/12 leading-[64px]">
          Cardneto Digital Business Cards
        </h2>
        <div className="lg:grid lg:grid-cols-4 md:grid md:grid-cols-2 flex flex-col w-full gap-4">
          <div className="flex flex-col gap-2">
            <Image
              src="/cards-img/Card-Gray.png"
              width={282}
              height={282}
              alt={'Card Image'}
              className="md:w-[282px] md:h-[282px] w-[336px] h-[282px]"
            />
            <h3 className="font-onest text-xl font-medium">
              Cardneto Card Classic
            </h3>
            <p className="">590 MDL</p>
          </div>
          <div className="flex flex-col gap-2">
            <Image
              src="/cards-img/Card-Blue.png"
              width={282}
              height={282}
              alt={'Card Image'}
              className="md:w-[282px] md:h-[282px] w-[336px] h-[282px]"
            />
            <h3 className="font-onest text-xl font-medium">
              Cardneto Card Metal
            </h3>
            <p className="">740 MDL</p>
          </div>
          <div className="flex flex-col gap-2">
            <Image
              src="/cards-img/Card-Metal.png"
              width={282}
              height={282}
              alt={'Card Image'}
              className="md:w-[282px] md:h-[282px] w-[336px] h-[282px]"
            />
            <h3 className="font-onest text-xl font-medium">
              Cardneto Card Metal Custom
            </h3>
            <p className="">890 MDL</p>
          </div>
          <div className="flex flex-col gap-2">
            <Image
              src="/cards-img/Card-Red.png"
              width={282}
              height={282}
              alt={'Card Image'}
              className="md:w-[282px] md:h-[282px] w-[336px] h-[282px]"
            />
            <h3 className="font-onest text-xl font-medium">
              Cardneto Card Classic
            </h3>
            <p className="">590 MDL</p>
          </div>
        </div>
        <div className="lg:grid lg:grid-cols-4 md:grid md:grid-cols-2 gap-4 pt-5">
          <div className="flex flex-col gap-2">
            <Image
              src="/cards-img/Card-Classic.png"
              width={282}
              height={282}
              alt={'Card Image'}
              className="md:w-[282px] md:h-[282px] w-[336px] h-[282px]"
            />
            <h3 className="font-onest text-xl font-medium">
              Cardneto Card Classic
            </h3>
            <p className="">890 MDL</p>
          </div>
          <div className="flex flex-col gap-2">
            <Image
              src="/cards-img/Card-Gray.png"
              width={282}
              height={282}
              alt={'Card Image'}
              className="md:w-[282px] md:h-[282px] w-[336px] h-[282px]"
            />
            <h3 className="font-onest text-xl font-medium">
              Cardneto Card Metal
            </h3>
            <p className="">590 MDL</p>
          </div>
          <div className="flex flex-col gap-2">
            <Image
              src="/cards-img/Card-Gray.png"
              width={282}
              height={282}
              alt={'Card Image'}
              className="md:w-[282px] md:h-[282px] w-[336px] h-[282px]"
            />
            <h3 className="font-onest text-xl font-medium">
              Cardneto Card Metal Custom
            </h3>
            <p className="">590 MDL</p>
          </div>
          <div className="flex flex-col gap-2">
            <Image
              src="/cards-img/Card-Gray.png"
              width={282}
              height={282}
              alt={'Card Image'}
              className="md:w-[282px] md:h-[282px] w-[336px] h-[282px]"
            />
            <h3 className="font-onest text-xl font-medium">
              Cardneto Card Classic
            </h3>
            <p className="">590 MDL</p>
          </div>
        </div>
      </div>
    </section>
  );
}
