<template>
  <div class="HomeViewContent" v-if="!Loading && !ErrorMessage">
    <GrettingComponent />
    <DeveloperNameComponent :Name_Developer="`${Developer!.Name_Developer} ${Developer!.LastName_Developer}`" />
    <DeveloperJobComponent :Job_Developer="Developer!.Role_Developer" />
    <LineDecoratorComponent />
    <DeveloperDescriptionComponent :Description_Developer="Developer!.ShortProfile_Developer" />
    <div class="HomeLinks">
      <AboutButtonComponent />
      <ContactButtonComponent />
    </div>
  </div>
</template>

<script lang="ts" setup>
import AboutButtonComponent from '@/features/home/AboutButtonComponent.vue';
import ContactButtonComponent from '@/features/home/ContactButtonComponent.vue';
import DeveloperDescriptionComponent from '@/features/home/DeveloperDescriptionComponent.vue';
import DeveloperJobComponent from '@/features/home/DeveloperJobComponent.vue';
import DeveloperNameComponent from '@/features/home/DeveloperNameComponent.vue';
import GrettingComponent from '@/features/home/GrettingComponent.vue';
import LineDecoratorComponent from '@/features/home/LineDecoratorComponent.vue';
import { useDeveloperStore } from '@/stores/DeveloperStore';
import { storeToRefs } from 'pinia';

const DEVELOPER_STORE = useDeveloperStore();
const { Developer, Loading, ErrorMessage } = storeToRefs(DEVELOPER_STORE);
</script>

<style scoped>
.HomeViewContent {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.HomeLinks {
  display: flex;
  justify-content: space-between;
  gap: 5rem;
}
</style>