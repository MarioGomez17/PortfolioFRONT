<template>
    <nav class="NavbarComponent">
        <div class="NavBarSideBar">
            <ul class="NavBarList">
                <li class="NavBarItem">
                    <router-link to="/" class="NavBarLink">
                        <IconHome class="IconNavBarLink" />
                        <span class="TextNavBarLink">Home</span>
                        <span class="ToolTipNavBarLink">Home</span>
                    </router-link>
                </li>
                <li class="NavBarItem">
                    <router-link to="/About" class="NavBarLink">
                        <IconUserCircle class="IconNavBarLink" />
                        <span class="TextNavBarLink">About Me</span>
                        <span class="ToolTipNavBarLink">About Me</span>
                    </router-link>
                </li>
                <li class="NavBarItem">
                    <router-link to="/Education" class="NavBarLink">
                        <IconSchool class="IconNavBarLink" />
                        <span class="TextNavBarLink">My Education</span>
                        <span class="ToolTipNavBarLink">My Education</span>
                    </router-link>
                </li>
                <li class="NavBarItem">
                    <router-link to="/Technologies" class="NavBarLink">
                        <IconCodeCircle class="IconNavBarLink" />
                        <span class="TextNavBarLink">Technologies</span>
                        <span class="ToolTipNavBarLink">Technologies</span>
                    </router-link>
                </li>
                <li class="NavBarItem">
                    <router-link to="/Projects" class="NavBarLink">
                        <IconWorld class="IconNavBarLink" />
                        <span class="TextNavBarLink">Personal Projects</span>
                        <span class="ToolTipNavBarLink">Personal Projects</span>
                    </router-link>
                </li>
                <li class="NavBarItem">
                    <router-link to="/Experience" class="NavBarLink">
                        <IconBriefcase2 class="IconNavBarLink" />
                        <span class="TextNavBarLink">Experience</span>
                        <span class="ToolTipNavBarLink">Experience</span>
                    </router-link>
                </li>
                <li class="NavBarItem">
                    <router-link to="/Contact" class="NavBarLink">
                        <IconMail class="IconNavBarLink" />
                        <span class="TextNavBarLink">Contact Me</span>
                        <span class="ToolTipNavBarLink">Contact Me</span>
                    </router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script setup>
import { IconHome } from '@tabler/icons-vue';
import { IconUserCircle } from '@tabler/icons-vue';
import { IconSchool } from '@tabler/icons-vue';
import { IconCodeCircle } from '@tabler/icons-vue';
import { IconWorld } from '@tabler/icons-vue';
import { IconBriefcase2 } from '@tabler/icons-vue';
import { IconMail } from '@tabler/icons-vue';
</script>

<style scoped>
.NavbarComponent {
    width: 100%;
    height: 85%;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    transition: .3s linear;
    text-align: center;
}

.NavBarSideBar {
    height: 100%;
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    transition: .3s linear;
    text-transform: uppercase;
    padding: 0;
    position: relative;
}

.NavBarList {
    list-style: none;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: .5rem;
    transition: .3s linear;
}

.NavBarItem {
    width: 100%;
    display: flex;
    justify-content: center;
    transition: .3s linear;
}

.NavBarLink {
    width: 100%;
    text-decoration: none;
    font-weight: 700;
    color: var(--FifthColor);
    border-radius: 8px;
    padding: .5rem;
    box-sizing: border-box;
    transition: .3s linear;
    position: relative;
}

.router-link-active.router-link-exact-active.NavBarLink {
    background-color: var(--FourthColor);
    color: var(--SixthColor);
}

.TextNavBarLink {
    font-size: 1.5rem;
    white-space: nowrap;
    position: absolute;
    top: 50%;
    width: 80%;
    text-align: left;
    transform: translate(-40%, -50%);
    transition: transform .3s linear;
}

.IconNavBarLink {
    width: 2.5rem;
    height: 2.5rem;
    stroke-width: 2;
    position: relative;
    top: 50%;
    transform: translate(-270%, -50%);
    transition: transform .3s linear;
}

.ToolTipNavBarLink {
    opacity: 0;
    position: absolute;
    pointer-events: none;
    right: -295%;
    top: 50%;
    transform: translateY(-50%);
    width: 15rem;
    height: 100%;
    padding: .5rem;
    border-radius: .5rem;
    box-sizing: border-box;
    background-color: var(--FifthColor);
    color: var(--SixthColor);
    font-size: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: .3s linear;
}

.ToolTipNavBarLink::after {
    content: "";
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: -10%;
    width: 0;
    height: 0;
    border-top: .7rem solid transparent;
    border-bottom: .7rem solid transparent;
    border-right: 1.5rem solid var(--FifthColor);
}

.NavBarLink:hover {
    background-color: var(--FourthColor);
    color: var(--SixthColor);
}

.AsideComponent.AsideComponentCollapsed .TextNavBarLink {
    transform: translate(100%, -50%);
    opacity: 0;
    pointer-events: none;
}

.AsideComponent.AsideComponentCollapsed .IconNavBarLink {
    transform: translate(0%, -50%);
}

.AsideComponent.AsideComponentCollapsed .NavBarLink:hover .ToolTipNavBarLink {
    opacity: 1;
}

@media (min-width: 1024px) and (max-width: 1600px) {
    .TextNavBarLink {
        font-size: 1.5rem;
    }

    .IconNavBarLink {
        width: 2rem;
        height: 2rem;
        transform: translate(-270%, -50%);
    }

    .ToolTipNavBarLink {
        right: -220%;
        font-size: 1.5rem;
        width: 8rem;
    }
}
</style>