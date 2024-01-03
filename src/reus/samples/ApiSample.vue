<script setup lang="ts">
import {ScreenSizes} from "@/ScreenSizes.js";
import {onMounted, reactive, ref, Ref} from "vue";
import {getScreenSize} from "@/use/getScreenSize.js";
import {RowSettings} from "@/types";
import {Themes} from "@/themes";
import {useStore} from "@/store";

const store = useStore()
const screenSize: Ref<number> = ref(ScreenSizes.s1900)
let smallProps = reactive([])

const pr = defineProps<{
    props?: Array<any>
    emits?: Array<any>
    variables?: Array<any>
    rowSettings?: Array<RowSettings>
}>()

onMounted(() => {
    screenSize.value = getScreenSize()
    window.addEventListener('resize', () => {
        screenSize.value = getScreenSize()
    })
    smallProps = pr.props.map(item => {
        return [item[0], item[3]]
    })
})

const header = reactive(['Входной параметр', 'Обязательный', 'Тип значения параметра', 'Описание'])
const smallHeader = reactive(['Параметр', 'Описание'])
</script>

<template>
    <div>
        <p :class="{'dark_text_shadow': store.theme === Themes.dark}" style="margin: 0 auto; color: darkorange; border-bottom: 2px solid darkorange; padding: 0 10px 5px 10px; cursor: default">Входные параметры - Props</p>
        <tw-table-base
                :width="screenSize <= ScreenSizes.s1440 ? '100%' : '80%'"
                :header_font_size="screenSize <= ScreenSizes.s480 ? '2.5vw' : (screenSize <= ScreenSizes.s1440 ? '1.2vw' :'0.75vw')"
                :cell_font_size="screenSize <= ScreenSizes.s480 ? '2.5vw' : (screenSize <= ScreenSizes.s1440 ? '1.2vw' :'0.75vw')"
                table_bgc="white"
                header_font_color="green"
                :body="screenSize < ScreenSizes.s1440 ? smallProps : props"
                :header="screenSize < ScreenSizes.s1440 ? smallHeader : header"
                :row_custom_settings="screenSize < ScreenSizes.s1440 ? [] : rowSettings"
                :multicolor="screenSize < ScreenSizes.s1440"
        />
        <p :class="{'dark_text_shadow': store.theme === Themes.dark}" style="margin: 0 auto; color: darkorange; border-bottom: 2px solid darkorange; padding: 0 10px 5px 10px; cursor: default">Возможные действия - Emits</p>
        <tw-table-base
                :width="screenSize <= ScreenSizes.s1440 ? '100%' : '80%'"
                :header_font_size="screenSize <= ScreenSizes.s480 ? '2.5vw' : (screenSize <= ScreenSizes.s1440 ? '1.2vw' :'0.75vw')"
                :cell_font_size="screenSize <= ScreenSizes.s480 ? '2.5vw' : (screenSize <= ScreenSizes.s1440 ? '1.2vw' :'0.75vw')"
                header_font_color="orange"
                table_bgc="white"
                :header="['Название', 'Аргументы', 'Описание']"
                :body="emits"/>
        <p :class="{'dark_text_shadow': store.theme === Themes.dark}"
           v-if="pr.variables"
           style="margin: 0 auto; color: darkorange; border-bottom: 2px solid darkorange; padding: 0 10px 5px 10px; cursor: default">Глобальные переменные (можно переопределить в :root{})</p>
        <tw-table-base
                v-if="pr.variables"
                :width="screenSize <= ScreenSizes.s1440 ? '100%' : '80%'"
                :header_font_size="screenSize <= ScreenSizes.s480 ? '2.5vw' : (screenSize <= ScreenSizes.s1440 ? '1.2vw' :'0.75vw')"
                :cell_font_size="screenSize <= ScreenSizes.s480 ? '2.5vw' : (screenSize <= ScreenSizes.s1440 ? '1.2vw' :'0.75vw')"
                header_font_color="orange"
                table_bgc="white"
                :header="['Название', 'Значение по умолчанию', 'Описание']"
                :body="variables"/>
    </div>
</template>
