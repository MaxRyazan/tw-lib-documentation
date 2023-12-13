<script setup lang="ts">
import {defineProps} from 'vue'

defineProps<{
    varName: string
    dataType?: string
}>()
</script>

<template>
    <div>
        <div style="color: white; display: flex; gap: 5px;">
            <span style="color: orange">const</span>
            <span>{{varName}} =</span>
            <span class="code__tag">reactive</span>(
            <span style="color: white; margin-left: -5px;">{{dataType === 'array' ? '[' : '{' }}</span>
        </div>
        <span style="color: white; margin-left: 20px; display: flex; flex-direction: column">
            <slot />
        </span>
        <span style="color: white;"><span>{{dataType === 'array' ? ']' : '}' }}</span>)</span>
    </div>
</template>
