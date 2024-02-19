import Image from 'next/image';

export default function Features() {
  return (
    <section className="bg-[url('/img/Features.png')] py-10">
      <div className="lg:w-10/12 md:w-10/12 w-11/12 max-w-screen-2xl mx-auto font-onest flex flex-col gap-5 pb-5">
        <h2 className="font-onest text-5xl font-bold md:text-left md:w-11/12">
          Features
        </h2>
        <p className='className="text-lg text-left md:w-11/12 lg:w-[45%]'>
          Get to know why Cardneto is a great way to connect and grow your
          network with these functionality.
        </p>
        <div className="lg:flex lg:flex-row lg:justify-between lg:items-center flex flex-col gap-5 md:gap-7 lg:gap-5 ">
          <div className="lg:w-1/2 border-border border rounded-3xl">
            <Image
              src="/img/image21.png"
              width={682}
              height={275}
              alt={'Feature image'}
            />
            <div className="p-8 flex flex-col gap-2">
              <h4 className="font-medium text-2xl">Multiple Integrations</h4>
              <p className="lg:w-[87%] w-[95%]">
                Make your profile uniquely yours by adding your social media,
                work info, and more. When someone scans your Cardneto digital
                business card, they see everything about you, making it super
                easy to connect and chat.
              </p>
            </div>
          </div>
          <div className="lg:w-1/2 border-border border rounded-3xl">
            <Image
              src="/img/image23.png"
              width={682}
              height={275}
              alt={'Feature image'}
            />
            <div className="p-8 flex flex-col gap-2">
              <h4 className="font-medium text-2xl">Digital profile</h4>
              <p className="lg:w-[87%] w-[95%]">
                You will have a Linktree digital profile on internet that people
                could have access to if they scan your Cardneto digital business
                card. Customize it, integrate services you want so people could
                communicate with you!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:w-10/12 md:w-10/12 w-11/12 max-w-screen-2xl mx-auto font-onest flex flex-col gap-5">
        <div className="lg:flex lg:flex-row lg:justify-between lg:items-center flex flex-col gap-5 md:gap-7 lg:gap-5">
          <div className="lg:w-1/2 border-border border rounded-3xl">
            <Image
              src="/img/image27.png"
              width={682}
              height={275}
              alt={'Feature image'}
            />
            <div className="p-8 flex flex-col gap-2">
              <h4 className="font-medium text-2xl">Collect leads</h4>
              <p className="lg:w-[87%] w-[95%]">
                With Cardneto, it's simple to keep track of who's interested in
                you. Find out who has connected you. Whether you meet people in
                person or online, Cardneto helps you connect and expand your
                connections effortlessly.
              </p>
            </div>
          </div>
          <div className="lg:w-1/2 border-border border rounded-3xl">
            <Image
              src="/img/image22.png"
              width={682}
              height={275}
              alt={'Feature image'}
            />
            <div className="p-8 flex flex-col gap-2">
              <h4 className="font-medium text-2xl">It’s in your browser</h4>
              <p className="lg:w-[87%] w-[95%]">
                Digital profile is just a click away with Cardneto, right in
                your browser. No need for extra apps – it's all there at your
                fingertips. Networking becomes a breeze, and you can connect
                with others wherever you are on your professional journey.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
