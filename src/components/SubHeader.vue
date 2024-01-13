<script setup lang="ts">
import {ref} from "vue";
import {Themes} from "@/themes";
import {useStore} from "@/store";

const store = useStore()
const emit = defineEmits<{
    (e: 'showDescription'):void
    (e: 'showApi'):void
    (e: 'showSlots'):void
}>()
const currentSubTitle = ref('Описание')

function clickOnSubtitle(subtitle: string){
    switch(subtitle){
        case 'Описание': {
            emit('showDescription');
            currentSubTitle.value = 'Описание'
        }
        break
        case 'Api': {
            emit('showApi');
            currentSubTitle.value = 'Api'
        }
        break
        case 'Слоты': {
            emit('showSlots');
            currentSubTitle.value = 'Слоты'
        }
        break
    }
}
</script>

<template>
<div class="sub_nav">
    <span @click="clickOnSubtitle('Описание')"
          class="sub_nav_item"
          :class="{'active': currentSubTitle === 'Описание', 'dark_text_shadow': store.theme === Themes.dark}">Описание</span>
    <span @click="clickOnSubtitle('Api')"
          class="sub_nav_item"
          :class="{'active': currentSubTitle === 'Api', 'dark_text_shadow': store.theme === Themes.dark}">Api</span>
    <span @click="clickOnSubtitle('Слоты')"
          class="sub_nav_item"
          :class="{'active': currentSubTitle === 'Слоты', 'dark_text_shadow': store.theme === Themes.dark}">Слоты</span>
</div>
</template>

<style scoped lang="scss">
@import "src/assets/main";
.sub_nav{
  display: flex;
  gap: 100px;
  text-transform: uppercase;
  color: $green;
  @media (max-width: 480px){
    gap: 50px;
  }
}
.active {
  color: orange;
  border-bottom: 1px solid orange;
}
.sub_nav_item{
  cursor: pointer;
  padding: 5px;
}
</style>