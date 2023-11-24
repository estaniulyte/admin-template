<script setup lang="ts">
import SvgIcon from './SvgIcon.vue';

const props = defineProps<{
  label?: string;
  iconPath?: string;
  placeholder: string;
}>();
</script>

<template>
  <div class="flex flex-col space-y-4">
    <label
      v-if="props.label"
      for="first_name"
      class="text-black font-normal text-base"
      >{{ label }}</label
    >
    <div class="flex items-center relative">
      <span class="absolute inset-y-0 left-0 flex items-center pl-1">
        <SvgIcon class="absolute ml-2 w-10" v-if="iconPath" :path="iconPath" />
      </span>
      <input
        type="text"
        id="first_name"
        class="py-[13px] px-[24px] h-[50px] bg-white border-[1px] rounded-[3px] border-[rgba(19, 19, 19, 0.25)] font-light w-full"
        :class="{
          'pl-[60px]': iconPath,
        }"
        :placeholder="props.placeholder"
        required
      />
    </div>
  </div>
</template>
