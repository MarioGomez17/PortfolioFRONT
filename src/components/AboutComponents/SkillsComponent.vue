<template>
    <div class="InformationDiv">
        <RouterLink to="/Skills" class="InformationTitle">
            {{ Props.Title }}
            <component :is="Props.Icon" class="Icon" />
        </RouterLink>
        <ol class="ListSkill">
            <li v-for="Element in Props.Elements" :key="Element.value" class="InformationListElement">
                {{ Element.Name_Skill }}
            </li>
        </ol>
    </div>
</template>

<script setup>
const Props = defineProps({
    Title: String,
    Elements: Array,
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
    font-weight: bold;
    text-decoration: none;
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

.ListSkill {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 30px;
    padding-left: 25px;
}

.InformationListElement {
    text-decoration: none;
    color: var(--TextColor);
    font-size: 20px;
    text-wrap: wrap;
}
</style>