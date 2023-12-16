<script setup lang="ts">
import {shallowRef} from "vue";
import TwTableBaseDoc from "@/documents/TwTableBaseDoc.vue";
import HomeComponent from '@/components/HomeComponent.vue'
import TwButtonDoc from "@/documents/TwButtonDoc.vue";
import TwDropdownDoc from "@/documents/TwDropdownDoc.vue";
import TwInputDoc from "@/documents/TwInputDoc.vue";

const currentComponent = shallowRef(HomeComponent)
function toggleBurgerVisible(){
    const burger: HTMLElement = document.querySelector('.nav')
    if(burger) {
        if(!burger.classList.contains('show')) burger.classList.add('show')
        else burger.classList.remove('show')
    }
}

function seeThis(clickedComponent:any){
    currentComponent.value = clickedComponent
    const burger: HTMLElement = document.querySelector('.nav')
    if(burger) burger.classList.remove('show')
}
</script>

<template>
    <div class="header">
        <div class="burger_nav scss_green" @click="toggleBurgerVisible"></div>
        <img src="./assets/img/logo.png" alt="logo">
        <a href="https://github.com/MaxRyazan/tw-lib-documentation" style="color: #3eaf7c;">github repo</a>
    </div>
    <div class="main_container">
        <div class="nav">
            <p class="nav__title">Компоненты</p>
            <div class="nav__list">
                <div @click="seeThis(HomeComponent)" class="nav__list_item" :class="{'tw_active': currentComponent === HomeComponent}">About</div>
                <div @click="seeThis(TwTableBaseDoc)" class="nav__list_item" :class="{'tw_active': currentComponent === TwTableBaseDoc }">TwTableBase</div>
                <div @click="seeThis(TwButtonDoc)" class="nav__list_item" :class="{'tw_active': currentComponent === TwButtonDoc}">TwButton</div>
                <div @click="seeThis(TwInputDoc)" class="nav__list_item" :class="{'tw_active': currentComponent === TwInputDoc}">TwInput</div>
                <div @click="seeThis(TwDropdownDoc)" class="nav__list_item" :class="{'tw_active': currentComponent === TwDropdownDoc}">TwDropdown</div>
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
  @media(max-width: 540px){
    position: absolute;
    border-right: none;
    z-index: 99;
    background-color: rgb(36, 50, 87);
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
    @media (max-width: 540px) {
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
      @media (max-width: 540px) {
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
  & .burger_nav {
    position: absolute;
    left: 20px;
  }
}
.wrapper_main{
  @media(max-width: 540px){
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
  &:hover{
    border-top: 2px solid orange;
    border-bottom: 2px solid orange;
    &:after{
      background-color: orange;
    }
  }
  &:after{
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
    height: 2px;
    background-color: white;
  }
  @media (max-width: 540px) {
    display: block;
  }
}
.show{
  display: block !important;
}
</style>