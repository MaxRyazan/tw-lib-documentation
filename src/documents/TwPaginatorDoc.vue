<script setup lang="ts">
import SubHeader from "@/components/SubHeader.vue";
import {shallowRef} from "vue";
import TwPaginatorDescription from "@/documents/subcomponents/tw-paginator/TwPaginatorDescription.vue";
import TwPaginatorApi from "@/documents/subcomponents/tw-paginator/TwPaginatorApi.vue";
import TwPaginatorSlots from "@/documents/subcomponents/tw-paginator/TwPaginatorSlots.vue";

const currentSubComponent = shallowRef(TwPaginatorDescription)
</script>

<template>
    <div class="component">
        <sub-header
                @show-description="currentSubComponent = TwPaginatorDescription"
                @show-api="currentSubComponent = TwPaginatorApi"
                @show-slots="currentSubComponent = TwPaginatorSlots"
        />
        <transition name="subcomponent">
            <component class="sub_wrapper" :is="currentSubComponent"/>
        </transition>
    </div>
</template>
