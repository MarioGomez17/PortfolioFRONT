<template>
    <h4 class="EducationAchievementsTitle">
        Achievements
    </h4>
    <ul class="EducationAchievementsList">
        <li class="EducationAchievementsListItem" v-for="Achieve in PROPS.Achievements_Education"
            :key="Achieve.Id_EducationAchievement">
            {{ Achieve.Description_EducationAchievement }}
        </li>
    </ul>
</template>

<script setup lang="ts">
import { IEducationAchievement } from '@/interfaces/IEducationAchievement';
import { defineProps } from 'vue';

const PROPS = defineProps<{
    Achievements_Education: Array<IEducationAchievement>;
}>();
</script>

<style scoped>
.EducationAchievementsTitle {
    color: var(--FourthColor);
}

.EducationAchievementsList {
    margin-top: 1rem;
    color: var(--FifthColor);
    margin-left: 2rem;
    margin-bottom: 1.5rem;
}

.EducationAchievementsListItem {
    font-size: 1rem;
    margin: .5rem 0;
}

.EducationAchievementsListItem::marker {
    color: var(--FourthColor);
}
</style>