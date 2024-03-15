'use client';

import { Button } from '@/components/ui/Button';
import Image from 'next/image';
import Link from 'next/link';
import { CommonColor, useCart } from '@/components/common/CartProvider';
import RadioGroup from '@/components/common/RadioForColors';
import { useEffect, useState } from 'react';
import LoadingSpinner from '@/components/common/LoadingSpinner';

export default function CardPage() {
  const {
    cartItems,
    decreaseQuantity,
    increaseQuantity,
    removeFromCart,
    setCartItems,

    totalPrice,
  } = useCart();

  const [isMounted, setIsMounted] = useState(false);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  const handleColorChange = (colorId: number, index: number) => {
    const updatedCartItems = [...cartItems];
    const selectedItem = updatedCartItems[index];

    const selectedProductColor = selectedItem.product.productColors.find(
      (productColor) => productColor.id === colorId,
    );

    if (selectedProductColor) {
      selectedItem.selectedColor = selectedProductColor;
    }

    console.log('Updated Cart Items:', updatedCartItems);
    setCartItems(updatedCartItems);
  };

  const handleCheckout = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <section>
      <div className="lg:w-10/12 md:w-10/12 w-11/12 mx-auto max-w-screen-2xl pt-5 text-black">
        <h2 className="text-5xl font-bold">Cart</h2>
        <div className="flex items-center gap-2 pt-5 pb-10 md:pb-0">
          <p className="font-medium">Cart</p>
          <hr className="border-0 bg-black h-[1px] w-[108px]" />
          <p className="font-medium">Information</p>
          <hr className="border-0 bg-black h-[1px] w-[108px]" />
          <p className="font-medium">Shipping</p>
          <hr className="border-0 bg-black h-[1px] w-[108px]" />
          <p className="font-medium">Payment</p>
        </div>
        <div className=" hidden md:flex items-center justify-between pt-16 pb-8">
          <h5 className="font-medium text-[17px] leading-[25.5px]">Product</h5>
          <div className="grid grid-cols-2 lg:gap-60 md:gap-20">
            <div>
              <h5 className="font-medium text-[17px] leading-[25.5px]">
                Quantity
              </h5>
            </div>
            <div>
              <h5 className="font-medium text-[17px] leading-[25.5px] text-right">
                Total
              </h5>
            </div>
          </div>
        </div>

        {/* Cart items */}
        {cartItems.length === 0 ? (
          <div className="py-20 flex justify-center items-center">
            <p className="text-center text-2xl font-medium">Cart is empty.</p>
          </div>
        ) : (
          cartItems.map((item, index) => (
            <div key={index} className="border-b border-t border-gray py-10">
              <div className="md:flex md:flex-row md:items-center md:justify-between flex flex-col items-center justify-center mx-auto">
                <div className="flex items-center">
                  <Image
                    src={item.image?.url}
                    width={128}
                    height={128}
                    alt={item.name}
                  />
                  <div className="flex flex-col gap-1 -mt-10 md:-mt-0">
                    <h4 className="text-xl font-medium w-3/4 md:w-full">
                      {item.name}
                    </h4>
                    <div className="flex items-center gap-3">
                      <div>
                        <p>{item.selectedColor?.name}</p>
                      </div>
                      <div className="-mt-8">
                        <RadioGroup
                          colors={item.product?.productColors}
                          onSelectColor={(colorId) =>
                            handleColorChange(colorId.id, index)
                          }
                          selectedColor={item.selectedColor}
                          labelText=""
                          selectedColorName={''}
                        />
                      </div>
                    </div>
                    <p className="hidden md:flex">{`MDL${item.price}.00`}</p>
                    <Button
                      variant={'ghost'}
                      size={'sm'}
                      className="hidden md:block font-medium text-base underline p-0 mt-0 mr-auto"
                      onClick={() => removeFromCart(index)}
                    >
                      Remove
                    </Button>
                  </div>
                </div>
                <div className="md:flex md:flex-row flex flex-col-reverse md:ml-auto -mt-7 md:-mt-0 items-center lg:gap-[170px] md:gap-[50px]">
                  <div className="flex items-center mt-2 md:mt-0">
                    <div className="flex items-center md:justify-between border border-border lg:w-[133px] md:w-[56px] md:h-[40px] w-[48px] h-[29] rounded-md ml-auto">
                      <Button
                        variant={'ghost'}
                        onClick={() => decreaseQuantity(index)}
                        className="text-lg text-gray hidden lg:flex"
                      >
                        <hr className="border-0 bg-gray h-[1.5px] w-3" />
                      </Button>
                      <p className="mx-auto text-black">{item.quantity}</p>
                      <Button
                        variant={'ghost'}
                        onClick={() => increaseQuantity(index)}
                        className="text-lg text-gray hidden lg:flex"
                      >
                        +
                      </Button>
                    </div>
                    <div className="md:hidden mr-auto flex w-1/4">
                      <Button
                        variant="ghost"
                        className="underline font-medium"
                        onClick={() => removeFromCart(index)}
                      >
                        Remove
                      </Button>
                    </div>
                  </div>
                  <div className="ml-9 md:ml-0">
                    <p className="text-lg">{`MDL${
                      item.price * item.quantity
                    }.00`}</p>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
        {/* End of cart items */}

        {/* Content after cart items */}
        {cartItems.length !== 0 && (
          <div>
            <div className="flex items-center justify-end lg:gap-40 gap-10 py-10">
              <h5 className="text-xl font-medium">Subtotal:</h5>
              <p className="font-medium text-xl">{`MDL ${totalPrice.toLocaleString(
                undefined,
                {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                },
              )}`}</p>
            </div>
            <div className="md:flex md:flex-row flex flex-col items-center justify-end md:gap-10 gap-5 pb-10">
              <p className="text-[12px] md:w-[372px]  w:full text-right">
                By clicking the checkout button, you hereby agree to and accept
                <span className="text-blue cursor-pointer">
                  {' '}
                  our Terms of Service and Sale
                </span>
                , Refund Policy, and{' '}
                <span className="text-blue cursor-pointer">Privacy Policy</span>
              </p>
              {loading ? (
                <Button
                  size="lg"
                  className="font-medium md:w-[141px] text-base"
                  disabled={loading}
                >
                  <div className="flex items-center justify-center gap-2">
                    <LoadingSpinner /> Continue...
                  </div>
                </Button>
              ) : (
                <Link href="/checkout" className="w-full md:w-[141px]">
                  <Button
                    size="lg"
                    className="font-medium w-full md:w-[141px] text-base"
                    onClick={handleCheckout}
                  >
                    Continue
                  </Button>
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
