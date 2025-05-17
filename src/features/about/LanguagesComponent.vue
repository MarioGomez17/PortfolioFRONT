<template>
    <div class="LanguagesComponent">
        <SecondTitleComponent Title="Languages" />
        <LanguageComponent Language_Name="Spanish" Language_Level="Native" />
        <LanguageComponent Language_Name="English" Language_Level="B1" />
    </div>
</template>

<script setup lang="ts">
import SecondTitleComponent from '@/components/SecondTitleComponent.vue';
import LanguageComponent from './LanguageComponent.vue';
</script>

<style scoped>
.LanguagesComponent {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
}
</style>