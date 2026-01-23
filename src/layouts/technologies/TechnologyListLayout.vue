<template>
    <div class="EducationListLayout">
        <TechnologyListItemComponent v-for="Technology in PROPS.Technologies_Developer" :key="Technology.Id_Technology"
            :Technology="Technology" />
    </div>
</template>

<script setup lang="ts">
import TechnologyListItemComponent from '@/features/technologies/TechnologyListItemComponent.vue';
import { ITechnology } from '@/interfaces/ITechnology';

const PROPS = defineProps<{
    Technologies_Developer: Array<ITechnology>;
}>();
</script>

<style scoped>
.EducationListLayout {
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
}
</style>