<script setup lang="ts">
import {ref} from "vue";
import {useStore} from "@/store";
import {Themes} from "@/themes";
const store = useStore()
const isToastVisible = ref(false)

async function copy() {
    const input:HTMLInputElement = document.querySelector('#tw_copy_text')
    if (input) {
        await navigator.clipboard.writeText(input.value)
        isToastVisible.value = true
        setTimeout(() => {
            isToastVisible.value = false
        },800)
    }
}
</script>

<template>
    <div class="home_wrapper">
        <p class="main_title">Библиотека UI компонентов для Vue3.</p>
        <p>Ноль зависимостей.</p>
        <p class="sub_title">Все компоненты устанавливаются глобально, нет нужды импортировать их.</p>
        <p class="sub_title">Полная кастомизация любого компонента, путём передачи пропсов - размеры, цвета, ховер-эффекты.</p>
        <p class="sub_title">Некоторые компоненты содержат дополнительные атрибуты, которые можно кастомизировать - слоты(например, для вывода сообщений от валидатора), строковые поля для префиксов, суффиксов и тп.</p>
        <div class="connect">
            <p>Подключение в ваш проект:</p>
            <div class="copy">
                <div class="toast" v-if="isToastVisible">Скопировано!</div>
                <i class="pi pi-chevron-right"></i>
                <input value="npm i twins-vue" id="tw_copy_text" readonly type="text">
                <span class="pi pi-copy" @click="copy"></span>
            </div>
            <div class="connect_options">
                <div class="copy_text">
                    <span class="filename">main.js</span>
                    <span>import './assets/main.scss'</span>
                    <span>import { createApp } from 'vue'</span>
                    <span>import App from './App.vue'</span>
                    <span class="copy_text_import">import twins from "twins-vue";</span>
                    <div class="copy_text_item">
                        <span>createApp(App)</span>
                        <span class="copy_text_import" style="margin-left: 20px">.use(twins)</span>
                        <span style="margin-left: 20px">.mount('#app')</span>
                    </div>
                </div>

                <div class="copy_text">
                    <span class="filename">main.scss file</span>
                    <span class="copy_text_import">@import 'twins-vue/tw-styles.css';</span>
                    <span>...</span>
                </div>
            </div>

        </div>
    </div>
</template>

<style scoped lang="scss">
@import "src/assets/main";
.copy {
  position: relative;
  height: 34px;
  width: 250px;
  border: 1px solid var(--s_copy_border);
  border-radius: 6px;
  & input {
    cursor: default;
    border: none;
    padding-left: 30px;
    color: var(--s_copy_border);
    height: 100%;
    width: calc(100% - 50px);
    background-color: transparent;
    outline: none;
  }
  & span {
    color: var(--s_copy_border);
    cursor: pointer;
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
  }
  & i {
    color: var(--s_copy_border);
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
  }
}
.toast {
  position: absolute;
  right: -140px;
  top: 2px;
  color: var(--_s_toast_color);
  border: 1px solid var(--_s_toast_color);
  padding: 5px 10px;
  border-radius: 6px;
}
.connect {
  text-shadow: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  border-radius: 12px;
  width: 100%;
  padding: 30px 5px;
}
.copy_text {
  position: relative;
  border: 1px solid var(--_s_toast_color);
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  color: var(--s_copy_color);
  height: 200px;
  @media (max-width: 540px) {
    font-size: 12px;
  }
}
.filename {
  position: absolute;
  top: 5px;
  color: var(--s_copy_color);
}
.copy_text_item {
  display: flex;
  flex-direction: column;
  margin-top: 20px;
}
.copy_text_import{
  color: $green;
}
.connect_options{
  display: flex;
  gap: 30px;
  margin-top: 30px;
  @media (max-width: 800px) {
    flex-direction: column;
  }
}
.main_title {
  font-size: 30px;
  margin-bottom: 20px;
  text-align: center;
  color: $green;
  @media (max-width: 540px) {
    font-size: 20px;
    margin: 10px 0 10px 0;
  }
}
.sub_title{
  text-align: center;
  text-shadow: 1px 0 10px $green;
}
.home_wrapper {
  width: 100%;
  align-self: start;
  color: var(--s_nav_title_color);
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
  & p {
    text-shadow: var(--s_text_shadow);
  }
  @media (max-width: 540px) {
    gap: 5px;
  }
}
</style>