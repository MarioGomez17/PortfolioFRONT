<template>
    <div class="EducationGridLayout">
        <EducationCardComponent v-for="Education in PROPS.Educations_Developer" :key="Education.Id_Education"
            :Education="Education" />
    </div>
</template>

<script setup lang="ts">
import EducationCardComponent from '@/features/education/EducationCardComponent.vue';
import { IEducation } from '@/interfaces/IEducation';
import { defineProps } from 'vue';

const PROPS = defineProps<{
    Educations_Developer: Array<IEducation>;
}>();
</script>

<style scoped>
.EducationGridLayout {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
}
</style>