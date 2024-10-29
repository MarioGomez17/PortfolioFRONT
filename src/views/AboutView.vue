<template>
  <div class="AboutContent">
    <div class="InformationGroup">
      <AboutComponent Title="Nombre" :Contetn="Name_Developer"></AboutComponent>
      <AboutComponent Title="City" :Contetn="City_Developer"></AboutComponent>
    </div>
    <div class="InformationGroup">
      <AboutComponent Title="Email" :Contetn="Email_Developer"></AboutComponent>
      <LinkComponent Title="LinkedIn" :Contetn="LinkedinName_Developer" :Url="LinkedInUrl_Developer"></LinkComponent>
      <LinkComponent Title="GitHub" :Contetn="GitHubName_Developer" :Url="GitHubUrl_Developer"></LinkComponent>
    </div>
    <div class="InformationGroup">
      <EducationsComponet Title="Education" :Elements="Education_Developer"></EducationsComponet>
      <LanguagesComponent Title="Languages" :Elements="Languages_Developer"></LanguagesComponent>
      <SkillsComponent Title="Skills" :Elements="Skills_Developer"></SkillsComponent>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import AboutComponent from '@/components/AboutComponents/InformationComponent.vue';
import LinkComponent from '@/components/AboutComponents/LinkComponent.vue';
import SkillsComponent from '@/components/AboutComponents/SkillsComponent.vue';
import LanguagesComponent from '@/components/AboutComponents/LanguagesComponent.vue';
import EducationsComponet from '@/components/AboutComponents/EducationsComponet.vue';
import GetOneDeveloper from '../Services/DeveloperServices/GetOneDeveloper'

var Developer = null;
var Name_Developer = ref('')
var Email_Developer = ref('')
var LinkedinName_Developer = ref('')
var LinkedInUrl_Developer = ref('')
var GitHubName_Developer = ref('')
var GitHubUrl_Developer = ref('')
var City_Developer = ref('')
var Skills_Developer = ref([])
var Languages_Developer = ref([])
var Education_Developer = ref([])

onMounted(async () => {
  Developer = await GetOneDeveloper(1);
  Name_Developer.value += Developer.Name_Developer
  Name_Developer.value += ' '
  Name_Developer.value += Developer.LastName_Developer
  Email_Developer.value = Developer.Email_Developer
  LinkedinName_Developer.value = Developer.LinkedinName_Developer
  LinkedInUrl_Developer.value = Developer.LinkedinUrl_Developer
  GitHubName_Developer.value = Developer.GitHubName_Developer
  GitHubUrl_Developer.value = Developer.GitHubUrl_Developer
  City_Developer.value = Developer.City_Developer.Name_City;
  City_Developer.value += ', ';
  City_Developer.value += Developer.City_Developer.Department_City.Name_Department;
  City_Developer.value += ', ';
  City_Developer.value += Developer.City_Developer.Department_City.Country_Department.Name_Country;
  Skills_Developer.value = Developer.Skills_Developer
  Languages_Developer.value = Developer.Languages_Developer
  Education_Developer.value = Developer.Education_Developer
})

</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}

.AboutContent {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}

.InformationGroup {
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
}
</style>