<script setup>
import { ref, onMounted } from 'vue';
import GetOneDeveloper from '@/Services/DeveloperServices/GetOneDeveloper';
import WorlIcon from '@/components/Icons/WorlIcon.vue';
var Developer = ref({});

onMounted(async () => {
  Developer.value = await GetOneDeveloper(1)
  console.log(Developer)
})
</script>

<template>
  <div class="MainContent">
    <div class="DivMainTitle">
      <h1 class="MainTitle">
        {{ Developer.Name_Developer }} {{ Developer.LastName_Developer }}
        <WorlIcon class="WorldIcon"></WorlIcon>
      </h1>
    </div>
    <div class="DivSecondTitle">
      <h3 class="SecondTitle">
        Full Stack Developer
      </h3>
    </div>
    <div class="DivDescription">
      <p class="Description">
        {{ Developer.Description_Developer }}
      </p>
    </div>
  </div>
</template>

<style scoped>
@import '../assets/base.css';

.MainContent {
  width: 100%;
  height: 100%;
  overflow: auto;
  scrollbar-width: none;
  margin: 50px 0 0 50px;
  padding-left: 20px;
  font-family: var(--Font);
  text-transform: uppercase;
}

.DivMainTitle {
  width: 100%;
}

.MainTitle {
  margin: 20px 0;
  font-size: 120px;
  font-weight: bold;
  color: var(--TextColor);
  transition: text-shadow 0.5s ease;
  display: flex;
  align-items: center;
  gap: 30px;
}

.WorldIcon {
  width: 110px;
  height: 110px;
  stroke: var(--FirstColor);
}

.MainTitle:hover {
  text-shadow: 0px 0px 50px var(--HighlightColor);
}

.SecondTitle {
  margin: 20px 0;
  font-size: 60px;
  font-weight: bold;
  color: var(--FirstColor);
  display: flex;
  align-items: center;
  gap: 30px;
}

.SecondTitle:hover {
  text-shadow: 0px 0px 20px var(--TextColor);
}

.Description {
  margin-top: 50px;
  font-size: 20px;
  font-weight: 400;
  color: var(--TextColor);
}
</style>