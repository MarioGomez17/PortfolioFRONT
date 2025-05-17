<template>
    <div>
        <SecondTitleComponent Title="Version Control" />
        <div class="VersionControlsContainer">
            <TechnicalCharacteristicComponent v-for="IdeAndTool in PROPS.VersionControls"
                :key="IdeAndTool.Id_ControlVersion" :CharacteristicText="IdeAndTool.Name_ControlVersion"
                CharacteristicColor="PurpleCharacteristic" />
        </div>
    </div>
</template>

<script setup lang="ts">
import SecondTitleComponent from '@/components/SecondTitleComponent.vue';
import { IControlVersion } from '@/interfaces/IControlVersion';
import { defineProps } from 'vue';
import TechnicalCharacteristicComponent from './TechnicalCharacteristicComponent.vue';

const PROPS = defineProps<{
    VersionControls: Array<IControlVersion>;
}>();
</script>

<style scoped>
.VersionControlsContainer {
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem 1rem;
}
</style>