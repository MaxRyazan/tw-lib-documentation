<script setup lang="ts">
import {defineProps} from 'vue'

defineProps<{ tag: string, title: string }>()
</script>

<template>
    <div class="wrapper">
        <div class="inner">
            <div class="code">
                <span class="code__tag">&lt;{{ tag }}</span>
                <span class="code__attrs">
                    <slot/>
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
  padding: 5px;
  width: 100%;

  &__tag {
    display: flex;
    color: #E8BF6A;
  }

  &__attrs {
    color: white;
  }

  &__title {
    color: white;
    padding-left: 4px;
  }

}
</style>