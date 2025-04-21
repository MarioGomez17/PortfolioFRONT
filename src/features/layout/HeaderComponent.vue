<template>
    <header class="HeaderComponent">
        <div class="HeaderContent">
            <router-link to="/" class="HeaderLink">
                <img src="@/assets/images/logo.webp" class="ImageLogo" />
                <div class="PersonInfo">
                    <h2 class="PersonName">{{ name }}</h2>
                    <h4 class="PersonJob">{{ job }}</h4>
                </div>
            </router-link>
        </div>
    </header>
</template>

<script setup>
var name = 'Mario Gómez';
var job = 'web developer';
</script>

<style scoped>
.HeaderComponent {
    width: 100%;
    height: 15%;
}

.HeaderContent {
    width: 100%;
    height: 100%;
    padding: 0.5rem;
    box-sizing: border-box;
    border-radius: 1rem;
    transition: .3s linear;
}

.HeaderContent:hover {
    background-color: var(--FourthColor);
}

.HeaderLink {
    width: 100%;
    height: 100%;
    text-decoration: none;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    color: var(--FifthColor);
    transition: .3s linear;
}

.ImageLogo {
    height: 70%;
    width: auto;
    border-radius: 50%;
    border: 5px solid var(--FifthColor);
    transition: .3s linear;
}

.HeaderContent:hover .ImageLogo {
    border-color: var(--SixthColor);
    box-shadow: 0px 0px 15px 3px var(--SixthColor);
}

.PersonInfo {
    transition: .3s linear;
}

.HeaderContent:hover .PersonInfo {
    color: var(--SixthColor);
}

.AsideComponent.AsideComponentCollapsed .PersonInfo {
    transform: translateX(50%);
    pointer-events: none;
    opacity: 0;
}

.PersonName {
    font-size: 1.5rem;
    font-weight: 800;
    text-transform: uppercase;
    text-wrap: nowrap;
}

.PersonJob {
    font-size: 1rem;
    font-style: italic;
    text-transform: uppercase;
    text-align: left;
    text-wrap: nowrap;
}

@media (min-width: 1024px) and (max-width: 1600px) {
    .HeaderContent {
        padding: 0.3rem;
        border-radius: 1rem;
    }

    .PersonName {
        font-size: 1.3rem;
    }

    .PersonJob {
        font-size: 0.9rem;
    }

    .ImageLogo {
        height: 79%;
    }
}
</style>