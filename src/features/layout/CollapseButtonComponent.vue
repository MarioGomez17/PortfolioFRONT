<template>
    <button type="button" class="CollapseButtonComponent" @click="Collapse">
        <IconChevronsLeft class="ButtonIcon" />
    </button>
</template>

<script lang="ts" setup>
import { IconChevronsLeft } from '@tabler/icons-vue';

const Collapse = () => {
    const ASIDE_COMPONENT = document.getElementById('AsideComponent');
    if (ASIDE_COMPONENT) {
        ASIDE_COMPONENT.classList.toggle('AsideComponentCollapsed');
    }
}

</script>

<style scoped>
.CollapseButtonComponent {
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

.CollapseButtonComponent:hover {
    background-color: var(--ThirdColor);
}

.CollapseButtonComponent:hover .ButtonIcon {
    color: var(--FifthColor);
}

.AsideComponent.AsideComponentCollapsed .CollapseButtonComponent {
    transform: rotateY(180deg);
}
</style>