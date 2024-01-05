<script setup lang="ts">
import ApiSample from "@/reus/samples/ApiSample.vue";

const width = 'Длина контейнера, учитывая prefix и postfix.'
const inputWidth = 'Длина самого input.'
const height = 'Высота контейнера.'
const type = 'Тип инпута.'
const min = 'Минимальное значение.'
const max = 'Максимальное значение.'
const step = 'Шаг увеличения / уменьшения значения.'
const maxLength = 'Максимальная длина контента.'
const vertical = 'Меняет расположение prefix - input на вертикальное.'
const inputTextCenter = 'Позиционирование текста и курсора по центру.'
const placeholder = 'Placeholder.'
const disabled = 'Выключеный.'
const rounded = 'Загруглённые границы.'
const prefix = 'Строка, которая расположена перед input. При ипользовании флага vertical prefix располагается над input.'
const postfix = 'Строка, которая расположена после input. Удобно использовать для указания единиц измерения.'
const bgc = 'Background color самого input.'
const border = 'Border самого input.'
const borderBottom = 'Значение border для нижней границы input.'
const caretColor = 'Цвет курсора input.'
const input_color = 'Цвет текста input.'
const prefix_color = 'Цвет текста строки prefix.'
const postfix_color = 'Цвет текста строки postfix.'
const prefix_fz = 'Размер текста строки prefix.'
const postfix_fz = 'Размер текста строки postfix.'
const prefix_ff = 'Шрифт строки prefix.'
const postfix_ff = 'Шрифт строки postfix.'


const props = [
    ['width', 'Нет', 'String', width],
    ['height', 'Нет', 'String', height],
    ['input_width', 'Нет', 'String', inputWidth],
    ['input_font_size', 'Нет', 'String', 'Размер шрифта в input'],
    ['input_font_family', 'Нет', 'String', 'Тип шрифта в input'],

    ['type', 'Нет', 'String', type],
    ['min', 'Нет', 'Number', min],
    ['max', 'Нет', 'Number', max],
    ['step', 'Нет', 'Number', step],
    ['max_length', 'Нет', 'Number', maxLength],
    ['border', 'Нет', 'String', border],
    ['bgc', 'Нет', 'String', bgc],
    ['caret_color', 'Нет', 'String', caretColor],
    ['input_text_color', 'Нет', 'String', input_color],
    ['border_bottom', 'Нет', 'String', borderBottom],
    ['padding', 'Нет', 'String', 'Значение padding для input'],
    ['placeholder', 'Нет', 'String', placeholder],
    ['text_center', 'Нет', 'Boolean', inputTextCenter],
    ['border_radius', 'Нет', 'String', rounded],
    ['disabled', 'Нет', 'Boolean', disabled],
    ['readonly', 'Нет', 'Boolean', 'Присвоение атрибута readonly'],
    ['vertical', 'Нет', 'Boolean', vertical],
    ['prefix', 'Нет', 'String', prefix],
    ['postfix', 'Нет', 'String', postfix],
    ['prefix_color', 'Нет', 'String', prefix_color],
    ['postfix_color', 'Нет', 'String', postfix_color],
    ['prefix_font_size', 'Нет', 'String', prefix_fz],
    ['postfix_font_size', 'Нет', 'String', postfix_fz],
    ['prefix_font_family', 'Нет', 'String', prefix_ff],
    ['postfix_font_family', 'Нет', 'String', postfix_ff],
]
const emits = [['-', '-', '-']]
const variables = [
    ['--tw_input_component_width', 'auto', 'Длина компонента, включая prefix и postfix'],
    ['--tw_input_component_height', '28px', 'Высота компонента'],
    ['--tw_input_width', '170px', 'Длина самого input, без учета prefix и postfix'],
    ['--tw_input_font_family', 'inherit', 'Название шрифта для input'],
    ['--tw_input_font_size', '16px', 'Размер шрифта для input'],
    ['--tw_input_color', 'black', 'Цвет шрифта для input'],
    ['--tw_input_border', '1px solid rgb(240, 240, 240)', 'Значение border для input'],
    ['--tw_input_border_radius', '0px', 'Значение border-radius для input'],
    ['--tw_input_padding', '2px 4px', 'Значение padding для input'],
    ['--tw_input_text_align', 'start', 'Значение text-align для input'],
    ['--tw_input_bgc', 'white', 'Значение background-color для input'],
    ['--tw_input_caret_color', 'black', 'Цвет каретки для input'],
    ['--tw_input_validator_margin_top', '2px', 'Отступ сверху для слота #validator'],
    ['--tw_input_validator_color', 'red', 'Цвет текста для слота #validator'],
    ['--tw_input_disabled_color', 'lightgray', 'Цвет текста для disabled input'],
    ['--tw_input_disabled_cursor', 'not-allowed', 'Вид курсора для disabled input'],
    ['--tw_input_readonly_cursor', 'default', 'Вид курсора для readonly input'],
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