<template>
    <p class="TechnologyDescription">
        {{ PROPS.Description }}
    </p>
</template>

<script lang="ts" setup>

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