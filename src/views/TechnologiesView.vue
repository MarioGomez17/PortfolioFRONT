<template>
    <MainTitleComponent Title="Technologies" />
    <SecondTitleComponent
        :Title="`programming languages used by ${Developer.Name_Developer} ${Developer.LastName_Developer}`" />
    <div v-if="!Loading && ErrorMessage == null" class="TechnologiesContainer">
        <TechnologyComponent v-for="ProgrammingLanguage in Developer.ProgrammingLanguages_Developer"
            :key="ProgrammingLanguage.Id_ProgrammingLanguage"
            :LogoTechnology="ProgrammingLanguage.Logo_ProgrammingLanguage"
            :NameTechnology="ProgrammingLanguage.Name_ProgrammingLanguage" :DivisionTechnology="null"
            :ProgrammingLanguageTechnology="null"
            :DescriptionTechnology="ProgrammingLanguage.Description_ProgrammingLanguage" />
    </div>
    <SecondTitleComponent :Title="`Technologies used by ${Developer.Name_Developer} ${Developer.LastName_Developer}`" />
    <div v-if="!Loading && ErrorMessage == null" class="TechnologiesContainer">
        <TechnologyComponent v-for="Technology in Developer.Technologies_Developer" :key="Technology.Id_Technology"
            :LogoTechnology="Technology.Logo_Technology" :NameTechnology="Technology.Name_Technology"
            :DivisionTechnology="Technology.Division_Technology.Name_Division"
            :ProgrammingLanguageTechnology="Technology.ProgrammingLanguage_Technology.Logo_ProgrammingLanguage"
            :DescriptionTechnology="Technology.Description_Technology" />
    </div>
</template>

<script setup>
import { useDeveloperStore } from '@/stores/DeveloperStore';
import { storeToRefs } from 'pinia';
import TechnologyComponent from '@/features/technologies/TechnologyComponent.vue';
import MainTitleComponent from '@/components/MainTitleComponent.vue';
import SecondTitleComponent from '@/components/SecondTitleComponent.vue';

const DEVELOPER_STORE = useDeveloperStore();
const { Developer, Loading, ErrorMessage } = storeToRefs(DEVELOPER_STORE);
</script>

<style scoped>
.MainTitle {
    color: var(--FourthColor);
    text-align: start;
    font-size: 6rem;
}

.SecondTitle {
    color: var(--ThirdColor);
    text-align: start;
    font-size: 3rem;
    margin: 2rem;
    margin-left: 0;
}

.TechnologiesContainer {
    display: flex;
    gap: 2rem;
    flex-wrap: wrap;
}
</style>