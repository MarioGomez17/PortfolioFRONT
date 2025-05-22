<template>
    <span class="EducationType">
        {{ PROPS.EducationType }}
    </span>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
const PROPS = defineProps<{
    EducationType: string;
}>();
</script>

<style scoped>
.EducationType {
    width: fit-content;
    white-space: nowrap;
    border-radius: 1.5rem;
    padding: .3rem .8rem;
    font-size: .9rem;
    font-weight: 600;
    background-color: var(--ThirdColor);
    color: var(--FifthColor);
    transition: .3s linear;
}

.EducationType:hover {
    background-color: var(--FourthColor);
    color: var(--SixthColor);
}
</style>