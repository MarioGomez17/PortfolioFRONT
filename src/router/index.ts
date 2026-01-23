import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/HomeView.vue"),
    meta: {
      useLayout: true,
    },
  },
  {
    path: "/About",
    name: "About",
    component: () => import("../views/AboutView.vue"),
    meta: {
      useLayout: true,
      title: "ABOUT",
    },
  },
  {
    path: "/Education",
    name: "Education",
    component: () => import("../views/EducationView.vue"),
    meta: {
      useLayout: true,
      title: "EDUCATION",
    },
  },
  {
    path: "/Technologies",
    name: "Technologies",
    component: () => import("../views/TechnologiesView.vue"),
    meta: {
      useLayout: true,
      title: "TECHNOLOGIES",
    },
  },
  {
    path: "/Projects",
    name: "Projects",
    component: () => import("../views/ProjectsView.vue"),
    meta: {
      useLayout: true,
      title: "PROJECTS",
    },
  },
  {
    path: "/Experience",
    name: "Experience",
    component: () => import("../views/ExperienceView.vue"),
    meta: {
      useLayout: true,
      title: "EXPERIENCE",
    },
  },
  {
    path: "/Contact",
    name: "Contact",
    component: () =>
      import("../views/ContactView.vue"),
    meta: {
      useLayout: true,
      title: "CONTACT",
    },
  },
  {
    path: "/Diploma",
    name: "Diploma",
    component: () =>
      import("../views/DiplomaView.vue"),
    props: (route) => ({
      Diploma_SRC: route.query.Diploma_SRC,
      Diploma_name: route.query.Diploma_name,
      Diploma_Academy: route.query.Diploma_Academy,
      Diploma_Date: route.query.Diploma_Date,
    }),
    meta: {
      useLayout: false,
      title: "DIPLOMA",
    },
  },
];

const ROUTER = createRouter({
  history: createWebHistory(),
  routes,
});

ROUTER.beforeEach((to, from, next) => {
  const BASE_TITLE = "MARIO GÓMEZ";
  const PAGE_TITLE = to.meta.title
    ? `${BASE_TITLE} - ${to.meta.title}`
    : BASE_TITLE;
  document.title = PAGE_TITLE;
  next();
});

export default ROUTER;
