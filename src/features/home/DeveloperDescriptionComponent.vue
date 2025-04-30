<template>
    <p class="DescriptionDeveloper">
        {{ PROPS.Description_Developer }}
    </p>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

const PROPS = defineProps<{
    Description_Developer: string,
}>();
</script>

<style scoped>
.DescriptionDeveloper {
    font-size: 1.5rem;
    line-height:1.5;
    color: var(--FifthColor);
    margin-bottom: 2.5rem;
    width: 75%;
    text-align: center;
}
</style>