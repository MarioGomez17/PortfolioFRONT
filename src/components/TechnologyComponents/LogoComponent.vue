<template>
    <div class="DivLogo">
        <img class="Logo" :src="Props.ImageRoute" :alt="Props.ImageAlt">
    </div>
</template>

<script setup>

const Props = defineProps({
    ImageRoute: String,
    ImageAlt: String
})

</script>

<style scoped>
@import '../../assets/base.css';

@keyframes LoaderAnimation {
    0% {
        clip-path: polygon(50% 50%, 0 0, 0 0, 0 0, 0 0, 0 0)
    }

    25% {
        clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 0, 100% 0, 100% 0)
    }

    50% {
        clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 100% 100%, 100% 100%)
    }

    75% {
        clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 100%)
    }

    100% {
        clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 0)
    }
}

@keyframes BlurAnimation {
    0% {
        box-shadow: none;
    }

    100% {
        -webkit-box-shadow: 0px 0px 11px 7px #FFFFFF;
        -moz-box-shadow: 0px 0px 11px 7px #FFFFFF;
        box-shadow: 0px 0px 11px 7px #FFFFFF;
    }
}

.DivLogo {
    width: 100px;
    aspect-ratio: 1;
    border: 5px solid transparent;
    border-radius: 50%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--FirstColor);
}

.DivLogo:hover::before {
    content: "";
    position: absolute;
    inset: -5px;
    border-radius: 50%;
    border: 5px solid var(--HighlightColor);
    animation: LoaderAnimation .2s 1 linear, BlurAnimation .2s forwards .2s;
}

.Logo {
    width: 60%;
    height: 60%;
}
</style>