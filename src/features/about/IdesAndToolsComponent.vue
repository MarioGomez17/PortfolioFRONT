<template>
    <div>
        <SecondTitleComponent Title="Ides And Tools" />
        <div class="IdesAndToolsContainer">
            <TechnicalCharacteristicComponent v-for="IdeAndTool in PROPS.IdesAndTools" :key="IdeAndTool.Id_IdeAndTool"
                :CharacteristicText="IdeAndTool.Name_IdeAndTool" CharacteristicColor="PurpleCharacteristic" />
        </div>
    </div>
</template>

<script setup lang="ts">
import SecondTitleComponent from '@/components/SecondTitleComponent.vue';
import { IIdeAndTool } from '@/interfaces/IIdeAndTool';
import { defineProps } from 'vue';
import TechnicalCharacteristicComponent from './TechnicalCharacteristicComponent.vue';
const PROPS = defineProps<{
    IdesAndTools: Array<IIdeAndTool>;
}>();
</script>

<style scoped>
.IdesAndToolsContainer {
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem 1rem;
}
</style>