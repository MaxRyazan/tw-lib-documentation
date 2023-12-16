<script setup lang="ts">
import {ref} from "vue";

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
    <div style="width: 100%; align-self: start; color: #3eaf7c; display: flex; flex-direction: column; gap: 15px; align-items: center">
        <p style="font-size: 30px; margin-bottom: 20px;">Библиотека UI компонентов для Vue3.</p>
        <p>Ноль зависимостей.</p>
        <p>Все компоненты устанавливаются глобально, нет нужды импортировать их.</p>
        <p>Полная кастомизация любого компонента, путём передачи пропсов - размеры, цвета, ховер-эффекты.</p>
        <p style="text-align: center">Некоторые компоненты содержат дополнительные атрибуты, которые можно кастомизировать - слоты(например, для вывода сообщений от валидатора), строковые поля для префиксов, суффиксов и тп.</p>
        <div class="connect">
            <p>Подключение в ваш проект:</p>
            <div class="copy">
                <div class="toast" v-if="isToastVisible">Скопировано!</div>
                <i class="pi pi-chevron-right"></i>
                <input value="npm i twins-vue" id="tw_copy_text" readonly type="text">
                <span class="pi pi-copy" @click="copy"></span>
            </div>
            <div style="display: flex; gap: 30px; margin-top: 30px;">
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
                    <span class="filename">your main style.scss file</span>
                    <span class="copy_text_import">@import 'twins-vue/tw-styles.css';</span>
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
  border: 1px solid white;
  border-radius: 6px;
  & input {
    cursor: default;
    border: none;
    padding-left: 30px;
    color: white;
    height: 100%;
    width: calc(100% - 50px);
    background-color: transparent;
    outline: none;
  }
  & span {
    color: white;
    cursor: pointer;
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
  }
  & i {
    color: white;
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
  }
}
.toast {
  position: absolute;
  right: 0;
  top: -40px;
  color: rgba(255, 255, 255, .4);
  border: 1px solid rgba(255, 255, 255, .4);
  padding: 5px 10px;
  border-radius: 6px;
}
.connect {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  border: 1px solid rgb(36, 50, 87);
  background-color: rgb(36, 50, 87);
  border-radius: 12px;
  width: 100%;
  padding: 30px 0;
}
.copy_text {
  position: relative;
  border: 1px solid rgba(255, 255, 255, .4);
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  color: white;
}
.filename {
  position: absolute;
  top: 5px;
  color: rgba(255, 255, 255, .4);
}
.copy_text_item {
  display: flex;
  flex-direction: column;
  margin-top: 20px;
}
.copy_text_import{
  color: $green;
}
</style>