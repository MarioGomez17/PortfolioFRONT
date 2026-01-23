<template>
    <button class="ControlButton" @click="ClickEvent_Button">
        <component :is="PROPS.Icon_Button" class="ControlButtonIcon" />
        {{ PROPS.Text_Button }}
    </button>
</template>

<script setup lang="ts">
import { Icon } from '@tabler/icons-vue';

const PROPS = defineProps<{
    Text_Button: string;
    Icon_Button: Icon;
    ClickEvent_Button: () => void;
}>();
</script>

<style scoped>
.ControlButton {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    font-size: 1.5rem;
    line-height: 1;
    font-weight: 700;
    padding: 1rem;
    border: none;
    border-radius: .6rem;
    background-color: transparent;
    color: var(--FifthColor);
    cursor: pointer;
    transition: .3s linear;
}

.ControlButton:hover {
    background-color: var(--FirstColor);
    color: var(--FourthColor);
}

.ControlButton:focus-visible {
    outline: none;
}

.ControlButtonIcon {
    width: 2rem;
    height: 2rem;
}

@media (min-width: 1024px) and (max-width: 1600px) {
    .ControlButton {
        gap: .6rem;
        font-size: 1.2rem;
        padding: .6rem;
    }
}
</style>