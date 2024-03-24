<script setup lang="ts">
import DescriptionSample from "@/reus/samples/DescriptionSample.vue";
import ExampleContainer from "@/reus/samples/ExampleContainer.vue";
import TheTag from "@/reus/TheTag.vue";
import TemplateTag from "@/reus/TemplateTag.vue";
import ColoredText from "@/reus/ColoredText.vue";
import ScriptSetupTag from "@/reus/ScriptSetupTag.vue";

const tooltipStyles = [
    {backgroundColor: '#01b075'},
    {color: 'black'},
    {borderRadius: '12px'},
]

</script>

<template>
    <description-sample>
        <template #description>
            Директива для создания кастомных всплывающих подсказок. Появляется спустя 800 мс после наведения.
        </template>
        <template #exampleAndCode>
            <example-container>
                <template #example>
                    <span class="v_tooltip_example" v-tooltip="'Кастомная подсказка'">Наведите!</span>
                </template>
                <template #code>
                    <template-tag>
                        <the-tag title="Наведите!" tag="span">
                            <div class="attrs_list">
                                <span>v-tooltip="<span class="code__variable">'Кастомная подсказка'</span>"</span>
                            </div>
                        </the-tag>
                    </template-tag>
                </template>
            </example-container>
            <example-container>
                <template #example>
                    <span class="v_tooltip_example" v-tooltip="{text: 'Со стилизацией', styles: tooltipStyles}">Наведите!</span>
                </template>
                <template #code>
                    <template-tag>
                        <the-tag title="Наведите!" tag="span">
                            <div class="attrs_list">
                                <span class="code__variable">
                                    <colored-text bl_wh m="0">v-tooltip="</colored-text>
                                    <colored-text bl_wh>{</colored-text>
                                    <colored-text m="0">text</colored-text>
                                    <colored-text m="0">:</colored-text>
                                    <colored-text green>'Со стилизацией'</colored-text>
                                    <colored-text m="0">, </colored-text>
                                    <colored-text m="0">styles</colored-text>
                                    <colored-text m="0">:</colored-text>
                                    <colored-text bl_wh>tooltipStyles</colored-text>
                                    <colored-text bl_wh>}"</colored-text>
                                </span>
                            </div>
                        </the-tag>
                    </template-tag>
                    <script-setup-tag>
                        <div>
                            <colored-text orange>const</colored-text>
                            <colored-text bl_wh>tooltipStyles= [</colored-text>
                            <div style="padding-left: 15px;">
                                <div>
                                    <colored-text bl_wh>{</colored-text>
                                    <colored-text m="0" violet>backgroundColor</colored-text>
                                    <colored-text bl_wh>:</colored-text>
                                    <colored-text m="0" green>'#01b075'</colored-text>
                                    <colored-text bl_wh>}</colored-text>
                                    <colored-text m="0" bl_wh>,</colored-text>
                                </div>
                                <div>
                                    <colored-text bl_wh>{</colored-text>
                                    <colored-text m="0" violet>color</colored-text>
                                    <colored-text bl_wh>:</colored-text>
                                    <colored-text m="0" green>'black'</colored-text>
                                    <colored-text bl_wh>}</colored-text>
                                    <colored-text m="0" bl_wh>,</colored-text>
                                </div>
                                <div>
                                    <colored-text bl_wh>{</colored-text>
                                    <colored-text m="0" violet>borderRadius</colored-text>
                                    <colored-text bl_wh>:</colored-text>
                                    <colored-text m="0" green>'12px'</colored-text>
                                    <colored-text bl_wh>}</colored-text>
                                </div>
                            </div>
                            <colored-text bl_wh>]</colored-text>
                        </div>
                    </script-setup-tag>
                </template>
            </example-container>
        </template>
    </description-sample>
</template>

<style scoped lang="scss">
.v_tooltip_example {
  color: var(--tw_white_black);
}
</style>