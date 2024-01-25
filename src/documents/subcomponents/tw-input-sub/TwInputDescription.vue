<script setup>

import TagOneLine from "@/reus/TagOneLine.vue";
import TheTag from "@/reus/TheTag.vue";
import {Themes} from "@/themes.ts";
import {useStore} from "@/store.ts";
import DescriptionSample from "@/reus/samples/DescriptionSample.vue";
import ExampleContainer from "@/reus/samples/ExampleContainer.vue";

const store = useStore()
</script>

<template>
    <description-sample>
        <template #description>
            Компонент TwInput позволяет создать input с опциональными prefix и postfix строками.
            Доступно горизонтальное и вертикальное размещение. Доступен слот для размещения информации от валидатора,
            или любой другой.
        </template>
        <template #exampleAndCode>
            <example-container>
                <template #example>
                    <tw-input style="margin-left: 8%;" />
                </template>
                <template #code>
                    <tag-one-line tag="tw-input" title=""></tag-one-line>
                </template>
            </example-container>
            <example-container>
                <template #example>
                    <tw-input width="300px" prefix="User name:" :prefix_color="store.theme === Themes.dark ? 'white': '#121212'"/>
                </template>
                <template #code>
                    <the-tag tag="tw-input" title="">
                        <div class="attrs_list">
                            <span>v-model="username"</span>
                            <span>width="300px"</span>
                            <span>prefix="User name:"</span>
                            <span v-if="store.theme ===Themes.dark">prefix_color="white"</span>
                            <span v-else>prefix_color="#121212"</span>
                        </div>
                    </the-tag>
                </template>
            </example-container>
            <example-container>
                <template #example>
                    <tw-input type="number" height="22px" text_center border_radius="12px" width="260px" input_width="80px" prefix="Enter you weight:"
                              postfix="kg" prefix_color="orange" postfix_color="orange"/>
                </template>
                <template #code>
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
                </template>
            </example-container>
            <example-container>
                <template #example>
                    <tw-input style="margin-bottom: 20px;" vertical prefix="User name:" prefix_color="orange" bgc="transparent" border="none" border_bottom="1px solid orange"
                              :caret_color="store.theme ===Themes.dark ? 'white': '#121212'" text_center :input_text_color="store.theme ===Themes.dark ? 'white': '#121212'"/>
                </template>
                <template #code>
                    <the-tag tag="tw-input" title="">
                        <div class="attrs_list">
                            <span>v-model="username"</span>
                            <span>vertical</span>
                            <span>prefix="User name:"</span>
                            <span>prefix_color="orange"</span>
                            <span>bgc="transparent"</span>
                            <span>border="none"</span>
                            <span>border_bottom="1px solid orange"</span>
                            <span v-if="store.theme ===Themes.dark">caret_color="white"</span>
                            <span v-else>caret_color="#121212"</span>
                            <span>text_center</span>
                            <span v-if="store.theme ===Themes.dark">input_text_color="white"</span>
                            <span v-else>input_text_color="#121212"</span>
                        </div>
                    </the-tag>
                </template>
            </example-container>
        </template>
    </description-sample>
</template>

<style scoped lang="scss">

</style>