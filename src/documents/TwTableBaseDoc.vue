<script setup>
import TheTag from "@/reus/TheTag.vue";
import TheObjectInCode from "@/reus/TheObjectInCode.vue";
import ReactiveVariable from "@/reus/ReactiveVariable.vue";
import ScriptSetupTag from "@/reus/ScriptSetupTag.vue";
import TemplateTag from "@/reus/TemplateTag.vue";
import TheArrayInCode from "@/reus/TheArrayInCode.vue";

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
const headerBgc = `Цвет заливки header таблицы.`
const headerFontColor = `Цвет текста в header таблицы.`
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
    ['header_bgc', 'Нет', 'String', headerBgc],
    ['header_font_color', 'Нет', 'String', headerFontColor],
    ['header_font_size', 'Нет', 'String', headerFontSize],
    ['cell_font_size', 'Нет', 'String', cellFontSize],
    ['cell_font_color', 'Нет', 'String', cellFontColor],
    ['multicolor', 'Нет', 'Boolean', multicolor],
    ['row_custom_settings', 'Нет', 'Array<{idx: Number, textColor: String, bgc: String, fontSize: String, fontFamily: String}>', rowCustomSettings],
]

const emits = [
    ['@push', '{bodyElement, $event}', 'Клик по строке таблицы левой кнопкой мыши'],
    ['@dab-click', '{bodyElement, $event}', 'Двойной клик по строке таблицы левой кнопкой мыши'],
    ['@right-click', '{bodyElement, $event}', 'Клик по строке таблицы правой кнопкой мыши']
]
</script>

<template>
    <div class="component">
        <p class="component__title">Компонент TwTableBase - это таблица для отображения любой информации, без возможности редактирования контента. Гибкая система настроек
        цветов и размеров позволит создать элемент любой сложности.</p>
        <div class="container">
            <div class="example_container">
                <tw-table-base :header="['Parameter', 'Current value', 'Measure']"
                               :body="[
                                   {a:'Mechanical properties:', b: '', measure: ''},
                                   {a:'Pressure', b:12, measure: 'atm.'},
                                   {a:'Temperature', b:-28, measure: 'f.'},
                                   {a:'Danger index', b: 3, measure: 'lvl.'}
                               ]"
                               width="700px"
                               red_when_sub_zero
                               header_font_color="green"
                               :row_custom_settings="[
                                    {idx:0, textColor: 'darkorange', fontSize: '16px', bgc: 'rgb(255, 240, 219)'},
                                ]"
                ></tw-table-base>
            </div>
        <div class="tag_wrapper">
            <template-tag>
                <the-tag title="" tag="tw-table-base">
                    <div class="attrs_list">
                        <span>width="700px"</span>
                        <span>red_when_sub_zero</span>
                        <span>header_font_color="green"</span>
                        <span style="display: flex">
                            :header="<span class="code__tag">header</span>"
                        </span>
                        <span style="display: flex">
                            :body="<span class="code__tag">body</span>"
                        </span>
                        <span style="display: flex">
                            row_custom_settings="<span class="code__tag">rowsSettings</span>"
                        </span>
                    </div>
                </the-tag>
            </template-tag>
            <script-setup-tag>
                <reactive-variable dataType="array" var-name="rowsSettings">
                    <the-object-in-code :object="{idx:0, textColor: 'darkorange', fontSize: '16px', bgc: 'rgb(255, 240, 219)'}" />
                </reactive-variable>
                <reactive-variable dataType="array" var-name="body">
                    <the-object-in-code :object="{a:'Mechanical properties:', b: '', measure: ''}" />
                    <the-object-in-code :object="{a:'Pressure', b:12, measure: 'atm.'}" />
                    <the-object-in-code :object="{a:'Temperature', b:1011, measure: 'f.'}" />
                    <the-object-in-code :object="{a:'Danger index', b: 3, measure: 'lvl.'}" />
                </reactive-variable>
                <reactive-variable dataType="array" var-name="header">
                    <the-array-in-code :array="['Parameter', 'Current value','Measure']" />
                </reactive-variable>
            </script-setup-tag>
        </div>
        </div>
        <p style="margin: 0 auto; color: darkorange; border-bottom: 2px solid darkorange; padding: 0 10px 5px 10px; cursor: default">Входные параметры - Props</p>
        <tw-table-base
                cell_min_width="200px"
                width="1100px"
                table_bgc="white"
                header_font_color="orange"
                :body="props"
                :header="['Входной параметр (props)', 'Обязательный', 'Тип значения параметра', 'Описание']"
                :row_custom_settings="[
                                    {idx:0, textColor: 'darkorange', bgc: 'rgb(255, 240, 219)'},
                                    {idx:3, textColor: 'darkorange', bgc: 'rgb(255, 240, 219)'},
                                    {idx:8, textColor: 'darkorange', bgc: 'rgb(255, 240, 219)'},
                                    {idx:12, textColor: 'darkorange', bgc: 'rgb(255, 240, 219)'},
                                ]"
        />
        <p style="margin: 0 auto; color: darkorange; border-bottom: 2px solid darkorange; padding: 0 10px 5px 10px; cursor: default">Возможные действия - Emits</p>
        <tw-table-base
                width="1100px"
                header_font_color="orange"
                table_bgc="white"
                :header="['Название', 'Аргументы', 'Описание']"
                :body="emits"/>
    </div>
</template>

<style lang="scss">
@import "src/assets/main";
</style>