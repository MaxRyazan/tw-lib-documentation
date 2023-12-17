<script setup lang="ts">
import {defineProps} from 'vue'
defineProps<{
    array: Array<string|number>
}>()

</script>

<template>
    <div style="display: flex;flex-direction: column">
        <div v-for="(item, idx) of array" :key="item" style="color: white; margin-left: 4px; margin-right: 4px; display: flex; gap: 4px;">
            <div>
                <span style="color: white" v-if="typeof item === 'string'">"</span>
                <span style="color: violet">{{ item }}</span>
                <span style="color: white" v-if="typeof item === 'string'">"</span>
            </div>
            <span v-if="idx !== array.length - 1">,</span>
        </div>
    </div>
</template>
