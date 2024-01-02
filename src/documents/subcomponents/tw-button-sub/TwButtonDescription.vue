<script setup lang="ts">

import TagOneLine from "@/reus/TagOneLine.vue";
import TheTag from "@/reus/TheTag.vue";
import {onMounted, ref, Ref} from "vue";
import {ScreenSizes} from "@/ScreenSizes.js";
import {getScreenSize} from "@/use/getScreenSize";

const screenSize: Ref<number> = ref(ScreenSizes.s1900)
onMounted(() => {
    screenSize.value = getScreenSize()
    window.addEventListener('resize', () => {
        screenSize.value = getScreenSize()
    })
})
</script>

<template>
    <div style="width: 100%;">
        <p class="component__title">Компонент кнопки. Позволяет создавать как кастомные кнопки, так и использовать
            готовые шаблоны.</p>
        <div class="container">
            <div class="btn_ex_item">
                <div class="btn_ex_item_wrapper">
                    <tw-button success>Success</tw-button>
                    <tw-button warning>Warning</tw-button>
                </div>
                <div class="btn_ex_item_wrapper">
                    <tw-button error>Error</tw-button>
                    <tw-button>Default</tw-button>
                </div>
            </div>
            <div class="tag_wrapper">
                <tag-one-line v-if="screenSize >= ScreenSizes.s1024" title="Success" tag="tw-button">
                    <div class="attrs_list">
                        <span>success</span>
                    </div>
                </tag-one-line>
                <the-tag v-else title="Success" tag="tw-button">
                    <div class="attrs_list">
                        <span>success</span>
                    </div>
                </the-tag>
                <tag-one-line v-if="screenSize >= ScreenSizes.s1024" title="Warning" tag="tw-button">
                    <div class="attrs_list">
                        <span>warning</span>
                    </div>
                </tag-one-line>
                <the-tag v-else title="Warning" tag="tw-button">
                    <div class="attrs_list">
                        <span>warning</span>
                    </div>
                </the-tag>
                <tag-one-line v-if="screenSize >= ScreenSizes.s1024" title="Error" tag="tw-button">
                    <div class="attrs_list">
                        <span>error</span>
                    </div>
                </tag-one-line>
                <the-tag v-else title="Error" tag="tw-button">
                    <div class="attrs_list">
                        <span>error</span>
                    </div>
                </the-tag>
                <tag-one-line v-if="screenSize >= ScreenSizes.s1024" title="Default" tag="tw-button"></tag-one-line>
                <the-tag v-else title="Default" tag="tw-button"></the-tag>
            </div>
        </div>
        <div class="container">
            <div class="btn_ex_item">
                <div class="btn_ex_item_wrapper">
                    <tw-button prime_icon="pi-check" success>Success</tw-button>
                    <tw-button prime_icon="pi-check" warning>Warning</tw-button>
                </div>
                <div class="btn_ex_item_wrapper">
                    <tw-button prime_icon="pi-check" error>Error</tw-button>
                    <tw-button prime_icon="pi-check">Default</tw-button>
                </div>
            </div>
            <div class="tag_wrapper">
                <tag-one-line v-if="screenSize >= ScreenSizes.s1150" title="Success" tag="tw-button">
                    <div class="attrs_list">
                        <span>prime_icon="pi-check" success</span>
                    </div>
                </tag-one-line>
                <the-tag v-else title="Success" tag="tw-button">
                    <div class="attrs_list">
                        <span>success</span>
                        <span>prime_icon="pi-check"</span>
                    </div>
                </the-tag>
                <tag-one-line v-if="screenSize >= ScreenSizes.s1150" title="Warning" tag="tw-button">
                    <div class="attrs_list">
                        <span>prime_icon="pi-check" warning</span>
                    </div>
                </tag-one-line>
                <the-tag v-else title="Warning" tag="tw-button">
                    <div class="attrs_list">
                        <span>warning</span>
                        <span>prime_icon="pi-check"</span>
                    </div>
                </the-tag>
                <tag-one-line v-if="screenSize >= ScreenSizes.s1150" title="Error" tag="tw-button">
                    <div class="attrs_list">
                        <span>prime_icon="pi-check" error</span>
                    </div>
                </tag-one-line>
                <the-tag v-else title="Error" tag="tw-button">
                    <div class="attrs_list">
                        <span>error</span>
                        <span>prime_icon="pi-check"</span>
                    </div>
                </the-tag>
                <tag-one-line v-if="screenSize >= ScreenSizes.s1150" title="Default" tag="tw-button">
                    <div class="attrs_list">
                        <span>prime_icon="pi-check"</span>
                    </div>
                </tag-one-line>
                <the-tag v-else title="Default" tag="tw-button">
                    <div class="attrs_list">
                        <span>prime_icon="pi-check"</span>
                    </div>
                </the-tag>
            </div>
        </div>
        <div class="container">
            <div class="btn_ex_item">
                <div class="btn_ex_item_wrapper">
                    <tw-button rounded success>Success</tw-button>
                    <tw-button rounded warning>Warning</tw-button>
                </div>
                <div class="btn_ex_item_wrapper">
                    <tw-button rounded error>Error</tw-button>
                    <tw-button rounded>Default</tw-button>
                </div>
            </div>


            <div class="tag_wrapper">
                <tag-one-line v-if="screenSize >= ScreenSizes.s1150" title="Success" tag="tw-button">
                    <div class="attrs_list">
                        <span>rounded success</span>
                    </div>
                </tag-one-line>
                <the-tag v-else title="Success" tag="tw-button">
                    <div class="attrs_list">
                        <span>success</span>
                        <span>rounded</span>
                    </div>
                </the-tag>
                <tag-one-line v-if="screenSize >= ScreenSizes.s1150" title="Warning" tag="tw-button">
                    <div class="attrs_list">
                        <span>rounded warning</span>
                    </div>
                </tag-one-line>
                <the-tag v-else title="Warning" tag="tw-button">
                    <div class="attrs_list">
                        <span>warning</span>
                        <span>rounded</span>
                    </div>
                </the-tag>
                <tag-one-line v-if="screenSize >= ScreenSizes.s1150" title="Error" tag="tw-button">
                    <div class="attrs_list">
                        <span>rounded error</span>
                    </div>
                </tag-one-line>
                <the-tag v-else title="Error" tag="tw-button">
                    <div class="attrs_list">
                        <span>error</span>
                        <span>rounded</span>
                    </div>
                </the-tag>
                <tag-one-line v-if="screenSize >= ScreenSizes.s1150" title="Default" tag="tw-button">
                    <div class="attrs_list">
                        <span>rounded</span>
                    </div>
                </tag-one-line>
                <the-tag v-else title="Default" tag="tw-button">
                    <div class="attrs_list">
                        <span>rounded</span>
                    </div>
                </the-tag>
            </div>
        </div>
        <div class="container">
            <div class="btn_ex_item">
                <div class="btn_ex_item_wrapper">
                    <tw-button prime_icon="pi-check" rounded success>Success</tw-button>
                    <tw-button prime_icon="pi-check" rounded warning>Warning</tw-button>
                </div>
                <div class="btn_ex_item_wrapper">
                    <tw-button prime_icon="pi-check" rounded error>Error</tw-button>
                    <tw-button prime_icon="pi-check" rounded>Default</tw-button>
                </div>
            </div>
            <div class="tag_wrapper">
                <tag-one-line v-if="screenSize >= ScreenSizes.s1440" title="Success" tag="tw-button">
                    <div class="attrs_list">
                        <span>prime_icon="pi-check" rounded success</span>
                    </div>
                </tag-one-line>
                <the-tag v-else title="Success" tag="tw-button">
                    <div class="attrs_list">
                        <span>success</span>
                        <span>rounded</span>
                        <span>prime_icon="pi-check"</span>
                    </div>
                </the-tag>
                <tag-one-line v-if="screenSize >= ScreenSizes.s1440" title="Warning" tag="tw-button">
                    <div class="attrs_list">
                        <span>prime_icon="pi-check" rounded warning</span>
                    </div>
                </tag-one-line>
                <the-tag v-else title="Warning" tag="tw-button">
                    <div class="attrs_list">
                        <span>warning</span>
                        <span>rounded</span>
                        <span>prime_icon="pi-check"</span>
                    </div>
                </the-tag>
                <tag-one-line v-if="screenSize >= ScreenSizes.s1440" title="Error" tag="tw-button">
                    <div class="attrs_list">
                        <span>prime_icon="pi-check" rounded error</span>
                    </div>
                </tag-one-line>
                <the-tag v-else title="Error" tag="tw-button">
                    <div class="attrs_list">
                        <span>error</span>
                        <span>rounded</span>
                        <span>prime_icon="pi-check"</span>
                    </div>
                </the-tag>
                <tag-one-line v-if="screenSize >= ScreenSizes.s1440" title="Default" tag="tw-button">
                    <div class="attrs_list">
                        <span>prime_icon="pi-check" rounded</span>
                    </div>
                </tag-one-line>
                <the-tag v-else title="Default" tag="tw-button">
                    <div class="attrs_list">
                        <span>rounded</span>
                        <span>prime_icon="pi-check"</span>
                    </div>
                </the-tag>
            </div>
        </div>
        <div class="container">
            <div class="btn_ex_item">
                <div class="btn_ex_item_wrapper">
                    <tw-button outline success>Success</tw-button>
                    <tw-button outline warning>Warning</tw-button>
                </div>
                <div class="btn_ex_item_wrapper">
                    <tw-button outline error>Error</tw-button>
                    <tw-button outline>Default</tw-button>
                </div>
            </div>
            <div class="tag_wrapper">
                <tag-one-line v-if="screenSize >= ScreenSizes.s1024" title="Success" tag="tw-button">
                    <div class="attrs_list">
                        <span>outline success</span>
                    </div>
                </tag-one-line>
                <the-tag v-else title="Success" tag="tw-button">
                    <div class="attrs_list">
                        <span>success</span>
                        <span>outline</span>
                    </div>
                </the-tag>
                <tag-one-line v-if="screenSize >= ScreenSizes.s1024" title="Warning" tag="tw-button">
                    <div class="attrs_list">
                        <span>outline warning</span>
                    </div>
                </tag-one-line>
                <the-tag v-else title="Warning" tag="tw-button">
                    <div class="attrs_list">
                        <span>warning</span>
                        <span>outline</span>
                    </div>
                </the-tag>
                <tag-one-line v-if="screenSize >= ScreenSizes.s1024" title="Error" tag="tw-button">
                    <div class="attrs_list">
                        <span>outline error</span>
                    </div>
                </tag-one-line>
                <the-tag v-else title="Error" tag="tw-button">
                    <div class="attrs_list">
                        <span>error</span>
                        <span>outline</span>
                    </div>
                </the-tag>
                <tag-one-line v-if="screenSize >= ScreenSizes.s1024" title="Default" tag="tw-button">
                    <div class="attrs_list">
                        <span>outline</span>
                    </div>
                </tag-one-line>
                <the-tag v-else title="Default" tag="tw-button">
                    <div class="attrs_list">
                        <span>outline</span>
                    </div>
                </the-tag>
            </div>
        </div>
        <div class="container">
            <div class="btn_ex_item">
                <div class="btn_ex_item_wrapper">
                    <tw-button rounded outline success>Success</tw-button>
                    <tw-button rounded outline warning>Warning</tw-button>
                </div>
                <div class="btn_ex_item_wrapper">
                    <tw-button rounded outline error>Error</tw-button>
                    <tw-button rounded outline>Default</tw-button>
                </div>
            </div>
            <div class="tag_wrapper">
                <tag-one-line v-if="screenSize >= ScreenSizes.s1150" title="Success" tag="tw-button">
                    <div class="attrs_list">
                        <span>rounded outline success</span>
                    </div>
                </tag-one-line>
                <the-tag v-else title="Success" tag="tw-button">
                    <div class="attrs_list">
                        <span>success</span>
                        <span>rounded</span>
                        <span>outline</span>
                    </div>
                </the-tag>
                <tag-one-line v-if="screenSize >= ScreenSizes.s1150" title="Warning" tag="tw-button">
                    <div class="attrs_list">
                        <span>rounded outline warning</span>
                    </div>
                </tag-one-line>
                <the-tag v-else title="Warning" tag="tw-button">
                    <div class="attrs_list">
                        <span>warning</span>
                        <span>rounded</span>
                        <span>outline</span>
                    </div>
                </the-tag>
                <tag-one-line v-if="screenSize >= ScreenSizes.s1150" title="Error" tag="tw-button">
                    <div class="attrs_list">
                        <span>rounded outline error</span>
                    </div>
                </tag-one-line>
                <the-tag v-else title="Error" tag="tw-button">
                    <div class="attrs_list">
                        <span>error</span>
                        <span>rounded</span>
                        <span>outline</span>
                    </div>
                </the-tag>
                <tag-one-line v-if="screenSize >= ScreenSizes.s1150" title="Default" tag="tw-button">
                    <div class="attrs_list">
                        <span>rounded outline color_gamma='violet'</span>
                    </div>
                </tag-one-line>
                <the-tag v-else title="Default" tag="tw-button">
                    <div class="attrs_list">
                        <span>color_gamma='violet'</span>
                        <span>rounded</span>
                        <span>outline</span>
                    </div>
                </the-tag>
            </div>
        </div>
        <div class="container">
            <div class="btn_ex_item">
                <div class="btn_ex_item_wrapper">
                    <tw-button prime_icon="pi-check" rounded outline success>Success</tw-button>
                    <tw-button prime_icon="pi-check" rounded outline warning>Warning</tw-button>
                </div>
                <div class="btn_ex_item_wrapper">
                    <tw-button prime_icon="pi-check" rounded outline error>Error</tw-button>
                    <tw-button prime_icon="pi-check" rounded outline>Default</tw-button>
                </div>
            </div>
            <div class="tag_wrapper">
                <tag-one-line v-if="screenSize >= ScreenSizes.s1440" title="Success" tag="tw-button">
                    <div class="attrs_list">
                        <span>prime_icon="pi-check" rounded outline success</span>
                    </div>
                </tag-one-line>
                <the-tag v-else title="Success" tag="tw-button">
                    <div class="attrs_list">
                        <span>success</span>
                        <span>rounded</span>
                        <span>outline</span>
                        <span>prime_icon="pi-check"</span>
                    </div>
                </the-tag>
                <tag-one-line v-if="screenSize >= ScreenSizes.s1440" title="Warning" tag="tw-button">
                    <div class="attrs_list">
                        <span>prime_icon="pi-check" rounded outline warning</span>
                    </div>
                </tag-one-line>
                <the-tag v-else title="Warning" tag="tw-button">
                    <div class="attrs_list">
                        <span>warning</span>
                        <span>rounded</span>
                        <span>outline</span>
                        <span>prime_icon="pi-check"</span>
                    </div>
                </the-tag>
                <tag-one-line v-if="screenSize >= ScreenSizes.s1440" title="Error" tag="tw-button">
                    <div class="attrs_list">
                        <span>prime_icon="pi-check" rounded outline error</span>
                    </div>
                </tag-one-line>
                <the-tag v-else title="Error" tag="tw-button">
                    <div class="attrs_list">
                        <span>error</span>
                        <span>rounded</span>
                        <span>outline</span>
                        <span>prime_icon="pi-check"</span>
                    </div>
                </the-tag>
                <tag-one-line v-if="screenSize >= ScreenSizes.s1440" title="Default" tag="tw-button">
                    <div class="attrs_list">
                        <span>prime_icon="pi-check" rounded outline color_gamma='violet'</span>
                    </div>
                </tag-one-line>
                <the-tag v-else title="Default" tag="tw-button">
                    <div class="attrs_list">
                        <span>color_gamma='violet'</span>
                        <span>rounded</span>
                        <span>outline</span>
                        <span>prime_icon="pi-check"</span>
                    </div>
                </the-tag>

            </div>
        </div>
        <div class="container">
            <div class="btn_ex_item">
                <div class="btn_ex_item_wrapper">
                    <tw-button round success>да</tw-button>
                    <tw-button round warning>да</tw-button>
                </div>
                <div class="btn_ex_item_wrapper">
                    <tw-button round error>да</tw-button>
                    <tw-button round>да</tw-button>
                </div>
            </div>
            <div class="tag_wrapper">
                <tag-one-line v-if="screenSize >= ScreenSizes.s1024" title="да" tag="tw-button">
                    <div class="attrs_list">
                        <span>round success</span>
                    </div>
                </tag-one-line>
                <the-tag v-else title="Подтвердить" tag="tw-button">
                    <div class="attrs_list">
                        <span>success</span>
                        <span>round</span>
                    </div>
                </the-tag>
                <tag-one-line v-if="screenSize >= ScreenSizes.s1024" title="да" tag="tw-button">
                    <div class="attrs_list">
                        <span>round warning</span>
                    </div>
                </tag-one-line>
                <the-tag v-else title="Подтвердить" tag="tw-button">
                    <div class="attrs_list">
                        <span>warning</span>
                        <span>round</span>
                    </div>
                </the-tag>
                <tag-one-line v-if="screenSize >= ScreenSizes.s1024" title="да" tag="tw-button">
                    <div class="attrs_list">
                        <span>round error</span>
                    </div>
                </tag-one-line>
                <the-tag v-else title="Подтвердить" tag="tw-button">
                    <div class="attrs_list">
                        <span>error</span>
                        <span>round</span>
                    </div>
                </the-tag>
                <tag-one-line v-if="screenSize >= ScreenSizes.s1024" title="да" tag="tw-button">
                    <div class="attrs_list">
                        <span>round color_gamma='violet'</span>
                    </div>
                </tag-one-line>
                <the-tag v-else title="Подтвердить" tag="tw-button">
                    <div class="attrs_list">
                        <span>color_gamma='violet'</span>
                        <span>round</span>
                    </div>
                </the-tag>
            </div>
        </div>
        <div class="container">
            <div class="btn_ex_item">
                <div class="btn_ex_item_wrapper">
                    <tw-button outline round success>нет</tw-button>
                    <tw-button outline round warning>нет</tw-button>
                </div>
                <div class="btn_ex_item_wrapper">
                    <tw-button outline round error>нет</tw-button>
                    <tw-button outline round>нет</tw-button>
                </div>
            </div>
            <div class="tag_wrapper">
                <tag-one-line v-if="screenSize >= ScreenSizes.s1024" title="нет" tag="tw-button">
                    <div class="attrs_list">
                        <span>outline round success</span>
                    </div>
                </tag-one-line>
                <the-tag v-else title="Подтвердить" tag="tw-button">
                    <div class="attrs_list">
                        <span>success</span>
                        <span>round</span>
                        <span>outline</span>
                    </div>
                </the-tag>
                <tag-one-line v-if="screenSize >= ScreenSizes.s1024" title="нет" tag="tw-button">
                    <div class="attrs_list">
                        <span>outline round warning</span>
                    </div>
                </tag-one-line>
                <the-tag v-else title="Подтвердить" tag="tw-button">
                    <div class="attrs_list">
                        <span>warning</span>
                        <span>round</span>
                        <span>outline</span>
                    </div>
                </the-tag>
                <tag-one-line v-if="screenSize >= ScreenSizes.s1024" title="нет" tag="tw-button">
                    <div class="attrs_list">
                        <span>outline round error</span>
                    </div>
                </tag-one-line>
                <the-tag v-else title="Подтвердить" tag="tw-button">
                    <div class="attrs_list">
                        <span>error</span>
                        <span>round</span>
                        <span>outline</span>
                    </div>
                </the-tag>
                <tag-one-line v-if="screenSize >= ScreenSizes.s1024" title="нет" tag="tw-button">
                    <div class="attrs_list">
                        <span>outline round color_gamma='violet'</span>
                    </div>
                </tag-one-line>
                <the-tag v-else title="Подтвердить" tag="tw-button">
                    <div class="attrs_list">
                        <span> color_gamma='violet'</span>
                        <span>round</span>
                        <span>outline</span>
                    </div>
                </the-tag>
            </div>
        </div>
        <div class="container">
            <div class="btn_ex_item">
                <div class="btn_ex_item_wrapper">
                    <tw-button prime_icon="pi-check" round success></tw-button>
                    <tw-button prime_icon="pi-check" round warning></tw-button>
                </div>
                <div class="btn_ex_item_wrapper">
                    <tw-button prime_icon="pi-check" round error></tw-button>
                    <tw-button prime_icon="pi-check" round></tw-button>
                </div>
            </div>
            <div class="tag_wrapper">
                <tag-one-line v-if="screenSize >= ScreenSizes.s1280" title="Подтвердить" tag="tw-button">
                    <div class="attrs_list">
                        <span>prime_icon="pi-check" round success</span>
                    </div>
                </tag-one-line>
                <the-tag v-else title="Подтвердить" tag="tw-button">
                    <div class="attrs_list">
                        <span>prime_icon="pi-check"</span>
                        <span>round</span>
                        <span>success</span>
                    </div>
                </the-tag>
                <tag-one-line v-if="screenSize >= ScreenSizes.s1280" title="Подтвердить" tag="tw-button">
                    <div class="attrs_list">
                        <span>prime_icon="pi-check" round warning</span>
                    </div>
                </tag-one-line>
                <the-tag v-else title="Подтвердить" tag="tw-button">
                    <div class="attrs_list">
                        <span>prime_icon="pi-check"</span>
                        <span>round</span>
                        <span>warning</span>
                    </div>
                </the-tag>
                <tag-one-line v-if="screenSize >= ScreenSizes.s1280" title="Подтвердить" tag="tw-button">
                    <div class="attrs_list">
                        <span>prime_icon="pi-check" round error</span>
                    </div>
                </tag-one-line>
                <the-tag v-else title="Подтвердить" tag="tw-button">
                    <div class="attrs_list">
                        <span>prime_icon="pi-check"</span>
                        <span>round</span>
                        <span>error</span>
                    </div>
                </the-tag>
                <tag-one-line v-if="screenSize >= ScreenSizes.s1280" title="Подтвердить" tag="tw-button">
                    <div class="attrs_list">
                        <span>prime_icon="pi-check" round color_gamma='violet'</span>
                    </div>
                </tag-one-line>
                <the-tag v-else title="Подтвердить" tag="tw-button">
                    <div class="attrs_list">
                        <span>prime_icon="pi-check"</span>
                        <span>round</span>
                        <span>color_gamma='violet'</span>
                    </div>
                </the-tag>
            </div>
        </div>
        <div class="container">
            <div class="btn_ex_item">
                <div class="btn_ex_item_wrapper">
                    <tw-button outline prime_icon="pi-download" round success></tw-button>
                    <tw-button outline prime_icon="pi-download" round warning></tw-button>
                </div>
                <div class="btn_ex_item_wrapper">
                    <tw-button outline prime_icon="pi-download" round error></tw-button>
                    <tw-button outline prime_icon="pi-download" round></tw-button>
                </div>
            </div>
            <div class="tag_wrapper">
                <tag-one-line v-if="screenSize >= ScreenSizes.s1440" title="Подтвердить" tag="tw-button">
                    <div class="attrs_list">
                        <span>outline prime_icon="pi-download" round success</span>
                    </div>
                </tag-one-line>
                <the-tag v-else title="Подтвердить" tag="tw-button">
                    <div class="attrs_list">
                        <span>prime_icon="pi-download"</span>
                        <span>round</span>
                        <span>outline</span>
                        <span>success</span>
                    </div>
                </the-tag>
                <tag-one-line v-if="screenSize >= ScreenSizes.s1440" title="Подтвердить" tag="tw-button">
                    <div class="attrs_list">
                        <span>outline prime_icon="pi-download" round outline warning</span>
                    </div>
                </tag-one-line>
                <the-tag v-else title="Подтвердить" tag="tw-button">
                    <div class="attrs_list">
                        <span>prime_icon="pi-download"</span>
                        <span>round</span>
                        <span>outline</span>
                        <span>warning</span>
                    </div>
                </the-tag>
                <tag-one-line v-if="screenSize >= ScreenSizes.s1440" title="Подтвердить" tag="tw-button">
                    <div class="attrs_list">
                        <span>outline prime_icon="pi-download" round outline error</span>
                    </div>
                </tag-one-line>
                <the-tag v-else title="Подтвердить" tag="tw-button">
                    <div class="attrs_list">
                        <span>prime_icon="pi-download"</span>
                        <span>round</span>
                        <span>outline</span>
                        <span>error</span>
                    </div>
                </the-tag>
                <tag-one-line v-if="screenSize >= ScreenSizes.s1440" title="Подтвердить" tag="tw-button">
                    <div class="attrs_list">
                        <span>outline prime_icon="pi-download" round outline color_gamma='violet'</span>
                    </div>
                </tag-one-line>
                <the-tag v-else title="Подтвердить" tag="tw-button">
                    <div class="attrs_list">
                        <span>prime_icon="pi-download"</span>
                        <span>round</span>
                        <span>outline</span>
                        <span>color_gamma='violet'</span>
                    </div>
                </the-tag>
            </div>
        </div>
    </div>
</template>
