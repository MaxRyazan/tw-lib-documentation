<script setup>

import {onMounted, reactive, ref} from "vue";

const bodyDesc = `Массив данных который отрисовывает таблица. Тип принимаемых
данных - массив объектов, или массив массивов.`
const headerDesc = 'Массив данных или объект, который должен содержать названия колонок. Обычно массив строк, или объект ' +
    'с примитивными значениями (string | number).'

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
const rowCustomSettings = `Массив объектов формата {idx: Number, textColor: String, bgc: String, fontSize: String, fontFamily: String, bgc: String}, позволяющий поменять стили конкретной строки в таблице.
idx - номер строки, textColor - цвет текста в строке, bgc - цвет заливки строки, fontSize - размер текста в строке, fontFamily - название шрифта в строке, bgc - цвет заливки этой строки.`


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
const smallProps = [
    ['body', bodyDesc],
    ['header', headerDesc],
    ['td_align_left', tdAlignLeftDesc],
    ['td_align_right', tdAlignRightDesc],
    ['cell_padding', cellPadding],
    ['elements_with_tabulation', elementsWithTabulation],
    ['red_when_sub_zero', redWhenSubZero],
    ['table_with_select', tableWithSelect],
    ['with_fixed', withFixed],
    ['width', widthDesc],
    ['height', heightDesc],
    ['cell_min_width', cellMinWidth],
    ['table_bgc', tableBgc],
    ['table_border', tableBorder],
    ['header_bgc', headerBgc],
    ['header_font_color', headerFontColor],
    ['header_font_family', headerFontFamily],
    ['header_font_size', headerFontSize],
    ['cell_font_size', cellFontSize],
    ['cell_font_color', cellFontColor],
    ['multicolor', multicolor],
    ['row_custom_settings', rowCustomSettings],
]

const emits = [
    ['@push', '{bodyElement, $event}', 'Клик по строке таблицы левой кнопкой мыши'],
    ['@dab-click', '{bodyElement, $event}', 'Двойной клик по строке таблицы левой кнопкой мыши'],
    ['@right-click', '{bodyElement, $event}', 'Клик по строке таблицы правой кнопкой мыши']
]

const smallScreen = ref(false)

onMounted(() => {
    if(window.innerWidth <= 1440){
        smallScreen.value = true
    }
    window.addEventListener('resize' ,() => {
        if(window.innerWidth <= 1440){
            smallScreen.value = true
        } else  smallScreen.value = false
    })
})

const header = reactive(['Входной параметр', 'Обязательный', 'Тип значения параметра', 'Описание'])
const smallHeader = reactive(['Параметр', 'Описание'])
</script>

<template>
    <div>
        <p style="margin: 0 auto; color: darkorange; border-bottom: 2px solid darkorange; padding: 0 10px 5px 10px; cursor: default">Входные параметры - Props</p>
        <tw-table-base
                :width="smallScreen ? '100%' : '80%'"
                :header_font_size="smallScreen ? '1.5vw' : '1vw'"
                :cell_font_size="smallScreen ? '1.5vw' : '1vw'"
                table_bgc="white"
                header_font_color="orange"
                :body="smallScreen ? smallProps : props"
                :header="smallScreen ? smallHeader : header"
                :row_custom_settings="[
                                        {idx:0, textColor: 'darkorange', fontSize: '1.5vw', bgc: 'rgb(255, 240, 219)'},
                                        {idx:3, textColor: 'darkorange', fontSize: '1.5vw', bgc: 'rgb(255, 240, 219)'},
                                        {idx:8, textColor: 'darkorange', fontSize: '1.5vw', bgc: 'rgb(255, 240, 219)'},
                                        {idx:12, textColor: 'darkorange', fontSize: '1.5vw', bgc: 'rgb(255, 240, 219)'},
                                    ]"
        />
        <p style="margin: 0 auto; color: darkorange; border-bottom: 2px solid darkorange; padding: 0 10px 5px 10px; cursor: default">Возможные действия - Emits</p>
        <tw-table-base
                :width="smallScreen ? '100%' : '80%'"
                :header_font_size="smallScreen ? '1.5vw' : '1vw'"
                :cell_font_size="smallScreen ? '1.5vw ' : '1vw'"
                header_font_color="orange"
                table_bgc="white"
                :header="['Название', 'Аргументы', 'Описание']"
                :body="emits"/>
    </div>
</template>

<style scoped lang="scss">

</style>