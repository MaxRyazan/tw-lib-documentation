<script setup lang="ts">
import {ScreenSizes} from "@/ScreenSizes.js";
import {onMounted, ref, Ref} from "vue";
import {getScreenSize} from "@/use/getScreenSize.js";
import {RowSettings} from "@/types";

const screenSize: Ref<number> = ref(ScreenSizes.s1900)

defineProps<{
    smallProps?: Array<any>
    props?: Array<any>
    emits?: Array<any>
    smallHeader?: Array<string>
    header?: Array<string>
    rowSettings?: Array<RowSettings>
}>()

onMounted(() => {
    screenSize.value = getScreenSize()
    window.addEventListener('resize', () => {
        screenSize.value = getScreenSize()
    })
})
</script>

<template>
    <div>
        <p style="margin: 0 auto; color: darkorange; border-bottom: 2px solid darkorange; padding: 0 10px 5px 10px; cursor: default">Входные параметры - Props</p>
        <tw-table-base
                :width="screenSize <= ScreenSizes.s1440 ? '100%' : '80%'"
                :header_font_size="screenSize <= ScreenSizes.s480 ? '2.5vw' : (screenSize <= ScreenSizes.s1440 ? '1.5vw' :'0.75vw')"
                :cell_font_size="screenSize <= ScreenSizes.s480 ? '2.5vw' : (screenSize <= ScreenSizes.s1440 ? '1.5vw' :'0.75vw')"
                table_bgc="white"
                header_font_color="green"
                :body="screenSize < ScreenSizes.s1440 ? smallProps : props"
                :header="screenSize < ScreenSizes.s1440 ? smallHeader : header"
                :row_custom_settings="screenSize < ScreenSizes.s1440 ? [] : rowSettings"
                :multicolor="screenSize < ScreenSizes.s1440"
        />
        <p style="margin: 0 auto; color: darkorange; border-bottom: 2px solid darkorange; padding: 0 10px 5px 10px; cursor: default">Возможные действия - Emits</p>
        <tw-table-base
                :width="screenSize <= ScreenSizes.s1440 ? '100%' : '80%'"
                :header_font_size="screenSize <= ScreenSizes.s480 ? '2.5vw' : (screenSize <= ScreenSizes.s1440 ? '1.5vw' :'0.75vw')"
                :cell_font_size="screenSize <= ScreenSizes.s480 ? '2.5vw' : (screenSize <= ScreenSizes.s1440 ? '1.5vw' :'0.75vw')"
                header_font_color="orange"
                table_bgc="white"
                :header="['Название', 'Аргументы', 'Описание']"
                :body="emits"/>
    </div>
</template>

<style scoped lang="scss">

</style>