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

interface SelectedColorsMap {
  [productId: number]: CommonColor | null;
}

const initialSelectedColors: SelectedColorsMap = {};

interface CartContextType {
  cartItems: CartItem[];
  totalPrice: number;
  selectedColor: SelectedColorsMap;
  setSelectedColor: (productId: number, color: CommonColor | null) => void;
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

  const [selectedColor, setSelectedColor] = useState<SelectedColorsMap>({});

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
    if (
      !selectedColor ||
      !selectedColor.productImages ||
      !selectedColor.productImages[imageIndex]
    ) {
      console.error('Selected color or its images are not available.');
      return;
    }

    const existingItemIndex = cartItems.findIndex(
      (item) =>
        item.product.id === product.id &&
        item.selectedColor?.id === selectedColor.id,
    );

    if (existingItemIndex !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex].quantity += quantity;
      setCartItems(updatedCartItems);
    } else {
      const imageUrl = selectedColor.productImages[imageIndex].url || '';

      const newItem: CartItem = {
        product: product,
        color: selectedColor,
        selectedColor: selectedColor,
        quantity,
        name: product.name,
        image: {
          index: imageIndex,
          url: imageUrl,
        },
        price: product.price,
      };

      setCartItems([...cartItems, newItem]);
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

  const setSelectedColorState = (
    productId: number,
    color: CommonColor | null,
  ) => {
    setSelectedColor((prevSelectedColor) => {
      return {
        ...prevSelectedColor,
        [productId]: color,
      };
    });
  };

  const contextValue: CartContextType = {
    cartItems,
    totalPrice,
    selectedColor,
    setSelectedColor: setSelectedColorState,
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
