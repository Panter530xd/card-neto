'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

export interface Color {
  id: number;
  name: string;
  hexCode: string;
  selected: boolean;
  productImages: ProductImage[];
}

export interface CommonColor extends Color {
  selected: boolean;
}

interface ProductImage {
  id: number;
  url: string;
  productColorId: number;
  createdAt: string;
  updatedAt: string;
}

export interface Product {
  id: number;
  name: string;
  price: number;
  mainImageUrl: string;
  amountSold: number;
  descriptions: {
    Description: string;
    Compatability: string;
    'Shipping & Return': string;
  };
  createdAt: string;
  updatedAt: string;
  productColors: Color[];
  averageRating: number;
}

export interface CartItem {
  product: Product;
  color: CommonColor;
  selectedColor: CommonColor | null;
  quantity: number;
  name: string;
  image: { index: number; url: string };
  price: number;
}

interface CartContextType {
  cartItems: CartItem[];
  totalPrice: number;
  selectedColor: CommonColor | null;
  setSelectedColor: (color: CommonColor) => void;
  addToCart: (
    product: Product,
    quantity: number,
    selectedColor: CommonColor | null,
    imageIndex: number,
  ) => void;
  removeFromCart: (index: number) => void;
  increaseQuantity: (index: number) => void;
  decreaseQuantity: (index: number) => void;
  setCartItems: React.Dispatch<React.SetStateAction<CartItem[]>>;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    if (typeof window !== 'undefined') {
      const storedCartItems = localStorage.getItem('cartItems');
      return storedCartItems ? JSON.parse(storedCartItems) : [];
    } else {
      return [];
    }
  });

  const [selectedColor, setSelectedColor] = useState<CommonColor | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }
  }, [cartItems]);

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  const addToCart = (
    product: Product,
    quantity: number,
    selectedColor: CommonColor | null,
    imageIndex: number,
  ) => {
    if (selectedColor) {
      const selectedProductColor = product.productColors.find(
        (productColor) => productColor.id === selectedColor.id,
      );

      if (selectedProductColor) {
        const newItem: CartItem = {
          product: product,
          color: selectedProductColor,
          selectedColor: selectedColor,
          quantity,
          name: product.name,
          image: {
            index: imageIndex,
            url: selectedProductColor.productImages[imageIndex]?.url,
          },
          price: product.price,
        };

        setCartItems([...cartItems, newItem]);
        console.log('New item added to cart:', newItem);
      } else {
        console.error('Selected color not found in product colors.');
      }
    } else {
      console.error('No color selected.');
    }
  };

  const removeFromCart = (index: number) => {
    const newCartItems = [...cartItems];
    newCartItems.splice(index, 1);
    setCartItems(newCartItems);
  };

  const increaseQuantity = (index: number) => {
    const newCartItems = [...cartItems];
    newCartItems[index].quantity += 1;
    setCartItems(newCartItems);
  };

  const decreaseQuantity = (index: number) => {
    const newCartItems = [...cartItems];
    if (newCartItems[index].quantity > 1) {
      newCartItems[index].quantity -= 1;
      setCartItems(newCartItems);
    }
  };

  const contextValue: CartContextType = {
    cartItems,
    totalPrice,
    selectedColor,
    setSelectedColor,
    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    setCartItems,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};
