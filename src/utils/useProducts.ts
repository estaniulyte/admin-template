import useData from './useData';

export interface Product {
  id: number;
  title: string;
  category: string;
  brand: string;
  price: number;
  stock: number;
  rating: number;
}

export const useProducts = () =>
  useData<{ products: Product[] }>('/products', {
    params: { search: 'iphone' },
  });

export const useProduct = (id: number) => useData<Product>('/products/' + id);
