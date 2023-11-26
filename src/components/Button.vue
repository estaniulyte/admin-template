<script lang="ts" setup>
defineProps<{
  notifications?: boolean;
}>();
</script>

<template>
  <button
    class="flex rounded-sm bg-white h-[54px] w-[52px] relative items-center justify-center transition-all hover:brightness-110"
  >
    <span v-if="notifications" class="sr-only">Notifications</span>
    <span
      v-if="notifications"
      class="absolute top-0 right-0 inline-block w-[10px] h-[10px] transform translate-x-1/3 -translate-y-1/3 bg-accent-500 rounded-full"
    ></span>
    <slot></slot>
  </button>
</template>
