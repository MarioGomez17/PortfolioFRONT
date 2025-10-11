<template>
    <main class="DiplomaViewComponent">
        <MainTitleComponent Title="Diploma Viewer" />
        <div class="DiplomaViewerContent">
            <div class="DiplomaContainerInfo">
                <DiplomaMainTitleComponent :Diploma_name="DIPLOMA_NAME" />
                <DiplomaSecondTitleComponent :Diploma_Academy="DIPLOMA_ACADEMY" :Diploma_Date="DIPLOMA_DATE" />
                <div class="ControlsContainer">
                    <ControlButtonComponent Text_Button="Zoom in" :Icon_Button="IconZoomIn"
                        :ClickEvent_Button="ZOOM_IN" />
                    <ZoomLevelComponent :ZoomLevel="ZOOM_LEVEL" />
                    <ControlButtonComponent Text_Button="Zoom out" :Icon_Button="IconZoomOut"
                        :ClickEvent_Button="ZOOM_OUT" />
                    <ControlButtonComponent Text_Button="Restore" :Icon_Button="IconRestore"
                        :ClickEvent_Button="ZOOM_RESET" />
                </div>
                <DiplomaDescriptionComponent :Diploma_Academy="DIPLOMA_ACADEMY" />
                <DownloadButtonComponent @click="DOWNLOAD_DIPLOMA" />
            </div>
            <div class="DiplomaImageContainer">
                <div ref="PANZOOM_CONTAINER" class="PanzoomContainer" @dblclick="DOUBLE_CLICK">
                    <img :src="DIPLOMA_SRC" :alt="`${DIPLOMA_NAME} Diploma`" class="DiplomaImage" />
                </div>
            </div>
        </div>
    </main>
</template>

<script setup lang="ts">
import panzoom from 'panzoom'
import { useRoute } from 'vue-router'
import { IconZoomIn } from '@tabler/icons-vue';
import { IconZoomOut } from '@tabler/icons-vue';
import { IconRestore } from '@tabler/icons-vue';
import { ref, onMounted, onBeforeUnmount } from 'vue';
import MainTitleComponent from '@/components/MainTitleComponent.vue';
import ZoomLevelComponent from '@/features/diploma/ZoomLevelComponent.vue';
import ControlButtonComponent from '@/features/diploma/ControlButtonComponent.vue';
import DownloadButtonComponent from '@/features/diploma/DownloadButtonComponent.vue';
import DiplomaMainTitleComponent from '@/features/diploma/DiplomaMainTitleComponent.vue';
import DiplomaSecondTitleComponent from '@/features/diploma/DiplomaSecondTitleComponent.vue';
import DiplomaDescriptionComponent from '@/features/diploma/DiplomaDescriptionComponent.vue';
const ROUTER = useRoute();

const DIPLOMA_SRC: string = ROUTER.query.Diploma_SRC ? ROUTER.query.Diploma_SRC?.toString() : "";
const DIPLOMA_NAME: string = ROUTER.query.Diploma_name ? ROUTER.query.Diploma_name?.toString() : "";
const DIPLOMA_ACADEMY: string = ROUTER.query.Diploma_Academy ? ROUTER.query.Diploma_Academy?.toString() : "";
const DIPLOMA_DATE: string = ROUTER.query.Diploma_Date ? ROUTER.query.Diploma_Date?.toString() : "";


const PANZOOM_CONTAINER = ref<HTMLDivElement | null>(null)
let PANZOOM_INSTANCE: ReturnType<typeof panzoom>
const ZOOM_LEVEL = ref(1)
let isResettingZoom = false;

const GET_CONTAINER_CENTER = () => {
    const CONTAINER = PANZOOM_CONTAINER.value;
    if (!CONTAINER) return { x: 0, y: 0 };
    const RECT = CONTAINER.getBoundingClientRect();
    return {
        x: RECT.width / 2,
        y: RECT.height / 2,
    };
};

const ZOOM_IN = () => {
    if (PANZOOM_INSTANCE && PANZOOM_CONTAINER.value) {
        const { x: CENTER_X, y: CENTER_Y } = GET_CONTAINER_CENTER();
        const { scale: SCALE } = PANZOOM_INSTANCE.getTransform();
        PANZOOM_INSTANCE.zoomTo(CENTER_X, CENTER_Y, SCALE * 1.1);
    }
}

const ZOOM_OUT = () => {
    if (PANZOOM_INSTANCE && PANZOOM_CONTAINER.value) {
        const { x: CENTER_X, y: CENTER_y } = GET_CONTAINER_CENTER();
        const { scale: SCALE } = PANZOOM_INSTANCE.getTransform();
        const NEW_SCALE = SCALE / 1.1;
        PANZOOM_INSTANCE.zoomAbs(CENTER_X, CENTER_y, NEW_SCALE);
        if (NEW_SCALE <= 1) {
            ZOOM_RESET();
        }
    }
}

const ZOOM_RESET = () => {
    if (!PANZOOM_INSTANCE) return;
    const TRANSFORM = PANZOOM_INSTANCE.getTransform();
    const NEED_RESET = TRANSFORM.x !== 0 || TRANSFORM.y !== 0 || TRANSFORM.scale !== 1;
    if (!NEED_RESET) return;
    isResettingZoom = true;
    PANZOOM_INSTANCE.moveTo(0, 0);
    PANZOOM_INSTANCE.zoomAbs(0, 0, 1);
    setTimeout(() => {
        isResettingZoom = false;
    }, 100);
}

const ZOOM_DOUBLE_CLICK = () => {
    if (PANZOOM_INSTANCE) {
        const { x: X, y: Y, scale: SCALE } = PANZOOM_INSTANCE.getTransform()
        PANZOOM_INSTANCE.zoomTo(X, Y, SCALE * 1.5)
    }
}

const DOUBLE_CLICK = () => {
    if (ZOOM_LEVEL.value === 1) ZOOM_DOUBLE_CLICK();
    else ZOOM_RESET()
}

onMounted(() => {
    if (PANZOOM_CONTAINER.value) {
        PANZOOM_INSTANCE = panzoom(PANZOOM_CONTAINER.value, {
            maxZoom: 5,
            minZoom: 1,
            zoomDoubleClickSpeed: 1,
            zoomSpeed: 1,
            bounds: false,
            boundsPadding: 0,
        });
        PANZOOM_INSTANCE.on('zoom', () => {
            if (isResettingZoom) return;
            ZOOM_LEVEL.value = PANZOOM_INSTANCE.getTransform().scale;
            if (ZOOM_LEVEL.value <= 1) {
                ZOOM_RESET();
            }
        });
    }
});

const DOWNLOAD_DIPLOMA = () => {
    if (!DIPLOMA_SRC) return;
    const LINK = document.createElement('a');
    LINK.href = DIPLOMA_SRC;
    LINK.download = DIPLOMA_NAME ? `${DIPLOMA_NAME}.jpg` : 'download.jpg';
    document.body.appendChild(LINK);
    LINK.click();
    document.body.removeChild(LINK);
};


onBeforeUnmount(() => {
    PANZOOM_INSTANCE?.dispose()
});
</script>

<style scoped>
.DiplomaViewComponent {
    height: 100vh;
    padding: 2rem;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
}

.DiplomaViewerContent {
    height: 85%;
    display: flex;
    background-color: var(--SixthColor);
    border: 5px solid var(--SecondColor);
    border-radius: 1rem;
}

.DiplomaContainerInfo {
    width: 25%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    border-right: 2px solid var(--SecondColor);
    padding: 2rem 1rem;
}

.ControlsContainer {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    align-items: center;
}

.DiplomaImageContainer {
    width: 75%;
    height: calc(100% - 2rem);
    overflow: auto;
    margin: 1rem;
    scrollbar-width: none;
    display: flex;
    align-items: center;
    justify-content: center;
}

.PanzoomContainer {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.DiplomaImage {
    height: 100%;
    box-sizing: border-box;
    width: auto;
    display: block;
    max-width: none;
    user-select: none;
    pointer-events: all;
    border-radius: 1rem;
    border: 5px solid var(--ThirdColor);
}
</style>