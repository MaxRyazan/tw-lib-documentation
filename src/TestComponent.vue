<script setup>
import {ref} from "vue";

const test = ref('')
const test2 = ref('')
const test3 = ref('')
</script>

<template>
    <tw-input v-model="test"
              bgc="transparent"
              prefix_color="orange"
              prefix="Имя:"
              width="300px"
              inputWidth="30px"
    ></tw-input>
</template>

<style scoped lang="scss">

</style>