<script setup lang="ts">
import SvgIcon from './SvgIcon.vue';

const props = defineProps<{
  href: string;
  title: string;
  icon?: string;
}>();
</script>

<template>
  <router-link
    class="flex items-center h-[39px] pl-[20px] md:pl-[30px] lg:pl-[41px] w-full gap-x-[16px] hover:bg-primary-50/40"
    :to="props.href"
    active-class="border-l-[3px] border-primary-400 text-primary-400"
  >
    <SvgIcon v-if="props.icon" :path="props.icon" />
    <span class="hidden lg:flex">{{ props.title }}</span>
  </router-link>
</template>
