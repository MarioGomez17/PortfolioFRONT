<template>
    <div class="InformationDiv">
        <RouterLink to="/Education" class="InformationTitle">{{ Title }}</RouterLink>
        <ol>
            <li v-for="Element in Props.Elements" :key="Element.value" class="InformationLink">
                {{ Element.DegreeName_Education }} ({{ Element.Academy_Education.Name_Academy }})
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