<template>
    <h2 class="SecondTitle">
        {{ PROPS.Title }}
    </h2>
</template>

<script setup lang="ts">
const PROPS = defineProps<{
    Title: string;
}>();
</script>

<style scoped>
.SecondTitle {
    color: var(--FourthColor);
    text-align: start;
    font-size: 2rem;
    margin: 1rem;
    margin-left: 0;
}
</style>