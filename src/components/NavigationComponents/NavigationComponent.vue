<template>
    <span class="TextElement">{{ Propos.TextURL }}</span>
</template>

<script setup>

const Propos = defineProps({
    TextURL: String
})

</script>

<style scoped>
@import '../../assets/base.css';

.TextElement {
    padding: 15px 30px;
    background-color: var(--ElementsColor);
    border-radius: 10px;
    transition: .5s;
    color: var(--TextColor);
    font-family: var(--Font);
    font-size: 17px;
    text-transform: uppercase;
    border: 2px solid var(--Black);
}

.TextElement:hover {
    border: 2px solid var(--White);
    box-shadow: 0px 0px 25px 5px var(--BorderColor);
    background-color: transparent;
}
</style>