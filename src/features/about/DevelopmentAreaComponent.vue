<template>
    <h3 class="DevelopmentAreaTitle">
        {{ PROPS.DevelopmentArea_Title }}
    </h3>
    <div class="DevelopmentAreaTechnologiesAndProgrammingLanguages">
        <TechnicalCharacteristicComponent v-for="ProgrammingLanguage in DevelopmentArea_ProgrammingLanguages"
            :key="ProgrammingLanguage.Id_ProgrammingLanguage"
            :CharacteristicText="ProgrammingLanguage.Name_ProgrammingLanguage"
            CharacteristicColor="GreenCharacteristic" />
        <TechnicalCharacteristicComponent v-for="Technology in DevelopmentArea_Technologies"
            :key="Technology.Id_Technology" :CharacteristicText="Technology.Name_Technology"
            CharacteristicColor="GreenCharacteristic" />
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import { IProgrammingLanguage } from '@/interfaces/IProgrammingLanguage';
import { ITechnology } from '@/interfaces/ITechnology';
import TechnicalCharacteristicComponent from './TechnicalCharacteristicComponent.vue';

const PROPS = defineProps<{
    DevelopmentArea_Title: string,
    DevelopmentArea_ProgrammingLanguages: Array<IProgrammingLanguage>
    DevelopmentArea_Technologies: Array<ITechnology>
}>();
</script>

<style scoped>
.DevelopmentAreaComponent {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.DevelopmentAreaTitle {
    color: var(--SecondColor);
    font-size: 1.5rem;
}

.DevelopmentAreaTechnologiesAndProgrammingLanguages {
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem 1rem;
}
</style>