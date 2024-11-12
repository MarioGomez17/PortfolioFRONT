<template>
    <div class="InformationDiv">
        <h3 class="InformationTitle">{{ Props.Title }}</h3>
        <a :href="Props.Url" target="_blank" class="InformationLink">{{ Props.Contetn }}</a>
    </div>
</template>

<script setup>
const Props = defineProps({
    Title: String,
    Contetn: String,
    Url: String
})
</script>

<style scoped>
@import '../../assets/base.css';

.InformationDiv {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-transform: uppercase;
    font-family: var(--Font);
}

.InformationTitle {
    margin: 20px 0;
    font-size: 30px;
    text-align: center;
    color: var(--FirstColor);
}

.InformationLink {
    text-decoration: none;
    color: var(--TextColor);
    font-size: 20px;
}
</style>