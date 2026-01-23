<template>
    <h3 class="DiplomaSecondTitle">
        Issued by {{ PROPS.Diploma_Academy }} ({{ PROPS.Diploma_Date }})
    </h3>
</template>

<script setup lang="ts">

const PROPS = defineProps<{
    Diploma_Academy: string;
    Diploma_Date: string;
}>();
</script>

<style scoped>
.DiplomaSecondTitle {
    color: var(--SecondColor);
    font-size: 1.2rem;
    width: 100%;
    text-align: center;
}

@media (min-width: 1024px) and (max-width: 1600px) {
    .DiplomaSecondTitle {
        font-size: 1rem;
    }
}
</style>