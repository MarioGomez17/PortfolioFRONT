<template>
    <div class="EducationListLayout">
        <EducationListItemComponent v-for="Education in PROPS.Educations_Developer" :key="Education.Id_Education"
            :Education="Education" />
    </div>
</template>

<script setup lang="ts">
import EducationListItemComponent from '@/features/education/EducationListItemComponent.vue';
import { IEducation } from '@/interfaces/IEducation';

const PROPS = defineProps<{
    Educations_Developer: Array<IEducation>;
}>();
</script>

<style scoped>
.EducationListLayout {
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
}
</style>