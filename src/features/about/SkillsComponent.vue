<template>
    <div>
        <SecondTitleComponent Title="Skills" />
        <div class="SkillsContainer">
            <TechnicalCharacteristicComponent v-for="Skill in PROPS.Skills" :key="Skill.Id_Skill"
                :CharacteristicText="Skill.Name_Skill" CharacteristicColor="PurpleCharacteristic" />
        </div>
    </div>
</template>

<script setup lang="ts">
import SecondTitleComponent from '@/components/SecondTitleComponent.vue';
import { ISkill } from '@/interfaces/ISkill';
import { defineProps } from 'vue';
import TechnicalCharacteristicComponent from './TechnicalCharacteristicComponent.vue';

const PROPS = defineProps<{
    Skills: Array<ISkill>;
}>();
</script>

<style scoped>
.SkillsContainer {
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem 1rem;
}
</style>