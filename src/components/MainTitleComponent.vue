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
    color: var(--FifthColor);
    text-align: start;
    font-size: 4rem;
    margin-bottom: 2rem;
}
</style>