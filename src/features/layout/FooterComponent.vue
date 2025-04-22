<template>
    <footer class="FooterComponent">
        <p class="FooterContent">
            &copy; {{ currentYear }} - {{ author }}. Todos los derechos reservados.
        </p>
    </footer>
</template>

<script setup lang="ts">
var currentYear = new Date().getFullYear();
var author = "Mario Gómez";
</script>

<style scoped>
.FooterComponent {
    height: 5%;
    width: 100%;
    padding-left: 3rem;
    box-sizing: border-box;
}

.Footer {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.FooterContent {
    height: 100%;
    text-align: left;
    font-weight: 400;
    font-size: 1.4rem;
    color: var(--FifthColor);
    text-shadow: 2px 2px 2px var(--SecondColor);
}
</style>