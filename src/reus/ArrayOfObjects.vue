<script setup lang="ts">


const props = defineProps<{
    constName: string
    array: Array<any>
    condition?: boolean
}>()
</script>

<template>
    <div class="tw-array">
        <div class="tw-array__item">
            <span class="tw-array__const">const </span>
            <span class="tw-array__const-name">{{ props.constName }} = </span>
            <span class="tw-array__reactive">reactive</span>
            <span class="tw-array__const-name">([</span>
        </div>
        <div style="margin-left: 10px">
            <div :style="{flexDirection: condition ? 'column' : 'row'}" style="display: flex; flex-wrap: wrap;" v-for="obj in array" :key="obj">
                <span class="tw-array__const-name">{</span>
                <div v-for="[key, value] of Object.entries(obj)">
                    <span class="tw-array__field-key">{{key}}</span>
                    <span>:</span>
                    <span class="tw-array__field-value">{{value}},</span>
                </div>
                <span class="tw-array__const-name">},</span>
            </div>
        </div>
        <span class="tw-array__const-name">])</span>
    </div>
</template>

<style scoped lang="scss">
.tw-array{
  &__const {
    color: #CC7832;
  }
  &__const-name {
    color: var(--s_code_attrs_color);
  }
  &__reactive {
    color: #CC7832;
  }
  &__field-key {
    color: #9876AA;
  }
  &__field-value {
    color: #6897BB;
  }
}
</style>