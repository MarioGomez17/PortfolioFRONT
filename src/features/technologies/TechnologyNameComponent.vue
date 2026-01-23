<template>
    <h3 class="TechnologyName">
        {{ PROPS.Name }}
    </h3>
</template>

<script lang="ts" setup>
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