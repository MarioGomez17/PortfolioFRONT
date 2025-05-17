<template>
    <div class="LanguageComponent">
        <h3 class="LanguageName">
            {{ PROPS.Language_Name }}:
        </h3>
        <span class="LanguageLevel">
            {{ PROPS.Language_Level }}
        </span>
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

const PROPS = defineProps<{
    Language_Name: string,
    Language_Level: string,
}>();
</script>

<style scoped>
.LanguageComponent {
    display: flex;
    align-items: center;
    text-decoration: none;
}

.LanguageName {
    color: var(--SecondColor);
    font-size: 1.5rem;
    margin: .5rem 1rem;
    margin-left: 0;
}

.LanguageLevel {
    color: var(--FifthColor);
    font-size: 1.2rem;
}
</style>