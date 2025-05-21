<template>
    <footer class="FooterComponent" v-if="!Loading && !ErrorMessage">
        <section class="UpperSectionFooter">
            <article class="UpperArticleContent DeveloperInfoArticle">
                <h4 class="UpperArticleTitle">
                    {{ `${Developer.Name_Developer} ${Developer.LastName_Developer}` }}
                </h4>
                <p class="DeveloperInfoDescription">
                    {{ Developer.ShortProfile_Developer }}
                </p>
                <div class="DeveloperInfoSocialNetworks">
                    <a :href="Developer.GitHubUrl_Developer" class="SocialNetworksLink" target="_blank">
                        <IconBrandGithub class="SocialNetworksIcon" />
                    </a>
                    <a :href="Developer.LinkedinUrl_Developer" class="SocialNetworksLink" target="_blank">
                        <IconBrandLinkedin class="SocialNetworksIcon" />
                    </a>
                </div>
            </article>
            <article class="UpperArticleContent QuickLinksArticle">
                <h4 class="UpperArticleTitle">
                    Quick Links
                </h4>
                <div class="QuickLinksContent">
                    <router-link to="/" class="QuickLinksLink">
                        Home
                    </router-link>
                    <router-link to="/About" class="QuickLinksLink">
                        About
                    </router-link>
                    <router-link to="/Education" class="QuickLinksLink">
                        Education
                    </router-link>
                    <router-link to="/Technologies" class="QuickLinksLink">
                        Technologies
                    </router-link>
                    <router-link to="/Projects" class="QuickLinksLink">
                        Projects
                    </router-link>
                    <router-link to="/Experience" class="QuickLinksLink">
                        Experience
                    </router-link>
                    <router-link to="/Contact" class="QuickLinksLink">
                        Contact
                    </router-link>
                </div>
            </article>
            <article class="UpperArticleContent ContactInfoArticle">
                <h4 class="UpperArticleTitle">
                    ContactInformation
                </h4>
                <div class="ContactInfoContent">
                    <IconMail class="ContactInfoIcon" />
                    {{ Developer.Email_Developer }}
                </div>
                <div class="ContactInfoContent">
                    <IconMapPin class="ContactInfoIcon" />
                    {{ CITY_DEVELOPER }}
                </div>
                <div class="ContactInfoContent">
                    Available for freelance work and full-time positions.
                </div>
            </article>
        </section>
        <div class="DivDecorator"></div>
        <section class="LowerSectionFooter">
            <p>
                &copy; {{ currentYear }} - {{ `${Developer.Name_Developer} ${Developer.LastName_Developer}` }}. All
                rights
                reserved.
            </p>
            <p>
                Built with
                <span class="ProjectTechnology">
                    Django
                </span>
                and
                <span class="ProjectTechnology">
                    Vue
                </span>
            </p>
        </section>
    </footer>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useDeveloperStore } from '@/stores/DeveloperStore';
import { storeToRefs } from 'pinia';
import { IconBrandGithub } from '@tabler/icons-vue';
import { IconBrandLinkedin } from '@tabler/icons-vue';
import { IconMapPin } from '@tabler/icons-vue';
import { IconMail } from '@tabler/icons-vue';

var currentYear = new Date().getFullYear();

const DEVELOPER_STORE = useDeveloperStore();
const { Developer, Loading, ErrorMessage } = storeToRefs(DEVELOPER_STORE);
const CITY_DEVELOPER = ref(`${Developer.value.City_Developer.Name_City}, ${Developer.value.City_Developer.Department_City.Name_Department}, ${Developer.value.City_Developer.Department_City.Country_Department.Name_Country}`)
</script>

<style scoped>
.FooterComponent {
    width: 100%;
    padding: 2rem;
    margin-top: 3rem;
    box-sizing: border-box;
    background-color: var(--SixthColor);
    display: flex;
    flex-direction: column;
    font-size: 1.4rem;
    font-weight: 500;
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
}

.UpperSectionFooter {
    display: flex;
    gap: 3rem;
}

.UpperArticleContent {
    display: flex;
    flex-direction: column;
    width: 100%;
}

.UpperArticleTitle {
    color: var(--FourthColor);
    font-size: 2rem;
    margin-bottom: 1rem;
}

.DeveloperInfoDescription {
    font-size: 1.1rem;
    line-height: 1.5;
    color: var(--FifthColor);
    margin: 1rem 0;
}

.DeveloperInfoSocialNetworks {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.SocialNetworksLink {
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--FifthColor);
    text-decoration: none;
    transition: .3s linear;
}

.SocialNetworksLink:hover {
    color: var(--FourthColor);
}

.SocialNetworksIcon {
    width: 2rem;
    height: 2rem;
}

.QuickLinksContent {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    row-gap: 1rem;
}

.QuickLinksLink {
    text-decoration: none;
    color: var(--FifthColor);
    transition: .3s linear;
}

.router-link-active.router-link-exact-active.QuickLinksLink {
    color: var(--FourthColor);
}

.QuickLinksLink:hover {
    color: var(--FourthColor);
}

.ContactInfoContent {
    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: 1.1rem;
    color: var(--FifthColor);
    margin: .7rem 0;
}

.ContactInfoIcon {
    color: var(--ThirdColor);
}

.DivDecorator {
    width: 100%;
    height: .1rem;
    background-color: var(--SecondColor);
    margin: 1.5rem 0;
}

.LowerSectionFooter {
    display: flex;
    justify-content: space-between;
    color: var(--FifthColor);
}

.ProjectTechnology {
    color: var(--ThirdColor);
}
</style>