<template>
    <span :class="`Characteristic ${PROPS.CharacteristicColor}`">
        {{ PROPS.CharacteristicText }}
    </span>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

const PROPS = defineProps<{
    CharacteristicText: string;
    CharacteristicColor: string;
}>();
</script>

<style scoped>
.GreenCharacteristic {
    --MainCharacteristicColor: var(--ThirdColor);
    --SecondCharacteristicColor: var(--FourthColor);
    --TextCharacteristicColor: var(--SixthColor);
}

.PurpleCharacteristic {
    --MainCharacteristicColor: var(--FirstColor);
    --SecondCharacteristicColor: var(--SecondColor);
    --TextCharacteristicColor: var(--FifthColor);
}

.Characteristic {
    padding: .3rem .7rem;
    background-color: var(--MainCharacteristicColor);
    font-size: 1.2rem;
    font-weight: 500;
    color: var(--TextCharacteristicColor);
    border-radius: 2rem;
    transition: .3s linear;
}

.Characteristic:hover {
    background-color: var(--SecondCharacteristicColor);
}
</style>