<script setup>

import TagOneLine from "@/reus/TagOneLine.vue";
import TheTag from "@/reus/TheTag.vue";
</script>

<template>
    <div style="width: 100%;">
        <div class="component">
            <p class="component__title">Компонент TwInput позволяет создать input с опциональными prefix и postfix строками.
                Доступно горизонтальное и вертикальное размещение. Доступен слот для размещения информации от валидатора,
                или любой другой.</p>
            <div class="container">
                <div class="example_container">
                    <tw-input />
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
                    <tw-input type="number" height="22px" rounded width="260px" inputWidth="80px" prefix="Enter you weight:"
                              postfix="kg" prefix_color="orange" postfix_color="orange"/>
                </div>

                <div class="tag_wrapper">
                    <the-tag tag="tw-input" title="">
                        <div class="attrs_list">
                            <span>v-model="weight"</span>
                            <span>width="260px"</span>
                            <span>inputWidth="40px"</span>
                            <span>postfix_color="orange"</span>
                            <span>prefix_color="orange"</span>
                            <span>prefix="Enter you weight:"</span>
                            <span>postfix='kg'</span>
                            <span>rounded</span>
                            <span>height="22px"</span>
                            <span>type="number"</span>
                        </div>
                    </the-tag>
                </div>
            </div>
            <div class="container">
                <div class="example_container">
                    <tw-input vertical prefix="User name:" prefix_color="orange" bgc="transparent" bbColor="orange"
                              caretColor="white" inputTextCenter input_color="white"/>
                </div>

                <div class="tag_wrapper">
                    <the-tag tag="tw-input" title="">
                        <div class="attrs_list">
                            <span>v-model="username"</span>
                            <span>vertical</span>
                            <span>prefix="User name:"</span>
                            <span>prefix_color="orange"</span>
                            <span>bgc="transparent"</span>
                            <span>bbColor="orange"</span>
                            <span>caretColor="white"</span>
                            <span>inputTextCenter</span>
                            <span>input_color="white"</span>
                        </div>
                    </the-tag>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">

</style>