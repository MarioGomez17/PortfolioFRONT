<template>
    <div class="DivButton">
        <span class="TextIcon">LogOut</span>
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-login LogOutIcon" width="44"
            height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round"
            stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M15 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
            <path d="M21 12h-13l3 -3" />
            <path d="M11 15l-3 -3" />
        </svg>
    </div>
</template>

<script setup>
</script>

<style scoped>
@import '../assets/base.css';

.DivButton {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: var(--ElementsColor);
    border: 2px solid var(--Black);
    transition: .5s;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}

.DivButton:hover {
    box-shadow: 0px 0px 25px 5px var(--BorderColor);
    border-radius: 15px;
    border: 2px solid var(--White);
    width: 150px;
}

.LogOutIcon {
    transition: .5s;
}

.DivButton:hover .LogOutIcon {
    stroke: #FF0000;
    transform: translateX(40px);
}

.TextIcon {
    position: absolute;
    font-family: var(--Font);
    text-transform: uppercase;
    color: var(--TextColor);
    opacity: 0;
    transition: .5s;
    transition-property: transform, opacity;
}

.DivButton:hover .TextIcon {
    transform: translateX(-20px);
    opacity: 1;
}
</style>