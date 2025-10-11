<template>
    <button class="DownloadButton">
        <IconDownload />
        Download
    </button>
</template>

<script setup lang="ts">
import { IconDownload } from '@tabler/icons-vue';
</script>

<style scoped>
.DownloadButton {
    width: 100%;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    padding: .5rem 1rem;
    border: none;
    border-radius: .3rem;
    background-color: var(--ThirdColor);
    color: var(--SixthColor);
    font-weight: 700;
    font-size: 1.2rem;
    cursor: pointer;
    transition: .3s linear;
}

.DownloadButton:hover {
    background-color: var(--FourthColor);
}

.DownloadButton:focus-visible {
    outline: none;
}

@media (min-width: 1024px) and (max-width: 1600px) {
    .DownloadButton {
        gap: .6rem;
        padding: .3rem 1rem;
        font-size: 1rem;
    }
}
</style>