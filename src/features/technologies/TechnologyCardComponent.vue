<template>
    <div class="TechnologiesCardContainer">
        <div class="LogoInformationTechnologyContainer">
            <div class="LogoTechnologyContainer">
                <TechnologyLogoComponent :LogoSrc="PROPS.Technology.Logo_Technology"
                    :Name="PROPS.Technology.Name_Technology" />
            </div>
            <div class="InformationTechnologyContainer">
                <TechnologyNameComponent :Name="PROPS.Technology.Name_Technology" />
                <TechnologyAreaComponent :NameArea="PROPS.Technology.DevelopmentArea_Technology.Name_DevelopmentArea"
                    :IdArea="PROPS.Technology.DevelopmentArea_Technology.Id_DevelopmentArea" />
            </div>
        </div>
        <TechnologyBasedComponent
            :IdArea="PROPS.Technology.ProgrammingLanguage_Technology.DevelopmentArea_ProgrammingLanguage.Id_DevelopmentArea"
            :BasedOn="PROPS.Technology.ProgrammingLanguage_Technology.Name_ProgrammingLanguage"
            v-if="PROPS.Technology.ProgrammingLanguage_Technology" />
        <TechnologyDescriptionComponent :Description="PROPS.Technology.Description_Technology" />
    </div>
</template>

<script lang="ts" setup>
import { ITechnology } from '@/interfaces/ITechnology';
import { defineProps } from 'vue';
import TechnologyLogoComponent from './TechnologyLogoComponent.vue';
import TechnologyNameComponent from './TechnologyNameComponent.vue';
import TechnologyAreaComponent from './TechnologyAreaComponent.vue';
import TechnologyDescriptionComponent from './TechnologyDescriptionComponent.vue';
import TechnologyBasedComponent from './TechnologyBasedComponent.vue';

const PROPS = defineProps<{
    Technology: ITechnology;
}>();
</script>

<style scoped>
.TechnologiesCardContainer {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    padding: 1.5rem;
    border: 2px solid var(--SecondColor);
    border-radius: 1.2rem;
    background-color: var(--SixthColor);
    box-sizing: border-box;
    overflow: hidden;
}

.LogoInformationTechnologyContainer {
    display: flex;
    justify-content: space-between;
    gap: 1.5rem;
}

.LogoTechnologyContainer {
    width: 25%;
}

.InformationTechnologyContainer {
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
}
</style>