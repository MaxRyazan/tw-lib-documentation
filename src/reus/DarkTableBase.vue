<script setup lang="ts">
defineProps<{
    header: Array<string>,
    body: Array<any>,
    width?: string,

}>()
</script>

<template>
<tw-table-base
        :width="width"
        header_bgc="#1a2b47"
        table_bgc="#1a2b47"
        red_when_sub_zero
        header_font_color="#FFA500"
        header_border_bottom="2px solid #00b6a6"
        table_border="1px solid #00b6a6"
        cell_font_color="#b7d5d7"
        :header="header"
        :body="body"
/>
</template>
