<script lang="ts" setup>
import { useRoute } from 'vue-router';

const route = useRoute();
const id = route.params.id as string;

import { useProduct } from '../utils/useProducts';

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
      <h2 class="text-xl">{{ product?.brand }}</h2>
      <span>${{ product?.price }}</span>
      <p>{{ product?.stock }} items in stock</p>
      <p>{{ product?.rating }} rating</p>
    </div>
  </div>
</template>
