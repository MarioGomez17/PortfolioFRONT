<template>
    <div class="EducationViewContent" v-if="!Loading && !ErrorMessage">
        <div class="TitleButtonsContainer">
            <MainTitleComponent Title="My Education" />
            <LayoutSelectorComponent :ActiveLayout="ACTIVE_LAYOUT" :Layouts="LAYOUT_OPTIONS" @change="onLayoutChange" />
        </div>
        <component :is="VIEW_LAYOUT" :Educations_Developer="Developer!.Education_Developer" />
    </div>
</template>

<script setup lang="ts">
import MainTitleComponent from '@/components/MainTitleComponent.vue';
import { IconList } from '@tabler/icons-vue';
import { IconGridDots } from '@tabler/icons-vue';
import { ILayoutOption } from '@/interfaces/ILayoutOption';
import { useDeveloperStore } from '@/stores/DeveloperStore';
import { storeToRefs } from 'pinia';
import { defineAsyncComponent, ref, type Component } from 'vue';
import LayoutSelectorComponent from '@/components/LayoutSelectorComponent.vue';

const EDUCATION_LIST_LAYOUT = defineAsyncComponent(() => import('@/layouts/education/EducationListLayout.vue'))
const EDUCATION_GRID_LAYOUT = defineAsyncComponent(() => import('@/layouts/education/EducationGridLayout.vue'))
const VIEW_LAYOUT = ref<Component>(EDUCATION_LIST_LAYOUT);
const ACTIVE_LAYOUT = ref('list')

function onLayoutChange(Payload: { LayoutType_Emit: string; Component_Emit: Component; }) {
    ACTIVE_LAYOUT.value = Payload.LayoutType_Emit;
    VIEW_LAYOUT.value = Payload.Component_Emit;
}

const LAYOUT_OPTIONS: ILayoutOption[] = [
    {
        Name_LayoutOption: 'LIST',
        Icon_LayoutOption: IconList,
        Component_LayoutOption: EDUCATION_LIST_LAYOUT,
    },
    {
        Name_LayoutOption: 'GRID',
        Icon_LayoutOption: IconGridDots,
        Component_LayoutOption: EDUCATION_GRID_LAYOUT,
    },
];

const DEVELOPER_STORE = useDeveloperStore();
const { Developer, Loading, ErrorMessage } = storeToRefs(DEVELOPER_STORE);
</script>

<style scoped>
.EducationViewContent {
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
</style>