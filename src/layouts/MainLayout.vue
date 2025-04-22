<template>
    <div class="Layout">
        <AsideComponent />
        <div class="ContentDiv">
            <main class="MainContent">
                <slot></slot>
            </main>
            <FooterComponent />
        </div>
    </div>
    <ContactLinksComponent />
</template>

<script setup lang="ts">
import AsideComponent from '@/features/layout/AsideComponent.vue';
import ContactLinksComponent from '@/features/layout/ContactLinksComponent.vue';
import FooterComponent from '@/features/layout/FooterComponent.vue';
</script>

<style scoped>
.Layout {
    width: 100vw;
    height: 100vh;
    display: flex;
}

.ContentDiv {
    flex: 1;
    display: flex;
    flex-direction: column;
    height: 100%;
}

.MainContent {
    height: 95%;
    width: 100%;
    overflow: auto;
    scrollbar-width: none;
    z-index: 2;
    padding: 1rem;
    padding-left: 3rem;
    box-sizing: border-box;
}
</style>