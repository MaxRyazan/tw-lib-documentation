<script setup lang="ts">
import TheTag from "@/reus/TheTag.vue";
import TagOneLine from "@/reus/TagOneLine.vue";

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
    ['Основные параметры:', '', '', ''],
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
    <div style="width: 100%;">
        <div class="component">
            <p class="component__title">Компонент кнопки. Позволяет создавать как кастомные кнопки, так и использовать готовые шаблоны.</p>
            <div class="container">
                <div class="btn_ex_item">
                    <tw-button success>Подтвердить</tw-button>
                    <tw-button warn>Подтвердить</tw-button>
                    <tw-button error>Подтвердить</tw-button>
                    <tw-button color_gamma="violet">Подтвердить</tw-button>
                </div>
                <div class="tag_wrapper">
                    <tag-one-line title="Подтвердить" tag="tw-button">
                        <div class="attrs_list">
                            <span>success</span>
                        </div>
                    </tag-one-line>
                    <tag-one-line title="Подтвердить" tag="tw-button">
                        <div class="attrs_list">
                            <span>warn</span>
                        </div>
                    </tag-one-line>
                    <tag-one-line title="Подтвердить" tag="tw-button">
                        <div class="attrs_list">
                            <span>error</span>
                        </div>
                    </tag-one-line>
                    <tag-one-line title="Подтвердить" tag="tw-button">
                        <div class="attrs_list">
                            <span>color_gamma='violet'</span>
                        </div>
                    </tag-one-line>
                </div>
            </div>
            <div class="container">
                <div class="btn_ex_item">
                    <tw-button prime_icon="pi-check" success>Подтвердить</tw-button>
                    <tw-button prime_icon="pi-check" warn>Подтвердить</tw-button>
                    <tw-button prime_icon="pi-check" error>Подтвердить</tw-button>
                    <tw-button prime_icon="pi-check" color_gamma="blue">Подтвердить</tw-button>
                </div>
                <div class="tag_wrapper">
                    <tag-one-line title="Подтвердить" tag="tw-button">
                        <div class="attrs_list">
                            <span>prime_icon="pi-check" success</span>
                        </div>
                    </tag-one-line>
                    <tag-one-line title="Подтвердить" tag="tw-button">
                        <div class="attrs_list">
                            <span>prime_icon="pi-check" warn</span>
                        </div>
                    </tag-one-line>
                    <tag-one-line title="Подтвердить" tag="tw-button">
                        <div class="attrs_list">
                            <span>prime_icon="pi-check" error</span>
                        </div>
                    </tag-one-line>
                    <tag-one-line title="Подтвердить" tag="tw-button">
                        <div class="attrs_list">
                            <span>prime_icon="pi-check" color_gamma='blue'</span>
                        </div>
                    </tag-one-line>
                </div>
            </div>
            <div class="container">
                <div class="btn_ex_item">
                    <tw-button rounded success>Подтвердить</tw-button>
                    <tw-button rounded warn>Подтвердить</tw-button>
                    <tw-button rounded error>Подтвердить</tw-button>
                    <tw-button rounded color_gamma="rgb(59, 177, 228)">Подтвердить</tw-button>
                </div>
                <div class="tag_wrapper">
                    <tag-one-line title="Подтвердить" tag="tw-button">
                        <div class="attrs_list">
                            <span>rounded success</span>
                        </div>
                    </tag-one-line>
                    <tag-one-line title="Подтвердить" tag="tw-button">
                        <div class="attrs_list">
                            <span>rounded warn</span>
                        </div>
                    </tag-one-line>
                    <tag-one-line title="Подтвердить" tag="tw-button">
                        <div class="attrs_list">
                            <span>rounded error</span>
                        </div>
                    </tag-one-line>
                    <tag-one-line title="Подтвердить" tag="tw-button">
                        <div class="attrs_list">
                            <span>rounded color_gamma='rgb(59, 177, 228)'</span>
                        </div>
                    </tag-one-line>

                </div>
            </div>
            <div class="container">
                <div class="btn_ex_item">
                    <tw-button prime_icon="pi-check" rounded success>Подтвердить</tw-button>
                    <tw-button prime_icon="pi-check" rounded warn>Подтвердить</tw-button>
                    <tw-button prime_icon="pi-check" rounded error>Подтвердить</tw-button>
                    <tw-button prime_icon="pi-check" rounded color_gamma="#77008b">Подтвердить</tw-button>
                </div>
                <div class="tag_wrapper">
                    <tag-one-line title="Подтвердить" tag="tw-button">
                        <div class="attrs_list">
                            <span>prime_icon="pi-check" rounded success</span>
                        </div>
                    </tag-one-line>
                    <tag-one-line title="Подтвердить" tag="tw-button">
                        <div class="attrs_list">
                            <span>prime_icon="pi-check" rounded warn</span>
                        </div>
                    </tag-one-line>
                    <tag-one-line title="Подтвердить" tag="tw-button">
                        <div class="attrs_list">
                            <span>prime_icon="pi-check" rounded error</span>
                        </div>
                    </tag-one-line>
                    <tag-one-line title="Подтвердить" tag="tw-button">
                        <div class="attrs_list">
                            <span>prime_icon="pi-check" rounded color_gamma='#77008b'</span>
                        </div>
                    </tag-one-line>
                </div>
            </div>
            <div class="container">
                <div class="btn_ex_item">
                    <tw-button outline success>Подтвердить</tw-button>
                    <tw-button outline warn>Подтвердить</tw-button>
                    <tw-button outline error>Подтвердить</tw-button>
                    <tw-button outline color_gamma="violet">Подтвердить</tw-button>
                </div>
                <div class="tag_wrapper">
                    <tag-one-line title="Подтвердить" tag="tw-button">
                        <div class="attrs_list">
                            <span>outline success</span>
                        </div>
                    </tag-one-line>
                    <tag-one-line title="Подтвердить" tag="tw-button">
                        <div class="attrs_list">
                            <span>outline warn</span>
                        </div>
                    </tag-one-line>
                    <tag-one-line title="Подтвердить" tag="tw-button">
                        <div class="attrs_list">
                            <span>outline error</span>
                        </div>
                    </tag-one-line>
                    <tag-one-line title="Подтвердить" tag="tw-button">
                        <div class="attrs_list">
                            <span>outline color_gamma='violet'</span>
                        </div>
                    </tag-one-line>
                </div>
            </div>
            <div class="container">
                <div class="btn_ex_item">
                    <tw-button rounded outline success>Подтвердить</tw-button>
                    <tw-button rounded outline warn>Подтвердить</tw-button>
                    <tw-button rounded outline error>Подтвердить</tw-button>
                    <tw-button rounded outline color_gamma="violet">Подтвердить</tw-button>
                </div>
                <div class="tag_wrapper">
                    <tag-one-line title="Подтвердить" tag="tw-button">
                        <div class="attrs_list">
                            <span>rounded outline success</span>
                        </div>
                    </tag-one-line>
                    <tag-one-line title="Подтвердить" tag="tw-button">
                        <div class="attrs_list">
                            <span>rounded outline warn</span>
                        </div>
                    </tag-one-line>
                    <tag-one-line title="Подтвердить" tag="tw-button">
                        <div class="attrs_list">
                            <span>rounded outline error</span>
                        </div>
                    </tag-one-line>
                    <tag-one-line title="Подтвердить" tag="tw-button">
                        <div class="attrs_list">
                            <span>rounded outline color_gamma='violet'</span>
                        </div>
                    </tag-one-line>
                </div>
            </div>
            <div class="container">
                <div class="btn_ex_item">
                    <tw-button prime_icon="pi-check" rounded outline success>Подтвердить</tw-button>
                    <tw-button prime_icon="pi-check" rounded outline warn>Подтвердить</tw-button>
                    <tw-button prime_icon="pi-check" rounded outline error>Подтвердить</tw-button>
                    <tw-button prime_icon="pi-check" rounded outline color_gamma="violet">Подтвердить</tw-button>
                </div>
                <div class="tag_wrapper">
                    <tag-one-line title="Подтвердить" tag="tw-button">
                        <div class="attrs_list">
                            <span>prime_icon="pi-check" rounded outline success</span>
                        </div>
                    </tag-one-line>
                    <tag-one-line title="Подтвердить" tag="tw-button">
                        <div class="attrs_list">
                            <span>prime_icon="pi-check" rounded outline warn</span>
                        </div>
                    </tag-one-line>
                    <tag-one-line title="Подтвердить" tag="tw-button">
                        <div class="attrs_list">
                            <span>prime_icon="pi-check" rounded outline error</span>
                        </div>
                    </tag-one-line>
                    <tag-one-line title="Подтвердить" tag="tw-button">
                        <div class="attrs_list">
                            <span>prime_icon="pi-check" rounded outline color_gamma='violet'</span>
                        </div>
                    </tag-one-line>

                </div>
            </div>
            <div class="container">
                <div class="btn_ex_item">
                    <tw-button round success>да</tw-button>
                    <tw-button round warn>да</tw-button>
                    <tw-button round error>да</tw-button>
                    <tw-button round color_gamma="violet">да</tw-button>
                </div>
                <div class="tag_wrapper">
                    <tag-one-line title="Подтвердить" tag="tw-button">
                        <div class="attrs_list">
                            <span>round success</span>
                        </div>
                    </tag-one-line>
                    <tag-one-line title="Подтвердить" tag="tw-button">
                        <div class="attrs_list">
                            <span>round warn</span>
                        </div>
                    </tag-one-line>
                    <tag-one-line title="Подтвердить" tag="tw-button">
                        <div class="attrs_list">
                            <span>round error</span>
                        </div>
                    </tag-one-line>
                    <tag-one-line title="Подтвердить" tag="tw-button">
                        <div class="attrs_list">
                            <span>round color_gamma='violet'</span>
                        </div>
                    </tag-one-line>
                </div>
            </div>
            <div class="container">
                <div class="btn_ex_item">
                    <tw-button outline round success>да</tw-button>
                    <tw-button outline round warn>да</tw-button>
                    <tw-button outline round error>да</tw-button>
                    <tw-button outline round color_gamma="violet">да</tw-button>
                </div>
                <div class="tag_wrapper">
                    <tag-one-line title="Подтвердить" tag="tw-button">
                        <div class="attrs_list">
                            <span>outline round success</span>
                        </div>
                    </tag-one-line>
                    <tag-one-line title="Подтвердить" tag="tw-button">
                        <div class="attrs_list">
                            <span>outline round warn</span>
                        </div>
                    </tag-one-line>
                    <tag-one-line title="Подтвердить" tag="tw-button">
                        <div class="attrs_list">
                            <span>outline round error</span>
                        </div>
                    </tag-one-line>
                    <tag-one-line title="Подтвердить" tag="tw-button">
                        <div class="attrs_list">
                            <span>outline round color_gamma='violet'</span>
                        </div>
                    </tag-one-line>
                </div>
            </div>
            <div class="container">
                <div class="btn_ex_item">
                    <tw-button prime_icon="pi-check" round success></tw-button>
                    <tw-button prime_icon="pi-check" round warn></tw-button>
                    <tw-button prime_icon="pi-check" round error></tw-button>
                    <tw-button prime_icon="pi-check" round color_gamma="violet"></tw-button>
                </div>
                <div class="tag_wrapper">
                    <tag-one-line title="Подтвердить" tag="tw-button">
                        <div class="attrs_list">
                            <span>prime_icon="pi-check" round outline success</span>
                        </div>
                    </tag-one-line>
                    <tag-one-line title="Подтвердить" tag="tw-button">
                        <div class="attrs_list">
                            <span>prime_icon="pi-check" round outline warn</span>
                        </div>
                    </tag-one-line>
                    <tag-one-line title="Подтвердить" tag="tw-button">
                        <div class="attrs_list">
                            <span>prime_icon="pi-check" round outline error</span>
                        </div>
                    </tag-one-line>
                    <tag-one-line title="Подтвердить" tag="tw-button">
                        <div class="attrs_list">
                            <span>prime_icon="pi-check" round outline color_gamma='violet'</span>
                        </div>
                    </tag-one-line>
                </div>
            </div>
            <div class="container">
                <div class="btn_ex_item">
                    <tw-button outline prime_icon="pi-download" round success></tw-button>
                    <tw-button outline prime_icon="pi-download" round warn></tw-button>
                    <tw-button outline prime_icon="pi-download" round error></tw-button>
                    <tw-button outline prime_icon="pi-download" round color_gamma="violet"></tw-button>
                </div>
                <div class="tag_wrapper">
                    <tag-one-line title="Подтвердить" tag="tw-button">
                        <div class="attrs_list">
                            <span>outline prime_icon="pi-download" round outline success</span>
                        </div>
                    </tag-one-line>
                    <tag-one-line title="Подтвердить" tag="tw-button">
                        <div class="attrs_list">
                            <span>outline prime_icon="pi-download" round outline warn</span>
                        </div>
                    </tag-one-line>
                    <tag-one-line title="Подтвердить" tag="tw-button">
                        <div class="attrs_list">
                            <span>outline prime_icon="pi-download" round outline error</span>
                        </div>
                    </tag-one-line>
                    <tag-one-line title="Подтвердить" tag="tw-button">
                        <div class="attrs_list">
                            <span>outline prime_icon="pi-download" round outline color_gamma='violet'</span>
                        </div>
                    </tag-one-line>
                </div>
            </div>
            <p style="margin: 0 auto; color: darkorange; border-bottom: 2px solid darkorange; padding: 0 10px 5px 10px; cursor: default">Входные параметры - Props</p>
            <tw-table-base
                    cell_min_width="100px"
                    width="800px"
                    table_bgc="white"
                    header_font_color="orange"
                    :body="props"
                    :header="['Входной параметр (props)', 'Обязательный', 'Тип значения параметра', 'Описание']"/>
            <p style="margin: 0 auto; color: darkorange; border-bottom: 2px solid darkorange; padding: 0 10px 5px 10px; cursor: default">
                Возможные действия - Emits</p>
            <tw-table-base
                    width="800px"
                    header_font_color="orange"
                    table_bgc="white"
                    :header="['Название', 'Аргументы', 'Описание']"
                    :body="emits"/>
        </div>
    </div>
</template>

<style scoped lang="scss">


</style>