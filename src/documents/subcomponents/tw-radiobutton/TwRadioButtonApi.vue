<script setup lang="ts">

import ApiSample from "@/reus/samples/ApiSample.vue";

const settings = {
    in_group: 'boolean',
    disabled: 'boolean',
    rounded: 'boolean'
}

const IStyles  = {
    item_width: 'string',
    item_height: 'string',
    item_bgc: 'string',
    item_border: 'string',
    text_color: 'string',
    active_color: 'string',
    hover_color: 'string',
    font_size: 'string',
    font_family: 'string',
    font_weight: 'string'
}

const props = [
    ['variants', 'Да', `Array< { [key: T]: Array<T> } >, где T = number | string`, "Массив вариантов выбора."],
    ['settings', 'Нет', `{in_group: 'boolean', rounded: 'boolean', disabled: 'boolean' }`, `Опциональный объект с настройками компонента. Где:
    in_group - варианты выбора без расстояния между ними. rounded - округлые границы у элементов выбора, disabled - неактивные элементы выбора`],
    ['styles', 'Нет', `IStyles`, "Объект настройки стилей для компонента."],
]
const emits = [
    ['-', '-', "-"],
]
const variables = [
    ['--tw_radio_border', '1px solid #999', "Значение border для компонента."],
    ['--tw_radio_border_radius', '12px', "Значение border-radius для компонента."],
    ['--tw_radio_color', ' #121212', "Значение color для компонента."],
    ['--tw_radio_bgc', ' white', "Значение background-color для компонента."],
    ['--tw_radio_item_gap', ' 10px', "Расстояние между элементами в компоненте."],
    ['--tw_radio_item_width', ' 40px', "Длина каждого элемента в компоненте."],
    ['--tw_radio_item_height', ' 25px', "Высота каждого элемента в компоненте."],
    ['--tw_radio_item_padding', ' 4px', "Значение padding для каждого элемента в компоненте."],
    ['--tw_radio_bgc_checked', ' #ffe0a6', "Значение background-color для выбранного элемента."],
    ['--tw_radio_hover_color', ' rgba(0,0,0, .3)', "Значение color при наведении на элемент компонента."],

]

</script>

<template>
    <api-sample
            :props="props"
            :emits="emits"
            :variables="variables"
    />
</template>

<style scoped lang="scss">

</style>