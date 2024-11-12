<script setup>
//import { RouterLink, RouterView } from 'vue-router'
//import HelloWorld from './components/HelloWorld.vue'
//import BackgroundImageComponent from './components/BackgroundImageComponent.vue';
import ProfileImageComponent from './components/NavigationComponents/ProfileImageComponent.vue';
import ContacComponent from './components/ContactComponents/ContacComponent.vue';
import NavigationComponent from './components/NavigationComponents/NavigationComponent.vue';
</script>

<template>
  <!--
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>
  
-->
  <div class="MainContenApp">
    <div class="Content">
      <nav class="NavigationBar">
        <RouterLink to="/" class="NavigationLink">
          <ProfileImageComponent />
        </RouterLink>
        <RouterLink to="/" class="NavigationLink">
          <NavigationComponent TextURL="Home" />
        </RouterLink>
        <RouterLink to="/About" class="NavigationLink">
          <NavigationComponent TextURL="About me" />
        </RouterLink>
        <RouterLink to="/Education" class="NavigationLink">
          <NavigationComponent TextURL="Education" />
        </RouterLink>
        <RouterLink to="/Technologies" class="NavigationLink">
          <NavigationComponent TextURL="Technologies" />
        </RouterLink>
        <RouterLink to="/Projects" class="NavigationLink">
          <NavigationComponent TextURL="Projects" />
        </RouterLink>
        <RouterLink to="/Experience" class="NavigationLink">
          <NavigationComponent TextURL="Experience" />
        </RouterLink>
      </nav>
      <RouterView />
    </div>
    <div class="DivBackgroundImage">
      <ContacComponent />
    </div>
  </div>
</template>

<style scoped>
@import './assets/base.css';

.MainContenApp {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(to left, var(--FirstBackgroundColor), var(--SecondBackgroundColor));
  overflow: hidden;
}

.Content {
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  width: 70%;
}

.DivBackgroundImage {
  display: flex;
  height: 100%;
  width: 30%;
}

.NavigationBar {
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 10px 0 0 10px;
}

.NavigationLink {
  text-decoration: none;
}

/*header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}*/
</style>
