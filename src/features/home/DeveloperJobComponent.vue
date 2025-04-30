<template>
    <h3 className="text-2xl md:text-3xl text-portfolio-lavender mt-4" class="DeveloperJob">{{ PROPS.Job_Developer }}
    </h3>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

const PROPS = defineProps<{
    Job_Developer: string,
}>();
</script>

<style scoped>
.DeveloperJob {
    font-size: 2.5rem;
    line-height: 1;
    color: var(--SecondColor);
}
</style>