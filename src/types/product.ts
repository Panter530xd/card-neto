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
  productColors: {
    id: number;
    name: string;
    hexCode: string;
    productId: number;
    createdAt: string;
    updatedAt: string;
    productImages: {
      id: number;
      url: string;
      productColorId: number;
      createdAt: string;
      updatedAt: string;
    }[];
  }[];
  averageRating: number;
}

interface ProductImage {
  id: number;
  url: string;
  productColorId: number;
  createdAt: string;
  updatedAt: string;
}

export interface Color {
  id: number;
  name: string;
  hexCode: string;
  productId: number;
  createdAt: string;
  updatedAt: string;
  productImages: ProductImage[];
  selected: boolean;
}

export interface CommonColor {
  id: number;
  name: string;
  hexCode: string;
  productId?: number;
  createdAt?: string;
  updatedAt?: string;
  productImages?: ProductImage[];
}
