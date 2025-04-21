<template>
    <div class="TitleContainer">
        <div>
            <h1 class="MainTitle">{{ PROPS.Name_Developer }} {{ PROPS.LastName_Developer }}</h1>
            <h2 class="SecondTitle">Web Developer</h2>
        </div>
        <IconUserCode class="Icon" />
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import { IconUserCode } from '@tabler/icons-vue';

const PROPS = defineProps({
    Name_Developer: String,
    LastName_Developer: String
});

</script>

<style scoped>
.TitleContainer {
    width: 100%;
    display: flex;
}

.MainTitle {
    color: var(--FourthColor);
    text-align: start;
    font-size: 6rem;
}

.SecondTitle {
    color: var(--ThirdColor);
    text-align: start;
    font-size: 3rem;
}

.Icon {
    width: auto;
    height: 12rem;
    color: var(--FourthColor);
    filter: drop-shadow(0px 0px 15px);
}
</style>