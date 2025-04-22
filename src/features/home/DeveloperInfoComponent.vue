<template>
    <DeveloperNameComponent v-if="Loading" Name_Developer="Loading..." LastName_Developer=""
        Job_Developer="Loading..." />
    <DeveloperNameComponent v-else-if="ErrorMessage" Name_Developer="Error" LastName_Developer=""
        Job_Developer="Error fetching information" />
    <DeveloperNameComponent v-else :Name_Developer="Developer!.Name_Developer"
        :LastName_Developer="Developer!.LastName_Developer" Job_Developer="Web Developer" />
    <DeveloperDescriptionComponent v-if="Loading" Description_Developer="Loading..." />
    <DeveloperDescriptionComponent v-else-if="ErrorMessage" :Description_Developer="ErrorMessage" />
    <DeveloperDescriptionComponent v-else :Description_Developer="Developer!.Description_Developer" />
</template>

<script setup lang="ts">
import { useDeveloperStore } from '@/stores/DeveloperStore';
import { storeToRefs } from 'pinia';
import DeveloperNameComponent from './DeveloperNameComponent.vue';
import DeveloperDescriptionComponent from './DeveloperDescriptionComponent.vue';

const DEVELOPER_STORE = useDeveloperStore();
const { Developer, Loading, ErrorMessage } = storeToRefs(DEVELOPER_STORE);
</script>