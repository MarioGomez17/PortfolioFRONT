<template>
    <div class="TechnologiesGridLayout">
        <ProgrammingLanguageCardComponent v-for="ProgrammingLanguage in PROPS.ProgrammingLanguages_Developer"
            :key="ProgrammingLanguage.Id_ProgrammingLanguage" :ProgrammingLanguage="ProgrammingLanguage" />
    </div>
</template>

<script setup lang="ts">
import ProgrammingLanguageCardComponent from '@/features/technologies/ProgrammingLanguageCardComponent.vue';
import { IProgrammingLanguage } from '@/interfaces/IProgrammingLanguage';
import { defineProps } from 'vue';

const PROPS = defineProps<{
    ProgrammingLanguages_Developer: Array<IProgrammingLanguage>;
}>();
</script>

<style scoped>
.TechnologiesGridLayout {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
}
</style>