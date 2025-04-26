<template>
    <h1 class="MainTitle">
        {{ PROPS.Title }}
    </h1>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
const PROPS = defineProps<{
    Title: string;
}>();
</script>

<style scoped>
.MainTitle {
    color: var(--FourthColor);
    text-align: start;
    font-size: 6rem;
}
</style>