<template>
    <p class="TechnologyDescription">
        {{ PROPS.Description }}
    </p>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';

const PROPS = defineProps<{
    Description: string;
}>();
</script>

<style scoped>
.TechnologyDescription{
    color: var(--FifthColor);
    font-size: 1rem;
}
</style>