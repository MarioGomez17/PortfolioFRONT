<template>
    <div class="MainContent">
        <div class="EducationInformation" v-for="(Education) in Developer.Education_Developer"
            :key="Education.Id_Education">
            <h3 class="MainTitleEducation">{{ Education.Academy_Education.Name_Academy }} : {{
                Education.DegreeName_Education }}</h3>
            <h4 class="SecondTitleEducation">({{ (Education.EducationType_Education.Name_EducationType) }})</h4>
            <img class="EducationDiploma" :src="Education.DegreeFile_Education"
                :alt="'Diploma de ' + Education.DegreeName_Education">
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import GetOneDeveloper from '@/Services/DeveloperServices/GetOneDeveloper';

var Developer = ref({});

onMounted(async () => {
    Developer.value = await GetOneDeveloper(1)
    console.log(Developer)
})
</script>

<style scoped>
@import '../assets/base.css';

.MainContent {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 50px;
    overflow: auto;
    scrollbar-width: none;
    margin: 50px 0 50px 50px;
    font-family: var(--Font);
    text-transform: uppercase;
}

.EducationInformation {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
}

.MainTitleEducation {
    text-align: center;
    color: var(--TextColor);
    margin: 0;
}

.SecondTitleEducation {
    text-align: center;
    color: var(--FirstColor);
    margin: 0;
}

.EducationDiploma {
    width: 90%;
    height: auto;
}
</style>