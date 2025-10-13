<template>
    <div class="ProgrammingLanguagesListLayout">
        <ProgrammingLanguageListItemComponent v-for="ProgrammingLanguage in PROPS.ProgrammingLanguages_Developer"
            :key="ProgrammingLanguage.Id_ProgrammingLanguage" :ProgrammingLanguage="ProgrammingLanguage" />
    </div>
</template>

<script setup lang="ts">
import ProgrammingLanguageListItemComponent from '@/features/technologies/ProgrammingLanguageListItemComponent.vue';
import { IProgrammingLanguage } from '@/interfaces/IProgrammingLanguage';
import { defineProps } from 'vue';

const PROPS = defineProps<{
    ProgrammingLanguages_Developer: Array<IProgrammingLanguage>;
}>();
</script>

<style scoped>
.ProgrammingLanguagesListLayout {
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
}
</style>