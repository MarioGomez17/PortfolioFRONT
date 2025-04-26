<template>
    <div class="TitleContainer">
        <div>
            <MainTitleComponent :Title="`${PROPS.Name_Developer} ${PROPS.LastName_Developer}`" />
            <SecondTitleComponent :Title="Job_Developer" />
        </div>
        <IconUserCode class="Icon" />
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import { IconUserCode } from '@tabler/icons-vue';
import MainTitleComponent from '@/components/MainTitleComponent.vue';
import SecondTitleComponent from '@/components/SecondTitleComponent.vue';

const PROPS = defineProps<{
    Name_Developer: string,
    LastName_Developer: string
    Job_Developer: string
}>();
</script>

<style scoped>
.TitleContainer {
    width: 100%;
    display: flex;
}

.MainTitle {
    color: var(--FourthColor);
    text-align: start;
    font-size: 6rem;
}

.SecondTitle {
    color: var(--ThirdColor);
    text-align: start;
    font-size: 3rem;
}

.Icon {
    width: auto;
    height: 12rem;
    color: var(--FourthColor);
    filter: drop-shadow(0px 0px 15px);
}
</style>