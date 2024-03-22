<script setup lang="ts">
import {Themes} from "@/themes.js";
import {ScreenSizes} from "@/ScreenSizes.js";
import DarkTableBase from "@/reus/DarkTableBase.vue";
import LightTableBase from "@/reus/LightTableBase.vue";
import {useStore} from "@/store.js";
import {onMounted, ref, Ref} from "vue";
import {getScreenSize} from "@/use/getScreenSize";
const store = useStore()
const screenSize: Ref<number> = ref(ScreenSizes.s1900)
const body = [
    {name: '#prevButton', desc: 'Слот внутри кнопки назад'},
    {name: '#nextButton', desc: 'Слот внутри кнопки вперед'},
    {name: '#labelSlot', desc:'Слот внутри label'}
]


onMounted(() => {
    screenSize.value = getScreenSize()
    window.addEventListener('resize', () => {
        screenSize.value = getScreenSize()
    })
})
</script>

<template>
    <p class="scss_green">
        Компонент имеет несколько именованных слотов. Все слоты расположены перед названием кнопки или текста label.
    </p>
    <dark-table-base
            v-if="store.theme === Themes.dark"
            header_padding="14px"
            :width="screenSize <= ScreenSizes.s1440 ? '90%' : '80%'"
            :header_font_size="screenSize <= ScreenSizes.s480 ? '2.5vw' : (screenSize <= ScreenSizes.s1440 ? '1.2vw' :'0.75vw')"
            :cell_font_size="screenSize <= ScreenSizes.s480 ? '2.5vw' : (screenSize <= ScreenSizes.s1440 ? '1.2vw' :'0.75vw')"
            :header="['Название слота', 'Описание слота']"
            :body="body"
    />
    <light-table-base
            v-else
            header_padding="14px"
            :width="screenSize <= ScreenSizes.s1440 ? '90%' : '80%'"
            :header_font_size="screenSize <= ScreenSizes.s480 ? '2.5vw' : (screenSize <= ScreenSizes.s1440 ? '1.2vw' :'0.75vw')"
            :cell_font_size="screenSize <= ScreenSizes.s480 ? '2.5vw' : (screenSize <= ScreenSizes.s1440 ? '1.2vw' :'0.75vw')"
            :header="['Название слота', 'Описание слота']"
            :body="body"
    />
</template>

<style scoped lang="scss">

</style>
