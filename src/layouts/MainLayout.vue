<template>
    <div class="Layout">
        <AsideComponent />
        <div class="ContentDiv">
            <main class="MainContent">
                <slot></slot>
                <FooterComponent />
            </main>
        </div>
    </div>
</template>

<script setup lang="ts">
import AsideComponent from '@/features/layout/AsideComponent.vue';
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
    width: 100%;
    overflow: auto;
    scrollbar-width: none;
    z-index: 2;
    padding: 1rem;
    padding-left: 0;
    padding-bottom: 0;
    box-sizing: border-box;
}
</style>