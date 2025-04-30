<template>
    <h1 class="DeveloperName">{{ PROPS.Name_Developer }}</h1>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

const PROPS = defineProps<{
    Name_Developer: string,
}>();
</script>

<style scoped>
.DeveloperName {
    font-size: 6rem;
    line-height: 1;
    color: var(--FifthColor);
    margin: 1rem;
}
</style>