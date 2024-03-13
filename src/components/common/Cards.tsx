'use client';

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

interface Product {
  id: number;
  name: string;
  price: number;
  mainImageUrl: string;
  amountSold: number;
  descriptions: {
    Description: string;
    Compatibility: string;
    'Shipping & Return': string;
  };
  createdAt: string;
  updatedAt: string;
}

export default function CardsSection() {
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://cardneto.com/api/products');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <section id="#cardsSection" className="bg-pure-white py-10">
      <div className="lg:w-10/12 md:w-10/12 w-11/12 max-w-screen-2xl mx-auto">
        <h2 className="text-5xl font-bold pb-10 text-center md:w-full w-11/12 leading-[64px]">
          Cardneto Digital Business Cards
        </h2>
        <div className="lg:grid lg:grid-cols-4 md:grid md:grid-cols-2 flex flex-col w-full gap-6">
          {products.map((product) => (
            <div key={product.id} className="flex flex-col gap-2">
              <Link href={`/card/${product.id}`} passHref>
                <div className="border border-border flex justify-center">
                  <Image
                    src={product.mainImageUrl}
                    width={282}
                    height={282}
                    alt={product.name}
                    className="w-full"
                  />
                </div>
                <h3 className="font-onest text-xl font-medium">
                  {product.name}
                </h3>
                <p className="text-base">{`${product.price} MDL`}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
