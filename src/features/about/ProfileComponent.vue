<template>
    <div class="ProfileComponent">
        <SecondTitleComponent Title="Professional Profile" />
        <p class="ProfileDescription">
            {{ PROPS.ProfessionalProfile_Description }}
        </p>
    </div>
</template>

<script setup lang="ts">
import SecondTitleComponent from '@/components/SecondTitleComponent.vue';
import { defineProps } from 'vue';

const PROPS = defineProps<{
    ProfessionalProfile_Description: string,
}>();
</script>

<style scoped>
.ProfileComponent {
    display: flex;
    flex-direction: column;
}

.ProfileDescription {
    margin-top: .5rem;
    color: var(--FifthColor);
    font-size: 1.2rem;
    line-height: 2;
}
</style>
