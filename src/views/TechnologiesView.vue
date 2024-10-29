<script setup>
import { ref, onMounted } from 'vue';
import LogoComponent from '@/components/TechnologyComponents/LogoComponent.vue';
import GetOneDeveloper from '@/Services/DeveloperServices/GetOneDeveloper';
import SortTechnologies from '@/Services/TechnologyServices/SortTechnologies';

var Developer = null;
const SkillsTechnologies = ref([]);;

onMounted(async () => {
    Developer = await GetOneDeveloper(1)
    SkillsTechnologies.value = SortTechnologies(Developer.Technologies_Developer)
})

</script>

<template>
    <main class="MainContent">
        <div class="DivMainContent">
            <div v-for="(Skill, Key) in SkillsTechnologies" :key="Skill.value" class="DivDivison">
                <h3 class="TitleDivison">{{ Key }}</h3>
                <div class="DivTechnologies">
                    <LogoComponent v-for="Technology in Skill" :key="Technology.Id_Technology"
                        :ImageRoute="Technology.Logo_Technology" :ImageAlt="Technology.Name_Technology" />
                </div>
            </div>
        </div>
    </main>
</template>

<style scoped>
@import '../assets/base.css';

.MainContent {
    width: 100%;
    height: 100%;
    overflow: auto;

}

.DivMainContent {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
    overflow: auto;
    scrollbar-width: none;
}

.DivDivison {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-evenly;
    gap: 15px;
}

.DivTechnologies {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    gap: 15px;
}

.TitleDivison {
    font-family: var(--Font);
    text-transform: uppercase;
    color: var(--TextColor);
    font-size: 40px;
    width: 100%;
    text-align: center;
    margin: 10px 0;
}
</style>