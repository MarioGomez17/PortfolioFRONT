<template>
    <div class="Buttons">
        <BackgroundImageComponent class="MainButton" />
        <!-- Email Component -->
        <a class="EmailButton Button" :href="'https://mail.google.com/mail/?view=cm&fs=1&to=' + Email_Developer"
            target="_blank" v-if="Email_Developer != ''">
            <EmailIcon class="IconEmailButton" />
            <span class="TextEmailButton" v-if="Email_Developer != ''">{{ Email_Developer }}</span>
            <span class="TextEmailButton" v-else>Loading...</span>
        </a>
        <a class="EmailButton Button" href="#" target="_blank" v-else>
            <EmailIcon class="IconEmailButton" />
            <span class="TextEmailButton" v-if="Email_Developer != ''">{{ Email_Developer }}</span>
            <span class="TextEmailButton" v-else>Loading...</span>
        </a>
        <!-- GitHub Component -->
        <a class="GitHubButton Button" :href="GitHubUrl_Developer" target="_blank" v-if="GitHubUrl_Developer != ''">
            <GitHubIcon class="IconGitHubButton" />
            <span class="TextGitHubButton" v-if="GitHubName_Developer != ''">{{ GitHubName_Developer }}</span>
            <span class="TextGitHubButton" v-else>Loading...</span>
        </a>
        <a class="GitHubButton Button" href="#" target="_blank" v-else>
            <GitHubIcon class="IconGitHubButton" />
            <span class="TextGitHubButton" v-if="GitHubName_Developer">{{ GitHubName_Developer }}</span>
            <span class="TextGitHubButton" v-else>Loading...</span>
        </a>
        <!-- LinkedIn Component -->
        <a class="LinkedInButton Button" :href="LinkedinUrl_Developer" target="_blank"
            v-if="LinkedinUrl_Developer != ''">
            <LinkedInIcon class="IconLinkedInButton" />
            <span class="TextLinkedInButton" v-if="LinkedinName_Developer != ''">{{ LinkedinName_Developer }}</span>
            <span class="TextLinkedInButton" v-else>Loading...</span>
        </a>
        <a class="LinkedInButton Button" href="#" target="_blank" v-else>
            <LinkedInIcon class="IconLinkedInButton" />
            <span class="TextLinkedInButton" v-if="LinkedinName_Developer != ''">{{ LinkedinName_Developer }}</span>
            <span class="TextLinkedInButton" v-else>Loading...</span>
        </a>
        <!-- Location Component -->
        <a class="LocationButton Button" :href="UrlCity_Developer" target="_blank" v-if="UrlCity_Developer != ''">
            <LocationIcon class="IconLocationButton" />
            <span class="TextLocationButton" v-if="City_Developer != ''">{{ City_Developer }}</span>
            <span class="TextLocationButton" v-else>Loading...</span>
        </a>
        <a class="LocationButton Button" href="#" target="_blank" v-else>
            <LocationIcon class="IconLocationButton" />
            <span class="TextLocationButton" v-if="City_Developer != ''">{{ City_Developer }}</span>
            <span class="TextLocationButton" v-else>Loading...</span>
        </a>
        <!-- Whatsapp Component -->
        <a class="PhoneButton Button" :href="'https://wa.me/' + Phone_Developer" target="_blank"
            v-if="Phone_Developer != ''">
            <PhoneIcon class="IconPhoneButton" />
            <span class="TextPhoneButton" v-if="Phone_Developer != ''">{{ Phone_Developer }}</span>
            <span class="TextPhoneButton" v-else>Loading...</span>
        </a>
        <a class="PhoneButton Button" href="#" target="_blank" v-else>
            <PhoneIcon class="IconPhoneButton" />
            <span class="TextPhoneButton" v-if="Phone_Developer != ''">{{ Phone_Developer }}</span>
            <span class="TextPhoneButton" v-else>Loading...</span>
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
import { ref, onMounted } from 'vue';
import GetOneDeveloper from '../../Services/DeveloperServices/GetOneDeveloper'

var Developer = null;
var Email_Developer = ref('');
var GitHubName_Developer = ref('');
var GitHubUrl_Developer = ref('');
var LinkedinName_Developer = ref('');
var LinkedinUrl_Developer = ref('');
var Phone_Developer = ref('');
var City_Developer = ref('');
var UrlCity_Developer = ref('')

onMounted(async () => {
    Developer = await GetOneDeveloper(1);
    Email_Developer.value = Developer.Email_Developer;
    GitHubName_Developer.value = Developer.GitHubName_Developer;
    GitHubUrl_Developer.value = Developer.GitHubUrl_Developer;
    LinkedinName_Developer.value = Developer.LinkedinName_Developer;
    LinkedinUrl_Developer.value = Developer.LinkedinUrl_Developer;
    Phone_Developer.value = Developer.Phone_Developer;
    City_Developer.value = Developer.City_Developer.Name_City;
    City_Developer.value += ', ';
    City_Developer.value += Developer.City_Developer.Department_City.Name_Department;
    City_Developer.value += ', ';
    City_Developer.value += Developer.City_Developer.Department_City.Country_Department.Name_Country;
    UrlCity_Developer.value = Developer.City_Developer.UrlMaps_City;
})

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
    overflow: hidden;
    white-space: nowrap;
    transition-property: translate, opcacity;
}

.EmailButton:hover {
    background: #C5221F;
    width: 220px;
    border-radius: 40px;
}

.EmailButton:hover .IconEmailButton {
    transform: translateX(-90px);
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
    overflow: hidden;
    white-space: nowrap;
    transition-property: translate, opcacity;
}

.GitHubButton:hover {
    background: var(--Black);
    width: 220px;
    border-radius: 40px;
}

.GitHubButton:hover .IconGitHubButton {
    transform: translateX(-90px);
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
    overflow: hidden;
    white-space: nowrap;
    transition-property: translate, opcacity;
}

.LinkedInButton:hover {
    background: #0077b5;
    width: 220px;
    border-radius: 40px;
}

.LinkedInButton:hover .IconLinkedInButton {
    transform: translateX(-90px);
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
    overflow: hidden;
    white-space: nowrap;
    transition-property: translate, opcacity;
}

.LocationButton:hover {
    background: #dda502;
    width: 220px;
    border-radius: 40px;
}

.LocationButton:hover .IconLocationButton {
    transform: translateX(-90px);
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
    overflow: hidden;
    white-space: nowrap;
    transition-property: translate, opcacity;
}

.PhoneButton:hover {
    background: #00a000;
    width: 220px;
    border-radius: 40px;
}

.PhoneButton:hover .IconPhoneButton {
    transform: translateX(-90px);
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