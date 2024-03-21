<script setup lang="ts">
const props = defineProps<{
    interface: {[key: string]: {dataType: string | boolean | number, title: string}}
    interfaceName: string
}>()
</script>

<template>
    <div class="tw_interfaces">
        <div class="tw_int_keyword">
            <span class="tw_int_keyword__keyword">interface</span>
            <span class="tw_int_keyword__int_name">{{props.interfaceName}} {</span>
        </div>
        <div class="tw_int_fields">
            <span class="tw_int_fields__list tw_int_list" v-for="[key, value] of Object.entries(props.interface) ">
                <div v-if="key !== 'name'">
                    <span :title="value.title" class="tw_int_list__key">{{key}}</span>
                    <span class="tw_int_list__dot">:</span>
                    <span class="tw_int_list__value">{{value.dataType}}</span>
                </div>
            </span>
        </div>
        <span class="tw_int_keyword__int_name">}</span>
    </div>
</template>
<style scoped lang="scss">
.tw_interfaces {
  padding: 5px;
}
.tw_int_keyword {
  display: flex;
  gap: 5px;
  &__keyword {
    color: var(--tw_orange);
    line-height: 20px;
  }
  &__int_name {
    color: var(--tw_white_black);
    line-height: 20px;
  }
}
.tw_int_fields {
  padding-left: 20px;
}
.tw_int_list {
  display: flex;
  line-height: 20px;
  &__key {
    cursor: help;
    color: var(--s_variable_color);
  }
  &__value {
    color: var(--tw_orange);
    padding-left: 5px;
  }
  &__dot {
    padding-left: 1px;
    color: var(--tw_white_black);
  }
}
</style>