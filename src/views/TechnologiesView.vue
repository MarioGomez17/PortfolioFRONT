<template>
    <div class="TechnologiesViewContent" v-if="!Loading && !ErrorMessage">
        <MainTitleComponent Title="Technologies" />
        <div class="TitleButtonsContainer">
            <SecondTitleComponent Title="Programming Languages" />
            <LayoutSelectorComponent :ActiveLayout="PROGRAMMING_LANGUAGES_ACTIVE_LAYOUT"
                :Layouts="PROGRAMMING_LANGUAGES_LAYOUT_OPTIONS" @change="onProgrammingLanguageLayoutChange" />
        </div>
        <component :is="PROGRAMMING_LANGUAGES_VIEW_LAYOUT"
            :ProgrammingLanguages_Developer="Developer!.ProgrammingLanguages_Developer" />
        <div class="TitleButtonsContainer TechnologiesContent">
            <SecondTitleComponent Title="Technologies & Frameworks" />
            <LayoutSelectorComponent :ActiveLayout="TECHNOLOGIES_ACTIVE_LAYOUT" :Layouts="TECHNOLOGIES_LAYOUT_OPTIONS"
                @change="onTechnologiesLayoutChange" />
        </div>
        <component :is="TECHNOLOGIES_VIEW_LAYOUT" :Technologies_Developer="Developer!.Technologies_Developer" />
    </div>
</template>

<script lang="ts" setup>
import MainTitleComponent from '@/components/MainTitleComponent.vue';
import { IconList } from '@tabler/icons-vue';
import { IconGridDots } from '@tabler/icons-vue';
import { ILayoutOption } from '@/interfaces/ILayoutOption';
import { useDeveloperStore } from '@/stores/DeveloperStore';
import { storeToRefs } from 'pinia';
import { defineAsyncComponent, ref, type Component } from 'vue';
import LayoutSelectorComponent from '@/components/LayoutSelectorComponent.vue';
import SecondTitleComponent from '@/components/SecondTitleComponent.vue';

const TECHNOLOGY_LIST_LAYOUT = defineAsyncComponent(() => import('@/layouts/technologies/TechnologyListLayout.vue'))
const TECHNOLOGY_GRID_LAYOUT = defineAsyncComponent(() => import('@/layouts/technologies/TechnologyGridLayout.vue'))
const PROGRAMMING_LANGUAGE_LIST_LAYOUT = defineAsyncComponent(() => import('@/layouts/technologies/ProgrammingLanguageListLayout.vue'))
const PROGRAMMING_LANGUAGE_GRID_LAYOUT = defineAsyncComponent(() => import('@/layouts/technologies/ProgrammingLanguageGridLayout.vue'))

const PROGRAMMING_LANGUAGES_VIEW_LAYOUT = ref<Component>(PROGRAMMING_LANGUAGE_LIST_LAYOUT);
const TECHNOLOGIES_VIEW_LAYOUT = ref<Component>(TECHNOLOGY_LIST_LAYOUT);
const PROGRAMMING_LANGUAGES_ACTIVE_LAYOUT = ref('LIST')
const TECHNOLOGIES_ACTIVE_LAYOUT = ref('LIST')

function onProgrammingLanguageLayoutChange(Payload: { LayoutType_Emit: string; Component_Emit: Component; }) {
    PROGRAMMING_LANGUAGES_ACTIVE_LAYOUT.value = Payload.LayoutType_Emit;
    PROGRAMMING_LANGUAGES_VIEW_LAYOUT.value = Payload.Component_Emit;
}

function onTechnologiesLayoutChange(Payload: { LayoutType_Emit: string; Component_Emit: Component; }) {
    TECHNOLOGIES_ACTIVE_LAYOUT.value = Payload.LayoutType_Emit;
    TECHNOLOGIES_VIEW_LAYOUT.value = Payload.Component_Emit;
}

const PROGRAMMING_LANGUAGES_LAYOUT_OPTIONS: ILayoutOption[] = [
    {
        Name_LayoutOption: 'LIST',
        Icon_LayoutOption: IconList,
        Component_LayoutOption: PROGRAMMING_LANGUAGE_LIST_LAYOUT,
    },
    {
        Name_LayoutOption: 'GRID',
        Icon_LayoutOption: IconGridDots,
        Component_LayoutOption: PROGRAMMING_LANGUAGE_GRID_LAYOUT,
    },
];

const TECHNOLOGIES_LAYOUT_OPTIONS: ILayoutOption[] = [
    {
        Name_LayoutOption: 'LIST',
        Icon_LayoutOption: IconList,
        Component_LayoutOption: TECHNOLOGY_LIST_LAYOUT,
    },
    {
        Name_LayoutOption: 'GRID',
        Icon_LayoutOption: IconGridDots,
        Component_LayoutOption: TECHNOLOGY_GRID_LAYOUT,
    },
];

const DEVELOPER_STORE = useDeveloperStore();
const { Developer, Loading, ErrorMessage } = storeToRefs(DEVELOPER_STORE);
</script>

<style scoped>
.TechnologiesViewContent {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    position: relative;
}

.TitleButtonsContainer {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.TechnologiesContent {
    margin-top: 2rem;
}
</style>