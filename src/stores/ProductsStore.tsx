import { defineStore } from 'pinia';
import { useProducts } from '../utils/useProducts';

export const useProductStore = defineStore('ProductStore', () => {
  const { data, isLoading, error } = useProducts();

  return {
    products: data,
    isLoading,
    error,
  };
});
