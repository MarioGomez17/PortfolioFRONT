<template>
    <router-link to="/About" class="AboutButton">
        About Me
        <IconArrowRight class="AboutIcon" />
    </router-link>
</template>

<script setup lang="ts">
import { IconArrowRight } from '@tabler/icons-vue';
</script>

<style scoped>
.AboutButton {
    font-size: 1.5rem;
    text-decoration: none;
    padding: 1rem 2rem;
    border-radius: .6rem;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 1.5rem;
    background-color: var(--ThirdColor);
    color: var(--FifthColor);
    transition: .3s linear;
}

.AboutIcon {
    stroke-width: 4;
    color: inherit;
}

.AboutButton:hover {
    background-color: var(--FourthColor);
    color: var(--SixthColor);
}
</style>