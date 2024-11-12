<template>
  <div class="AboutContent">
    <AboutComponent Title="Name" :Contetn="Name_Developer"></AboutComponent>
    <AboutComponent Title="Email" :Contetn="Email_Developer"></AboutComponent>
    <LinkComponent Title="LinkedIn" :Contetn="LinkedinName_Developer" :Url="LinkedInUrl_Developer"></LinkComponent>
    <LinkComponent Title="GitHub" :Contetn="GitHubName_Developer" :Url="GitHubUrl_Developer"></LinkComponent>
    <AboutComponent Title="Location" :Contetn="City_Developer"></AboutComponent>
    <LanguagesComponent Title="Languages" :Elements="Languages_Developer"></LanguagesComponent>
    <EducationsComponet Title="Education" :Elements="Education_Developer"></EducationsComponet>
    <SkillsComponent Title="Skills" :Elements="Skills_Developer"></SkillsComponent>
    <ProgrammingLanguagesComponent Title="Programming Langugages" :Elements="ProgrammingLanguages_Developer">
    </ProgrammingLanguagesComponent>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import AboutComponent from '@/components/AboutComponents/InformationComponent.vue';
import LinkComponent from '@/components/AboutComponents/LinkComponent.vue';
import SkillsComponent from '@/components/AboutComponents/SkillsComponent.vue';
import LanguagesComponent from '@/components/AboutComponents/LanguagesComponent.vue';
import EducationsComponet from '@/components/AboutComponents/EducationsComponet.vue';
import ProgrammingLanguagesComponent from '@/components/AboutComponents/ProgrammingLanguagesComponent.vue';
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
var ProgrammingLanguages_Developer = ref([])

onMounted(async () => {
  Developer = await GetOneDeveloper(1);
  console.log(Developer)
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
  ProgrammingLanguages_Developer.value = Developer.ProgrammingLanguages_Developer
})

</script>

<style>
.AboutContent {
  margin: 50px 0 50px 50px;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  overflow-y: auto;
  scrollbar-width: none;
  gap: 30px;
}

.InformationGroup {
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
}
</style>