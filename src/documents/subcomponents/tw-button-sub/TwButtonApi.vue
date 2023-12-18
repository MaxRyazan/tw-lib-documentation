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
const textColor = 'Возможность указать цвет текста в кнопки, или цвет primeicon, если она используется.'
const color_gamma = 'Возможность указать кастомный цвет, на основе которого будет создана кнопка. Работает как с outline так и без.'
const prime_icon = 'Позволяет указать название иконки из библиотеки primeicons в формате `pi-check`'

const props = [
    ['width', 'Нет', 'String', btnWidth],
    ['height', 'Нет', 'String', btnHeight],
    ['success', 'Нет', 'Boolean', typeSucc],
    ['error', 'Нет', 'Boolean', typeErr],
    ['warn', 'Нет', 'Boolean', typeWarn],
    ['outline', 'Нет', 'Boolean', outline],
    ['rounded', 'Нет', 'Boolean', rounded],
    ['round', 'Нет', 'Boolean', round],
    ['disabled', 'Нет', 'Boolean', disabled],
    ['border', 'Нет', 'String', border],
    ['bgc', 'Нет', 'String', bgc],
    ['bgcHover', 'Нет', 'String', bgcHover],
    ['textColor', 'Нет', 'String', textColor],
    ['color_gamma', 'Нет', 'String', color_gamma],
    ['prime_icon', 'Нет', 'String', prime_icon],
]

const emits = [
    ['@push', '-', 'Клик по кнопке левой кнопкой мыши'],
]
</script>

<template>
    <api-sample
            :props="props"
            :emits="emits"
    />
</template>

<style scoped lang="scss">

</style>