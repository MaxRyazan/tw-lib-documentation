<script setup lang="ts">

const props = defineProps<{
    async?: boolean
}>()
</script>

<template>
    <div class="tw_function">
        <div style="display: flex; gap: 5px;">
            <span v-if="props.async" class="tw_mounted__keyword">async</span>
            <span class="tw_mounted__name">onMounted</span>
            <span class="tw_mounted__brackets">(() => {</span>
        </div>
        <slot />
        <span class="tw_mounted__brackets">}</span>
    </div>
</template>

<style scoped lang="scss">
.tw_mounted {
  color: white;
  &__keyword {
    color: var(--tw_orange);
  }
  &__name {
    color: var(--s_code_tag);
  }
  &__brackets {
    color: var(--tw_white_black);
  }
}
</style>