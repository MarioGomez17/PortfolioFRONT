<template>
    <span class="EducationAcademy">
        {{ PROPS.Education_Academy }}
    </span>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

const PROPS = defineProps<{
    Education_Academy: string;
}>();
</script>

<style scoped>
.EducationAcademy {
    color: var(--SecondColor);
    font-size: 1.5rem;
}
</style>