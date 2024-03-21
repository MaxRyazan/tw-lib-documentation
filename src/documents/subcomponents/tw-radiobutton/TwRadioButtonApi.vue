<script setup lang="ts">

import ApiSample from "@/reus/samples/ApiSample.vue";

const Variants = {
    name: 'Variants',
    variants: {dataType: 'Array<string | number>', title: 'Массив вариантов выбора.'},
}
const Settings = {
    name: 'Settings',
    in_group: {dataType: 'boolean', title: 'Сгруппировать без пробелов?'},
    disabled: {dataType: 'boolean', title: 'Активировать состояние "отключено" ?'},
    rounded: {dataType: 'boolean', title: 'Сделать границы закруглёнными?'},
}

const IStyles = {
    name: 'IStyles',
    item_width: {dataType: 'string', title: 'Длина каждого элемента в компоненте.'},
    item_height: {dataType: 'string', title: 'Высота каждого элемента в компоненте.'},
    item_bgc: {dataType: 'string', title: 'background-color каждого элемента в компоненте.'},
    item_border: {dataType: 'string', title: 'border каждого элемента в компоненте.'},
    text_color: {dataType: 'string', title: 'color каждого элемента в компоненте.'},
    active_color: {dataType: 'string', title: 'color при клике по элементу в компоненте.'},
    hover_color: {dataType: 'string', title: 'color:hover для элемента в компоненте.'},
    font_size: {dataType: 'string', title: 'font-size для каждого элемента в компоненте.'},
    font_family: {dataType: 'string', title: 'font-family для каждого элемента в компоненте.'},
    font_weight: {dataType: 'string', title: 'font-weight для каждого элемента в компоненте.'}
}


const props = [
    ['variants', 'Да', `Variants`, "Массив вариантов выбора."],
    ['settings', 'Нет', `Settings`, `Опциональный объект с настройками компонента.`],
    ['styles', 'Нет', `IStyles`, "Опциональный объект настройки стилей для компонента."],
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
            :interfaces="[IStyles, Settings ,Variants]"
            :variables="variables"
    />
</template>

<style scoped lang="scss">

</style>