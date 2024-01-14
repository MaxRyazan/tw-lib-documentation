<script setup lang="ts">
import {computed, onMounted, Ref, ref, shallowRef, watch} from "vue";
import TwTableBaseDoc from "@/documents/TwTableBaseDoc.vue";
import HomeComponent from '@/components/HomeComponent.vue'
import TwButtonDoc from "@/documents/TwButtonDoc.vue";
import TwDropdownDoc from "@/documents/TwDropdownDoc.vue";
import TwInputDoc from "@/documents/TwInputDoc.vue";
import {Themes} from "@/themes";
import {setToLocalStorage} from "@/use/setToLocalStorage";
import {getFromLocalStorage} from "@/use/getFromLocalStorage";
import {getScreenSize} from "@/use/getScreenSize";
import {ScreenSizes} from "@/ScreenSizes";
import {useStore} from "@/store";
import db from './../package.json'

const store = useStore()
const currentComponent = shallowRef(HomeComponent)
const burger: Ref<HTMLElement> = ref()
const size = ref()

function toggleBurgerVisible() {
    if (burger.value) {
        if (!burger.value.classList.contains('show')) burger.value.classList.add('show')
        else burger.value.classList.remove('show')
    }
}

function seeThis(clickedComponent: any) {
    currentComponent.value = clickedComponent
    if (burger.value) burger.value.classList.remove('show')
}

function changeTheme(newTheme?: Themes) {
    if (newTheme) store.theme = newTheme
    else {
        if(store.theme === Themes.dark) store.theme = Themes.light
        else store.theme = Themes.dark
    }
    setToLocalStorage('tw_theme', store.theme)
}
onMounted(() => {
    const savedTheme: any = getFromLocalStorage('tw_theme')
    if(savedTheme) store.theme = savedTheme
    size.value = getScreenSize()
})
watch(computed(() => store.theme), (value) => {
    if(value === Themes.dark) {
        document.documentElement.style.setProperty('--tw_table_base_row_hover', 'rgba(26, 43, 71, 0.7)');
        document.documentElement.style.setProperty('--s_bgc_main', '#121212');
        document.documentElement.style.setProperty('--s_header', 'black');
        document.documentElement.style.setProperty('--s_header_bb', 'black');
        document.documentElement.style.setProperty('--s_nav_br', '10px solid black');
        document.documentElement.style.setProperty('--s_nav_mt', '0px');
        document.documentElement.style.setProperty('--s_nav_mb', '0px');
        document.documentElement.style.setProperty('--s_nav_ml', '0px');
        document.documentElement.style.setProperty('--s_theme_changer_bgc', 'transparent');
        document.documentElement.style.setProperty('--s_theme_changer_color', 'burlywood');
        document.documentElement.style.setProperty('--s_nav_bgc', '#121212');
        document.documentElement.style.setProperty('--s_nav_border_radius', '0px');
        document.documentElement.style.setProperty('--s_text_shadow', '1px 0 10px #01b075');
        document.documentElement.style.setProperty('--s_nav_item_color', 'orange');
        document.documentElement.style.setProperty('--s_nav_title_color', '#01b075');
        document.documentElement.style.setProperty('--s_copy_border', 'white');
        document.documentElement.style.setProperty('--_s_toast_color', 'rgba(255, 255, 255, .4)');
        document.documentElement.style.setProperty('--s_copy_color', '#FFFFFF66');
        document.documentElement.style.setProperty('--s_sub_header_active_color', 'orange');
        document.documentElement.style.setProperty('--sub_header_color', '#01b075');
        document.documentElement.style.setProperty('--s_description_text', '#01b075');
        document.documentElement.style.setProperty('--s_tag_wrapper', 'black');
        document.documentElement.style.setProperty('--s_code_attrs_color', 'white');
        document.documentElement.style.setProperty('--s_code_tag', '#E8BF6A');
        document.documentElement.style.setProperty('--s_small_nav_bgc', 'black');
    } else {
        document.documentElement.style.setProperty('--tw_table_base_row_hover', 'rgba(26, 43, 71, 0.05)');
        document.documentElement.style.setProperty('--s_bgc_main', '#EEEEEE');
        document.documentElement.style.setProperty('--s_header', 'white');
        document.documentElement.style.setProperty('--s_header_bb', 'rgba(1,176,117, .3)');
        document.documentElement.style.setProperty('--s_nav_br', 'none');
        document.documentElement.style.setProperty('--s_nav_mt', '20px');
        document.documentElement.style.setProperty('--s_nav_mb', '20px');
        document.documentElement.style.setProperty('--s_nav_ml', '20px');
        document.documentElement.style.setProperty('--s_theme_changer_bgc', 'white');
        document.documentElement.style.setProperty('--s_theme_changer_color', 'orange');
        document.documentElement.style.setProperty('--s_nav_bgc', 'white');
        document.documentElement.style.setProperty('--s_nav_border_radius', '20px');
        document.documentElement.style.setProperty('--s_text_shadow', '1px -1px 9px rgba(0,0,0,0.17)');
        document.documentElement.style.setProperty('--s_nav_item_color', '#1F2937');
        document.documentElement.style.setProperty('--s_nav_title_color', '#1F2937');
        document.documentElement.style.setProperty('--s_copy_border', '#01b075');
        document.documentElement.style.setProperty('--_s_toast_color', 'rgba(1,176,117, .4)');
        document.documentElement.style.setProperty('--s_copy_color', 'rgba(0, 0, 0, .4)');
        document.documentElement.style.setProperty('--s_sub_header_active_color', '#01b075');
        document.documentElement.style.setProperty('--sub_header_color', '#121212');
        document.documentElement.style.setProperty('--s_description_text', '#121212');
        document.documentElement.style.setProperty('--s_tag_wrapper', 'transparent');
        document.documentElement.style.setProperty('--s_code_attrs_color', '#121212');
        document.documentElement.style.setProperty('--s_code_tag', '#d68100');
        document.documentElement.style.setProperty('--s_small_nav_bgc', 'white');
    }
}, {immediate: true})
</script>

<template>
    <div class="header">
        <div class="burger_nav scss_green" @click="toggleBurgerVisible"></div>
        <img v-if="size >= ScreenSizes.s480" src="./assets/img/logo.png" alt="logo">

        <div class="theme_changer" @click="changeTheme()">
            <transition name="fade">
                <i v-if="store.theme === Themes.dark"
                   style="left: 3px"
                   class="pi pi-moon" @click.stop="changeTheme(Themes.light)"></i>
            </transition>
            <transition name="fade2">
                <i v-if="store.theme === Themes.light"
                   style="right: 3px"
                   class="pi pi-sun" @click.stop="changeTheme(Themes.dark)"></i>
            </transition>
        </div>

        <a class="npm_href" href="https://www.npmjs.com/package/twins-vue">
            <img src="./assets/img/npm.png" alt="npm link">
        </a>
        <a class="gh_href" href="https://github.com/MaxRyazan/tw-lib-documentation">
            <img src="./assets/img/gh.png" alt="github link">
        </a>
    </div>

    <div class="main_container">
        <div :style="{boxShadow: store.theme === Themes.light ? '-2px 2px 16px 0px rgba(1,176,117, .2)' : 'none' }" class="nav" ref="burger">
            <p class="nav__title">Компоненты</p>
            <div class="nav__list">
                <div @click="seeThis(HomeComponent)" class="nav__list_item"
                     :class="{'tw_active': currentComponent === HomeComponent}">About
                </div>
                <div @click="seeThis(TwTableBaseDoc)" class="nav__list_item"
                     :class="{'tw_active': currentComponent === TwTableBaseDoc }">TwTableBase
                </div>
                <div @click="seeThis(TwButtonDoc)" class="nav__list_item"
                     :class="{'tw_active': currentComponent === TwButtonDoc}">TwButton
                </div>
                <div @click="seeThis(TwInputDoc)" class="nav__list_item"
                     :class="{'tw_active': currentComponent === TwInputDoc}">TwInput
                </div>
                <div @click="seeThis(TwDropdownDoc)" class="nav__list_item"
                     :class="{'tw_active': currentComponent === TwDropdownDoc}">TwDropdown
                </div>
            </div>
        </div>
        <div class="wrapper_main">
            <div style="font-size: 0.75rem;"
                 :style="{color: store.theme === Themes.dark ? 'white' : 'black'}"
                 class="current_version"
            >{{db.dependencies["twins-vue"].replace('^', 'v.')}}</div>
            <component :is="currentComponent"/>
        </div>
    </div>
</template>

<style scoped lang="scss">
@import "src/assets/main";
.current_version{
  position: absolute;
  top: 5px;
  right: 25px;
}
.gh_href{
  position: absolute;
  right: 20px;
  height: 30px;
  width: 30px;
  border-radius: 50%;
  padding: 5px;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
}
.npm_href{
  position: absolute;
  right: 60px;
  height: 26px;
  border-radius: 50%;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.main_container {
  min-height: calc(100vh - 60px);
  min-width: 98%;
  position: relative;
  display: flex;
  gap: 5px;
  background-color: var(--s_bgc_main);
}

.nav {
  border-right: var(--s_nav_br);
  min-width: 200px;
  width: 20%;
  position: relative;
  margin-top: var(--s_nav_mt);
  margin-bottom: var(--s_nav_mb);
  margin-left: var(--s_nav_ml);
  background-color: var(--s_nav_bgc);
  border-radius: var(--s_nav_border_radius);
  @media(max-width: 640px) {
    position: absolute;
    border-right: none;
    z-index: 99;
    width: 120px;
    min-width: 120px;
    top: 0;
    display: none;
    background-color: var(--s_small_nav_bgc) !important;
    padding: 10px 0;
    border-right: 1px solid rgba( 1,176,117, .4);
    border-bottom: 1px solid rgba( 1,176,117, .4);
    margin-left: 0;
    margin-top: -2px;
    border-radius: 0;
    box-shadow: none !important;
  }
  &__title {
    color: var(--s_nav_title_color);
    text-align: center;
    font-size: 22px;
    padding: 25px 5px;
    cursor: default;
    text-shadow: var(--s_text_shadow);
    @media (max-width: 640px) {
      display: none;
    }
  }

  &__list {
    max-width: 80%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;

    &_item {
      color: var(--s_nav_item_color);
      cursor: pointer;
      display: inline-block;
      padding: 5px 5px;
      border-left: 1px solid rgba(1,176,117, .2);
      transition: border-left-color 0.3s linear;
      @media (max-width: 640px) {
        padding: 10px 5px;
      }
      @media (max-width: 800px) {
        padding: 5px 5px;
      }

      &:hover {
        transition: .5s;
        border-left: 1px solid $green;
      }
    }
  }
}

.header {
  background-color: var(--s_header);
  border-bottom: 2px solid var(--s_header_bb);
  position: relative;
  height: 60px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  & img {
    height: 100%;
  }

  & .burger_nav {
    position: absolute;
    left: 20px;
  }
}

.wrapper_main {
  @media(max-width: 640px) {
    width: 100%;
    padding: 10px 10px;
  }
  overflow-y: scroll;
  padding: 50px 30px;
  width: 80%;
  display: flex;
  justify-content: end;
}

.tw_active {
  color: $green;
  border-left: 1px solid $green;
}

.burger_nav {
  width: 40px;
  height: 24px;
  border-top: 2px solid var(--s_code_attrs_color);
  border-bottom: 2px solid var(--s_code_attrs_color);
  display: none;
  position: relative;

  &:hover {
    border-top: 2px solid orange;
    border-bottom: 2px solid orange;

    &:after {
      background-color: orange;
    }
  }

  &:after {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
    height: 2px;
    background-color: var(--s_code_attrs_color);
  }

  @media (max-width: 640px) {
    display: block;
  }
}

.show {
  display: block !important;
  z-index: 999;
  background-color: var(--s_nav_bgc);
}

.theme_changer {
  cursor: pointer;
  border: 1px solid $green;
  position: absolute;
  right: 130px;
  background-color: var(--s_theme_changer_bgc);
  width: 50px;
  height: 22px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  padding: 0 5px;
  & i {
    font-size: 16px;
    color: var(--s_theme_changer_color);
    position: absolute;
  }
}


.fade-enter-from, .fade-leave-to {
  transition: .3s;
  margin-left: 24px;
  opacity: 0;
  position: absolute;
}

.fade2-enter-from, .fade2-leave-to {
  transition: .3s;
  margin-right: 24px;
  opacity: 0;
  position: absolute;
}

</style>