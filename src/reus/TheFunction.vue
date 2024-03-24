<script setup lang="ts">
const props = defineProps<{
    funcName: string
    arg?: string
    async?: boolean
}>()
</script>

<template>
<div class="tw_function">
    <div style="display: flex; gap: 5px;">
        <span v-if="props.async" class="tw_function__keyword">async</span>
        <span class="tw_function__keyword">function</span>
        <span class="tw_function__name">{{funcName}}</span>
        <span class="tw_function__brackets">({{arg}}) {</span>
    </div>
    <slot />
    <span class="tw_function__brackets">}</span>
</div>
</template>

<style scoped lang="scss">
.tw_function {
  color: white;
  &__keyword {
    color: var(--tw_orange);
  }
  &__name {
    color: var(--s_variable_color);
  }
  &__brackets {
    color: var(--tw_white_black);
  }
}
</style>