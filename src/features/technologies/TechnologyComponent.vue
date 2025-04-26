<template>
    <div class="TechnologyContainer" :class="{ 'ShowInformation': showInformation }">
        <button class="InformationButton" @click="Information">
            <IconInfoCircle class="InformationIcon" />
        </button>
        <img class="TechnologyLogo" :src="PROPS.LogoTechnology" :alt="`Logo de ${PROPS.NameTechnology}`" />
        <p class="TitlePropertyTechnology" v-if="PROPS.DivisionTechnology">
            Name:
            <span class="PropertyTechnology">
                {{ PROPS.NameTechnology }}
            </span>
        </p>
        <p class="TitleNameProgrammingLanguage" v-if="!PROPS.DivisionTechnology">
            Name:
            <span class="PropertyTechnology">
                {{ PROPS.NameTechnology }}
            </span>
        </p>
        <p class="TitlePropertyTechnology" v-if="PROPS.DivisionTechnology">
            Division:
            <span class="PropertyTechnology">
                {{ PROPS.DivisionTechnology }}
            </span>
        </p>
        <p class="TitlePropertyTechnology" v-if="PROPS.ProgrammingLanguageTechnology">
            Programming Language:
            <img class="ProgrammingLanguageLogo" :src="PROPS.ProgrammingLanguageTechnology"
                alt="Logo del lenguaje de programacion" />
        </p>
        <p class="TitleDescriptionTechnology">
            Description:
            <span class="DescriptionTechnology">
                {{ PROPS.DescriptionTechnology }}
            </span>
        </p>
    </div>
</template>

<script setup lang="ts">
import { defineProps, ref } from 'vue';
import { IconInfoCircle } from '@tabler/icons-vue';

const showInformation = ref(false)
var Temporizador: number;

const PROPS = defineProps<{
    LogoTechnology: string;
    NameTechnology: string;
    DivisionTechnology: string | null;
    ProgrammingLanguageTechnology: string | null;
    DescriptionTechnology: string;
}>();

const Information = () => {
    showInformation.value = !showInformation.value;
    clearTimeout(Temporizador);
    Temporizador = setTimeout(() => {
        showInformation.value = false;
    }, 40000);
}

</script>

<style scoped>
.InformationButton {
    border: none;
    background-color: transparent;
    cursor: pointer;
    position: absolute;
    top: .5rem;
    left: .5rem;
    z-index: 2;
}

.InformationIcon {
    color: var(--FourthColor);
    width: 2rem;
    height: 2rem;
}

.TechnologyContainer {
    width: 15rem;
    height: 15rem;
    transition: .3s linear;
    background-color: var(--SixthColor);
    margin: 1rem;
    border-radius: 2rem;
    position: relative;
    overflow: hidden;
    background: linear-gradient(var(--SixthColor), var(--SixthColor)) padding-box,
        linear-gradient(145deg, transparent 35%, var(--SecondColor), var(--ThirdColor)) border-box;
    border: 5px solid transparent;
    background-size: 200% 100%;
    animation: BorderGradient 5s linear infinite;
}

.TechnologyLogo {
    position: relative;
    width: 15rem;
    padding: 2.5rem;
    box-sizing: border-box;
    height: auto;
    top: 0;
    left: 0;
    transition: .3s linear;
}

.TitlePropertyTechnology,
.TitleNameProgrammingLanguage {
    position: relative;
    top: -14rem;
    left: 15rem;
    opacity: 0;
    width: fit-content;
    font-size: 1.2rem;
    font-weight: bold;
    color: var(--FourthColor);
    transition: .3s linear 0s;
    white-space: nowrap;
    pointer-events: none;
}

.PropertyTechnology {
    font-weight: 400;
    color: var(--FifthColor);
}

.TitleNameProgrammingLanguage {
    font-size: 3rem;
}

.ProgrammingLanguageLogo {
    position: absolute;
    width: 3rem;
    height: auto;
    bottom: 0;
    right: -25%;
}

.TitleDescriptionTechnology {
    font-size: 1.2rem;
    font-weight: bold;
    color: var(--FourthColor);
    transition: .3s linear 0s;
    pointer-events: none;
    opacity: 0;
    position: relative;
    width: 35rem;
    padding: 1rem;
    padding-bottom: 0;
    box-sizing: border-box;
    top: -2rem;
}

.DescriptionTechnology {
    font-weight: 400;
    color: var(--FifthColor);
}

.TechnologyContainer.ShowInformation {
    width: 35rem;
    height: fit-content;
}

.TechnologyContainer.ShowInformation .TechnologyLogo {
    width: 5rem;
    padding: 0;
    top: 1rem;
    left: 3rem;
}

.TechnologyContainer.ShowInformation .TitlePropertyTechnology,
.TechnologyContainer.ShowInformation .TitleNameProgrammingLanguage {
    left: 9rem;
    top: -5rem;
    opacity: 1;
}

.TechnologyContainer.ShowInformation .TitleDescriptionTechnology {
    opacity: 1;
}

@keyframes BorderGradient {
    0% {
        background-position: 0% 50%;
    }

    50% {
        background-position: 100% 50%;
    }

    100% {
        background-position: 0% 50%;
    }
}
</style>