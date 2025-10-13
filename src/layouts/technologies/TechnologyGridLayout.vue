<template>
    <div class="TechnologiesGridLayout">
        <TechnologyCardComponent v-for="Technology in PROPS.Technologies_Developer" :key="Technology.Id_Technology"
            :Technology="Technology" />
    </div>
</template>

<script setup lang="ts">
import TechnologyCardComponent from '@/features/technologies/TechnologyCardComponent.vue';
import { ITechnology } from '@/interfaces/ITechnology';
import { defineProps } from 'vue';

const PROPS = defineProps<{
    Technologies_Developer: Array<ITechnology>;
}>();
</script>

<style scoped>
.TechnologiesGridLayout {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
}
</style>