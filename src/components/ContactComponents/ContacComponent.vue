<template>
    <div class="Buttons">
        <BackgroundImageComponent class="MainButton" />
        <a class="EmailButton Button" href="https://mail.google.com/mail/?view=cm&fs=1&to=mg441236@gmail.com"
            target="_blank">
            <EmailIcon class="IconEmailButton" />
            <span class="TextEmailButton">mg41236@gmail.com</span>
        </a>
        <a class="GitHubButton Button" href="https://github.com/MarioGomez17" target="_blank">
            <GitHubIcon class="IconGitHubButton" />
            <span class="TextGitHubButton">MarioGomez17</span>
        </a>
        <a class="LinkedInButton Button" href="https://www.linkedin.com/in/mario-gomez-33268b2b2" target="_blank">
            <LinkedInIcon class="IconLinkedInButton" />
            <span class="TextLinkedInButton">Mario_Gomez</span>
        </a>
        <a class="LocationButton Button" href="https://maps.app.goo.gl/rARUH4VpRCeuQx2u8" target="_blank">
            <LocationIcon class="IconLocationButton" />
            <span class="TextLocationButton">Colombia</span>
        </a>
        <a class="PhoneButton Button" href="https://wa.me/+573175123608" target="_blank">
            <PhoneIcon class="IconPhoneButton" />
            <span class="TextPhoneButton">+573175123608</span>
        </a>
    </div>
</template>

<script setup>
import BackgroundImageComponent from './BackgroundImageComponent.vue';
import EmailIcon from '../ContactIcons/EmailIcon.vue';
import GitHubIcon from '../ContactIcons/GitHubIcon.vue';
import LinkedInIcon from '../ContactIcons/LinkedInIcon.vue';
import LocationIcon from '../ContactIcons/LocationIcon.vue';
import PhoneIcon from '../ContactIcons/PhoneIcon.vue';
</script>

<style scoped>
@import '../../assets/base.css';

.Buttons {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    transition: 0.3s;
}

.MainButton:hover~.Button {
    box-shadow: 0px 0px 25px 5px var(--HighlightColor);
}

.MainButton {
    transition: 0.2s;
}

.Button {
    position: absolute;
    display: grid;
    place-items: center;
    width: 30px;
    height: 30px;
    padding: 10px;
    border: none;
    background: var(--FirstColor);
    transition: 0.1s;
    border-radius: 50%;
    z-index: -1;
}

.Buttons:hover .MainButton {
    filter: drop-shadow(0 0 30px var(--HighlightColor));
    transition: .3s;
    opacity: .7;
}

/* ------------------------- Email Button ------------------------- */

.EmailButton {
    transition: .5s;
    transition-delay: 0s, 0s, 0s;
    transition-property: translate, background, box-shadow, z-index, width;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
}

.IconEmailButton {
    position: relative;
    transition: .5s;
}

.TextEmailButton {
    position: absolute;
    color: var(--White);
    font-size: 13px;
    text-transform: uppercase;
    font-weight: lighter;
    font-family: var(--Font);
    opacity: 0;
    transition-duration: 0.5s;
    transition-property: translate, opcacity;
}

.EmailButton:hover {
    background: #C5221F;
    width: 200px;
    border-radius: 40px;
}

.EmailButton:hover .IconEmailButton {
    transform: translateX(-70px);
}

.EmailButton:hover .TextEmailButton {
    transform: translateX(20px);
    opacity: 1;
}

.Buttons:hover .EmailButton {
    translate: -140px -200px;
    box-shadow: 0px 0px 25px 5px var(--HighlightColor);
    z-index: 1;
}

/* ------------------------- GitHub Button ------------------------- */

.GitHubButton {
    transition: .5s;
    transition-delay: 0.1s, 0s, 0.1s;
    transition-property: translate, background, box-shadow, z-index, width;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
}

.IconGitHubButton {
    position: relative;
    transition: .5s;
}

.TextGitHubButton {
    position: absolute;
    color: var(--White);
    font-size: 13px;
    text-transform: uppercase;
    font-weight: lighter;
    font-family: var(--Font);
    opacity: 0;
    transition-duration: 0.5s;
    transition-property: translate, opcacity;
}

.GitHubButton:hover {
    background: var(--Black);
    width: 200px;
    border-radius: 40px;
}

.GitHubButton:hover .IconGitHubButton {
    transform: translateX(-70px);
}

.GitHubButton:hover .TextGitHubButton {
    transform: translateX(20px);
    opacity: 1;
}

.Buttons:hover .GitHubButton {
    translate: -175px -100px;
    box-shadow: 5px 5px 12px var(--HighlightColor), -5px -5px 12px var(--HighlightColor);
    z-index: 1;
}

/* ------------------------- LinkedIn Button ------------------------- */

.LinkedInButton {
    transition: .5s;
    transition-delay: 0.2s, 0s, 0.2s;
    transition-property: translate, background, box-shadow, z-index, width;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
}

.IconLinkedInButton {
    position: relative;
    transition: .5s;
}

.TextLinkedInButton {
    position: absolute;
    color: var(--White);
    font-size: 13px;
    text-transform: uppercase;
    font-weight: lighter;
    font-family: var(--Font);
    opacity: 0;
    transition-duration: 0.5s;
    transition-property: translate, opcacity;
}

.LinkedInButton:hover {
    background: #0077b5;
    width: 200px;
    border-radius: 40px;
}

.LinkedInButton:hover .IconLinkedInButton {
    transform: translateX(-70px);
}

.LinkedInButton:hover .TextLinkedInButton {
    transform: translateX(20px);
    opacity: 1;
}

.Buttons:hover .LinkedInButton {
    translate: -185px 0px;
    box-shadow: 5px 5px 12px var(--HighlightColor), -5px -5px 12px var(--HighlightColor);
    z-index: 1;
}

/* ------------------------- Location Button ------------------------- */

.LocationButton {
    transition: .5s;
    transition-delay: 0.3s, 0s, 0.3s;
    transition-property: translate, background, box-shadow, z-index, width;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
}

.IconLocationButton {
    position: relative;
    transition: .5s;
}

.TextLocationButton {
    position: absolute;
    color: var(--White);
    font-size: 13px;
    text-transform: uppercase;
    font-weight: lighter;
    font-family: var(--Font);
    opacity: 0;
    transition-duration: 0.5s;
    transition-property: translate, opcacity;
}

.LocationButton:hover {
    background: #dda502;
    width: 200px;
    border-radius: 40px;
}

.LocationButton:hover .IconLocationButton {
    transform: translateX(-70px);
}

.LocationButton:hover .TextLocationButton {
    transform: translateX(20px);
    opacity: 1;
}

.Buttons:hover .LocationButton {
    translate: -175px 100px;
    box-shadow: 5px 5px 12px var(--HighlightColor), -5px -5px 12px var(--HighlightColor);
    z-index: 1;
}

/* ------------------------- Phone Button ------------------------- */

.PhoneButton {
    transition: .5s;
    transition-delay: 0.4s, 0s, 0.4s;
    transition-property: translate, background, box-shadow, z-index, width;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
}

.IconPhoneButton {
    position: relative;
    transition: .5s;
}

.TextPhoneButton {
    position: absolute;
    color: var(--White);
    font-size: 13px;
    text-transform: uppercase;
    font-weight: lighter;
    font-family: var(--Font);
    opacity: 0;
    transition-duration: 0.5s;
    transition-property: translate, opcacity;
}

.PhoneButton:hover {
    background: #00a000;
    width: 200px;
    border-radius: 40px;
}

.PhoneButton:hover .IconPhoneButton {
    transform: translateX(-70px);
}

.PhoneButton:hover .TextPhoneButton {
    transform: translateX(20px);
    opacity: 1;
}

.Buttons:hover .PhoneButton {
    translate: -140px 200px;
    box-shadow: 5px 5px 12px var(--HighlightColor), -5px -5px 12px var(--HighlightColor);
    z-index: 1;
}
</style>