<script setup lang="ts">
import { useHead } from '@vueuse/head'

useHead({
  title: 'Vue Project',
  meta: [
    { name: 'description', content: 'A project built with Vue' },
  ],
})
</script>

<template>
  <router-view />
</template>
