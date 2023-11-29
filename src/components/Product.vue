<script lang="ts" setup>
import { useRoute } from 'vue-router';

const route = useRoute();
const id = route.params.id as string;

import { useProduct } from '../utils/useProducts';
import Rating from './Rating.vue';

const { data: product, isLoading, error } = useProduct(parseInt(id));
</script>

<template>
  <div v-if="isLoading">Loading...</div>
  <div v-else>
    <div v-if="error">Error: {{ error }}</div>
    <div v-else>
      <p class="text-gray-500 text-sm">
        Products &nbsp;&nbsp;>&nbsp;&nbsp;
        <span class="capitalize">{{ product?.category }}</span>
      </p>
      <h1 class="mt-3 text-4xl uppercase">{{ product?.title }}</h1>
      <div class="flex items-center gap-x-4 text-sm font-medium text-gray-500">
        <Rating class="my-3" :rating="product?.rating!" />
        |
        <p class="">
          <span class="font-bold text-gray-600">{{ product?.stock }}</span>
          items in stock
        </p>
        |
        <p>
          Brand:
          <span class="uppercase font-bold text-gray-600">{{
            product?.brand
          }}</span>
        </p>
      </div>
      <h3 class="text-3xl my-3">${{ product?.price }}</h3>
    </div>
  </div>
</template>
