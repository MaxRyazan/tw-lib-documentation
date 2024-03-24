<script setup lang="ts">
import {onMounted, ref} from "vue";
import DescriptionSample from "@/reus/samples/DescriptionSample.vue";
import ExampleContainer from "@/reus/samples/ExampleContainer.vue";
import TheTag from "@/reus/TheTag.vue";
import ScriptSetupTag from "@/reus/ScriptSetupTag.vue";
import TemplateTag from "@/reus/TemplateTag.vue";
import TheLongObjectInCode from "@/reus/TheLongObjectInCode.vue";
import ReactiveObject from "@/reus/ReactiveObject.vue";
import TheFunction from "@/reus/TheFunction.vue";
import OnMountedTemplate from "@/reus/OnMountedTemplate.vue";
import ColoredText from "@/reus/ColoredText.vue";

const totalPages = ref(30)

function changePage() {
}

const styles = {
    component_height: '30px',
    text_color: '#01b075',
    font_size: '12px',
    font_family: 'cursive',
    font_weight: '700',
    item_width: '24px',
    item_border: '1px solid #01b075',
    item_border_radius: '4px',

    buttons_border: '1px solid #01b075',
    buttons_border_radius: '4px',
    buttons_bgc: 'transparent',

    input_border: '1px solid #01b075',
    input_border_radius: '4px',
    dots_color: '#01b075'
}

const settings = {
    with_buttons: true,
    with_go_to: true,
    buttons_title: {prev: 'Prev', next: 'Next'},
    max_pages_around_current: 2,
    label: 'Page: '
}
</script>

<template>
    <description-sample>
        <template #description>
            Компонент позволяет управлять пагинацией на странице. Большая система настроек делает его крайне интересным
            для использования.
        </template>
        <template #exampleAndCode>
            <example-container>
                <template #example>
                    <div class="products">

                        <tw-paginator :styles="styles" :settings="settings" :total_pages="totalPages"
                                      @change-page="changePage">

                        </tw-paginator>
                    </div>
                </template>
                <template #code>
                    <template-tag>
                        <the-tag title="" tag="tw-paginator">
                            <div class="attrs_list">
                                <span>:styles="<span class="code__variable">styles</span>"</span>
                                <span>:settings="<span class="code__variable">settings</span>"</span>
                                <span>:total_pages="<span class="code__variable">totalPages</span>"</span>
                                <span>@change-page="<span class="code__variable">changePage</span>"</span>
                            </div>
                        </the-tag>
                    </template-tag>
                    <script-setup-tag>
                        <div style="display: flex; gap: 3px;">
                            <span style="color: #ac6700">const</span>
                            <span class="code__variable"> totalPages =</span>
                            <span class="code__tag"> ref(</span>
                            <span class="code__tag">)</span>
                        </div>
                        <div style="display: flex; gap: 3px;">
                            <span style="color: #ac6700">const</span>
                            <span class="code__variable"> limit =</span>
                            <span class="code__tag"> ref(</span>
                            <span class="code__variable">10</span>
                            <span class="code__tag">)</span>
                        </div>

                        <reactive-object var-name="styles">
                            <the-long-object-in-code :object="styles"/>
                        </reactive-object>
                        <reactive-object var-name="settings">
                            <the-long-object-in-code :object="settings"/>
                        </reactive-object>
                        <the-function async funcName="changePage" arg="newPage">
                            <div class="changePage_func">
                                <span>
                                    <span style="color: #FF8C00">const</span>
                                    <colored-text bl_wh>result =</colored-text>
                                    <span style="color: #FF8C00">await</span>
                                    <colored-text bl_wh>fetch(`</colored-text>
                                    <span style="color: #01b075">https://dummyjson.com /products?limit=${limit.value}&skip=${limit.value * newPage}`</span>
                                    <colored-text bl_wh>);</colored-text>
                                </span>
                                <span>
                                    <colored-text orange>let</colored-text>
                                    <colored-text bl_wh>resObject =</colored-text>
                                    <colored-text orange>await</colored-text>
                                    <colored-text bl_wh>result.json()</colored-text>
                                </span>
                                <span>
                                    <colored-text bl_wh m="0px 0 0 4px"> products.</colored-text>
                                    <colored-text violet m="0px">value</colored-text>
                                    <colored-text bl_wh>= resObject.products</colored-text>
                                </span>
                            </div>
                        </the-function>

                        <on-mounted-template async>
                            <div style="display: flex; flex-direction: column; padding-left: 15px; font-size: 12px;">
                                <span>
                                   <span style="color: #FF8C00">const</span>
                                   <colored-text bl_wh>result =</colored-text>
                                   <span style="color: #FF8C00">await</span>
                                   <colored-text bl_wh>fetch(`</colored-text>
                                   <span style="color: #01b075">https://dummyjson.com/products?limit=${limit.value}`</span>
                                   <colored-text bl_wh>);</colored-text>
                                </span>
                                <span>
                                    <colored-text orange m="0">let</colored-text>
                                    <colored-text bl_wh>resObject =</colored-text>
                                    <colored-text orange>await</colored-text>
                                    <colored-text bl_wh>result.json()</colored-text>
                                </span>
                                <span>
                                    <colored-text bl_wh m="0"> products.</colored-text>
                                    <colored-text violet m="0px">value</colored-text>
                                    <colored-text bl_wh>= resObject.products</colored-text>
                                </span>
                                <span>
                                    <colored-text bl_wh m="0"> totalPages.</colored-text>
                                    <colored-text violet m="0px">value</colored-text>
                                    <colored-text bl_wh>=
                                        <colored-text violet m="0">Math</colored-text>
                                        <colored-text bl_wh m="0">.</colored-text>
                                        <colored-text yellow m="0">ceil</colored-text>
                                        (resObject.total / limit.
                                        <colored-text violet m="0">value</colored-text>
                                        )</colored-text>
                                </span>
                            </div>
                        </on-mounted-template>
                    </script-setup-tag>
                </template>
            </example-container>
        </template>
    </description-sample>
</template>

<style scoped lang="scss">
.products {
  width: 80%;
  padding: 10px;
  color: white;
}

.changePage_func {
  font-size: 12px;
  padding-left: 15px;
  display: flex;
  flex-direction: column;
}
</style>