<script setup lang="ts">
import ApiSample from "@/reus/samples/ApiSample.vue";


const props = [
    ['modelValue', 'Да', 'boolean', "Переменная с которой осуществляется двустороннее связывание"],
    ['label', 'Нет', 'string', "Текст рядом с checkbox"],
    ['border', 'Нет', 'string', "Значение border для компонента в формате '2px solid black'"],
    ['size', 'Нет', 'string', "Размер компонента по двум осям в формате '20px'"],
    ['bgc', 'Нет', 'string', "Цвет фона checkbox"],
    ['checked_color', 'Нет', 'string', "Цвет галочки в checkbox"],
    ['gap', 'Нет', 'string', "Расстяние между текстом и checkbox"],
    ['font_size', 'Нет', 'string', "Размер шрифта для label"],
    ['color', 'Нет', 'string', "Цвет шрифта для label"],
    ['font_family', 'Нет', 'string', "Настройка названия шрифта для label"],
    ['font_weight', 'Нет', 'string', "Настройка жирности шрифта для label"],
    ['error_message', 'Нет', 'string', "Сообщение, отображаемое при ошибки валидации"],
    ['invalid', 'Нет', 'boolean', "Флаг, позволяющий инвалидировать checkbox - для вывода error_message и окрасти границ в красный"],

]
const emits = [['-', '-', '-']]
const variables = [
    ['--tw_checkbox_border', '2px solid #0079bf', "Значение параметра border"],
    ['--tw_checkbox_size', '16px', "Размер компонента"],
    ['--tw_checkbox_bgc', 'white', "Цвет background для checkbox"],
    ['--tw_checkbox_checked_color', '2px solid #0079bf', "Цвет галочки внутри компонента"],
    ['--tw_checkbox_gap', '10px', "Расстояние между label и checkbox"],
]
</script>

<template>
    <api-sample
            :props="props"
            :emits="emits"
            :variables="variables"
    />
</template>
