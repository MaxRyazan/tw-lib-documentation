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
import LightTableBase from "@/reus/LightTableBase.vue";
import DescriptionSample from "@/reus/samples/DescriptionSample.vue";
import TagOneLine from "@/reus/TagOneLine.vue";
import ExampleContainer from "@/reus/samples/ExampleContainer.vue";
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
    <description-sample>
        <template #description>
            Компонент TwTableBase - это таблица для отображения любой информации, без возможности редактирования контента. Гибкая система настроек
            цветов и размеров позволит создать элемент любой сложности.
        </template>
        <template #exampleAndCode>
            <example-container>
                <template #example>
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
                    <light-table-base v-else
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
                                 {idx: 0, isSubTitle: true, textColor: '#121212'},
                                 {idx: 4, isSubTitle: true, textColor: '#121212'}
                             ]"
                    />
                </template>
                <template #code>
                    <template-tag>
                        <the-tag title="" tag="tw-table-base">
                            <div class="attrs_list">
                                <span v-if="!smallScreen">width="700px"</span>
                                <span v-else>width="80%"</span>
                                <span>red_when_sub_zero</span>
                                <span>header_bgc="#1a2b47"</span>
                                <span>header_font_color="#b7d5d7"</span>
                                <span v-if="store.theme === Themes.dark">header_border_bottom="2px solid #00b6a6"</span>
                                <span v-if="store.theme === Themes.dark">table_border="1px solid #00b6a6"</span>
                                <span v-else>table_border="1px solid #121212"</span>
                                <span v-if="store.theme === Themes.dark">cell_font_color="#b7d5d7"</span>
                                <span v-else>cell_font_color="#121212"</span>
                                <span style="display: flex">
                            :header="<span class="code__variable">header</span>"
                        </span>
                                <span style="display: flex">
                            :body="<span class="code__variable">body</span>"
                        </span>
                                <span style="display: flex">
                            row_custom_settings="<span class="code__variable">settings</span>"
                        </span>
                            </div>
                        </the-tag>
                    </template-tag>
                    <script-setup-tag>
                        <reactive-variable dataType="array" var-name="settings">
                            <the-long-object-in-code v-if="smallScreen && store.theme === Themes.dark" :object="{idx: 0, isSubTitle: true, textColor: '#ffb83c'}" />
                            <the-long-object-in-code v-if="smallScreen && store.theme === Themes.dark" :object="{idx: 4, isSubTitle: true, textColor: '#ffb83c'}" />
                            <the-long-object-in-code v-if="smallScreen && store.theme === Themes.light" :object="{idx: 0, isSubTitle: true, textColor: '#121212'}" />
                            <the-long-object-in-code v-if="smallScreen && store.theme === Themes.light" :object="{idx: 4, isSubTitle: true, textColor: '#121212'}" />


                            <the-object-in-code v-if="!smallScreen && store.theme === Themes.dark" :object="{idx: 0, isSubTitle: true, textColor: '#ffb83c'}" />
                            <the-object-in-code v-if="!smallScreen && store.theme === Themes.dark" :object="{idx: 4, isSubTitle: true, textColor: '#ffb83c'}" />
                            <the-object-in-code v-if="!smallScreen && store.theme === Themes.light" :object="{idx: 0, isSubTitle: true, textColor: '#121212'}" />
                            <the-object-in-code v-if="!smallScreen && store.theme === Themes.light" :object="{idx: 4, isSubTitle: true, textColor: '#121212'}" />
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
                </template>
            </example-container>
        </template>
    </description-sample>
</template>

<style scoped lang="scss">

</style>