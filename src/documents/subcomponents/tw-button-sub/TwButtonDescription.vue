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
                    <tw-button success>Подтвердить</tw-button>
                    <tw-button warn>Подтвердить</tw-button>
                </div>
                <div class="btn_ex_item_wrapper">
                    <tw-button error>Подтвердить</tw-button>
                    <tw-button color_gamma="violet">Подтвердить</tw-button>
                </div>
            </div>
            <div class="tag_wrapper">
                <tag-one-line v-if="screenSize >= ScreenSizes.s1024" title="Подтвердить" tag="tw-button">
                    <div class="attrs_list">
                        <span>success</span>
                    </div>
                </tag-one-line>
                <the-tag v-else title="Подтвердить" tag="tw-button">
                    <div class="attrs_list">
                        <span>success</span>
                    </div>
                </the-tag>
                <tag-one-line v-if="screenSize >= ScreenSizes.s1024" title="Подтвердить" tag="tw-button">
                    <div class="attrs_list">
                        <span>warn</span>
                    </div>
                </tag-one-line>
                <the-tag v-else title="Подтвердить" tag="tw-button">
                    <div class="attrs_list">
                        <span>warn</span>
                    </div>
                </the-tag>
                <tag-one-line v-if="screenSize >= ScreenSizes.s1024" title="Подтвердить" tag="tw-button">
                    <div class="attrs_list">
                        <span>error</span>
                    </div>
                </tag-one-line>
                <the-tag v-else title="Подтвердить" tag="tw-button">
                    <div class="attrs_list">
                        <span>error</span>
                    </div>
                </the-tag>
                <tag-one-line v-if="screenSize >= ScreenSizes.s1024" title="Подтвердить" tag="tw-button">
                    <div class="attrs_list">
                        <span>color_gamma='violet'</span>
                    </div>
                </tag-one-line>
                <the-tag v-else title="Подтвердить" tag="tw-button">
                    <div class="attrs_list">
                        <span>color_gamma='violet'</span>
                    </div>
                </the-tag>
            </div>
        </div>
        <div class="container">
            <div class="btn_ex_item">
                <div class="btn_ex_item_wrapper">
                    <tw-button prime_icon="pi-check" success>Подтвердить</tw-button>
                    <tw-button prime_icon="pi-check" warn>Подтвердить</tw-button>
                </div>
                <div class="btn_ex_item_wrapper">
                    <tw-button prime_icon="pi-check" error>Подтвердить</tw-button>
                    <tw-button prime_icon="pi-check" color_gamma="blue">Подтвердить</tw-button>
                </div>
            </div>
            <div class="tag_wrapper">
                <tag-one-line v-if="screenSize >= ScreenSizes.s1150" title="Подтвердить" tag="tw-button">
                    <div class="attrs_list">
                        <span>prime_icon="pi-check" success</span>
                    </div>
                </tag-one-line>
                <the-tag v-else title="Подтвердить" tag="tw-button">
                    <div class="attrs_list">
                        <span>success</span>
                        <span>prime_icon="pi-check"</span>
                    </div>
                </the-tag>
                <tag-one-line v-if="screenSize >= ScreenSizes.s1150" title="Подтвердить" tag="tw-button">
                    <div class="attrs_list">
                        <span>prime_icon="pi-check" warn</span>
                    </div>
                </tag-one-line>
                <the-tag v-else title="Подтвердить" tag="tw-button">
                    <div class="attrs_list">
                        <span>warn</span>
                        <span>prime_icon="pi-check"</span>
                    </div>
                </the-tag>
                <tag-one-line v-if="screenSize >= ScreenSizes.s1150" title="Подтвердить" tag="tw-button">
                    <div class="attrs_list">
                        <span>prime_icon="pi-check" error</span>
                    </div>
                </tag-one-line>
                <the-tag v-else title="Подтвердить" tag="tw-button">
                    <div class="attrs_list">
                        <span>error</span>
                        <span>prime_icon="pi-check"</span>
                    </div>
                </the-tag>
                <tag-one-line v-if="screenSize >= ScreenSizes.s1150" title="Подтвердить" tag="tw-button">
                    <div class="attrs_list">
                        <span>prime_icon="pi-check" color_gamma='blue'</span>
                    </div>
                </tag-one-line>
                <the-tag v-else title="Подтвердить" tag="tw-button">
                    <div class="attrs_list">
                        <span>color_gamma='blue'</span>
                        <span>prime_icon="pi-check"</span>
                    </div>
                </the-tag>
            </div>
        </div>
        <div class="container">
            <div class="btn_ex_item">
                <div class="btn_ex_item_wrapper">
                    <tw-button rounded success>Подтвердить</tw-button>
                    <tw-button rounded warn>Подтвердить</tw-button>
                </div>
                <div class="btn_ex_item_wrapper">
                    <tw-button rounded error>Подтвердить</tw-button>
                    <tw-button rounded color_gamma="rgb(59, 177, 228)">Подтвердить</tw-button>
                </div>
            </div>


            <div class="tag_wrapper">
                <tag-one-line v-if="screenSize >= ScreenSizes.s1150" title="Подтвердить" tag="tw-button">
                    <div class="attrs_list">
                        <span>rounded success</span>
                    </div>
                </tag-one-line>
                <the-tag v-else title="Подтвердить" tag="tw-button">
                    <div class="attrs_list">
                        <span>success</span>
                        <span>rounded</span>
                    </div>
                </the-tag>
                <tag-one-line v-if="screenSize >= ScreenSizes.s1150" title="Подтвердить" tag="tw-button">
                    <div class="attrs_list">
                        <span>rounded warn</span>
                    </div>
                </tag-one-line>
                <the-tag v-else title="Подтвердить" tag="tw-button">
                    <div class="attrs_list">
                        <span>warn</span>
                        <span>rounded</span>
                    </div>
                </the-tag>
                <tag-one-line v-if="screenSize >= ScreenSizes.s1150" title="Подтвердить" tag="tw-button">
                    <div class="attrs_list">
                        <span>rounded error</span>
                    </div>
                </tag-one-line>
                <the-tag v-else title="Подтвердить" tag="tw-button">
                    <div class="attrs_list">
                        <span>error</span>
                        <span>rounded</span>
                    </div>
                </the-tag>
                <tag-one-line v-if="screenSize >= ScreenSizes.s1150" title="Подтвердить" tag="tw-button">
                    <div class="attrs_list">
                        <span>rounded color_gamma='rgb(59, 177, 228)'</span>
                    </div>
                </tag-one-line>
                <the-tag v-else title="Подтвердить" tag="tw-button">
                    <div class="attrs_list">
                        <span>rounded</span>
                        <span>color_gamma='rgb(59, 177, 228)'</span>
                    </div>
                </the-tag>
            </div>
        </div>
        <div class="container">
            <div class="btn_ex_item">
                <div class="btn_ex_item_wrapper">
                    <tw-button prime_icon="pi-check" rounded success>Подтвердить</tw-button>
                    <tw-button prime_icon="pi-check" rounded warn>Подтвердить</tw-button>
                </div>
                <div class="btn_ex_item_wrapper">
                    <tw-button prime_icon="pi-check" rounded error>Подтвердить</tw-button>
                    <tw-button prime_icon="pi-check" rounded color_gamma="#77008b">Подтвердить</tw-button>
                </div>
            </div>
            <div class="tag_wrapper">
                <tag-one-line v-if="screenSize >= ScreenSizes.s1440" title="Подтвердить" tag="tw-button">
                    <div class="attrs_list">
                        <span>prime_icon="pi-check" rounded success</span>
                    </div>
                </tag-one-line>
                <the-tag v-else title="Подтвердить" tag="tw-button">
                    <div class="attrs_list">
                        <span>success</span>
                        <span>rounded</span>
                        <span>prime_icon="pi-check"</span>
                    </div>
                </the-tag>
                <tag-one-line v-if="screenSize >= ScreenSizes.s1440" title="Подтвердить" tag="tw-button">
                    <div class="attrs_list">
                        <span>prime_icon="pi-check" rounded warn</span>
                    </div>
                </tag-one-line>
                <the-tag v-else title="Подтвердить" tag="tw-button">
                    <div class="attrs_list">
                        <span>warn</span>
                        <span>rounded</span>
                        <span>prime_icon="pi-check"</span>
                    </div>
                </the-tag>
                <tag-one-line v-if="screenSize >= ScreenSizes.s1440" title="Подтвердить" tag="tw-button">
                    <div class="attrs_list">
                        <span>prime_icon="pi-check" rounded error</span>
                    </div>
                </tag-one-line>
                <the-tag v-else title="Подтвердить" tag="tw-button">
                    <div class="attrs_list">
                        <span>error</span>
                        <span>rounded</span>
                        <span>prime_icon="pi-check"</span>
                    </div>
                </the-tag>
                <tag-one-line v-if="screenSize >= ScreenSizes.s1440" title="Подтвердить" tag="tw-button">
                    <div class="attrs_list">
                        <span>prime_icon="pi-check" rounded color_gamma='#77008b'</span>
                    </div>
                </tag-one-line>
                <the-tag v-else title="Подтвердить" tag="tw-button">
                    <div class="attrs_list">
                        <span>color_gamma='#77008b'</span>
                        <span>rounded</span>
                        <span>prime_icon="pi-check"</span>
                    </div>
                </the-tag>
            </div>
        </div>
        <div class="container">
            <div class="btn_ex_item">
                <div class="btn_ex_item_wrapper">
                    <tw-button outline success>Подтвердить</tw-button>
                    <tw-button outline warn>Подтвердить</tw-button>
                </div>
                <div class="btn_ex_item_wrapper">
                    <tw-button outline error>Подтвердить</tw-button>
                    <tw-button outline color_gamma="violet">Подтвердить</tw-button>
                </div>
            </div>
            <div class="tag_wrapper">
                <tag-one-line v-if="screenSize >= ScreenSizes.s1024" title="Подтвердить" tag="tw-button">
                    <div class="attrs_list">
                        <span>outline success</span>
                    </div>
                </tag-one-line>
                <the-tag v-else title="Подтвердить" tag="tw-button">
                    <div class="attrs_list">
                        <span>success</span>
                        <span>outline</span>
                    </div>
                </the-tag>
                <tag-one-line v-if="screenSize >= ScreenSizes.s1024" title="Подтвердить" tag="tw-button">
                    <div class="attrs_list">
                        <span>outline warn</span>
                    </div>
                </tag-one-line>
                <the-tag v-else title="Подтвердить" tag="tw-button">
                    <div class="attrs_list">
                        <span>warn</span>
                        <span>outline</span>
                    </div>
                </the-tag>
                <tag-one-line v-if="screenSize >= ScreenSizes.s1024" title="Подтвердить" tag="tw-button">
                    <div class="attrs_list">
                        <span>outline error</span>
                    </div>
                </tag-one-line>
                <the-tag v-else title="Подтвердить" tag="tw-button">
                    <div class="attrs_list">
                        <span>error</span>
                        <span>outline</span>
                    </div>
                </the-tag>
                <tag-one-line v-if="screenSize >= ScreenSizes.s1024" title="Подтвердить" tag="tw-button">
                    <div class="attrs_list">
                        <span>outline color_gamma='violet'</span>
                    </div>
                </tag-one-line>
                <the-tag v-else title="Подтвердить" tag="tw-button">
                    <div class="attrs_list">
                        <span>color_gamma='violet'</span>
                        <span>outline</span>
                    </div>
                </the-tag>
            </div>
        </div>
        <div class="container">
            <div class="btn_ex_item">
                <div class="btn_ex_item_wrapper">
                    <tw-button rounded outline success>Подтвердить</tw-button>
                    <tw-button rounded outline warn>Подтвердить</tw-button>
                </div>
                <div class="btn_ex_item_wrapper">
                    <tw-button rounded outline error>Подтвердить</tw-button>
                    <tw-button rounded outline color_gamma="violet">Подтвердить</tw-button>
                </div>
            </div>
            <div class="tag_wrapper">
                <tag-one-line v-if="screenSize >= ScreenSizes.s1150" title="Подтвердить" tag="tw-button">
                    <div class="attrs_list">
                        <span>rounded outline success</span>
                    </div>
                </tag-one-line>
                <the-tag v-else title="Подтвердить" tag="tw-button">
                    <div class="attrs_list">
                        <span>success</span>
                        <span>rounded</span>
                        <span>outline</span>
                    </div>
                </the-tag>
                <tag-one-line v-if="screenSize >= ScreenSizes.s1150" title="Подтвердить" tag="tw-button">
                    <div class="attrs_list">
                        <span>rounded outline warn</span>
                    </div>
                </tag-one-line>
                <the-tag v-else title="Подтвердить" tag="tw-button">
                    <div class="attrs_list">
                        <span>warn</span>
                        <span>rounded</span>
                        <span>outline</span>
                    </div>
                </the-tag>
                <tag-one-line v-if="screenSize >= ScreenSizes.s1150" title="Подтвердить" tag="tw-button">
                    <div class="attrs_list">
                        <span>rounded outline error</span>
                    </div>
                </tag-one-line>
                <the-tag v-else title="Подтвердить" tag="tw-button">
                    <div class="attrs_list">
                        <span>error</span>
                        <span>rounded</span>
                        <span>outline</span>
                    </div>
                </the-tag>
                <tag-one-line v-if="screenSize >= ScreenSizes.s1150" title="Подтвердить" tag="tw-button">
                    <div class="attrs_list">
                        <span>rounded outline color_gamma='violet'</span>
                    </div>
                </tag-one-line>
                <the-tag v-else title="Подтвердить" tag="tw-button">
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
                    <tw-button prime_icon="pi-check" rounded outline success>Подтвердить</tw-button>
                    <tw-button prime_icon="pi-check" rounded outline warn>Подтвердить</tw-button>
                </div>
                <div class="btn_ex_item_wrapper">
                    <tw-button prime_icon="pi-check" rounded outline error>Подтвердить</tw-button>
                    <tw-button prime_icon="pi-check" rounded outline color_gamma="violet">Подтвердить</tw-button>
                </div>
            </div>
            <div class="tag_wrapper">
                <tag-one-line v-if="screenSize >= ScreenSizes.s1440" title="Подтвердить" tag="tw-button">
                    <div class="attrs_list">
                        <span>prime_icon="pi-check" rounded outline success</span>
                    </div>
                </tag-one-line>
                <the-tag v-else title="Подтвердить" tag="tw-button">
                    <div class="attrs_list">
                        <span>success</span>
                        <span>rounded</span>
                        <span>outline</span>
                        <span>prime_icon="pi-check"</span>
                    </div>
                </the-tag>
                <tag-one-line v-if="screenSize >= ScreenSizes.s1440" title="Подтвердить" tag="tw-button">
                    <div class="attrs_list">
                        <span>prime_icon="pi-check" rounded outline warn</span>
                    </div>
                </tag-one-line>
                <the-tag v-else title="Подтвердить" tag="tw-button">
                    <div class="attrs_list">
                        <span>warn</span>
                        <span>rounded</span>
                        <span>outline</span>
                        <span>prime_icon="pi-check"</span>
                    </div>
                </the-tag>
                <tag-one-line v-if="screenSize >= ScreenSizes.s1440" title="Подтвердить" tag="tw-button">
                    <div class="attrs_list">
                        <span>prime_icon="pi-check" rounded outline error</span>
                    </div>
                </tag-one-line>
                <the-tag v-else title="Подтвердить" tag="tw-button">
                    <div class="attrs_list">
                        <span>error</span>
                        <span>rounded</span>
                        <span>outline</span>
                        <span>prime_icon="pi-check"</span>
                    </div>
                </the-tag>
                <tag-one-line v-if="screenSize >= ScreenSizes.s1440" title="Подтвердить" tag="tw-button">
                    <div class="attrs_list">
                        <span>prime_icon="pi-check" rounded outline color_gamma='violet'</span>
                    </div>
                </tag-one-line>
                <the-tag v-else title="Подтвердить" tag="tw-button">
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
                    <tw-button round warn>да</tw-button>
                </div>
                <div class="btn_ex_item_wrapper">
                    <tw-button round error>да</tw-button>
                    <tw-button round color_gamma="violet">да</tw-button>
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
                        <span>round warn</span>
                    </div>
                </tag-one-line>
                <the-tag v-else title="Подтвердить" tag="tw-button">
                    <div class="attrs_list">
                        <span>warn</span>
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
                    <tw-button outline round warn>нет</tw-button>
                </div>
                <div class="btn_ex_item_wrapper">
                    <tw-button outline round error>нет</tw-button>
                    <tw-button outline round color_gamma="violet">нет</tw-button>
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
                        <span>outline round warn</span>
                    </div>
                </tag-one-line>
                <the-tag v-else title="Подтвердить" tag="tw-button">
                    <div class="attrs_list">
                        <span>warn</span>
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
                    <tw-button prime_icon="pi-check" round warn></tw-button>
                </div>
                <div class="btn_ex_item_wrapper">
                    <tw-button prime_icon="pi-check" round error></tw-button>
                    <tw-button prime_icon="pi-check" round color_gamma="violet"></tw-button>
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
                        <span>prime_icon="pi-check" round warn</span>
                    </div>
                </tag-one-line>
                <the-tag v-else title="Подтвердить" tag="tw-button">
                    <div class="attrs_list">
                        <span>prime_icon="pi-check"</span>
                        <span>round</span>
                        <span>warn</span>
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
                    <tw-button outline prime_icon="pi-download" round warn></tw-button>
                </div>
                <div class="btn_ex_item_wrapper">
                    <tw-button outline prime_icon="pi-download" round error></tw-button>
                    <tw-button outline prime_icon="pi-download" round color_gamma="violet"></tw-button>
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
                        <span>outline prime_icon="pi-download" round outline warn</span>
                    </div>
                </tag-one-line>
                <the-tag v-else title="Подтвердить" tag="tw-button">
                    <div class="attrs_list">
                        <span>prime_icon="pi-download"</span>
                        <span>round</span>
                        <span>outline</span>
                        <span>warn</span>
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
