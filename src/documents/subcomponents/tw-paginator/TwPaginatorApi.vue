<script setup>
import ApiSample from "@/reus/samples/ApiSample.vue";

const props = [
    ['total_pages', 'Да', `number`, `Всего страниц.`],
    ['styles', 'Нет', `IStyles`, "Опциональный объект настройки стилей для компонента."],
    ['settings', 'Нет', `Settings`, `Опциональный объект с настройками компонента.`],
]
const emits = [
    ['@change-page', 'pageNumber', "Номер страницы которую нужно подгрузить"],
]
const variables = [
    ['--tw_paginator_pages_border_color', 'black', "Цвет border для кнопок выбора страниц в компоненте."],
    ['--tw_paginator_pages_border_width', '1px', "Ширина border для кнопок выбора страниц в компоненте."],
    ['--tw_paginator_pages_active_border_color', 'darkorange', "Цвет border для текущей страницы."],
    ['--tw_paginator_pages_active_border_width', '2px', "Ширина border для текущей страницы."],
    ['--tw_paginator_pages_border_radius', '0px', "border-radius для кнопок выбора страниц в компоненте."],
    ['--tw_paginator_pages_color', 'black', "color для кнопок выбора страниц в компоненте."],
    ['--tw_paginator_pages_width', '26px', "Длина кнопок выбора страниц в компоненте."],
    ['--tw_paginator_height', '20px', "Высота кнопок выбора страниц в компоненте."],
    ['--tw_paginator_pages_gap', '2px', "Расстояние между кнопками выбора страниц в компоненте."],
    ['--tw_paginator_input_width', '44px', "width для поля ввода номера страницы."],
    ['--tw_paginator_input_border_width', '2px', "border-width для поля ввода номера страницы."],
    ['--tw_paginator_input_border_radius', '0px', "border-radius для поля ввода номера страницы."],
    ['--tw_paginator_input_color', 'black', "color для поля ввода номера страницы."],
    ['--tw_paginator_input_bgc', 'black', "background-color для поля ввода номера страницы."],

    ['--tw_paginator_buttons_border_color', 'black', "border-color для кнопок управления в компоненте."],
    ['--tw_paginator_buttons_border_width', '1px', "border-width для кнопок управления в компоненте."],
    ['--tw_paginator_buttons_color', 'black', "color для кнопок управления в компоненте."],
    ['--tw_paginator_buttons_bgc', '#f0f0f0', "background-color для кнопок управления в компоненте."],
    ['--tw_paginator_buttons_padding', '1px 2px', "padding для кнопок управления в компоненте."],

    ['--tw_paginator_label_color', 'black', "color для label перед полем ввода номера страницы в компоненте."],
    ['--tw_paginator_label_font_size', 'black', "font-size для label перед полем ввода номера страницы в компоненте."],
    ['--tw_paginator_label_font_family', 'black', "font-family для label перед полем ввода номера страницы в компоненте."],

]
const Settings = {
    name: 'Settings',
    max_pages_around_current: {dataType: 'number', title: 'Количество отображаемых страниц вокруг текущей.'},
    with_go_to: {dataType: 'boolean', title: 'Добавить поле ввода номера страницы?'},
    with_buttons: {dataType: 'boolean', title: 'Добавить кнопки управления?'},
    buttons_title: {dataType: 'IButtonsTitle', title: 'Текст для кнопок управления?'},
    label: {dataType: 'string', title: 'Текст перед полем ввода номера страницы.'},
}

const IStyles = {
    name: 'IStyles',
    component_height: {dataType: 'string', title: 'Высота компонента.'},
    text_color: {dataType: 'string', title: 'Цвет шрифта в компоненте.'},
    font_size: {dataType: 'string', title: 'Размер шрифта в компоненте.'},
    font_family: {dataType: 'string', title: 'Вид шрифта в компоненте.'},
    font_weight: {dataType: 'string', title: 'Жирность шрифта в компоненте.'},
    item_width: {dataType: 'string', title: 'Длина каждой кнопки выбора страницы в компоненте.'},
    item_border: {dataType: 'string', title: 'border для кнопок выбора страницы в компоненте.'},
    item_border_radius: {dataType: 'string', title: 'border-radius для кнопок выбора страниц в компоненте.'},
    item_bgc: {dataType: 'string', title: 'background-color для кнопок выбора страниц в компоненте.'},
    buttons_border: {dataType: 'string', title: 'border для кнопок управления в компоненте.'},
    buttons_border_radius: {dataType: 'string', title: 'border-radius для кнопок управления в компоненте.'},
    buttons_bgc: {dataType: 'string', title: 'background-color для кнопок управления в компоненте.'},
    buttons_font_color: {dataType: 'string', title: 'color для кнопок управления в компоненте.'},
    input_border: {dataType: 'string', title: 'border для поля ввода номера страницы в компоненте.'},
    input_border_radius: {dataType: 'string', title: 'border-radius для поля ввода номера страницы в компоненте.'},
    input_bgc: {dataType: 'string', title: 'background-color для поля ввода номера страницы в компоненте.'},
    go_to_margin_left: {dataType: 'string', title: 'Расстояние между полем ввода номера страницы и предыдущим элементом.'},
    dots_color: {dataType: 'string', title: 'Цвет точек на месте пропущенных кнопок выбора страниц.'}
}

const IButtonsTitle = {
    name: 'IButtonsTitle',
    prev: {dataType: 'string', title: 'Текст для кнопки предыд. страница'},
    next: {dataType: 'string', title: 'Текст для кнопки след. страница'},
}
</script>

<template>
    <api-sample
            :props="props"
            :emits="emits"
            :interfaces="[IStyles, Settings, IButtonsTitle]"
            :variables="variables"
    />
</template>

<style scoped lang="scss">

</style>