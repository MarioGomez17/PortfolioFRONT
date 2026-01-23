<template>
    <h2 class="DiplomaMainTitle">
        {{ PROPS.Diploma_name }}
    </h2>
</template>

<script setup lang="ts">

const PROPS = defineProps<{
    Diploma_name: string;
}>();
</script>

<style scoped>
.DiplomaMainTitle {
    color: var(--FifthColor);
    font-size: 1.5rem;
    width: 100%;
    text-align: center;
}

@media (min-width: 1024px) and (max-width: 1600px) {
    .DiplomaMainTitle {
        font-size: 1.2rem;
    }
}
</style>