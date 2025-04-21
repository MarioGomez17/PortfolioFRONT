<template>
  <MainLayout>
    <router-view />
  </MainLayout>
</template>

<script setup lang="ts">
import MainLayout from './layouts/MainLayout.vue';
import { onMounted } from 'vue';
import { useDeveloperStore } from './stores/DeveloperStore';

const DEVELOPER_STORE = useDeveloperStore();

onMounted(async () => {
  await DEVELOPER_STORE.GetDeveloper();
})
</script>
