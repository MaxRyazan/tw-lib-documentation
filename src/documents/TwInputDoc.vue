<script setup>
import SubHeader from "@/components/SubHeader.vue";
import {shallowRef} from "vue";
import TwInputDescription from "@/documents/subcomponents/tw-input-sub/TwInputDescription.vue";
import TwInputApi from "@/documents/subcomponents/tw-input-sub/TwInputApi.vue";
import TwInputSlots from "@/documents/subcomponents/tw-input-sub/TwInputSlots.vue";

const currentSubComponent = shallowRef(TwInputDescription)
</script>

<template>
    <div class="component">
        <sub-header
                @show-description="currentSubComponent = TwInputDescription"
                @show-api="currentSubComponent = TwInputApi"
                @show-slots="currentSubComponent = TwInputSlots"
        />
        <transition name="subcomponent">
            <component class="sub_wrapper" :is="currentSubComponent"/>
        </transition>
    </div>

</template>

<style scoped lang="scss">

</style>