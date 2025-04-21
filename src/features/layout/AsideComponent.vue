<template>
    <aside class="AsideComponent" id="AsideComponent">
        <div class="AsideContent">
            <HeaderComponent />
            <NavigationComponent />
            <div class="FooterButtons">
                <ThemeButtonComponent />
                <CollapseButtonComponent />
            </div>
        </div>
    </aside>
</template>

<script setup>
import CollapseButtonComponent from './CollapseButtonComponent.vue';
import HeaderComponent from './HeaderComponent.vue';
import NavigationComponent from './NavigationComponent.vue';
import ThemeButtonComponent from './ThemeButtonComponent.vue';

</script>

<style scoped>
.AsideComponent {
    width: 20%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
    padding: 1rem;
    box-sizing: border-box;
    transition: .3s linear;
}

.AsideComponent.AsideComponentCollapsed {
    width: 10%;
}

.AsideContent {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 1.5rem;
    padding: 1.5rem;
    box-sizing: border-box;
    transition: .3s linear;
    width: 100%;
    height: 100%;
    background-color: var(--SecondColor);
    border: 5px solid var(--FourthColor);
    z-index: 3;
    border-radius: 1rem;
    position: relative;
}

.FooterButtons {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

@media (min-width: 1024px) and (max-width: 1600px) {
    .AsideContent {
        gap: .8rem;
        padding: .8rem;
    }
}
</style>