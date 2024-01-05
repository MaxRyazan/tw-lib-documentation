<script setup>

import TagOneLine from "@/reus/TagOneLine.vue";
import TheTag from "@/reus/TheTag.vue";
import {Themes} from "@/themes.ts";
import {useStore} from "@/store.ts";

const store = useStore()
</script>

<template>
    <div style="width: 100%;">
        <div class="component">
            <p :class="{'dark_text_shadow': store.theme === Themes.dark}" class="component__title">Компонент TwInput позволяет создать input с опциональными prefix и postfix строками.
                Доступно горизонтальное и вертикальное размещение. Доступен слот для размещения информации от валидатора,
                или любой другой.</p>
            <div class="container">
                <div class="example_container">
                    <tw-input style="margin-left: 8%;" />
                </div>

                <div class="tag_wrapper">
                    <tag-one-line tag="tw-input" title=""></tag-one-line>
                </div>
            </div>
            <div class="container">
                <div class="example_container">
                    <tw-input width="300px" prefix="User name:" prefix_color="white"/>
                </div>

                <div class="tag_wrapper">
                    <the-tag tag="tw-input" title="">
                        <div class="attrs_list">
                            <span>v-model="username"</span>
                            <span>width="300px"</span>
                            <span>prefix="User name:"</span>
                            <span>prefix_color="white"</span>
                        </div>
                    </the-tag>
                </div>
            </div>
            <div class="container">
                <div class="example_container">
                    <tw-input type="number" height="22px" text_center border_radius="12px" width="260px" input_width="80px" prefix="Enter you weight:"
                              postfix="kg" prefix_color="orange" postfix_color="orange"/>
                </div>

                <div class="tag_wrapper">
                    <the-tag tag="tw-input" title="">
                        <div class="attrs_list">
                            <span>v-model="weight"</span>
                            <span>width="260px"</span>
                            <span>input_width="40px"</span>
                            <span>prefix="Enter you weight:"</span>
                            <span>prefix_color="orange"</span>
                            <span>postfix='kg'</span>
                            <span>postfix_color="orange"</span>
                            <span>border_radius="12px"</span>
                            <span>text_center</span>
                            <span>height="22px"</span>
                            <span>type="number"</span>
                        </div>
                    </the-tag>
                </div>
            </div>
            <div class="container">
                <div class="example_container">
                    <tw-input style="margin-bottom: 20px;" vertical prefix="User name:" prefix_color="orange" bgc="transparent" border="none" border_bottom="1px solid orange"
                              caret_color="white" text_center input_text_color="white"/>
                </div>

                <div class="tag_wrapper">
                    <the-tag tag="tw-input" title="">
                        <div class="attrs_list">
                            <span>v-model="username"</span>
                            <span>vertical</span>
                            <span>prefix="User name:"</span>
                            <span>prefix_color="orange"</span>
                            <span>bgc="transparent"</span>
                            <span>border="none"</span>
                            <span>border_bottom="1px solid orange"</span>
                            <span>caret_color="white"</span>
                            <span>text_center</span>
                            <span>input_text_color="white"</span>
                        </div>
                    </the-tag>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">

</style>