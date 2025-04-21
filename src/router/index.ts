import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: () =>
      import(/* webpackChunkName: "Home" */ "../views/HomeView.vue"),
  },
  {
    path: "/About",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "About" */ "../views/AboutView.vue"),
  },
  {
    path: "/Education",
    name: "Education",
    component: () =>
      import(/* webpackChunkName: "Education" */ "../views/EducationView.vue"),
  },
  {
    path: "/Technologies",
    name: "Technologies",
    component: () =>
      import(
        /* webpackChunkName: "Technologies" */ "../views/TechnologiesView.vue"
      ),
  },
  {
    path: "/Projects",
    name: "Projects",
    component: () =>
      import(/* webpackChunkName: "Projects" */ "../views/ProjectsView.vue"),
  },
  {
    path: "/Experience",
    name: "Experience",
    component: () =>
      import(
        /* webpackChunkName: "Experience" */ "../views/ExperienceView.vue"
      ),
  },
  {
    path: "/Contact",
    name: "Contact",
    component: () =>
      import(/* webpackChunkName: "Contact" */ "../views/ContactView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
