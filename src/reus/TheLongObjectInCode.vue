<script setup lang="ts">
import {defineProps} from 'vue'
defineProps<{
    object: Object
}>()

</script>

<template>
    <div class="tw_long_object">
        {
        <div v-for="([key, value], idx) of Object.entries(object)" :key="key" class="tw_long_object__item">
            <span class="tw_object_violet">{{ key }}:</span>
            <span style="display: flex">
                <span v-if="typeof value === 'string'">"</span>
                {{ value }}
                <span v-if="typeof value === 'string'">"</span>
                <span v-if="idx !== Object.keys(object).length - 1">,</span>
            </span>
        </div>
        },
    </div>
</template>
