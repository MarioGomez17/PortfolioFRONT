<template>
    <span class="DegreeInfo">
        This is an official diploma issued by
        <span class="AcademyName">
            {{ PROPS.Diploma_Academy }}
        </span>.
    </span>
</template>

<script setup lang="ts">

const PROPS = defineProps<{
    Diploma_Academy: string;
}>();
</script>

<style scoped>
.DegreeInfo {
    color: var(--FifthColor);
    font-size: 1rem;
    font-weight: 300;
    width: 100%;
    text-align: center;
}

.AcademyName {
    font-weight: 700;
    color: var(--FourthColor);
}
</style>