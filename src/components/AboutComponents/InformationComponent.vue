<template>
    <div class="InformationDiv">
        <h3 class="InformationTitle">
            {{ Props.Title }}
            <component :is="Props.Icon" class="Icon" />
        </h3>
        <span class="InformationLink">{{ Props.Contetn }}</span>
    </div>
</template>

<script setup>

const Props = defineProps({
    Title: String,
    Contetn: String,
    Icon: Object
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
    display: flex;
    align-items: center;
    gap: 25px;
}

.Icon {
    width: 40px;
    height: 40px;
    stroke-width: 2;
    stroke: var(--FirstColor);
}

.InformationLink {
    text-decoration: none;
    color: var(--TextColor);
    font-size: 20px;
}
</style>