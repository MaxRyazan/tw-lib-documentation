<script setup>

import TheObjectInCode from "@/reus/TheObjectInCode.vue";
import TemplateTag from "@/reus/TemplateTag.vue";
import ScriptSetupTag from "@/reus/ScriptSetupTag.vue";
import ReactiveVariable from "@/reus/ReactiveVariable.vue";
import TheTag from "@/reus/TheTag.vue";
import TheArrayInCode from "@/reus/TheArrayInCode.vue";
</script>

<template>
<div>
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
                                    {idx:0, textColor: 'darkorange', fontSize: '18px', bgc: 'rgb(255, 240, 219)', fontFamily: 'cursive'},
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
                    <the-object-in-code :object="{idx:0, textColor: 'darkorange', fontSize: '18px', bgc: 'rgb(255, 240, 219)'}" />
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
</div>
</template>

<style scoped lang="scss">

</style>