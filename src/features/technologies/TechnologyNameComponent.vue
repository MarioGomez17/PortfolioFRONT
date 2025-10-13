<template>
    <h3 class="TechnologyName">
        {{ PROPS.Name }}
    </h3>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';

const PROPS = defineProps<{
    Name: string;
}>();
</script>

<style scoped>
.TechnologyName {
    font-size: 1.8rem;
    color: var(--FourthColor);
}
</style>