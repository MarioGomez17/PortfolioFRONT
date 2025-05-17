<template>
  <MainTitleComponent Title="About Me" />
  <div class="AboutInformationContainer">
    <div class="PersonalInformationContainer" v-if="!Loading && !ErrorMessage">
      <PersonalInformationComponent :Name_Developer="FULL_NAME_DEVELOPER" :City_Developer="CITY_DEVELOPER"
        :Email_Developer="Developer.Email_Developer" :LinkedIn_Developer="Developer.LinkedinUrl_Developer"
        :GitHub_Developer="Developer.GitHubUrl_Developer" />
      <LanguagesComponent />
    </div>
    <div class="PersonalInformationContainer" v-if="!Loading && !ErrorMessage">
      <ProfileComponent :ProfessionalProfile_Description="Developer.LongProfile_Developer" />
    </div>
    <div class="TechnicalInformation">
      <div class="PersonalInformationContainer" v-if="!Loading && !ErrorMessage">
        <DevelopmentAreasComponent :DevelopmentArea_ProgrammingLanguages="Developer.ProgrammingLanguages_Developer"
          :DevelopmentArea_Technologies="Developer.Technologies_Developer" />
      </div>
      <div class="TechnicalInformationSection">
        <div class="PersonalInformationContainer" v-if="!Loading && !ErrorMessage">
          <IdesAndToolsComponent :IdesAndTools="Developer.IdesAndTools_Developer" />
        </div>
        <div class="PersonalInformationContainer" v-if="!Loading && !ErrorMessage">
          <VersionControlsComponent :VersionControls="Developer.ControlsVersion_Developer" />
        </div>
        <div class="PersonalInformationContainer" v-if="!Loading && !ErrorMessage">
          <SkillsComponent :Skills="Developer.Skills_Developer" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import MainTitleComponent from '@/components/MainTitleComponent.vue';
import DevelopmentAreasComponent from '@/features/about/DevelopmentAreasComponent.vue';
import IdesAndToolsComponent from '@/features/about/IdesAndToolsComponent.vue';
import LanguagesComponent from '@/features/about/LanguagesComponent.vue';
import PersonalInformationComponent from '@/features/about/PersonalInformationComponent.vue';
import ProfileComponent from '@/features/about/ProfileComponent.vue';
import SkillsComponent from '@/features/about/SkillsComponent.vue';
import VersionControlsComponent from '@/features/about/VersionControlsComponent.vue';
import { useDeveloperStore } from '@/stores/DeveloperStore';
import { storeToRefs } from 'pinia';

const DEVELOPER_STORE = useDeveloperStore();
const { Developer, Loading, ErrorMessage } = storeToRefs(DEVELOPER_STORE);

const FULL_NAME_DEVELOPER = ref(`${Developer.value.Name_Developer} ${Developer.value.LastName_Developer}`)
const CITY_DEVELOPER = ref(`${Developer.value.City_Developer.Name_City}, ${Developer.value.City_Developer.Department_City.Name_Department}, ${Developer.value.City_Developer.Department_City.Country_Department.Name_Country}`)

</script>

<style scoped>
.AboutInformationContainer {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.PersonalInformationContainer {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  background-color: var(--SixthColor);
  border: 2px solid var(--SecondColor);
  border-radius: .6rem;
  padding: 2rem;
  box-sizing: border-box;
}

.TechnicalInformation {
  display: flex;
  justify-content: space-between;
  gap: 2rem;
}

.TechnicalInformationSection {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
</style>