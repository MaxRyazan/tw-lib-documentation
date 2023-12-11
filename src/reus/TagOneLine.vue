<script setup lang="ts">
import {defineProps} from 'vue'

defineProps<{ tag: string, title: string }>()
</script>

<template>
    <div class="wrapper">
        <div class="inner">
            <div class="code">
                <span class="code__tag">&lt;{{ tag }}
                    <span class="code__attrs">
                        <slot/>
                    </span>
                    <span class="code__tag">&gt;
                        <span v-if="title" class="code__title">{{ title }}</span>&lt;/{{ tag }}&gt;
                    </span>
                </span>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.wrapper {
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: start;
}

.inner {
  display: flex;
  align-items: center;
}

.code {
  white-space: nowrap;
  position: relative;
  width: 100%;

  &__tag {
    display: flex;
    color: #E8BF6A;
  }

  &__attrs {
    color: white;
    padding-right: 3px;
  }

  &__title {
    color: white;
    padding-left: 3px;
    padding-right: 3px;
  }

  &__leftK {
    &:after {
      position: absolute;
      content: '';
      width: 6px;
      top: 13px;
      border-bottom: 2px solid #E8BF6A;
      transform: rotate(-35deg);
    }

    &:before {
      position: absolute;
      content: '';
      width: 6px;
      bottom: 11px;
      border-bottom: 2px solid #E8BF6A;
      transform: rotate(35deg);
    }
  }

  &__rightK {
    &:after {
      position: absolute;
      content: '';
      width: 6px;
      top: 13px;
      border-bottom: 2px solid #E8BF6A;
      transform: rotate(35deg);
    }

    &:before {
      position: absolute;
      content: '';
      width: 6px;
      bottom: 11px;
      border-bottom: 2px solid #E8BF6A;
      transform: rotate(-35deg);
    }
  }
}
</style>