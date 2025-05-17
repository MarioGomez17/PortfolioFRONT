<template>
    <a class="PersonalCharacteristicComponent" v-if="Characteristic_IsURL" :href="PROPS.Characteristic_Description">
        <component :is="Characteristic_Icon" class="PersonalCharacteristicIcon" />
        <h3 class="PersonalCharacteristicTitle">
            {{ PROPS.Characteristic_Title }}:
        </h3>
        <span class="PersonalCharacteristicDescription">
            {{ PROPS.Characteristic_Description }}
        </span>
    </a>
    <div class="PersonalCharacteristicComponent" v-else>
        <component :is="Characteristic_Icon" class="PersonalCharacteristicIcon" />
        <h3 class="PersonalCharacteristicTitle">
            {{ PROPS.Characteristic_Title }}:
        </h3>
        <span class="PersonalCharacteristicDescription">
            {{ PROPS.Characteristic_Description }}
        </span>
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

const PROPS = defineProps<{
    Characteristic_Title: string,
    Characteristic_Description: string,
    Characteristic_Icon: object,
    Characteristic_IsURL: boolean
}>();
</script>

<style scoped>
.PersonalCharacteristicComponent {
    display: flex;
    align-items: center;
    text-decoration: none;
}

.PersonalCharacteristicIcon {
    color: var(--ThirdColor);
    height: 1.5rem;
    width: 1.5rem;
}

.PersonalCharacteristicTitle {
    color: var(--SecondColor);
    font-size: 1.5rem;
    margin: .5rem 1rem;
}

.PersonalCharacteristicDescription {
    color: var(--FifthColor);
    font-size: 1.2rem;
}
</style>
