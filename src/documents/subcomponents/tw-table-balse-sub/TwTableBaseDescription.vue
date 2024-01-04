<script setup>

import TheObjectInCode from "@/reus/TheObjectInCode.vue";
import TemplateTag from "@/reus/TemplateTag.vue";
import ScriptSetupTag from "@/reus/ScriptSetupTag.vue";
import ReactiveVariable from "@/reus/ReactiveVariable.vue";
import TheTag from "@/reus/TheTag.vue";
import TheArrayInCode from "@/reus/TheArrayInCode.vue";
import {onMounted, ref} from "vue";
import TheLongObjectInCode from "@/reus/TheLongObjectInCode.vue";
import TheLongArrayInCode from "@/reus/TheLongArrayInCode.vue";
import {Themes} from "@/themes.ts";
import {useStore} from "@/store.ts";
import DarkTableBase from "@/reus/DarkTableBase.vue";
const store = useStore()
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
</script>

<template>
<div>
    <p :class="{'dark_text_shadow': store.theme === Themes.dark}" class="component__title">Компонент TwTableBase - это таблица для отображения любой информации, без возможности редактирования контента. Гибкая система настроек
        цветов и размеров позволит создать элемент любой сложности.</p>

    <div class="container">
        <div class="example_container">
            <dark-table-base v-if="store.theme === Themes.dark"
                             :width="smallScreen ? '80%' : '700px'"
                             :header="['Parameter', 'Current value', 'Measure']"
                             :body="[
                                   {a:'Mechanical properties:'},
                                   {a:'Pressure', b:12, measure: 'atm.'},
                                   {a:'Temperature', b:-28, measure: 'f.'},
                                   {a:'Danger index', b: 3, measure: 'lvl.'},
                                   {a:'Calculating properties:'},
                                   {a:'Flow', b:324.12, measure: 't.'},
                                   {a:'Balls weight', b:43, measure: 't.'},
                                   {a:'Water weight', b: 28, measure: 't.'}
                               ]"
                             :row_custom_settings="[{idx: 0, isSubTitle: true, textColor: '#ffb83c'}, {idx: 4, isSubTitle: true, textColor: '#ffb83c'}]"
            />
            <tw-table-base v-else :header="['Parameter', 'Current value', 'Measure']"
                           :body="[
                                   {a:'Mechanical properties:', b: '', measure: ''},
                                   {a:'Pressure', b:12, measure: 'atm.'},
                                   {a:'Temperature', b:-28, measure: 'f.'},
                                   {a:'Danger index', b: 3, measure: 'lvl.'}
                               ]"
                           :width="smallScreen ? '80%' : '700px'"
                           red_when_sub_zero
                           header_font_color="green"
                           :row_custom_settings="[
                                    {idx:0, textColor: 'darkorange', fontSize: '18px', bgc: 'rgb(255, 240, 219)', fontFamily: 'cursive'},
                                ]"
            ></tw-table-base>
        </div>
        <div class="tag_wrapper">
            <template-tag>
                <the-tag title="" tag="tw-table-base">
                    <div class="attrs_list">
                        <span v-if="!smallScreen">width="700px"</span>
                        <span v-else>width="80%"</span>
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
                    <the-object-in-code v-if="!smallScreen" :object="{idx:0, textColor: 'darkorange', fontSize: '18px', fontFamily: 'cursive', bgc: 'rgb(255, 240, 219)'}" />
                    <the-long-object-in-code v-else :object="{idx:0, textColor: 'darkorange', fontSize: '14px', fontFamily: 'cursive', bgc: 'rgb(255, 240, 219)'}" />
                </reactive-variable>
                <reactive-variable dataType="array" var-name="body">
                    <the-object-in-code v-if="!smallScreen" :object="{a:'Mechanical properties:', b: '', measure: ''}" />
                    <the-long-object-in-code v-else :object="{a:'Mech. props:', b: '', measure: ''}" />

                    <the-object-in-code v-if="!smallScreen"  :object="{a:'Pressure', b:12, measure: 'atm.'}" />
                    <the-long-object-in-code v-else :object="{a:'Pressure', b:12, measure: 'atm.'}" />

                    <the-object-in-code v-if="!smallScreen"  :object="{a:'Temperature', b:1011, measure: 'f.'}" />
                    <the-long-object-in-code v-else :object="{a:'Temperature', b:1011, measure: 'f.'}" />

                    <the-object-in-code v-if="!smallScreen"  :object="{a:'Danger index', b: 3, measure: 'lvl.'}" />
                    <the-long-object-in-code v-else :object="{a:'Danger index', b: 3, measure: 'lvl.'}" />

                </reactive-variable>
                <reactive-variable dataType="array" var-name="header">
                    <the-array-in-code v-if="!smallScreen" :array="['Parameter', 'Current value','Measure']" />
                    <the-long-array-in-code v-else :array="['Parameter', 'Current value','Measure']" />
                </reactive-variable>
            </script-setup-tag>
        </div>
    </div>
</div>
</template>

<style scoped lang="scss">

</style>