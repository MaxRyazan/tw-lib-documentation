<script setup>
import TemplateTag from "@/reus/TemplateTag.vue";
import TheTag from "@/reus/TheTag.vue";
import ScriptSetupTag from "@/reus/ScriptSetupTag.vue";
import DescriptionSample from "@/reus/samples/DescriptionSample.vue";
import ExampleContainer from "@/reus/samples/ExampleContainer.vue";
import {reactive, ref} from "vue";
import ArrayOfObjects from "@/reus/ArrayOfObjects.vue";

const unit = ref()
const unit2 = ref()
const variants = reactive([
    {american: ['inches', 'hand', 'feet', 'yard', 'mile']},
    {european: ['millimeter', 'centimetre', 'decimeter', 'metre', 'kilometer']},
    {japanese: ['shaku ', 'ken', 'tō', 'ri']}
])
</script>

<template>
    <description-sample>
        <template #description>
            Компонент TwMultiDropdown позволяет создать выплывающее вниз меню выбора значений со внутренней вложенностью глубиной 1.
        </template>
        <template #exampleAndCode>
            <example-container>
                <template #example>
                    <tw-multi-dropdown v-model="unit" :variants="variants"/>
                </template>
                <template #code>
                    <template-tag>
                        <the-tag title="" tag="tw-multi-dropdown">
                            <div class="attrs_list">
                                <span>v-model="<span class="code__variable">unit</span>"</span>
                                <span>variants="<span class="code__variable">variants</span>"</span>
                            </div>
                        </the-tag>
                    </template-tag>
                    <script-setup-tag>
                        <div style="display: flex; gap: 3px;">
                            <span style="color: #ac6700">const</span>
                            <span class="code__variable"> unit =</span>
                            <span class="code__tag"> ref(</span>
                            <span  class="code__tag">)</span>
                        </div>
                        <array-of-objects const-name="variants" :array="variants"></array-of-objects>
                    </script-setup-tag>
                </template>
            </example-container>
            <example-container>
                <template #example>
                    <tw-multi-dropdown v-model="unit2"
                                       :variants="variants"
                                       orientation_left
                                       bgc="#121212"
                                       color="white"
                                       arrow_color="white"
                                       hover_color="orange"
                                       horizontal_padding="10px"
                    />
                </template>
                <template #code>
                    <template-tag>
                        <the-tag title="" tag="tw-multi-dropdown">
                            <div class="attrs_list">
                                <span>v-model="<span class="code__variable">unit</span>"</span>
                                <span>variants="<span class="code__variable">variants</span>"</span>
                                <span>orientation_left</span>
                                <span>bgc="<span class="code__variable">#121212</span>"</span>
                                <span>color="<span class="code__variable">white</span>"</span>
                                <span>arrow_color="<span class="code__variable">white</span>"</span>
                                <span>hover_color="<span class="code__variable">orange</span>"</span>
                                <span>horizontal_padding="<span class="code__variable">10px</span>"</span>
                            </div>
                        </the-tag>
                    </template-tag>
                    <script-setup-tag>
                        <div style="display: flex; gap: 3px;">
                            <span style="color: #ac6700">const</span>
                            <span class="code__variable"> unit =</span>
                            <span class="code__tag"> ref(</span>
                            <span  class="code__tag">)</span>
                        </div>
                        <array-of-objects const-name="variants" :array="variants"></array-of-objects>
                    </script-setup-tag>
                </template>
            </example-container>
        </template>
    </description-sample>
</template>
