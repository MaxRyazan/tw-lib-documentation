<script setup>
import TemplateTag from "@/reus/TemplateTag.vue";
import TheTag from "@/reus/TheTag.vue";
import ScriptSetupTag from "@/reus/ScriptSetupTag.vue";
import ReactiveVariable from "@/reus/ReactiveVariable.vue";
import DescriptionSample from "@/reus/samples/DescriptionSample.vue";
import ExampleContainer from "@/reus/samples/ExampleContainer.vue";
</script>

<template>
    <description-sample>
        <template #description>
            Компонент TwDropdown позволяет создать выплывающее вниз меню выбора значений.
        </template>
        <template #exampleAndCode>
            <example-container>
                <template #example>
                    <tw-dropdown :variants="[45, 55, 65]"/>
                </template>
                <template #code>
                    <template-tag>
                        <the-tag title="" tag="tw-dropdown">
                            <div class="attrs_list">
                                <span>v-model="<span class="code__variable">distance</span>"</span>
                                <span>variants="<span class="code__variable">variants</span>"</span>
                            </div>
                        </the-tag>
                    </template-tag>
                    <script-setup-tag>
                        <div style="display: flex; gap: 3px;">
                            <span style="color: #ac6700">const</span>
                            <span class="code__variable"> distance =</span>
                            <span class="code__tag"> ref(</span>
                            <span style="margin-left: 0;" class="tw_variable__sec_item">35</span>
                            <span  class="code__tag">)</span>
                        </div>
                        <reactive-variable dataType="array" var-name="variants">45, 55, 65</reactive-variable>
                    </script-setup-tag>
                </template>
            </example-container>
        </template>
    </description-sample>
</template>
