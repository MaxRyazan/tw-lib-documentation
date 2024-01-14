<script setup lang="ts">
import {ScreenSizes} from "@/ScreenSizes.js";
import {onMounted, reactive, ref, Ref} from "vue";
import {getScreenSize} from "@/use/getScreenSize.js";
import {RowSettings} from "@/types";
import {Themes} from "@/themes";
import {useStore} from "@/store";
import DarkTableBase from "@/reus/DarkTableBase.vue";
import LightTableBase from "@/reus/LightTableBase.vue";

const store = useStore()
const screenSize: Ref<number> = ref(ScreenSizes.s1900)
let smallProps = reactive([])
let smallVariables = reactive([])

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
    if(pr.props) {
        smallProps = pr.props.map(item => {
            return [item[0], item[3]]
        })
    }
    if(pr.variables){
        smallVariables = pr.variables.map(item => {
            return [item[0], item[2]]
        })
    }
})

const header = reactive(['Входной параметр', 'Обязательный', 'Тип значения параметра', 'Описание'])
const smallHeader = reactive(['Параметр', 'Описание'])

const variablesHeader = reactive(['Название', 'Значение по умолчанию', 'Описание'])
const smallVariablesHeader = reactive(['Название', 'Описание'])
</script>

<template>
    <div>
        <p :class="{'dark_text_shadow': store.theme === Themes.dark}" style="margin: 0 auto; color: darkorange; border-bottom: 2px solid darkorange; padding: 0 10px 5px 10px; cursor: default">Входные параметры - Props</p>

        <dark-table-base
                v-if="store.theme === Themes.dark"
                header_padding="14px"
                :width="screenSize <= ScreenSizes.s1440 ? '90%' : '80%'"
                :header_font_size="screenSize <= ScreenSizes.s480 ? '2.5vw' : (screenSize <= ScreenSizes.s1440 ? '1.2vw' :'0.75vw')"
                :cell_font_size="screenSize <= ScreenSizes.s480 ? '2.5vw' : (screenSize <= ScreenSizes.s1440 ? '1.2vw' :'0.75vw')"
                :header="screenSize < ScreenSizes.s1440 ? smallHeader : header"
                :body="screenSize < ScreenSizes.s1440 ? smallProps : props"
                :row_custom_settings="screenSize < ScreenSizes.s1440 ? [] : rowSettings"

        />
        <light-table-base
                v-else
                header_padding="14px"
                :width="screenSize <= ScreenSizes.s1440 ? '90%' : '80%'"
                :header_font_size="screenSize <= ScreenSizes.s480 ? '2.5vw' : (screenSize <= ScreenSizes.s1440 ? '1.2vw' :'0.75vw')"
                :cell_font_size="screenSize <= ScreenSizes.s480 ? '2.5vw' : (screenSize <= ScreenSizes.s1440 ? '1.2vw' :'0.75vw')"
                :body="screenSize < ScreenSizes.s1440 ? smallProps : props"
                :header="screenSize < ScreenSizes.s1440 ? smallHeader : header"
                :row_custom_settings="screenSize < ScreenSizes.s1440 ? [] : rowSettings"
                :multicolor="screenSize < ScreenSizes.s1440"
        />
        <p :class="{'dark_text_shadow': store.theme === Themes.dark}" style="margin: 0 auto; color: darkorange; border-bottom: 2px solid darkorange; padding: 0 10px 5px 10px; cursor: default">Возможные действия - Emits</p>
        <dark-table-base
                v-if="store.theme === Themes.dark"
                :width="screenSize <= ScreenSizes.s1440 ? '90%' : '80%'"
                :header_font_size="screenSize <= ScreenSizes.s480 ? '2.5vw' : (screenSize <= ScreenSizes.s1440 ? '1.2vw' :'0.75vw')"
                :cell_font_size="screenSize <= ScreenSizes.s480 ? '2.5vw' : (screenSize <= ScreenSizes.s1440 ? '1.2vw' :'0.75vw')"
                :header="['Название', 'Аргументы', 'Описание']"
                :body="emits"
        />
        <light-table-base
                v-else
                :width="screenSize <= ScreenSizes.s1440 ? '100%' : '80%'"
                :header_font_size="screenSize <= ScreenSizes.s480 ? '2.5vw' : (screenSize <= ScreenSizes.s1440 ? '1.2vw' :'0.75vw')"
                :cell_font_size="screenSize <= ScreenSizes.s480 ? '2.5vw' : (screenSize <= ScreenSizes.s1440 ? '1.2vw' :'0.75vw')"
                :header="['Название', 'Аргументы', 'Описание']"
                :body="emits"/>
        <p :class="{'dark_text_shadow': store.theme === Themes.dark}"
           v-if="pr.variables"
           style="margin: 0 auto; text-align: center; color: darkorange; border-bottom: 2px solid darkorange; padding: 0 10px 5px 10px; cursor: default">Глобальные переменные</p>
        <dark-table-base
                v-if="pr.variables && store.theme === Themes.dark"
                :width="screenSize <= ScreenSizes.s1440 ? '100%' : '80%'"
                :header_font_size="screenSize <= ScreenSizes.s480 ? '2.5vw' : (screenSize <= ScreenSizes.s1440 ? '1.2vw' :'0.75vw')"
                :cell_font_size="screenSize <= ScreenSizes.s480 ? '2.5vw' : (screenSize <= ScreenSizes.s1440 ? '1.2vw' :'0.75vw')"
                :header="screenSize <= ScreenSizes.s480 ? smallVariablesHeader : variablesHeader"
                :body="screenSize <= ScreenSizes.s480 ? smallVariables : variables"
        />
        <light-table-base
                v-if="pr.variables && store.theme === Themes.light"
                :width="screenSize <= ScreenSizes.s1440 ? '100%' : '80%'"
                :header_font_size="screenSize <= ScreenSizes.s480 ? '2.5vw' : (screenSize <= ScreenSizes.s1440 ? '1.2vw' :'0.75vw')"
                :cell_font_size="screenSize <= ScreenSizes.s480 ? '2.5vw' : (screenSize <= ScreenSizes.s1440 ? '1.2vw' :'0.75vw')"
                :header="screenSize <= ScreenSizes.s480 ? smallVariablesHeader : variablesHeader"
                :body="screenSize <= ScreenSizes.s480 ? smallVariables : variables"
        />
    </div>
</template>
