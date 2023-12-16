<script setup lang="ts">
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
const bbColor = 'Цвет нижней границы input.'
const caretColor = 'Цвет курсора input.'
const input_color = 'Цвет текста input.'
const prefix_color = 'Цвет текста строки prefix.'
const postfix_color = 'Цвет текста строки postfix.'
const prefix_fz = 'Размер текста строки prefix.'
const postfix_fz = 'Размер текста строки postfix.'
const prefix_ff = 'Шрифт строки prefix.'
const postfix_ff = 'Шрифт строки postfix.'


const props = [
    ['Основные параметры:', '', '', ''],
    ['width', 'Нет', 'String', width],
    ['inputWidth', 'Нет', 'String', inputWidth],
    ['height', 'Нет', 'String', height],
    ['type', 'Нет', 'String', type],
    ['min', 'Нет', 'Number', min],
    ['max', 'Нет', 'Number', max],
    ['step', 'Нет', 'Number', step],
    ['maxLength', 'Нет', 'Number', maxLength],
    ['vertical', 'Нет', 'Boolean', vertical],
    ['inputTextCenter', 'Нет', 'Boolean', inputTextCenter],
    ['placeholder', 'Нет', 'String', placeholder],
    ['disabled', 'Нет', 'Boolean', disabled],
    ['rounded', 'Нет', 'Boolean', rounded],
    ['prefix', 'Нет', 'String', prefix],
    ['postfix', 'Нет', 'String', postfix],
    ['bgc', 'Нет', 'String', bgc],
    ['border', 'Нет', 'String', border],
    ['bbColor', 'Нет', 'String', bbColor],
    ['caretColor', 'Нет', 'String', caretColor],
    ['input_color', 'Нет', 'String', input_color],
    ['prefix_color', 'Нет', 'String', prefix_color],
    ['postfix_color', 'Нет', 'String', postfix_color],
    ['prefix_fz', 'Нет', 'String', prefix_fz],
    ['postfix_fz', 'Нет', 'String', postfix_fz],
    ['prefix_ff', 'Нет', 'String', prefix_ff],
    ['postfix_ff', 'Нет', 'String', postfix_ff],
]
const emits = [['-', '-', '-']]

</script>

<template>
    <div>
        <p style="margin: 0 auto; color: darkorange; border-bottom: 2px solid darkorange; padding: 0 10px 5px 10px; cursor: default">Входные параметры - Props</p>
        <tw-table-base
                cell_min_width="100px"
                width="1100px"
                table_bgc="white"
                header_font_color="orange"
                :body="props"
                :header="['Входной параметр (props)', 'Обязательный', 'Тип значения параметра', 'Описание']"/>

        <p style="margin: 0 auto; color: darkorange; border-bottom: 2px solid darkorange; padding: 0 10px 5px 10px; cursor: default">
            Возможные действия - Emits</p>
        <tw-table-base
                width="1100px"
                header_font_color="orange"
                table_bgc="white"
                :header="['Название', 'Аргументы', 'Описание']"
                :body="emits"/>
    </div>
</template>

<style scoped lang="scss">

</style>