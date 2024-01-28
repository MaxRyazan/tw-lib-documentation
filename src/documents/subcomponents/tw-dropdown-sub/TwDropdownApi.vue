<script setup>

import ApiSample from "@/reus/samples/ApiSample.vue";
import {reactive} from "vue";

const props = reactive([
    ['variants', 'Нет', "Array<string | number>", "Массив вариантов выбора."],
    ['width', 'Нет', "string", "Ограничение длины компонента."],
    ['items_height', 'Нет', "string", "Ограничение высоты для контейнера каждого элемента."],
    ['padding', 'Нет', "string", "Отступ внутри контейнера для каждого элемента."],
    ['color', 'Нет', "string", "Цвет текста."],
    ['border', 'Нет', "string", "Значение параметра border."],
    ['text_center', 'Нет', "boolean", "Флаг для центрирования текста внутри контейнера каждого элемента."],
    ['bgc', 'Нет', "string", "Цвет фона компонента."],
    ['hover_color', 'Нет', "string", "Цвет фона компонента при наведении."],
    ['font_size', 'Нет', "string", "Размер текста в компоненте."],
    ['font_family', 'Нет', "string", "Настройка шрифта в компоненте."],
    ['font_weight', 'Нет', "string", "Настройка жирности шрифта в компоненте."],
])
const emits = reactive([
    ['-', '-', "-"],
])
const variables = reactive([
    ['--tw_dropdown_border', '1px solid white', "Значение border для компонента."],
    ['--tw_dropdown_items_height', '44px', "Высота каждого элемента выбора."],
    ['--tw_dropdown_bgc', 'white', "Цвет фона компонента."],
    ['--tw_dropdown_color', '#121212', "Цвет текста в компоненте."],
    ['--tw_dropdown_hover_color', 'rgba(18,18,18, .1)', "Цвет фона при наведении мышки."],
    ['--tw_dropdown_items_padding', '5px', "Значение отступов в каждом контейнере элементов."],
    ['--tw_dropdown_text_align', 'start', "Позиционирование текста в каждом контейнере элементов."],
])
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