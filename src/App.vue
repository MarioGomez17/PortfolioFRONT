<template>
  <MainLayout v-if="ROUTE.meta.useLayout">
    <router-view />
  </MainLayout>
  <router-view v-else />
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useDeveloperStore } from './stores/DeveloperStore';
import MainLayout from './layouts/MainLayout.vue';

const ROUTE = useRoute();

const DEVELOPER_STORE = useDeveloperStore();

onMounted(async () => {
  await DEVELOPER_STORE.GetDeveloper();
})
</script>
