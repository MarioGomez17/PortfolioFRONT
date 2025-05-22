<template>
    <div class="EducationCardComponent" :class="{ EducationCardMainEducation: IS_MAIN_EDUCATION }">
        <div class="SectionEducationCard">
            <EducationTypeComponent :EducationType="PROPS.Education.EducationType_Education.Name_EducationType" />
            <EducationDegreeNameComponent :DegreeName="PROPS.Education.DegreeName_Education" />
            <EducationAcademyComponent :Education_Academy="PROPS.Education.Academy_Education.Name_Academy" />
            <EducationDescriptionComponent :Education_Description="PROPS.Education.Description_Education" />
            <EducationCharacteristicComponent :CharacteristicEducation_Text="PROPS.Education.Date_Education"
                :CharacteristicEducation_Icon="IconCalendarWeek" />
            <EducationCharacteristicComponent
                :CharacteristicEducation_Text="PROPS.Education.EducationPlace_Education.Name_EducationPlace"
                :CharacteristicEducation_Icon="IconBuildingBank" />
            <div class="EducationCardDecorator"></div>
            <div>
                <EducationAchievementsComponent :Achievements_Education="Education.Achievements_Education" />
            </div>
        </div>
        <div class="SectionEducationCard">
            <div class="EducationCardDecorator"></div>
            <ViewDiplomaButtonComponent :Diploma_SRC="PROPS.Education.DegreeFile_Education" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { defineProps, ref } from 'vue';
import { IEducation } from '@/interfaces/IEducation';
import { IconCalendarWeek } from '@tabler/icons-vue';
import { IconBuildingBank } from '@tabler/icons-vue';
import EducationAchievementsComponent from './EducationAchievementsComponent.vue';
import EducationCharacteristicComponent from './EducationCharacteristicComponent.vue';
import ViewDiplomaButtonComponent from './ViewDiplomaButtonComponent.vue';
import EducationDegreeNameComponent from './EducationDegreeNameComponent.vue';
import EducationTypeComponent from './EducationTypeComponent.vue';
import EducationAcademyComponent from './EducationAcademyComponent.vue';
import EducationDescriptionComponent from './EducationDescriptionComponent.vue';

const PROPS = defineProps<{
    Education: IEducation;
}>();

const IS_MAIN_EDUCATION = ref(false);
IS_MAIN_EDUCATION.value = PROPS.Education.EducationType_Education.Id_EducationType == 1;
</script>

<style scoped>
.EducationCardComponent {
    width: 100%;
    box-sizing: border-box;
    border-radius: 1.2rem;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: 2px solid var(--SecondColor);
    padding: 1.5rem;
    background-color: var(--SixthColor);
}

.EducationCardMainEducation {
    border-top: none;
    border-top: 8px solid var(--ThirdColor);
}

.SectionEducationCard {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.EducationCardDecorator {
    width: 100%;
    height: .05rem;
    background-color: var(--SecondColor);
}
</style>