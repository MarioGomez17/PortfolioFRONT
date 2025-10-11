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

@media (min-width: 1024px) and (max-width: 1600px) {
    .MainTitle {
        margin-bottom: 1.3rem;
    }
}
</style>