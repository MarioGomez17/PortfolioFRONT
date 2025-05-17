<template>
    <div class="DevelopmentAreasComponent">
        <SecondTitleComponent Title="Development Areas" />
        <DevelopmentAreaComponent DevelopmentArea_Title="FrontEnd"
            :DevelopmentArea_ProgrammingLanguages="PROGRAMMING_LANGUAGE_FRONT"
            :DevelopmentArea_Technologies="TECHNOLOGIES_FRONT" />
        <DevelopmentAreaComponent DevelopmentArea_Title="BackEnd"
            :DevelopmentArea_ProgrammingLanguages="PROGRAMMING_LANGUAGE_BACK"
            :DevelopmentArea_Technologies="TECHNOLOGIES_BACK" />
        <DevelopmentAreaComponent DevelopmentArea_Title="Database"
            :DevelopmentArea_ProgrammingLanguages="PROGRAMMING_LANGUAGE_DATABASE"
            :DevelopmentArea_Technologies="TECHNOLOGIES_DATABASE" />
        <DevelopmentAreaComponent DevelopmentArea_Title="Cloud"
            :DevelopmentArea_ProgrammingLanguages="PROGRAMMING_LANGUAGE_CLOUD"
            :DevelopmentArea_Technologies="TECHNOLOGIES_CLOUD" />
    </div>
</template>

<script setup lang="ts">
import { defineProps, ref } from 'vue';
import SecondTitleComponent from '@/components/SecondTitleComponent.vue';
import DevelopmentAreaComponent from './DevelopmentAreaComponent.vue';
import { IProgrammingLanguage } from '@/interfaces/IProgrammingLanguage';
import { ITechnology } from '@/interfaces/ITechnology';

const TECHNOLOGIES_FRONT = ref<ITechnology[]>([])
const PROGRAMMING_LANGUAGE_FRONT = ref<IProgrammingLanguage[]>([])
const TECHNOLOGIES_BACK = ref<ITechnology[]>([])
const PROGRAMMING_LANGUAGE_BACK = ref<IProgrammingLanguage[]>([])
const TECHNOLOGIES_DATABASE = ref<ITechnology[]>([])
const PROGRAMMING_LANGUAGE_DATABASE = ref<IProgrammingLanguage[]>([])
const TECHNOLOGIES_CLOUD = ref<ITechnology[]>([])
const PROGRAMMING_LANGUAGE_CLOUD = ref<IProgrammingLanguage[]>([])

const PROPS = defineProps<{
    DevelopmentArea_ProgrammingLanguages: Array<IProgrammingLanguage>,
    DevelopmentArea_Technologies: Array<ITechnology>,
}>();


TECHNOLOGIES_FRONT.value = PROPS.DevelopmentArea_Technologies.filter((Technology) => Technology.DevelopmentArea_Technology.Id_DevelopmentArea == 1)
PROGRAMMING_LANGUAGE_FRONT.value = PROPS.DevelopmentArea_ProgrammingLanguages.filter((ProgrammingLanguage) => ProgrammingLanguage.DevelopmentArea_ProgrammingLanguage.Id_DevelopmentArea == 1)
TECHNOLOGIES_BACK.value = PROPS.DevelopmentArea_Technologies.filter((Technology) => Technology.DevelopmentArea_Technology.Id_DevelopmentArea == 2)
PROGRAMMING_LANGUAGE_BACK.value = PROPS.DevelopmentArea_ProgrammingLanguages.filter((ProgrammingLanguage) => ProgrammingLanguage.DevelopmentArea_ProgrammingLanguage.Id_DevelopmentArea == 2)
TECHNOLOGIES_DATABASE.value = PROPS.DevelopmentArea_Technologies.filter((Technology) => Technology.DevelopmentArea_Technology.Id_DevelopmentArea == 3)
PROGRAMMING_LANGUAGE_DATABASE.value = PROPS.DevelopmentArea_ProgrammingLanguages.filter((ProgrammingLanguage) => ProgrammingLanguage.DevelopmentArea_ProgrammingLanguage.Id_DevelopmentArea == 3)
TECHNOLOGIES_CLOUD.value = PROPS.DevelopmentArea_Technologies.filter((Technology) => Technology.DevelopmentArea_Technology.Id_DevelopmentArea == 4)
PROGRAMMING_LANGUAGE_CLOUD.value = PROPS.DevelopmentArea_ProgrammingLanguages.filter((ProgrammingLanguage) => ProgrammingLanguage.DevelopmentArea_ProgrammingLanguage.Id_DevelopmentArea == 4)
</script>

<style scoped>
.DevelopmentAreasComponent {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
</style>