<script setup>
import {shallowRef} from "vue";
import TwTableBaseDescription from "@/documents/subcomponents/tw-table-balse-sub/TwTableBaseDescription.vue";
import SubHeader from "@/components/SubHeader.vue";
import TwTableBaseApi from "@/documents/subcomponents/tw-table-balse-sub/TwTableBaseApi.vue";
import TwTableBaseSlots from "@/documents/subcomponents/tw-table-balse-sub/TwTableBaseSlots.vue";

const currentSubComponent = shallowRef(TwTableBaseDescription)

</script>

<template>
    <div class="component">
        <sub-header
            @show-description="currentSubComponent = TwTableBaseDescription"
            @show-api="currentSubComponent = TwTableBaseApi"
            @show-slots="currentSubComponent = TwTableBaseSlots"
        />
        <transition name="subcomponent">
            <component class="sub_wrapper" :is="currentSubComponent" />
        </transition>

    </div>
</template>
