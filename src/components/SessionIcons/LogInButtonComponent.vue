<template>
    <div class="DivButton">
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-login-2 LogInIcon" width="40"
            height="40" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round"
            stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M9 8v-2a2 2 0 0 1 2 -2h7a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-7a2 2 0 0 1 -2 -2v-2" />
            <path d="M3 12h13l-3 -3" />
            <path d="M13 15l3 -3" />
        </svg>
        <span class="TextIcon">LogIn</span>
    </div>
</template>

<script setup>
</script>

<style scoped>
@import '../../assets/base.css';

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

.LogInIcon {
    transition: .5s;
}

.DivButton:hover .LogInIcon {
    stroke: #00FF00;
    transform: translateX(-30px);
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
    transform: translateX(20px);
    opacity: 1;
}
</style>