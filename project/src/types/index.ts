export interface Product {
  id: string;
  name: string;
  price: number;
  category: 'Hoodies' | 'T-Shirts' | 'Vests' | 'Track Pants';
  image: string;
  sizes: Array<'S' | 'M' | 'L' | 'XL' | 'XXL'>;
}

export interface CartItem extends Product {
  quantity: number;
  selectedSize: string;
}