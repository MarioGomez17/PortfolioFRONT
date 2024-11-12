<template>
    <img src="../../assets/Images/profile.webp" alt="Profile Image" class="ProfileImage">
</template>

<script setup>
</script>

<style scoped>
@import '../../assets/base.css';

.ProfileImage {
    width: 90px;
    height: 90px;
    border-radius: 50%;
    border: 4px solid var(--Black);
    transition: .5s;
}

.ProfileImage:hover {
    box-shadow: 0px 0px 25px 5px var(--BorderColor);
    border: 4px solid var(--White);
}
</style>