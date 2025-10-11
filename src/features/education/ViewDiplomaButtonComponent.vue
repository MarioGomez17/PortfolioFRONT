<template>
    <router-link :to="ROUTE" class="ViewDiplomaButton" target="_blank">
        <IconFileDescription />
        View Diploma
    </router-link>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import { IconFileDescription } from '@tabler/icons-vue';

const PROPS = defineProps<{
    Diploma_SRC: string;
    Diploma_name: string;
    Diploma_Academy: string;
    Diploma_Date: string;
}>();

const ROUTE = {
    name: 'Diploma',
    query: {
        Diploma_SRC: PROPS.Diploma_SRC,
        Diploma_name: PROPS.Diploma_name,
        Diploma_Academy: PROPS.Diploma_Academy,
        Diploma_Date: PROPS.Diploma_Date
    }
}
</script>

<style scoped>
.ViewDiplomaButton {
    width: fit-content;
    white-space: nowrap;
    display: flex;
    align-items: center;
    gap: .5rem;
    background-color: transparent;
    border: 2px solid var(--SecondColor);
    border-radius: .3rem;
    padding: .5rem 1rem;
    font-size: 1rem;
    font-weight: 700;
    color: var(--FourthColor);
    cursor: pointer;
    text-decoration: none;
    transition: .3s linear;
}

.ViewDiplomaButton:hover {
    background-color: var(--SecondColor);
    color: var(--FifthColor)
}


</style>