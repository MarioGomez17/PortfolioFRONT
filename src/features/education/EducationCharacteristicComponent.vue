<template>
    <span class="EducationCharacteristic">
        <component :is="PROPS.CharacteristicEducation_Icon" class="EducationCharacteristicIcon" />
        {{ PROPS.CharacteristicEducation_Text }}
    </span>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

const PROPS = defineProps<{
    CharacteristicEducation_Text: string;
    CharacteristicEducation_Icon: object;
}>();
</script>

<style scoped>
.EducationCharacteristic {
    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: 1.3rem;
    color: var(--FifthColor);
}

.EducationCharacteristicIcon {
    color: var(--FourthColor);
}
</style>