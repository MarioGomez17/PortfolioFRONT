<template>
    <div class="InformationDiv">
        <h3 class="InformationTitle">{{ Props.Title }}</h3>
        <span class="InformationLink">{{ Props.Contetn }}</span>
    </div>
</template>

<script setup>

const Props = defineProps({
    Title: String,
    Contetn: String
})

</script>

<style scoped>
@import '../../assets/base.css';

.InformationDiv {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 15px;
    text-transform: uppercase;
    font-family: var(--Font);
}

.InformationTitle {
    margin: 15px;
    font-size: 30px;
    color: var(--FirstColor);
}

.InformationLink {
    text-decoration: none;
    color: var(--TextColor);
    font-size: 20px;
}
</style>