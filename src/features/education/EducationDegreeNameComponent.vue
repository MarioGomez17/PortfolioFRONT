<template>
    <h3 class="EducationDegreeName">
        {{ PROPS.DegreeName }}
    </h3>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

const PROPS = defineProps<{
    DegreeName: string;
}>();
</script>

<style scoped>
.EducationDegreeName {
    display: flex;
    align-items: center;
    gap: 1rem;
    color: var(--FifthColor);
    font-size: 1.8rem;
    margin-bottom: .8rem;
}
</style>