<script setup lang="ts">
import SideDrawer from './components/SideDrawer.vue';
</script>

<template>
  <div class="">
    <div class="flex flex-row h-screen min-w-screen">
      <SideDrawer class="bg-white h-full" />
      <main
        role="main"
        class="pt-1 px-2 bg-background flex-grow overflow-y-auto"
      >
        <router-view></router-view>
      </main>
    </div>
  </div>
</template>

<style scoped></style>
