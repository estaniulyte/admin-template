<script lang="ts" setup>
import { Product } from '../utils/useProducts';
import InputField from './InputField.vue';
import Checkbox from './Checkbox.vue';
import { storeToRefs } from 'pinia';
import { search } from '../config/iconPaths';

import { useProductStore } from '../stores/ProductsStore';
import SvgIcon from './SvgIcon.vue';
import { notification } from '../config/iconPaths';
import Button from './Button.vue';

const { products, isLoading, error } = storeToRefs(useProductStore());

const { setBrandFilter, setTitleFilter } = useProductStore();
</script>

<template>
  <div class="mx-1 mb-2 md:mx-3 md:mb-4 lg:mx-[40px] lg:mb-[33px]">
    <div class="flex justify-between mt-3 mb-8 md:mt-[56px] md:mb-[44px]">
      <InputField
        class="w-2/3"
        placeholder="Search"
        :iconPath="search"
        :onEnter="(v: string) => console.log(v)"
      />
      <div class="flex space-x-[20px]">
        <Button :notifications="true">
          <SvgIcon :path="notification" />
        </Button>
        <Button>
          <figure>
            <img
              class="rounded-sm"
              src="https://avatars.githubusercontent.com/u/43463977?v=4"
              alt="avatar image"
            />
          </figure>
        </Button>
      </div>
    </div>
    <h1 class="text-black font-medium text-2xl mb-[30px]">
      Products Information
    </h1>
    <div
      class="grid gap-3 grid-colos-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-[34px]"
    >
      <InputField
        placeholder="Enter Title"
        label="Title"
        :onEnter="(v: string) => setTitleFilter(v)"
      />
      <InputField
        placeholder="Enter Brand"
        label="Brand"
        :onEnter="(v: string) => setBrandFilter(v)"
      />
    </div>
    <div v-if="isLoading">Loading...</div>
    <div v-else>
      <div v-if="error">Error: {{ error }}</div>
      <ul v-else>
        <table
          class="w-full bg-white table-auto overflow-x-auto sm:overflow-hidden lg:table-fixed"
        >
          <thead class="border-1 border-b border-[#F2F2F2]">
            <tr class="font-semibold h-[78px] text-left">
              <th class="text-center w-[72px]"><Checkbox /></th>
              <th class="font-normal">Title</th>
              <th class="font-normal">Category</th>
              <th class="font-normal">Brand</th>
              <th class="font-normal">Price</th>
              <th class="font-normal">Stock</th>
              <th class="font-normal">Rating</th>
            </tr>
          </thead>
          <tbody class="space-y-[30px]">
            <tr
              v-for="product in products as Product[]"
              :key="product.id"
              class="h-[78px] border-1 border-b border-[#F2F2F2] text-black text-opacity-60"
            >
              <th>
                <Checkbox />
              </th>
              <td>
                <router-link
                  :to="'/product/' + product.id"
                  class="text-primary-400 capitalize"
                  >{{ product.title }}</router-link
                >
              </td>
              <td class="">{{ product.category }}</td>
              <td>{{ product.brand }}</td>
              <td>${{ product.price }}</td>
              <td>{{ product.stock }}</td>
              <td>{{ product.rating }}</td>
            </tr>
          </tbody>
        </table>
      </ul>
    </div>
  </div>
</template>
