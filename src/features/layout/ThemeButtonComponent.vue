<template>
    <button type="button" id="ThemeButtonComponent" class="ThemeButtonComponent" @click="ChangeTheme">
        <IconSun class="ButtonIcon" v-if="IS_DARK_MODE" key="Sun" />
        <IconMoon class="ButtonIcon" v-else key="Moon" />
    </button>
</template>

<script lang="ts" setup>
import { IconSun } from '@tabler/icons-vue';
import { IconMoon } from '@tabler/icons-vue';
import { ref } from 'vue';
const IS_DARK_MODE = ref(true)

const ChangeTheme = () => {
    IS_DARK_MODE.value = !IS_DARK_MODE.value
    const BODY = document.querySelector('body');
    if (BODY) {
        BODY.classList.toggle('LigthTheme');
    }
}
</script>

<style scoped>
.ThemeButtonComponent {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: .2rem;
    border-radius: .5rem;
    border: none;
    outline: none;
    background-color: var(--FourthColor);
    cursor: pointer;
    transition: .3s linear;
}

.ButtonIcon {
    width: 1.8rem;
    height: 1.8rem;
    color: var(--SixthColor);
    transition: .3s linear;
}

.ThemeButtonComponent:hover {
    background-color: var(--ThirdColor);
}

.ThemeButtonComponent:hover .ButtonIcon {
    color: var(--FifthColor);
}

.AsideComponent.AsideComponentThemed .ThemeButtonComponent {
    transform: rotateY(180deg);
}
</style>