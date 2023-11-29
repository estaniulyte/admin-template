import { defineStore } from 'pinia';
import { Product, useProducts } from '../utils/useProducts';
import { computed, ref } from 'vue';

export const useProductStore = defineStore('ProductStore', () => {
  const searchQuery = ref<string>('');
  const brandFilter = ref<string>('');

  const searchedData = ref<Product[]>();
  const filteredData = ref<Product[]>();

  const { data, isLoading, error } = useProducts();

  const setTitleFilter = (query: string) => {
    searchQuery.value = query;
    searchedData.value = useProducts([
      '/search?q=' + searchQuery.value,
    ]).data.value?.products;
  };

  function setBrandFilter(brand: string) {
    filteredData.value = useProducts(['?limit=0']).data.value?.products;
    brandFilter.value = brand;
  }

  const filteredProducts = computed(() => {
    if (searchQuery.value === '' && brandFilter.value === '')
      return data.value?.products;
    else {
      if (searchQuery.value) {
        return searchedData.value;
      } else if (searchQuery.value == '' && brandFilter.value)
        return data.value?.products.filter((product) => {
          if (brandFilter.value) {
            return product.brand
              .toLowerCase()
              .includes(brandFilter.value.toLowerCase());
          }
        });
    }
  });

  return {
    products: filteredProducts,
    isLoading,
    error,
    setTitleFilter,
    setBrandFilter,
  };
});
