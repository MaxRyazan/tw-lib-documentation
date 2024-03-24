<script setup lang="ts">
defineProps<{
    as?: string
    m?: string
    bl_wh?: boolean
    orange?: boolean
    green?: boolean
    violet?: boolean
    yellow?: boolean
}>()
</script>

<template>
<component :style="{margin: m ?? '0 4px'}"
           :class="{tw_text_black_white : bl_wh, tw_text_var_orange: orange, tw_text_var_green: green, tw_text_var_violet: violet, tw_text_var_yellow: yellow }"
           :is="as ?? 'span'">
    <slot />
</component>
</template>

<style scoped lang="scss">
.tw_text_black_white {
  color: var(--tw_white_black);
}
.tw_text_var_orange {
  color: var(--tw_orange);
}
.tw_text_var_green {
  color: var(--s_description_text);
}
.tw_text_var_violet {
  color: var(--s_variable_color);
}
.tw_text_var_yellow {
  color: var(--s_code_tag);
}
</style>