<template>
    <p class="EducationDescription">
        {{ PROPS.Education_Description }}
    </p>
</template>

<script setup lang="ts">

const PROPS = defineProps<{
    Education_Description: string;
}>();
</script>

<style scoped>
.EducationDescription {
    color: var(--FifthColor);
    margin: 1rem 0;
    word-wrap: break-word;
    white-space: normal;
}
</style>