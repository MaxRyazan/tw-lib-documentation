<script setup lang="ts">
import {defineProps} from 'vue'

defineProps<{
    varName: string
    dataType?: string
}>()
</script>

<template>
    <div class="tw_variable">
        <div class="tw_variable__item">
            <span style="color: #ac6700">const</span>
            <span class="code__variable">{{varName}} =</span>
            <span class="code__tag">reactive</span>(
        </div>
        <span class="tw_variable__sec_item">
            <slot />
        </span>
        <span class="tw_variable__item-inner">)</span>
    </div>
</template>
