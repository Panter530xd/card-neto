'use client';

import { Button } from '@/components/ui/Button';
import Image from 'next/image';
import { Input } from '@/components/ui/Input';
import ShippingAddressForm from '@/components/common/ShippingForm';
import { useCart } from '@/components/common/CartProvider';
import { useEffect, useState } from 'react';

export default function CheckoutPage() {
  const { cartItems, totalPrice } = useCart();

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <section className="relative">
      <div className="bg-pure-white lg:hidden md:flex flex gap-5 py-6 border-b border-border">
        <p className="ml-5 md:ml-16">Show order summary</p>
        <Image
          src="/icons/chevron-down.svg"
          alt={'chevron-down'}
          width={18}
          height={18}
        />
      </div>
      <div className="lg:flex lg:flex-row lg:gap-52 gap-0 flex flex-col-reverse max-w-screen-2xl mx-auto">
        <div className="lg:w-10/12 lg:ml-[103px] md:w-10/12 w-11/12 mx-auto py-10">
          <div>
            <h2 className="text-5xl font-bold">Checkout</h2>
          </div>
          <div className="flex items-center gap-2 pt-5 pb-10 md:pb-0">
            <p className="font-medium text-secondary underline">Cart</p>
            <hr className="border-0 bg-black h-[1px] w-[108px]" />
            <p className="font-medium">Information</p>
            <hr className="border-0 bg-black h-[1px] w-[108px]" />
            <p className="font-medium">Shipping</p>
            <hr className="border-0 bg-black h-[1px] w-[108px]" />
            <p className="font-medium">Payment</p>
          </div>

          <ShippingAddressForm />
        </div>

        <div className="absolute top-0 left-[60%] bottom-0 right-0 bg-white border-l border-gray hidden lg:block"></div>
        <div className=" lg:w-[50%] relative z-10 bg-white flex lg:justify-end lg:mr-[103px] mr-0 py-10">
          <div className="flex flex-col gap-5 w-11/12 mx-auto md:w-10/12 lg:w-full">
            {cartItems.map((item) => (
              <div key={item.product.id} className="lg:flex">
                <div className="lg:flex lg:items-start md:flex flex gap-4 lg:mr-auto">
                  <div className="bg-pure-white py-1 border border-border flex items-center justify-center lg:mr-auto flex-shrink-0">
                    <Image
                      src={item.image.url}
                      width={72}
                      height={82}
                      alt={'Card Classic'}
                      className=""
                    />
                  </div>
                  <div className="lg:flex lg:flex-col md:flex md:flex-row md:flex-grow flex flex-grow justify-between md:justify-between gap-2">
                    <div>
                      <h5 className="font-medium text-xl mt-2">{item.name}</h5>
                      <div className="hiden lg:hidden md:flex flex items-center justify-start w-[48px] h-[29px] border border-border rounded-md bg-pure-white p-2 mt-2">
                        <p>{item.quantity}</p>
                      </div>
                    </div>
                    <div className="md:flex md:items-center flex items-center -ml-14 md:-ml-0 lg:mt-0 mt-9">
                      <p className="text-sm">{`MDL${
                        item.price * item.quantity
                      }.00`}</p>
                    </div>
                  </div>
                </div>
                <div className="mt-2 text-base hidden lg:flex">
                  <p>{`x-${item.quantity}`}</p>
                </div>
              </div>
            ))}
            <div className="flex flex-col gap-4 pt-5">
              <h3 className="font-medium text-2xl">Discount Code</h3>
              <p className="text-sm md:w-11/12">
                If you have an discount code to activate for Cardneto products,
                than write below the code and apply it!
              </p>
              <div className="md:flex md:flex-row flex flex-col gap-4 items-center">
                <Input
                  type="text"
                  placeholder="Discount Code"
                  className="border border-[#BBBBBB] rounded-md px-2 py-1 lg:w-[282px] lg:h-[44px] md:h-[44px] md:w-[519px] w-full h-[44px]"
                />
                <Button
                  variant="secondary"
                  size="lg"
                  className="md:h-[44px] md:w-[117px] w-full h-[44px] text-base font-medium"
                >
                  Apply
                </Button>
              </div>
            </div>
            <div className="flex justify-between items-center py-10">
              <div className="flex flex-col gap-4 text-base text-left">
                <p>Subtotal</p>
                <p>Shipping</p>
                <p className="font-medium text-xl">Total</p>
              </div>
              <div className="flex flex-col gap-4 text-base text-right">
                <p className="leading-3">{`MDL ${totalPrice.toLocaleString(
                  undefined,
                  {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  },
                )}`}</p>
                <p>MDL1,870.00</p>
                <p className="font-medium text-xl">{`MDL${(
                  totalPrice + 1870
                ).toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}`}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
