<template>
    <div class="TechnologiesListContainer">
        <div class="LogoTechnologyListContainer">
            <TechnologyLogoComponent :LogoSrc="PROPS.Technology.Logo_Technology"
                :Name="PROPS.Technology.Name_Technology" />
        </div>
        <div class="InformationTechnologyListContainer">
            <div class="UpperInformationTechnologyListContainer">
                <TechnologyNameComponent :Name="Technology.Name_Technology" />
                <TechnologyAreaComponent :IdArea="Technology.DevelopmentArea_Technology.Id_DevelopmentArea"
                    :NameArea="Technology.DevelopmentArea_Technology.Name_DevelopmentArea" />
            </div>
            <TechnologyBasedComponent
                :IdArea="PROPS.Technology.ProgrammingLanguage_Technology.DevelopmentArea_ProgrammingLanguage.Id_DevelopmentArea"
                :BasedOn="PROPS.Technology.ProgrammingLanguage_Technology.Name_ProgrammingLanguage"
                v-if="PROPS.Technology.ProgrammingLanguage_Technology" />
            <TechnologyDescriptionComponent :Description="Technology.Description_Technology" />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ITechnology } from '@/interfaces/ITechnology';
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
    gap: 1rem;
}

.UpperInformationTechnologyListContainer {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
</style>