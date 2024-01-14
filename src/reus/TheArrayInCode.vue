<script setup lang="ts">
import {defineProps} from 'vue'
defineProps<{
    array: Array<string|number>
}>()

</script>

<template>
    <div style="display: flex">
        <div v-for="(item, idx) of array" :key="item" style="color: white; margin-left: 4px; margin-right: 4px; display: flex; gap: 4px;">
            <div>
                <span class="tw_array_in_code" v-if="typeof item === 'string'">"</span>
                <span class="tw_object_violet">{{ item }}</span>
                <span class="tw_array_in_code" v-if="typeof item === 'string'">"</span>
            </div>
            <span class="tw_array_in_code" v-if="idx !== array.length - 1">,</span>
        </div>
    </div>
</template>
