<script setup lang="ts">
import { search, notification } from '../config/iconPaths';
import InputField from './InputField.vue';
import Button from './Button.vue';
import SvgIcon from './SvgIcon.vue';
</script>

<template>
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
</template>
