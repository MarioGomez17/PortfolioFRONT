<template>
    <router-link to="/Contact" class="ContactButton">
        Contact Me
    </router-link>
</template>

<style scoped>
.ContactButton {
    font-size: 1.5rem;
    text-decoration: none;
    background-color: var(--FifthColor);
    color: var(--ThirdColor);
    padding: 1rem 2rem;
    border-radius: .6rem;
    border: 3px solid var(--ThirdColor);
    font-weight: 600;
    transition: .3s linear;
}

.ContactButton:hover {
    background-color: var(--ThirdColor);
    color: var(--FifthColor);
}
</style>