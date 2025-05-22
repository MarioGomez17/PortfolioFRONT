<template>
    <button type="button" class="ViewDiplomaButton" @click="openModal = true">
        <IconFileDescription />
        View Diploma
    </button>
    <div v-if="openModal" class="modal-overlay" @click.self="closeModal">
        <div class="modal-content">
            <button class="close-button" @click="closeModal">X</button>
            <img :src="PROPS.Diploma_SRC" alt="Imagen grande" class="modal-image" />
        </div>
    </div>

</template>

<script setup lang="ts">
import { ref } from 'vue';
import { defineProps } from 'vue';
import { IconFileDescription } from '@tabler/icons-vue';

const openModal = ref(false);

const PROPS = defineProps<{
    Diploma_SRC: string;
}>();

const closeModal = () => {
    openModal.value = false;
};
</script>

<style scoped>
.ViewDiplomaButton {
    width: fit-content;
    white-space: nowrap;
    display: flex;
    align-items: center;
    gap: .5rem;
    background-color: transparent;
    border: 2px solid var(--SecondColor);
    border-radius: .3rem;
    padding: .5rem 1rem;
    font-size: 1rem;
    font-weight: 700;
    color: var(--FourthColor);
    cursor: pointer;
    transition: .3s linear;
}

.ViewDiplomaButton:hover {
    background-color: var(--SecondColor);
    color: var(--FifthColor)
}

.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;
}

.modal-content {
    position: relative;
    max-height: 90vh;
    overflow: auto;
}

.modal-image {
    max-height: 90vh;
    width: auto;
    display: block;
}

.close-button {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    background: #fff;
    border: none;
    font-size: 1.2rem;
    cursor: pointer;
    padding: 0.3rem 0.6rem;
    border-radius: 4px;
    z-index: 10000;
}
</style>