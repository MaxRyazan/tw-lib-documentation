<script setup lang="ts">
import {defineProps} from 'vue'

defineProps<{ tag: string, title: string }>()
</script>

<template>
    <div class="wrapper">
        <div class="inner">
            <div style="display:flex;" class="code">
                <span class="code__tag">&lt;{{ tag }}</span>
                <span class="code__attrs">
                    <slot/>
                </span>
                    <span class="code__tag">&gt;
                </span>
                <span v-if="title" class="code__title">{{ title }}</span>
                <slot name="innerTag" />
                <span class="code__tag">&lt;/{{ tag }}&gt;</span>
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

</style>