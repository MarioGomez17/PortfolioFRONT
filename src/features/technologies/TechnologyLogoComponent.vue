<template>
    <img class="TechnologyLogo" :src="PROPS.LogoSrc" :alt="`${PROPS.Name} Logo`" />
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';

const PROPS = defineProps<{
    LogoSrc: string;
    Name: string;
}>();
</script>

<style scoped>
.TechnologyLogo {
    width: 100%;
    height: auto;
    padding: .5rem;
    border-radius: 10%;
    background-color: var(--FifthColor);
    box-sizing: border-box;
}
</style>