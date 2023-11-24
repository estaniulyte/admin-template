<script lang="ts" setup>
import { help } from '../config/iconPaths';
import { drawerMenu } from '../config/drawerMenu';
import DrawerNavLink from './DrawerNavLink.vue';
</script>

<template>
  <aside class="hidden sm:block lg:min-w-[230px]">
    <div class="w-full h-full">
      <ul
        class="flex flex-col justify-between overflow-hidden h-full pb-[10px]"
      >
        <div class="top">
          <h1
            class="text-primary-500 font-medium text-xl md:text-2xl leading-9 px-1 md:px-3 lg:pl-[29px] my-[55px]"
          >
            <router-link to="/">Sales.</router-link>
          </h1>
          <ul class="flex flex-col gap-y-[30px] mt-[3px] text-[#131313]/60">
            <li
              v-for="item in drawerMenu"
              :key="item.id"
              class="text-base font-normal"
            >
              <DrawerNavLink
                :title="item.name"
                :href="item.href"
                :icon="item.icon"
              />
            </li>
          </ul>
        </div>
        <div>
          <div class="text-[#131313]/60 text-base font-normal">
            <DrawerNavLink title="Help" href="/help" :icon="help" />
          </div>
        </div>
      </ul>
    </div>
  </aside>
</template>
