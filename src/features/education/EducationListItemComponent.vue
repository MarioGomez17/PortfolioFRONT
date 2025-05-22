<template>
    <div class="EducationListItemComponent" :class="{ EducationListItemMainEducation: IS_MAIN_EDUCATION }">
        <div class="EducationListItemShortInformation">
            <div class="EducationListItemPlaceInformation">
                <EducationTypeComponent :EducationType="PROPS.Education.EducationType_Education.Name_EducationType" />
                <EducationCharacteristicComponent :CharacteristicEducation_Text="PROPS.Education.Date_Education"
                    :CharacteristicEducation_Icon="IconCalendarWeek" />
                <EducationCharacteristicComponent
                    :CharacteristicEducation_Text="PROPS.Education.EducationPlace_Education.Name_EducationPlace"
                    :CharacteristicEducation_Icon="IconBuildingBank" />
            </div>
            <div class="EducationListItemDegreeFile">
                <ViewDiplomaButtonComponent :Diploma_SRC="PROPS.Education.DegreeFile_Education" />
            </div>
        </div>
        <div class="EducationListItemLongInformation">
            <div>
                <IconSchool class="EducationListItemTitleIcon" />
            </div>
            <div>
                <EducationDegreeNameComponent :DegreeName="PROPS.Education.DegreeName_Education" />
                <EducationAcademyComponent :Education_Academy="PROPS.Education.Academy_Education.Name_Academy" />
                <EducationDescriptionComponent :Education_Description="PROPS.Education.Description_Education" />
                <EducationAchievementsComponent :Achievements_Education="Education.Achievements_Education" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { defineProps, ref } from 'vue';
import { IEducation } from '@/interfaces/IEducation';
import { IconSchool } from '@tabler/icons-vue';
import { IconCalendarWeek } from '@tabler/icons-vue';
import { IconBuildingBank } from '@tabler/icons-vue';
import EducationAchievementsComponent from './EducationAchievementsComponent.vue';
import EducationCharacteristicComponent from './EducationCharacteristicComponent.vue';
import ViewDiplomaButtonComponent from './ViewDiplomaButtonComponent.vue';
import EducationTypeComponent from './EducationTypeComponent.vue';
import EducationDegreeNameComponent from './EducationDegreeNameComponent.vue';
import EducationAcademyComponent from './EducationAcademyComponent.vue';
import EducationDescriptionComponent from './EducationDescriptionComponent.vue';

const PROPS = defineProps<{
    Education: IEducation;
}>();

const IS_MAIN_EDUCATION = ref(false);
IS_MAIN_EDUCATION.value = PROPS.Education.EducationType_Education.Id_EducationType == 1;
</script>

<style scoped>
.EducationListItemComponent {
    width: 100%;
    box-sizing: border-box;
    border-radius: 1.2rem;
    overflow: hidden;
    display: flex;
    border: 2px solid var(--SecondColor);
}

.EducationListItemMainEducation {
    border-left: none;
    border-left: 8px solid var(--ThirdColor);
}

.EducationListItemShortInformation {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 25%;
    padding: 1.5rem;
    background-color: var(--FirstColor);
}

.EducationListItemPlaceInformation {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.EducationListItemLongInformation {
    display: flex;
    gap: 1.5rem;
    width: 75%;
    padding: 1.5rem;
    background-color: var(--SixthColor);
}

.EducationListItemTitleIcon {
    color: var(--ThirdColor);
    width: 2.5rem;
    height: 2.5rem;
}

.EducationListItemAcademy {
    color: var(--SecondColor);
    font-size: 1.5rem;
}
</style>