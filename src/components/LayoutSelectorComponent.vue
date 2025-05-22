<template>
    <div class="ButtonsContainer">
        <button v-for="Layout in PROPS.Layouts" :key="Layout.Name_LayoutOption" type="button" class="LayoutButton"
            @click="SelectLayout(Layout)"
            :class="{ ActiveLayoutButton: PROPS.ActiveLayout === Layout.Name_LayoutOption }">
            <component :is="Layout.Icon_LayoutOption" class="LayoutButtonIcon" />
        </button>
    </div>
</template>

<script setup lang="ts">
import { ILayoutOption } from '@/interfaces/ILayoutOption';
import type { Component } from 'vue';
import { defineProps, defineEmits } from 'vue';


const PROPS = defineProps<{
    ActiveLayout: string;
    Layouts: Array<ILayoutOption>;
}>();

const emit = defineEmits<{
    (e: 'change', payload: { LayoutType_Emit: string; Component_Emit: Component; }): void;
}>();

function SelectLayout(Layout: ILayoutOption) {
    emit('change', {
        LayoutType_Emit: Layout.Name_LayoutOption,
        Component_Emit: Layout.Component_LayoutOption,
    });
}
</script>

<style scoped>
.ButtonsContainer {
    display: flex;
    gap: 2rem;
    margin-bottom: 2rem;
}

.LayoutButton {
    background-color: transparent;
    cursor: pointer;
    border: 2px solid var(--FourthColor);
    border-radius: .5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: .5rem;
    transition: .3s linear;
}

.LayoutButtonIcon {
    width: 2.5rem;
    height: 2.5rem;
    color: var(--FourthColor);
    transition: .3s linear;
}

.ActiveLayoutButton,
.LayoutButton:hover {
    background-color: var(--FourthColor);
}

.ActiveLayoutButton .LayoutButtonIcon,
.LayoutButton:hover .LayoutButtonIcon {
    color: var(--SixthColor);
}
</style>