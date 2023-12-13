<script setup lang="ts">
import {defineProps} from 'vue'
defineProps<{
    object: Object
}>()

</script>

<template>
    <div style="display: flex">
        {
        <div v-for="([key, value], idx) of Object.entries(object)" :key="key" style="color: white; margin-left: 4px; margin-right: 4px; display: flex; gap: 4px;">
            <span style="color: violet">{{ key }}:</span>
            <span style="display: flex">
                <span v-if="typeof value === 'string'">"</span>
                {{ value }}
                <span v-if="typeof value === 'string'">"</span>
                <span v-if="idx !== Object.keys(object).length - 1">,</span>
            </span>
        </div>
        }
    </div>
</template>
