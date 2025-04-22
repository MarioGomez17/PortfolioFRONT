<template>
    <p class="Description">{{ PROPS.Description_Developer }}</p>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

const PROPS = defineProps<{
    Description_Developer: string
}>();
</script>

<style scoped>
.Description {
    color: var(--FourthColor);
    width: 75%;
    text-align: left;
    margin-top: 3rem;
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 2;
}
</style>