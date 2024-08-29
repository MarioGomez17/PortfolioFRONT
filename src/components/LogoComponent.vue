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
    width: 150px;
    aspect-ratio: 1;
    border: 5px solid transparent;
    border-radius: 50%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
}

.DivLogo:hover::before {
    content: "";
    position: absolute;
    inset: -5px;
    border-radius: 50%;
    border: 5px solid #87CEEB;
    animation: LoaderAnimation .3s 1 linear, BlurAnimation .3s forwards .3s;
}

.Logo {
    width: 60%;
    height: 60%;
}
</style>