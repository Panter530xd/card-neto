'use client';

import CardSlider from '@/components/common/CardSlider';
import RadioGroup from '@/components/common/RadioForColors';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import Image from 'next/image';
import {
  Color,
  CommonColor,
  Product,
  useCart,
} from '@/components/common/CartProvider';
import { useEffect, useState } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/Accordion';
import { calculateDeliveryDates } from '@/dateUtils/dateUtils';
import ProductDetailsSkeleton from '@/components/common/ProductSkeleton';
import LoadingSpinner from '@/components/common/LoadingSpinner';
const {
  formattedToday,
  formattedDeliveryDate,
  formattedOneDayLater,
  formattedThreeDaysLater,
  formattedEightDaysLater,
} = calculateDeliveryDates();

export default function CardDetail({ params }: { params: { slug: string } }) {
  const { addToCart, setSelectedColor, selectedColor } = useCart();
  const [product, setProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedImageUrl, setSelectedImageUrl] = useState<string[]>([]);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);
  const [defaultImageUrl, setDefaultImageUrl] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(
          `https://cardneto.com/api/products/${params.slug}`,
        );
        const data = await response.json();
        setProduct(data);
        setDefaultImageUrl(data.mainImageUrl);
        setLoading(false);
        console.log('Data', data);
        // Other setup logic...
      } catch (error) {
        console.error('Error fetching product:', error);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [params.slug]);

  if (!product) {
    return <ProductDetailsSkeleton />;
  }

  const handleColorChange = (productId: number, color: CommonColor | null) => {
    setSelectedColor(productId, color);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleImageSelect = (imageUrls: string[], selectedIndex: number) => {
    setSelectedImageUrl(imageUrls);
    setSelectedImageIndex(selectedIndex);
  };

  const handleAddToCart = () => {
    if (product && selectedColor) {
      addToCart(
        product,
        quantity,
        selectedColor?.[product.id],
        selectedImageIndex,
      );
    } else {
      console.error('Product or selected color is not available.');
    }
  };
  const selectedProductColor = selectedColor?.[product.id];
  const images = selectedProductColor?.productImages?.map(
    (image) => image.url,
  ) || [product.mainImageUrl];

  const colors: Color[] = product.productColors.map((productColor) => ({
    id: productColor.id,
    name: productColor.name,
    hexCode: productColor.hexCode,

    productImages: productColor.productImages,
    selected: false,
  }));

  return (
    <section>
      <div className="lg:w-10/12 md:w-10/12 w-11/12 mx-auto max-w-screen-2xl pt-5">
        <p className="text-black">Home \ {product.name}</p>
      </div>
      <div className="md:w-10/12 w-11/12 mx-auto max-w-screen-2xl pt-5 lg:flex lg:flex-row flex flex-col gap-10 ">
        <div className="lg:w-4/5 md:-ml-4 -ml-0">
          <CardSlider
            images={images}
            selectedImageUrl={selectedImageUrl}
            defaultImageUrl={defaultImageUrl}
            selectedColor={selectedColor[product.id]}
            onImageSelect={handleImageSelect}
          />
        </div>
        <div className="lg:w-[54%] md:w-full flex flex-col gap-2">
          <h2 className="text-[32px] leading-[43.2px] font-bold text-black w-4/5 md:w-full">
            {product.name}
          </h2>
          <div className="flex items-center">
            {[...Array(product.averageRating)].map((_, i) => (
              <svg
                key={i}
                className="w-5 h-5 fill-current text-[#FFC700]"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 1l2.6 5.3L18 7.4l-4.1 4.1.9 5.3L10 15.4l-4.8 2.4.9-5.3L2 7.4l5.4-.1L10 1z"
                  clipRule="evenodd"
                />
              </svg>
            ))}
            <p className="font-medium text-black ml-5">
              {product.amountSold}+ Sold
            </p>
          </div>
          <p className="text-2xl text-black font-medium">{product.price} MDL</p>
          <hr className="border-0 bg-border h-[1px] w-full mt-3" />
          <div className="mr-auto">
            <RadioGroup
              colors={colors}
              onSelectColor={(color: CommonColor | null) =>
                handleColorChange(product.id, color)
              }
              selectedColor={selectedColor?.[product.id]}
            />
          </div>
          <div className="pt-5">
            <p className="font-medium text-black">Quantity</p>
          </div>
          <div className="flex items-center justify-between border border-border w-[133px] rounded-md mr-auto">
            <Button
              variant={'ghost'}
              onClick={decreaseQuantity}
              className="text-lg text-gray"
            >
              <hr className="border-0 bg-gray h-[1.5px] w-3" />
            </Button>
            <p className="mx-2 text-black">{quantity}</p>
            <Button
              variant={'ghost'}
              onClick={increaseQuantity}
              className="text-lg text-gray"
            >
              +
            </Button>
          </div>

          {loading ? (
            <Button
              size="lg"
              className="font-medium md:w-[161px] text-base"
              disabled={loading}
            >
              <div className="flex items-center justify-center gap-2">
                <LoadingSpinner /> Adding to Cart...
              </div>
            </Button>
          ) : (
            <Link href="/cart">
              <Button
                onClick={handleAddToCart}
                className={`mt-5 mr-auto w-[161px] h-[40px] font-medium text-base`}
                disabled={loading}
              >
                <div className="flex items-center gap-2">
                  <span>Add to Cart</span>
                </div>
              </Button>
            </Link>
          )}
          <hr className="border-0 bg-border h-[1px] w-full mt-5" />
          <div className="flex gap-3 py-6">
            <p className="text-base font-medium">
              Shipping to <span className="font-bold">Moldova</span>
            </p>

            <Image
              src={'/img/moldova-flag.png'}
              width={24}
              height={3}
              priority
              alt="Moldova Flag"
              className="w-[24px] h-[15px]"
            />
          </div>
          <div className="w-full pb-3">
            <p className="text-black font-medium text-base">
              Order today, and you&apos;ll receive your package between
              <span className="font-bold">
                {' '}
                {formattedToday} and {formattedDeliveryDate}.
              </span>
            </p>
          </div>
          <div className="md:flex md:flex-row md:items-center md:gap-0 flex flex-col gap-5 justify-between text-center text-black font-medium items-center bg-white border border-gray rounded-md md:pt-0 pt-3 pb-2 px-5">
            <div className="flex flex-col gap-1 md:ml-8">
              <Image
                src="/icons/icons.svg"
                width={24}
                height={24}
                priority
                alt="icon"
                className="mx-auto"
              />
              <h3>Order Now</h3>
              <p className="text-[13px]">{formattedToday}</p>
            </div>

            <Image
              src="/icons/Vector-height.svg"
              width={4}
              height={74}
              alt={'Border'}
              className="hidden md:flex"
            />
            <Image
              src="/icons/Vector-mobile.svg"
              width={248}
              height={4}
              alt={'Border'}
              className="md:hidden block mx-auto"
            />

            <div className="flex flex-col gap-1 md:-mr-8 md:pr-8">
              <Image
                src="/icons/icons1.svg"
                width={24}
                height={24}
                priority
                alt="icon"
                className="mx-auto"
              />
              <h3>We process it</h3>
              <p className="text-[13px]">
                {formattedToday} - {formattedOneDayLater}
              </p>
            </div>

            <Image
              src="/icons/Vector-height.svg"
              width={4}
              height={74}
              alt={'Border'}
              className="hidden md:flex md:-mr-6"
            />
            <Image
              src="/icons/Vector-mobile.svg"
              width={248}
              height={4}
              alt={'Border'}
              className="md:hidden block mx-auto"
            />

            <div className="flex flex-col gap-1">
              <Image
                src="/icons/icons2.svg"
                width={24}
                height={24}
                priority
                alt="icon"
                className="mx-auto"
              />
              <h3>Estimated Delivery</h3>
              <p className="text-[13px]">
                {formattedThreeDaysLater} - {formattedEightDaysLater}
              </p>
            </div>
          </div>
          <Accordion
            type="multiple"
            defaultValue={['item-1', 'item-2', 'item-3']}
            className="flex flex-col gap-5 py-5"
          >
            <AccordionItem value="item-1">
              <AccordionTrigger>Description</AccordionTrigger>
              <AccordionContent>
                <p>{product.descriptions.Description}</p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Compatibility</AccordionTrigger>
              <AccordionContent>
                <p>{product.descriptions.Compatability}</p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Shipping &amp; Return</AccordionTrigger>
              <AccordionContent>
                <p>{product.descriptions['Shipping & Return']}</p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
}
