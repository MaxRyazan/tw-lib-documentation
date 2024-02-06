<script setup>

import ApiSample from "@/reus/samples/ApiSample.vue";

const props = [
    ['variants', 'Нет', `Array< { [key: T]: Array<T> } >, где T = number | string`, "Массив вариантов выбора."],
    ['width', 'Нет', `string`, "Длина компонента."],
    ['border', 'Нет', `string`, "Значение border для компонента."],
    ['bgc', 'Нет', `string`, "Цвет заливки bgc для компонента"],
    ['items_height', 'Нет', `string`, "Высота каждого элемента выбора."],
    ['horizontal_padding', 'Нет', `string`, "Размер padding слева и справа от текста в каждом элементе выбора."],
    ['color', 'Нет', `string`, "Цвет текста для каждого элемента выбора."],
    ['hover_color', 'Нет', `string`, "Цвет заливки элемента выбора при наведении мышки."],
    ['font_size', 'Нет', `string`, "Размер шрифта в компоненте."],
    ['font_family', 'Нет', `string`, "Семейсто шрифта для компонента."],
    ['font_weight', 'Нет', `string`, "Жирность текста для компонента."],
    ['arrow_color', 'Нет', `string`, "Цвет стрелок в компоненте."],
    ['text_center', 'Нет', `boolean`, "Флаг для указания расположения текста по центру каждого элемента выбора."],
    ['orientation_left', 'Нет', `boolean`, "Флаг для изменения ориентации компонента справа налево."],
]
const emits = [
    ['-', '-', "-"],
]
const variables = [
    ['--tw_dropdown_multi_border', '1px solid white', "Значение border для компонента."],
    ['--tw_dropdown_multi_items_height', '44px', "Значение высоты для каждого элемента выбора."],
    ['--tw_dropdown_multi_bgc', 'white', "Значение backgroundColor для компонента."],
    ['--tw_dropdown_multi_color', '#121212', "Значение color для компонента."],
    ['--tw_dropdown_multi_hover_color', 'rgba(18,18,18, .1)', "Значение backgroundColor при наведении мышки для каждого элемента выбора."],
    ['--tw_dropdown_multi_items_padding', '5px', "Значение padding для каждого элемента выбора."],
    ['--tw_dropdown_multi_text_align', 'start', "Позиционирование текста в каждом элементе выбора."],
    ['--tw_dropdown_multi_arrow_color', '#121212', "Цвет иконок стрелки."],
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