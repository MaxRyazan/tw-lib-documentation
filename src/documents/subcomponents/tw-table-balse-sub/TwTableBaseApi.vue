<script setup lang="ts">
import ApiSample from "@/reus/samples/ApiSample.vue";

const bodyDesc = `Массив данных который отрисовывает таблица. Тип принимаемых
данных - массив объектов, или массив массивов.`
const headerDesc = `Массив данных или объект, который должен содержать названия колонок. Обычно массив строк, или объект
    с примитивными значениями (string | number).`

const tdAlignLeftDesc = `Флаг true | false, добавляющий позиционирование содержимого ячеек таблицы по левому краю.`
const tdAlignRightDesc = `Флаг true | false, добавляющий позиционирование содержимого ячеек таблицы по правому краю.`
const elementsWithTabulation = `Позволяет добавлять отступы слева в произвольные ячейки таблицы. Формат - массив массивов.
В каждом внутреннем массиве элемент с нулевым индексом - это номер строки, а первым индексом - номер столбца. Таким образом
вычисляется ячейка, в которой нужно сделать отступ.`
const redWhenSubZero = `Флаг true | false активирующий опцию маркировки красным отрицательных значений в таблице.`
const tableWithSelect = `Флаг true | false активирующий опцию выделения строки при нажатии на неё. Для корректной работы в таблице
не должно быть полностью идентичных строк.`
const withFixed = `Числовое значение округления параметров в ячейках таблицы.`
const widthDesc = `Ширина таблицы. Строка, формата '100px' или '300rem'. Допустимы любые единицы измерения.`
const heightDesc = `Высота таблицы. Строка, формата '100px' или '300rem'. Допустимы любые единицы измерения.`
const tableBgc = `Цвет заливки таблицы.`
const tableBorder = `Border для всей таблицы.`
const headerBgc = `Цвет заливки header таблицы.`
const headerFontColor = `Цвет текста в header таблицы.`

const headerFontFamily = `Font family для header.`

const headerFontSize = `Размер текста в header таблицы.`
const cellPadding = `Значение padding в ячейках таблицы. Формат '2px' или '2px 4px'`
const cellFontSize = `Размер текста в ячейках таблицы`
const cellFontColor = `Цвет текста в ячейках таблицы`
const cellMinWidth = `Минимальная ширина ячейки таблицы`
const multicolor = `Двойная заливка для таблицы. Четные строки имеют другой оттенок, чем нечетные`
const rowCustomSettings = `Массив настроек строки, позволяющий поменять стили конкретной строки в таблице.
idx - номер строки, textColor - цвет текста в строке, fontSize - размер текста в строке, fontFamily - название шрифта в строке, bgc - цвет заливки этой строки.`


const props = [
    ['Основные параметры:', '', '', ''],
    ['body', 'Да', 'Array<Object> || Array<Array>', bodyDesc],
    ['header', 'Нет', 'Array<any> || Object', headerDesc],
    ['Позиционирование в ячейке:', '', '', ''],
    ['td_align_left', 'Нет', 'Boolean', tdAlignLeftDesc],
    ['td_align_right', 'Нет', 'Boolean', tdAlignRightDesc],
    ['cell_padding', 'Нет', 'String', cellPadding],
    ['elements_with_tabulation', 'Нет', 'Array<Array>', elementsWithTabulation],
    ['Дополнительные возможности:', '', '', ''],
    ['red_when_sub_zero', 'Нет', 'Boolean', redWhenSubZero],
    ['table_with_select', 'Нет', 'Boolean', tableWithSelect],
    ['with_fixed', 'Нет', 'Number', withFixed],
    ['Размеры и цветовая гамма:', '', '', ''],
    ['width', 'Нет', 'String', widthDesc],
    ['height', 'Нет', 'String', heightDesc],
    ['cell_min_width', 'Нет', 'String', cellMinWidth],
    ['table_bgc', 'Нет', 'String', tableBgc],
    ['table_border', 'Нет', 'String', tableBorder],
    ['header_bgc', 'Нет', 'String', headerBgc],
    ['header_font_color', 'Нет', 'String', headerFontColor],
    ['header_font_family', 'Нет', 'String', headerFontFamily],
    ['header_font_size', 'Нет', 'String', headerFontSize],
    ['cell_font_size', 'Нет', 'String', cellFontSize],
    ['cell_font_color', 'Нет', 'String', cellFontColor],
    ['multicolor', 'Нет', 'Boolean', multicolor],
    ['row_custom_settings', 'Нет', 'Array<{idx: Number, textColor: String, bgc: String, fontSize: String, fontFamily: String}>', rowCustomSettings],
]
const rowSettings = [
    {idx:0, textColor: 'darkorange', fontSize: '1.5vw', bgc: 'rgb(255, 240, 219)'},
    {idx:3, textColor: 'darkorange', fontSize: '1.5vw', bgc: 'rgb(255, 240, 219)'},
    {idx:8, textColor: 'darkorange', fontSize: '1.5vw', bgc: 'rgb(255, 240, 219)'},
    {idx:12, textColor: 'darkorange', fontSize: '1.5vw', bgc: 'rgb(255, 240, 219)'},
]

const emits = [
    ['@push', '{bodyElement, $event}', 'Клик по строке таблицы левой кнопкой мыши'],
    ['@dab-click', '{bodyElement, $event}', 'Двойной клик по строке таблицы левой кнопкой мыши'],
    ['@right-click', '{bodyElement, $event}', 'Клик по строке таблицы правой кнопкой мыши']
]

</script>

<template>
    <api-sample
            :props="props"
            :row-settings="rowSettings"
            :emits="emits"
    />
</template>

<style scoped lang="scss">

</style>