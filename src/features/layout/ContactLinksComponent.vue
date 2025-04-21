<template>
    <div class="Buttons">
        <a class="Button LinkedInButton" v-if="!Loading && ErrorMessage == null" :href="Developer.LinkedinUrl_Developer"
            target="_blank" rel="noopener noreferrer">
            <IconBrandLinkedin class="ButtonIcon" />
            <div class="LinkTooltip LinkedInTooltip">
                {{ Developer.LinkedinName_Developer }}
            </div>
        </a>
        <a class="Button GitHubButton" v-if="!Loading && ErrorMessage == null" :href="Developer.GitHubUrl_Developer"
            target="_blank" rel="noopener noreferrer">
            <IconBrandGithub class="ButtonIcon" />
            <div class="LinkTooltip GitHubTooltip">
                {{ Developer.GitHubName_Developer }}
            </div>
        </a>
        <a class="Button EmailButton" v-if="!Loading && ErrorMessage == null"
            :href="`https://mail.google.com/mail/?view=cm&fs=1&to=${Developer.Email_Developer}`" target="_blank"
            rel="noopener noreferrer">
            <IconMail class="ButtonIcon" />
            <div class="LinkTooltip EmailTooltip">
                {{ Developer.Email_Developer }}
            </div>
        </a>
        <img src="@/assets/images/contact_links.webp" class="ContactLinksImage" />
    </div>
</template>

<script setup>
import { useDeveloperStore } from '@/stores/DeveloperStore';
import { storeToRefs } from 'pinia';
import { IconBrandGithub } from '@tabler/icons-vue';
import { IconMail } from '@tabler/icons-vue';
import { IconBrandLinkedin } from '@tabler/icons-vue';
const DEVELOPER_STORE = useDeveloperStore();
const { Developer, Loading, ErrorMessage } = storeToRefs(DEVELOPER_STORE);
</script>
<style scoped>
.Buttons {
    position: fixed;
    display: grid;
    place-items: center;
    transition: .3s linear;
    border-radius: 50%;
    right: 0;
    bottom: 0;
    z-index: 2;
    padding-top: 4.5rem;
    padding-left: 4.5rem;
}

.Button {
    position: absolute;
    display: grid;
    place-items: center;
    padding: .5rem;
    border: none;
    background: transparent;
    color: white;
    transition: .3s linear;
    border-radius: 50%;
    z-index: 0;
    opacity: 0;
}

.ButtonIcon {
    width: 35px;
    height: 35px;
    stroke-width: 2.5;
}

.LinkTooltip {
    position: absolute;
    width: fit-content;
    top: -4.5rem;
    padding: 0.7rem;
    background-color: inherit;
    border-radius: .5rem;
    font-weight: 500;
    text-align: center;
    opacity: 0;
    pointer-events: none;
    white-space: nowrap;
}

.LinkedInButton {
    transition-delay: 0s, .0s, 0s;
    transition-property: translate, opacity, background;
    border: 3px solid #0A66C2;
}

.GitHubButton {
    transition-delay: .2s, .2s, 0s;
    transition-property: translate, opacity, background;
    border: 3px solid black;
}

.EmailButton {
    transition-delay: .4s, .4s, 0s;
    transition-property: translate, opacity, background;
    border: 3px solid #EA4335;
}

.ContactLinksImage {
    bottom: 0;
    right: 0;
    opacity: .3;
    transition: .3s linear;
    position: relative;
    display: grid;
    place-items: center;
    z-index: 1;
}

.Buttons:hover .Button {
    opacity: 1;
}

.Buttons:hover .LinkedInButton {
    translate: 0rem -11.5rem;
    z-index: 2;
}

.Buttons:hover .GitHubButton {
    translate: -10.5rem -5rem;
    z-index: 2;
}

.Buttons:hover .EmailButton {
    translate: -9.8rem 6.5rem;
    z-index: 2;
}

.Button:hover .LinkTooltip {
    opacity: 1;
}

.Buttons:hover .ContactLinksImage {
    opacity: 1;
}

.EmailButton:hover {
    background-color: #EA4335;
    color: white;
}

.LinkedInButton:hover {
    background-color: #0A66C2;
    color: white;
}

.GitHubButton:hover {
    background-color: #000000;
    color: white;
}

.LinkTooltip::after {
    content: "";
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: -30%;
    width: 0;
    height: 0;
    border-right: .7rem solid transparent;
    border-left: .7rem solid transparent;
    border-top: 1rem solid transparent;
}

.LinkTooltip.LinkedInTooltip::after {
    border-top-color: #0A66C2;
}

.LinkTooltip.GitHubTooltip::after {
    border-top-color: #000000;
}

.LinkTooltip.EmailTooltip::after {
    border-top-color: #EA4335;
}
</style>
