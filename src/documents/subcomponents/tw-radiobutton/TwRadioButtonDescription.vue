<script setup>
import TheTag from "@/reus/TheTag.vue";
import ExampleContainer from "@/reus/samples/ExampleContainer.vue";
import TemplateTag from "@/reus/TemplateTag.vue";
import DescriptionSample from "@/reus/samples/DescriptionSample.vue";
import ScriptSetupTag from "@/reus/ScriptSetupTag.vue";
import {reactive, ref, watch} from "vue";
import ReactiveVariable from "@/reus/ReactiveVariable.vue";
import ReactiveObject from "@/reus/ReactiveObject.vue";
import {useStore} from "@/store";
import {Themes} from "@/themes";
import TheLongObjectInCode from "@/reus/TheLongObjectInCode.vue";

const store = useStore()

const portion = ref(1)
const portion2 = ref('tea')
const variants = ref([1,2,3,4,5,6])
const variants2 = ref(['coffee', 'tea', 'juice'])

const styles = ref()
const settings = reactive({
    in_group: true,
    rounded: true
})




watch(() => store.theme, (value) => {
    if(value === Themes.dark) {
        styles.value = {
            item_bgc: '#01b075',
            item_height: '1.5rem',
            item_width: '70px',
            item_border: '1px solid #FFA500',
            hover_color: '#FFA500',
            active_color: 'lightgreen'
        }
    } else {
        styles.value = {
            item_bgc: 'white',
            item_height: '1.5rem',
            item_width: '70px',
            item_border: '1px solid #FFA500',
            hover_color: '#FFA500',
            active_color: 'lightgreen'
        }
    }
}, {immediate: true})
</script>

<template>
    <description-sample>
        <template #description>
            Компонент TwRadioButton позволяет осуществить выбор одного значения из нескольких вариантов.
        </template>
        <template #exampleAndCode>
            <example-container>
                <template #example>
                    <tw-radio-button v-model="portion" :variants="variants"/>
                </template>
                <template #code>
                    <template-tag>
                        <the-tag title="" tag="tw-radio-button">
                            <div class="attrs_list">
                                <span>v-model="<span class="code__variable">portion</span>"</span>
                                <span>variants="<span class="code__variable">variants</span>"</span>
                            </div>
                        </the-tag>
                    </template-tag>
                    <script-setup-tag>
                        <div style="display: flex; gap: 3px;">
                            <span style="color: #ac6700">const</span>
                            <span class="code__variable"> portion =</span>
                            <span class="code__tag"> ref(</span>
                            <span style="margin-left: -3px" class="code__attrs">1</span>
                            <span style="margin-left: -3px" class="code__tag">)</span>
                        </div>
                        <reactive-variable dataType="array" var-name="variants">1, 2, 3, 4, 5, 6</reactive-variable>
                    </script-setup-tag>
                </template>
            </example-container>
            <example-container>
                <template #example>
                    <tw-radio-button :settings="{in_group: true, rounded: true}" :styles="styles" v-model="portion2" :variants="variants2"/>
                </template>
                <template #code>
                    <template-tag>
                        <the-tag title="" tag="tw-radio-button">
                            <div class="attrs_list">
                                <span>v-model="<span class="code__variable">drink</span>"</span>
                                <span>variants="<span class="code__variable">variants</span>"</span>
                                <span>:styles="<span class="code__variable">styles</span>"</span>
                                <span>:settings="<span class="code__variable">settings</span>"</span>
                            </div>
                        </the-tag>
                    </template-tag>
                    <script-setup-tag>
                        <div style="display: flex; gap: 3px;">
                            <span style="color: #ac6700">const</span>
                            <span class="code__variable"> drink =</span>
                            <span class="code__tag"> ref(</span>
                            <span style="margin-left: -3px" class="code__attrs">'tea'</span>
                            <span style="margin-left: -3px" class="code__tag">)</span>
                        </div>
                        <reactive-variable dataType="array" var-name="variants">'coffee', 'tea', 'juice'</reactive-variable>
                        <reactive-object var-name="settings">
                            <the-long-object-in-code :object="settings" />
                        </reactive-object>
                        <reactive-object var-name="styles">
                            <the-long-object-in-code :object="styles" />
                        </reactive-object>
                    </script-setup-tag>
                </template>
            </example-container>
        </template>
    </description-sample>
</template>

<style scoped lang="scss">

</style>