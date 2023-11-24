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
      <h1 class="text-4xl uppercase">{{ product?.title }}</h1>
      <h2 class="text-xl">{{ product?.brand }}</h2>
      <span>${{ product?.price }}</span>
      <p>{{ product?.stock }} items in stock</p>
      <p>{{ product?.rating }} rating</p>
      <p>{{ product?.category }}</p>
    </div>
  </div>
</template>
