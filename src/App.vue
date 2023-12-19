<script setup lang="ts">
import {onMounted, Ref, ref, shallowRef} from "vue";
import TwTableBaseDoc from "@/documents/TwTableBaseDoc.vue";
import HomeComponent from '@/components/HomeComponent.vue'
import TwButtonDoc from "@/documents/TwButtonDoc.vue";
import TwDropdownDoc from "@/documents/TwDropdownDoc.vue";
import TwInputDoc from "@/documents/TwInputDoc.vue";
import {Themes} from "@/themes";
import {setToLocalStorage} from "@/use/setToLocalStorage";
import {getFromLocalStorage} from "@/use/getFromLocalStorage";

const currentComponent = shallowRef(HomeComponent)
const burger: Ref<HTMLElement> = ref()
const theme: Ref<Themes|string> = ref(Themes.dark)

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
    if (newTheme) theme.value = newTheme
    else {
        switch (theme.value) {
            case Themes.dark:
                theme.value = Themes.light
                break
            case Themes.light:
                theme.value = Themes.dark
                break
        }
    }
    setToLocalStorage('tw_theme', theme.value)
}
onMounted(() => {
    const savedTheme: String = getFromLocalStorage('tw_theme')
    if(savedTheme) theme.value = savedTheme
})
</script>

<template>
    <div class="header">
        <div class="burger_nav scss_green" @click="toggleBurgerVisible"></div>
        <img src="./assets/img/logo.png" alt="logo">


        <div class="theme_changer" @click="changeTheme()">
            <transition name="fade">
                <i style="font-size: 16px; color: burlywood; position: absolute; left: 3px;" v-if="theme === Themes.dark"
                   class="pi pi-moon" @click.stop="changeTheme(Themes.light)"></i>
            </transition>
            <transition name="fade2">
                <i style="font-size: 16px; color: yellow; position: absolute; right: 3px;" v-if="theme === Themes.light"
                   class="pi pi-sun" @click.stop="changeTheme(Themes.dark)"></i>
            </transition>
        </div>

        <a class="npm_href" href="https://www.npmjs.com/package/twins-vue">
            <img src="./assets/img/npm.png" alt="github">
        </a>
        <a class="gh_href" href="https://github.com/MaxRyazan/tw-lib-documentation">
            <img src="./assets/img/gh.png" alt="github">
        </a>
    </div>


    <div :class="{'light': theme === Themes.light, 'dark': theme === Themes.dark}" class="main_container">
        <div class="nav" ref="burger">
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
            <component :is="currentComponent"/>
        </div>
    </div>
</template>

<style scoped lang="scss">
@import "src/assets/main";
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
  min-height: calc(100vh - 62px);
  min-width: 98%;
  position: relative;
  display: flex;
  gap: 5px;
}

.nav {
  @media(max-width: 640px) {
    position: absolute;
    border-right: none;
    z-index: 99;
    //background-color: rgb(36, 50, 87);
    width: 120px;
    min-width: 120px;
    top: -2px;
    display: none;
    border-right: 2px solid $green;
    border-bottom: 2px solid $green;
    padding-bottom: 20px;
  }
  border-right: 2px solid $green;
  min-width: 200px;
  width: 20%;
  position: relative;

  &__title {
    color: $green;
    text-align: center;
    font-size: 22px;
    padding: 25px 5px;
    cursor: default;
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
      color: orange;
      cursor: pointer;
      display: inline-block;
      @media (max-width: 640px) {
        padding: 10px 5px;
      }
      @media (max-width: 800px) {
        padding: 5px 5px;
      }

      &:hover {
        transition: .5s;
        color: $green;
        border-bottom: 1px solid $green;
      }
    }
  }
}

.header {
  background-color: rgb(36, 50, 87);
  position: relative;
  height: 60px;
  width: 100%;
  border-bottom: 2px solid $green;
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
}

.burger_nav {
  width: 40px;
  height: 24px;
  border-top: 2px solid white;
  border-bottom: 2px solid white;
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
    background-color: white;
  }

  @media (max-width: 640px) {
    display: block;
  }
}

.show {
  display: block !important;
}

.theme_changer {
  cursor: pointer;
  border: 1px solid $green;
  position: absolute;
  right: 130px;
  background-color: transparent;
  width: 50px;
  height: 22px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  padding: 0 5px;
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

.light {
  background-image: linear-gradient(
                  40deg,
                  hsl(164deg 100% 94%) 0%,
                  hsl(162deg 100% 92%) 20%,
                  hsl(159deg 100% 90%) 37%,
                  hsl(156deg 100% 99%) 52%,
                  hsl(152deg 100% 98%) 64%,
                  hsl(148deg 100% 97%) 74%,
                  hsl(143deg 100% 96%) 80%,
                  hsl(138deg 100% 95%) 86%,
                  hsl(132deg 100% 95%) 91%,
                  hsl(125deg 100% 95%) 100%
  );
}
.dark {
  background-color: rgb(55, 65, 81);
}
</style>