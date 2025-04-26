<template>
    <h2 class="SecondTitle">
        {{ PROPS.Title }}
    </h2>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
const PROPS = defineProps<{
    Title: string;
}>();
</script>

<style scoped>
.SecondTitle {
    color: var(--ThirdColor);
    text-align: start;
    font-size: 3rem;
    margin: 1rem;
    margin-left: 0;
}
</style>