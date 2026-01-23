<template>
    <div class="TechnologiesListContainer">
        <div class="LogoTechnologyListContainer">
            <TechnologyLogoComponent :LogoSrc="PROPS.ProgrammingLanguage.Logo_ProgrammingLanguage"
                :Name="PROPS.ProgrammingLanguage.Name_ProgrammingLanguage" />
        </div>
        <div class="InformationTechnologyListContainer">
            <div class="UpperInformationTechnologyListContainer">
                <TechnologyNameComponent :Name="ProgrammingLanguage.Name_ProgrammingLanguage" />
                <TechnologyAreaComponent
                    :IdArea="ProgrammingLanguage.DevelopmentArea_ProgrammingLanguage.Id_DevelopmentArea"
                    :NameArea="ProgrammingLanguage.DevelopmentArea_ProgrammingLanguage.Name_DevelopmentArea" />
            </div>
            <TechnologyDescriptionComponent :Description="ProgrammingLanguage.Description_ProgrammingLanguage" />
        </div>
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
.TechnologiesListContainer {
    border: 2px solid var(--SecondColor);
    display: flex;
    border-radius: 1.2rem;
    overflow: hidden;
}

.LogoTechnologyListContainer {
    width: 10%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    background-color: var(--FirstColor);
}

.InformationTechnologyListContainer {
    background-color: var(--SixthColor);
    width: 100%;
    padding: .8rem 3rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.UpperInformationTechnologyListContainer {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
</style>