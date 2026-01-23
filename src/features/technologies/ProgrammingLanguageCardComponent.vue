<template>
    <div class="TechnologiesCardContainer">
        <div class="LogoInformationProgrammingLanguageContainer">
            <div class="LogoProgrammingLanguageContainer">
                <TechnologyLogoComponent :LogoSrc="PROPS.ProgrammingLanguage.Logo_ProgrammingLanguage"
                    :Name="PROPS.ProgrammingLanguage.Name_ProgrammingLanguage" />
            </div>
            <div class="InformationProgrammingLanguageContainer">
                <TechnologyNameComponent :Name="PROPS.ProgrammingLanguage.Name_ProgrammingLanguage" />
                <TechnologyAreaComponent
                    :NameArea="PROPS.ProgrammingLanguage.DevelopmentArea_ProgrammingLanguage.Name_DevelopmentArea"
                    :IdArea="PROPS.ProgrammingLanguage.DevelopmentArea_ProgrammingLanguage.Id_DevelopmentArea" />
            </div>
        </div>
        <TechnologyDescriptionComponent :Description="PROPS.ProgrammingLanguage.Description_ProgrammingLanguage" />
    </div>
</template>

<script lang="ts" setup>
import { IProgrammingLanguage } from '@/interfaces/IProgrammingLanguage';
import TechnologyLogoComponent from './TechnologyLogoComponent.vue';
import TechnologyNameComponent from './TechnologyNameComponent.vue';
import TechnologyAreaComponent from './TechnologyAreaComponent.vue';
import TechnologyDescriptionComponent from './TechnologyDescriptionComponent.vue';

const PROPS = defineProps<{
    ProgrammingLanguage: IProgrammingLanguage;
}>();
</script>

<style scoped>
.TechnologiesCardContainer {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1.5rem;
    border: 2px solid var(--SecondColor);
    border-radius: 1.2rem;
    background-color: var(--SixthColor);
    box-sizing: border-box;
    overflow: hidden;
}

.LogoInformationProgrammingLanguageContainer {
    display: flex;
    justify-content: space-between;
    gap: 1.5rem;
}

.LogoProgrammingLanguageContainer {
    width: 35%;
}

.InformationProgrammingLanguageContainer {
    width: 55%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
}
</style>