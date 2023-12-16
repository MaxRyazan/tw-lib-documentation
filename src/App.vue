<script setup>
import {shallowRef} from "vue";
import TwTableBaseDoc from "@/documents/TwTableBaseDoc.vue";
import HomeComponent from '@/components/HomeComponent.vue'
import TwInput from "@/documents/TwInput.vue";
import TwDropdown from '@/documents/TwDropdown.vue'
import TwButtonDoc from "@/documents/TwButtonDoc.vue";

const currentComponent = shallowRef(HomeComponent)
</script>

<template>
    <div class="header">
        <img src="./assets/img/logo.png" alt="logo">
        <a href="https://github.com/MaxRyazan/tw-lib-documentation" style="color: #3eaf7c;">github repo</a>
    </div>
    <div class="main_container">
        <div class="nav">
            <p class="nav__title">Компоненты</p>
            <div class="nav__list">
                <div @click="currentComponent=HomeComponent" class="nav__list_item" :class="{'tw_active': currentComponent === HomeComponent}">About</div>
                <div @click="currentComponent=TwTableBaseDoc" class="nav__list_item" :class="{'tw_active': currentComponent === TwTableBaseDoc }">TwTableBase</div>
                <div @click="currentComponent=TwButtonDoc" class="nav__list_item" :class="{'tw_active': currentComponent === TwButtonDoc}">TwButton</div>
                <div @click="currentComponent=TwInput" class="nav__list_item" :class="{'tw_active': currentComponent === TwInput}">TwInput</div>
                <div @click="currentComponent=TwDropdown" class="nav__list_item" :class="{'tw_active': currentComponent === TwDropdown}">TwDropdown</div>
            </div>
        </div>
        <div class="wrapper_main">
            <component :is="currentComponent" />
        </div>
    </div>
</template>

<style scoped lang="scss">
@import "src/assets/main";
.main_container{
  min-height: calc(100vh - 62px);
  background-color: rgb(55, 65, 81);
  min-width: 98%;
  position: relative;
  display: flex;
  gap: 5px;
}
.nav {
  border-right: 2px solid $green;
  min-width: 300px;
  width: 25%;
  position: relative;
  &__title {
    color: $green;
    text-align: center;
    font-size: 22px;
    padding: 25px 5px;
    cursor: default;
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
      &:hover {
        transition: .5s;
        color: $green;
        border-bottom: 1px solid $green;
      }
    }
  }
}
.header{
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
  & a {
    position: absolute;
    right: 20px;
  }
}
.wrapper_main{
  overflow-y: scroll;
  padding: 50px 30px;
  width: 75%;
  display: flex;
  justify-content: end;
}
.tw_active {
  color: $green;
}
</style>