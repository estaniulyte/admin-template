<script setup lang="ts">
import SvgIcon from './SvgIcon.vue';

defineProps<{
  href: string;
  title: string;
  icon?: string;
}>();
</script>

<template>
  <router-link
    class="flex items-center h-[39px] pl-[20px] md:pl-[30px] lg:pl-[41px] w-full gap-x-[16px] hover:bg-primary-50/40"
    :to="href"
    exact-active-class="border-l-[3px] border-primary-400 text-primary-400"
    active-class="border-l-[3px] border-primary-400 text-primary-400"
  >
    <SvgIcon v-if="icon" :path="icon" />
    <span class="hidden lg:flex">{{ title }}</span>
  </router-link>
</template>
