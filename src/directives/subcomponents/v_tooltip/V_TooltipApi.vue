<script setup>
import {Themes} from "@/themes";
import {useStore} from "@/store";
import ColoredText from "@/reus/ColoredText.vue";

const store = useStore()
</script>

<template>
    <div>
        <p :class="{'dark_text_shadow': store.theme === Themes.dark}" class="component__title">
            Директива v-tooltip предназначена для отображения всплывающей подсказки.
        </p>
        <p :class="{'dark_text_shadow': store.theme === Themes.dark}" class="component__title">
            В качестве аргумента может принимать строку, либо объект.
        </p>
        <p :class="{'dark_text_shadow': store.theme === Themes.dark}" class="component__title">
            Строка выводится как подсказка с базовыми стилями.
        </p>
        <p :class="{'dark_text_shadow': store.theme === Themes.dark}" class="component__title">
            Объект должен быть формата:
        </p>
        <div>
            <colored-text bl_wh>{</colored-text>
            <div style="padding-left: 15px;">
                <div>
                    <colored-text violet>text</colored-text>
                    <colored-text bl_wh m="0">:</colored-text>
                    <colored-text orange m="0">string</colored-text>
                    <colored-text bl_wh m="0">,</colored-text>
                </div>
                <div>
                    <colored-text violet>styles</colored-text>
                    <colored-text bl_wh m="0">:</colored-text>
                    <colored-text bl_wh>[</colored-text>
                    <colored-text bl_wh>{</colored-text>
                    <colored-text violet>key</colored-text>
                    <colored-text bl_wh m="0">:</colored-text>
                    <colored-text orange m="0">value</colored-text>
                    <colored-text bl_wh>}, ...</colored-text>
                    <colored-text bl_wh m="0">]</colored-text>
                </div>
            </div>
            <colored-text bl_wh>}</colored-text>
        </div>
        <p :class="{'dark_text_shadow': store.theme === Themes.dark}" class="component__title">
            где key - название стиля в формате javascript, value - значение стиля в формате строки или числа.
        </p>
        <colored-text bl_wh>Например: </colored-text>
        <div>
            <colored-text orange>const</colored-text>
            <colored-text bl_wh>styles =</colored-text>
            <colored-text bl_wh>[</colored-text>
            <div style="padding-left: 15px;">
                <div>
                    <colored-text bl_wh>{</colored-text>
                    <colored-text violet>backgroundColor</colored-text>
                    <colored-text bl_wh m="0">:</colored-text>
                    <colored-text green>'black'</colored-text>
                    <colored-text bl_wh>},</colored-text>
                </div>
                <div>
                    <colored-text bl_wh>{</colored-text>
                    <colored-text violet>padding</colored-text>
                    <colored-text bl_wh m="0">:</colored-text>
                    <colored-text green>'2px 4px'</colored-text>
                </div>
            </div>
            <colored-text bl_wh>]</colored-text>
        </div>
    </div>
</template>

<style scoped lang="scss">

</style>