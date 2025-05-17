<template>
    <div class="PersonalInformationComponent">
        <SecondTitleComponent Title="Personal Information" />
        <div class="PersonalInformationContainer">
            <div class="PersonalInformationSection">
                <PersonalCharacteristicComponent Characteristic_Title="Full Name"
                    :Characteristic_Description="PROPS.Name_Developer" :Characteristic_Icon="IconUserCircle"
                    :Characteristic_IsURL="false" />
                <PersonalCharacteristicComponent Characteristic_Title="City"
                    :Characteristic_Description="PROPS.City_Developer" :Characteristic_Icon="IconMapPin"
                    :Characteristic_IsURL="false" />
                <PersonalCharacteristicComponent Characteristic_Title="Email"
                    :Characteristic_Description="PROPS.Email_Developer" :Characteristic_Icon="IconMail"
                    :Characteristic_IsURL="false" />
            </div>
            <div class="PersonalInformationSection">
                <PersonalCharacteristicComponent Characteristic_Title="LinkedIn"
                    :Characteristic_Description="PROPS.LinkedIn_Developer"
                    :Characteristic_Icon="IconBrandLinkedin" :Characteristic_IsURL="true" />
                <PersonalCharacteristicComponent Characteristic_Title="GitHub"
                    :Characteristic_Description="PROPS.GitHub_Developer" :Characteristic_Icon="IconBrandGithub"
                    :Characteristic_IsURL="true" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import { IconUserCircle } from '@tabler/icons-vue';
import { IconMapPin } from '@tabler/icons-vue';
import { IconMail } from '@tabler/icons-vue';
import { IconBrandLinkedin } from '@tabler/icons-vue';
import { IconBrandGithub } from '@tabler/icons-vue';
import PersonalCharacteristicComponent from './PersonalCharacteristicComponent.vue';
import SecondTitleComponent from '@/components/SecondTitleComponent.vue';

const PROPS = defineProps<{
    Name_Developer: string,
    City_Developer: string,
    Email_Developer: string,
    LinkedIn_Developer: string,
    GitHub_Developer: string,
}>();
</script>

<style scoped>
.PersonalInformationComponent {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
}

.PersonalInformationContainer {
    display: flex;
    gap: 3rem;
}
</style>
