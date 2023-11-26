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

export const useProducts = (params?: String[]) => {
  const { data, isLoading, error } = useData<{ products: Product[] }>(
    '/products',
    params
  );

  return {
    data,
    isLoading,
    error,
  };
};

export const useProduct = (id: number) => useData<Product>('/products/' + id);
