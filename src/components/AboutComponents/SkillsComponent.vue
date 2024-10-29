<template>
    <div class="InformationDiv">
        <RouterLink to="/Skills" class="InformationTitle">{{ Title }}</RouterLink>
        <ol>
            <li v-for="Element in Props.Elements" :key="Element.value" class="InformationLink">
                {{ Element.Name_Skill }}
            </li>
        </ol>
    </div>
</template>

<script setup>
const Props = defineProps({
    Title: String,
    Elements: Array
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
    font-weight: bold;
    text-decoration: none;
    color: var(--FirstColor);
}

.InformationLink {
    text-decoration: none;
    color: var(--TextColor);
    font-size: 20px;
}
</style>