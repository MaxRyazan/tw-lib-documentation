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
    <span @click="clickOnSubtitle('Описание')" :class="{'active': currentSubTitle === 'Описание'}">Описание</span>
    <span @click="clickOnSubtitle('Api')" :class="{'active': currentSubTitle === 'Api'}">Api</span>
    <span @click="clickOnSubtitle('Слоты')" :class="{'active': currentSubTitle === 'Слоты'}">Слоты</span>
</div>
</template>

<style scoped lang="scss">
@import "src/assets/main";
.sub_nav{
  display: flex;
  gap: 100px;
  text-transform: uppercase;
  cursor: pointer;
  color: $green;
}
.active {
  color: orange;
}
</style>