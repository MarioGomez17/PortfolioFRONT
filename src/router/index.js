import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import EducationView from '@/views/EducationView.vue'
import SkillsView from '@/views/SkillsView.vue'
import TechnologiesView from '@/views/TechnologiesView.vue'
import ProjectsView from '@/views/ProjectsView.vue'
import ExperienceView from '@/views/ExperienceView.vue'
import HomeLoggedView from '@/views/HomeLoggedView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/About',
      name: 'About',
      component: AboutView
    },
    {
      path: '/Education',
      name: 'Education',
      component: EducationView
    },
    {
      path: '/Skills',
      name: 'Skills',
      component: SkillsView
    },
    {
      path: '/Technologies',
      name: 'Technologies',
      component: TechnologiesView
    },
    {
      path: '/Projects',
      name: 'Projects',
      component: ProjectsView
    },
    {
      path: '/Experience',
      name: 'Experience',
      component: ExperienceView
    },
    {
      path: '/HomeLogged',
      name: 'HomeLogged',
      component: HomeLoggedView
    }
  ]
})

export default router
