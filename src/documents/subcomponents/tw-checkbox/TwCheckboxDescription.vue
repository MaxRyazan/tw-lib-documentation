<script setup>

import ScriptSetupTag from "@/reus/ScriptSetupTag.vue";
import TheTag from "@/reus/TheTag.vue";
import TemplateTag from "@/reus/TemplateTag.vue";
import ExampleContainer from "@/reus/samples/ExampleContainer.vue";
import DescriptionSample from "@/reus/samples/DescriptionSample.vue";
import {ref} from "vue";
import {useStore} from "@/store";
import {Themes} from "@/themes";

const agreement = ref(false)
const agreement2 = ref(true)
const store = useStore()
</script>

<template>
    <description-sample>
        <template #description>
            TwCheckbox создаёт компонент с возможностью обработки ошибки, если чекбокс не выбран.
        </template>
        <template #exampleAndCode>
            <example-container>
                <template #example>
                    <tw-checkbox v-model="agreement" />
                </template>
                <template #code>
                    <template-tag>
                        <the-tag title="" tag="tw-checkbox">
                            <div class="attrs_list">
                                <span>v-model="<span class="code__variable">agreement</span>"</span>
                            </div>
                        </the-tag>
                    </template-tag>
                    <script-setup-tag>
                        <div style="display: flex; gap: 3px;">
                            <span style="color: #ac6700">const</span>
                            <span class="code__variable"> agreement =</span>
                            <span class="code__tag"> ref(</span>
                            <span class="code__variable">false</span>
                            <span  class="code__tag">)</span>
                        </div>
                    </script-setup-tag>
                </template>
            </example-container>
            <example-container>
                <template #example>
                    <tw-checkbox v-model="agreement2"
                                 border="2px solid orange"
                                 bgc="black"
                                 checked_color="orange"
                                 size="22px"
                                 :invalid="!agreement2"
                                 label="Вы согласны с условиями?"
                                 :color="store.theme === Themes.dark ? 'white' : '#121212'"
                    />
                </template>
                <template #code>
                    <template-tag>
                        <the-tag title="" tag="tw-checkbox">
                            <div class="attrs_list">
                                <span>v-model="<span class="code__variable">agreement</span>"</span>
                                <span>border="<span class="code__variable">2px solid orange</span>"</span>
                                <span>bgc="<span class="code__variable">black</span>"</span>
                                <span>checked_color="<span class="code__variable">orange</span>"</span>
                                <span>size="<span class="code__variable">22px</span>"</span>
                                <span>:invalid="<span class="code__variable">!agreement</span>"</span>
                                <span>label="<span class="code__variable">Вы согласны с условиями?</span>"</span>
                                <span v-if="store.theme === Themes.dark">color="<span class="code__variable">white</span>"</span>
                                <span v-else>color="<span class="code__variable">#121212</span>"</span>
                            </div>
                        </the-tag>
                    </template-tag>
                    <script-setup-tag>
                        <div style="display: flex; gap: 3px;">
                            <span style="color: #ac6700">const</span>
                            <span class="code__variable"> agreement =</span>
                            <span class="code__tag"> ref(</span>
                            <span class="code__variable">true</span>
                            <span  class="code__tag">)</span>
                        </div>
                    </script-setup-tag>
                </template>
            </example-container>
        </template>
    </description-sample>
</template>

<style scoped lang="scss">

</style>