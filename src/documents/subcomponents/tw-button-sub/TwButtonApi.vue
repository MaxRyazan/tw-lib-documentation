<script setup lang="ts">

import ApiSample from "@/reus/samples/ApiSample.vue";

const btnWidth = 'Длина кнопки'
const btnHeight = 'Высота кнопки'
const typeSucc = 'Тип кнопки - success. Цвет зеленый.'
const typeErr = 'Тип кнопки - error. Цвет красный.'
const typeWarn = 'Тип кнопки - warning. Цвет оранжевый.'
const outline = 'Тип кнопки - outline. Без заливки.'
const rounded = 'Тип кнопки - rounded. Загруглённые границы.'
const round = 'Тип кнопки - round. Border-radius 50%.'
const disabled = 'Тип кнопки - disabled. Цвет - тёмно-серый. Отсутствуют event при нажатии.'
const border = 'Возможность указать border для кнопки в формате `1px solid black`'
const bgc = 'Возможность указать backGround color для кнопки в формате цвета.'
const bgcHover = 'Возможность указать цвет заливки при hover эффекте.'
const textColor = 'Возможность указать цвет текста в кнопки.'
const color_gamma = 'Возможность указать кастомный цвет, на основе которого будет создана кнопка. Работает как с outline так и без.'
const prime_icon = 'Позволяет указать название иконки из библиотеки primeicons в формате `pi-check`'

const props = [
    ['width', 'Нет', 'String', btnWidth],
    ['height', 'Нет', 'String', btnHeight],
    ['success', 'Нет', 'Boolean', typeSucc],
    ['warning', 'Нет', 'Boolean', typeWarn],
    ['error', 'Нет', 'Boolean', typeErr],
    ['outline', 'Нет', 'Boolean', outline],
    ['rounded', 'Нет', 'Boolean', rounded],
    ['round', 'Нет', 'Boolean', round],
    ['disabled', 'Нет', 'Boolean', disabled],
    ['border', 'Нет', 'String', border],
    ['bgc', 'Нет', 'String', bgc],
    ['text_color', 'Нет', 'String', textColor],
    ['hover', 'Нет', 'String', bgcHover],
]

const emits = [
    ['@push', '-', 'Клик по кнопке левой кнопкой мыши'],
]

const variables = [
    ['--tw_button_height', '28px', 'Высота кнопки'],
    ['--tw_button_rounded_radius', '10px', 'Закругление углов у кнопки типа rounded'],
    ['--tw_button_round_size', '30px', 'Размер (длина и высота) кнопки типа round'],
    ['--tw_button_success_color', 'white', 'Цвет шрифта у кнопки типа success'],
    ['--tw_button_success_background_color', 'forestgreen', 'Цвет заливки у кнопки типа success'],
    ['--tw_button_success_color_hover', '#04c000', 'Цвет заливки при наведении у кнопки типа success'],
    ['--tw_button_warning_color', 'white', 'Цвет шрифта у кнопки типа warning'],
    ['--tw_button_warning_background_color', 'orange', 'Цвет заливки у кнопки типа warning'],
    ['--tw_button_warning_color_hover', '#ffc227', 'Цвет заливки при наведении у кнопки типа warning'],
    ['--tw_button_error_color', 'white', 'Цвет шрифта у кнопки типа error'],
    ['--tw_button_error_background_color', 'crimson', 'Цвет заливки у кнопки типа error'],
    ['--tw_button_error_color_hover', '#ff0000', 'Цвет заливки при наведении у кнопки типа error'],

    ['--tw_button_default_background_color', 'rgb(240, 240, 240)', 'Цвет заливки у кнопки типа default'],
    ['--tw_button_outline_background_color', 'transparent', 'Цвет заливки у кнопки типа outline'],
    ['--tw_button_disabled_background_color', '#6d6d6d', 'Цвет заливки у кнопки типа disabled'],
    ['--tw_button_disabled_color', 'white', 'Цвет шрифта у кнопки типа disabled'],
    ['--tw_button_disabled_border', 'none', 'Значение параметра border у кнопки типа disabled'],


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