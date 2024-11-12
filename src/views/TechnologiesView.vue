<script setup>
import { ref, onMounted } from 'vue';
import LogoComponent from '@/components/TechnologyComponents/LogoComponent.vue';
import GetOneDeveloper from '@/Services/DeveloperServices/GetOneDeveloper';
import SortTechnologies from '@/Services/TechnologyServices/SortTechnologies';

var Developer = null;
const ProgrammingLanguagesTechnologies = ref([]);;

onMounted(async () => {
    Developer = await GetOneDeveloper(1)
    ProgrammingLanguagesTechnologies.value = SortTechnologies(Developer.ProgrammingLanguages_Developer, Developer.Technologies_Developer)
})
</script>

<template>
    <div class="MainContent">
        <div class="DivGridProgrammingLanguageTechnologies"
            v-for="(ProgrammingLanguageTechnologies) in ProgrammingLanguagesTechnologies"
            :key="ProgrammingLanguageTechnologies.ProgrammingLanguage.Id_ProgrammingLanguage">
            <div class="DivProgrammingLanguage">
                <div class="ProgrammingLanguageTitle">
                    <h3 class="TitleTechnologyProgrammingLanguage">
                        {{ ProgrammingLanguageTechnologies.ProgrammingLanguage.Name_ProgrammingLanguage }}
                    </h3>
                    <LogoComponent
                        :ImageRoute="ProgrammingLanguageTechnologies.ProgrammingLanguage.Logo_ProgrammingLanguage"
                        :ImageAlt="'Logo de ' + ProgrammingLanguageTechnologies.ProgrammingLanguage.Name_ProgrammingLanguage">
                    </LogoComponent>
                </div>
            </div>
            <div class="DivTechnologiesProgrammingLanguage">
                <div v-for="(Technology) in ProgrammingLanguageTechnologies.Technologies"
                    :key="Technology.Id_Technology" class="DivTechnologyProgrammingLanguage">
                    <h3 class="TitleTechnologyProgrammingLanguage">
                        {{ Technology.Name_Technology }}
                    </h3>
                    <LogoComponent :ImageRoute="Technology.Logo_Technology"
                        :ImageAlt="'Logo de ' + Technology.Name_Technology">
                    </LogoComponent>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
@import '../assets/base.css';

.MainContent {
    width: 100%;
    height: 100%;
    overflow: auto;
    scrollbar-width: none;
    margin-top: 50px;
}

.DivGridProgrammingLanguageTechnologies {
    width: 100%;
    display: grid;
    grid-template-columns: 20% 80%;
    gap: 100px;
}

.DivProgrammingLanguage {
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.DivTechnologyProgrammingLanguage {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    margin: 20px;
}

.TitleTechnologyProgrammingLanguage {
    font-size: 20px;
    text-align: center;
    margin: 0;
    margin-bottom: 15px;
    font-family: var(--Font);
    font-weight: 500;
    color: var(--White);
}

.DivTechnologiesProgrammingLanguage {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 40px;
}

.ProgrammingLanguageTitle {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
}

.Arrow {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    height: 100%;
}
</style>
