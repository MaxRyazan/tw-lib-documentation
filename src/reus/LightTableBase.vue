<script setup lang="ts">
import {ScreenSizes} from "@/ScreenSizes";
import {onMounted, ref, Ref} from "vue";
import {getScreenSize} from "@/use/getScreenSize";

defineProps<{
    header: Array<any>,
    body: Array<any>,
    width?: string,
    row_custom_settings?: Array<any>

}>()
const screenSize: Ref<number> = ref(ScreenSizes.s1900)
onMounted(() => {
    screenSize.value = getScreenSize()
    window.addEventListener('resize', () => {
        screenSize.value = getScreenSize()
    })
})
</script>

<template>
    <tw-table-base
            :width="width"
            header_bgc="#1a2b47"
            red_when_sub_zero
            header_font_color="#b7d5d7"
            table_border="1px solid #121212"
            cell_font_color="#121212"
            :header="header"
            :body="body"
            :row_custom_settings="row_custom_settings"
    />
</template>
