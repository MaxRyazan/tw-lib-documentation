<script setup>
import {shallowRef} from "vue";
import HomeComponent from "@/components/HomeComponent.vue";
import TwTableBaseDoc from "@/documents/TwTableBaseDoc.vue";
import TestComponent from "@/TestComponent.vue";
import TwButton from "@/documents/TwButton.vue";
import TwInput from "@/documents/TwInput.vue";

const currentComponent = shallowRef(HomeComponent)
</script>

<template>
    <div class="header">
        <img src="./assets/img/logo.png" alt="logo">
    </div>
    <div class="main_container">
        <div class="nav">
            <p class="nav__title">Компоненты</p>
            <div class="nav__list">
                <div @click="currentComponent=TwTableBaseDoc" class="nav__list_item">TwTableBase</div>
                <div @click="currentComponent=TwButton" class="nav__list_item">TwButton</div>
                <div @click="currentComponent=TwInput" class="nav__list_item">TwInput</div>
<!--                <div @click="currentComponent=TestComponent" class="nav__list_item">TestComponent</div>-->
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
  & img {
    height: 100%;
  }
}
.wrapper_main{
  padding: 30px;
  width: 75%;
  display: flex;
  align-items: center;
  justify-content: end;
  overflow: hidden;
}
</style>