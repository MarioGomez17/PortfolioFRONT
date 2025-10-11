<template>
    <span class="ZoomLevel">
        {{ Math.round(PROPS.ZoomLevel * 100) }}%
    </span>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

const PROPS = defineProps<{
    ZoomLevel: number;
}>();
</script>

<style scoped>
.ZoomLevel {
    width: 100%;
    text-align: center;
    padding: 1rem;
    background-color: var(--SecondColor);
    color: var(--SixthColor);
    font-size: 1.5rem;
    line-height: 1;
    font-weight: 600;
    border-radius: .5rem;
}

@media (min-width: 1024px) and (max-width: 1600px) {
    .ZoomLevel {
        font-size: 1.2rem;
        padding: .6rem;
    }
}
</style>