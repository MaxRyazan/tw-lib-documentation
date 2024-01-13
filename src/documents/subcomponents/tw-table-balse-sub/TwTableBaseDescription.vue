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
    <p class="component__title">Компонент TwTableBase - это таблица для отображения любой информации, без возможности редактирования контента. Гибкая система настроек
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
                             :row_custom_settings="[
                                 {idx: 0, isSubTitle: true, textColor: '#ffb83c'},
                                 {idx: 4, isSubTitle: true, textColor: '#ffb83c'}
                             ]"
            />
            <tw-table-base v-else
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
                           :row_custom_settings="[
                                 {idx: 0, isSubTitle: true, textColor: '#ffb83c'},
                                 {idx: 4, isSubTitle: true, textColor: '#ffb83c'}
                             ]"
            />
        </div>
        <div class="tag_wrapper">
            <template-tag>
                <the-tag title="" tag="tw-table-base">
                    <div class="attrs_list">
                        <span v-if="!smallScreen">width="700px"</span>
                        <span v-else>width="80%"</span>
                        <span>red_when_sub_zero</span>
                        <span>header_bgc="#1a2b47"</span>
                        <span>header_font_color="#b7d5d7"</span>
                        <span>header_border_bottom="2px solid #00b6a6"</span>
                        <span>table_border="1px solid #00b6a6"</span>
                        <span>cell_font_color="#b7d5d7"</span>
                        <span style="display: flex">
                            :header="<span class="code__tag">header</span>"
                        </span>
                        <span style="display: flex">
                            :body="<span class="code__tag">body</span>"
                        </span>
                        <span style="display: flex">
                            row_custom_settings="<span class="code__tag">settings</span>"
                        </span>
                    </div>
                </the-tag>
            </template-tag>
            <script-setup-tag>
                <reactive-variable dataType="array" var-name="settings">
                    <the-long-object-in-code v-if="smallScreen"  :object="{idx: 0, isSubTitle: true, textColor: '#ffb83c'}" />
                    <the-long-object-in-code v-if="smallScreen"  :object="{idx: 4, isSubTitle: true, textColor: '#ffb83c'}" />
                    <the-object-in-code v-if="!smallScreen" :object="{idx: 0, isSubTitle: true, textColor: '#ffb83c'}" />
                    <the-object-in-code v-if="!smallScreen" :object="{idx: 4, isSubTitle: true, textColor: '#ffb83c'}" />
                </reactive-variable>
                <reactive-variable dataType="array" var-name="body">
                    <the-long-object-in-code :object="{a:'Mechanical properties:'}" />
                    <the-object-in-code v-if="!smallScreen"  :object="{a:'Pressure', b:12, measure: 'atm.'}" />
                    <the-long-object-in-code v-else :object="{a:'Pressure', b:12, measure: 'atm.'}" />
                    <the-object-in-code v-if="!smallScreen"  :object="{a:'Temperature', b:1011, measure: 'f.'}" />
                    <the-long-object-in-code v-else :object="{a:'Temperature', b:1011, measure: 'f.'}" />
                    <the-object-in-code v-if="!smallScreen"  :object="{a:'Danger index', b: 3, measure: 'lvl.'}" />
                    <the-long-object-in-code v-else :object="{a:'Danger index', b: 3, measure: 'lvl.'}" />

                    <the-long-object-in-code :object="{a:'Calculating properties:'}" />
                    <the-object-in-code v-if="!smallScreen"  :object="{a:'Flow', b:324.12, measure: 't.'}" />
                    <the-long-object-in-code v-else :object="{a:'Flow', b:324.12, measure: 't.'}" />
                    <the-object-in-code v-if="!smallScreen"  :object="{a:'Balls weight', b:43, measure: 't.'}" />
                    <the-long-object-in-code v-else :object="{a:'Balls weight', b:43, measure: 't.'}" />
                    <the-object-in-code v-if="!smallScreen"  :object="{a:'Water weight', b: 28, measure: 't.'}" />
                    <the-long-object-in-code v-else :object="{a:'Water weight', b: 28, measure: 't.'}" />

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