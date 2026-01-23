<template>
    <span :class="`TechnologyArea ${AreaClass}`">
        {{ PROPS.NameArea }}
    </span>
</template>

<script lang="ts" setup>
import { computed } from 'vue';

const PROPS = defineProps<{
    IdArea: number;
    NameArea: string;
}>();

const AreaClass = computed(() => {
    switch (PROPS.IdArea) {
        case 1:
            return 'FrontEnd';
        case 2:
            return 'BackEnd';
        case 3:
            return 'DataBase';
        case 4:
            return 'Cloud';
        default:
            return 'Unknown';
    }
})
</script>

<style scoped>
.TechnologyArea {
    padding: .5rem 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 800;
    border-radius: 2rem;
    transition: .3s linear;
}

.FrontEnd {
    background-color: var(--FirstColor);
    color: var(--FourthColor);
}

.FrontEnd:hover {
    background-color: var(--FourthColor);
    color: var(--FirstColor);
}

.BackEnd {
    background-color: var(--ThirdColor);
    color: var(--FifthColor);
}

.BackEnd:hover {
    background-color: var(--FifthColor);
    color: var(--ThirdColor);
}

.DataBase {
    background-color: var(--FourthColor);
    color: var(--SixthColor);
}

.DataBase:hover {
    background-color: var(--SixthColor);
    color: var(--FourthColor);
}

.Cloud {
    background-color: var(--SecondColor);
    color: var(--FifthColor);
}

.Cloud:hover {
    background-color: var(--FifthColor);
    color: var(--SecondColor);
}

.Unknown {
    background-color: var(--FifthColor);
    color: var(--SixthColor);
}

.Unknown:hover {
    background-color: var(--SixthColor);
    color: var(--FifthColor);
}
</style>