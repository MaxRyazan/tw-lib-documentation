<script setup>
import {Themes} from "@/themes.ts";
import {useStore} from "@/store.ts";
import TemplateTag from "@/reus/TemplateTag.vue";
import TheTag from "@/reus/TheTag.vue";
import ScriptSetupTag from "@/reus/ScriptSetupTag.vue";
import ReactiveVariable from "@/reus/ReactiveVariable.vue";

const store = useStore()
</script>

<template>
<div>
    <div class="component">
        <p :class="{'dark_text_shadow': store.theme === Themes.dark}" class="component__title">
            Компонент TwDropdown позволяет создать выплывающее вниз меню выбора значений.
        </p>
        <div class="container">
            <div class="example_container">
                <tw-dropdown :variants="[45, 55, 65]"/>
            </div>
            <div class="tag_wrapper">
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
            </div>
        </div>

    </div>
</div>
</template>

<style scoped lang="scss">

</style>