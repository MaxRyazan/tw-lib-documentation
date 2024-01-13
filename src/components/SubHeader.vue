<script setup lang="ts">
import {ref} from "vue";

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
          :class="{'active': currentSubTitle === 'Описание'}">Описание</span>
    <span @click="clickOnSubtitle('Api')"
          class="sub_nav_item"
          :class="{'active': currentSubTitle === 'Api'}">Api</span>
    <span @click="clickOnSubtitle('Слоты')"
          class="sub_nav_item"
          :class="{'active': currentSubTitle === 'Слоты'}">Слоты</span>
</div>
</template>

<style scoped lang="scss">
@import "src/assets/main";
.sub_nav{
  display: flex;
  gap: 100px;
  text-transform: uppercase;
  color: var(--sub_header_color);
  @media (max-width: 480px){
    gap: 50px;
  }
}
.active {
  color: var(--s_sub_header_active_color);
  border-bottom: 1px solid var(--s_sub_header_active_color);
  text-shadow: none !important;
}
.sub_nav_item{
  cursor: pointer;
  padding: 5px;
  text-shadow: var(--s_text_shadow);
}
</style>