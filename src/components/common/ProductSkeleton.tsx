// ProductDetailsSkeleton.jsx
import React from 'react';

export default function ProductDetailsSkeleton() {
  return (
    <section>
      <div className="lg:w-10/12 md:w-10/12 w-11/12 mx-auto max-w-screen-2xl pt-5">
        <p className="text-black">
          Home \{' '}
          <span className="animate-pulse bg-neutral-400 h-4 w-52 inline-block"></span>
        </p>
      </div>
      <div className="md:w-10/12 w-11/12 mx-auto max-w-screen-2xl pt-5 lg:flex lg:flex-row flex flex-col gap-10 ">
        <div className="lg:w-4/5 md:-ml-4 -ml-0">
          <div className="animate-pulse bg-neutral-400 h-[500px] md:w-2/3 w-full"></div>
        </div>
        <div className="lg:w-[54%] md:w-full flex flex-col gap-2">
          <h2 className="text-[32px] leading-[43.2px] font-bold text-black w-4/5 md:w-full">
            <span className="animate-pulse bg-neutral-400 h-8 w-72 inline-block"></span>
          </h2>
          <div className="flex items-center">
            <div className="animate-pulse bg-neutral-400 h-5 w-20 ml-5"></div>
          </div>
          <p className="text-2xl text-black font-medium">
            <span className="animate-pulse bg-neutral-400 h-8 w-32 inline-block"></span>
          </p>
          <hr className="border-0 bg-border h-[1px] w-full mt-3" />
          <div className="mr-auto">
            <div className="animate-pulse bg-neutral-400 h-8 w-72"></div>
          </div>
          <div className="pt-5">
            <p className="font-medium text-black">Quantity</p>
          </div>
          <div className="flex items-center justify-between border border-border w-[133px] rounded-md mr-auto">
            <div className="animate-pulse bg-neutral-400 h-[1.5px] w-3"></div>
            <div className="animate-pulse bg-neutral-400 h-5 w-8"></div>
            <div className="animate-pulse bg-neutral-400 h-5 w-5"></div>
          </div>
          <div className="mt-5 mr-auto w-[161px] h-[40px] font-medium text-base">
            <div className="animate-pulse bg-neutral-400 h-8 w-32"></div>
          </div>
          <hr className="border-0 bg-border h-[1px] w-full mt-5" />
          <div className="flex gap-3 py-6">
            <p className="text-base font-medium">
              Shipping to <span className="font-bold">Moldova</span>
            </p>
            <div className="animate-pulse bg-neutral-400 h-3 w-24"></div>
          </div>
          <div className="w-full pb-3">
            <span className="animate-pulse bg-neutral-400 h-6 w-80 inline-block"></span>
          </div>
          <div className="md:flex md:flex-row md:items-center md:gap-5 flex flex-col gap-5 justify-between text-center text-black font-medium items-center bg-white border border-gray rounded-md md:pt-0 pt-3 pb-2 px-5">
            <div className="flex flex-col gap-1 md:ml-8">
              <div className="animate-pulse bg-neutral-400 h-72 w-[300px]"></div>
              <div className="animate-pulse bg-neutral-400 h-72 w-[300px]"></div>
              <div className="animate-pulse bg-neutral-400 h-72 w-[300px]"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
