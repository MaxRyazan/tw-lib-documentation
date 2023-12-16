<script setup lang="ts">
import {shallowRef} from "vue";
import SubHeader from "@/components/SubHeader.vue";
import TwButtonDescription from "@/documents/subcomponents/tw-button-sub/TwButtonDescription.vue";
import TwButtonApi from "@/documents/subcomponents/tw-button-sub/TwButtonApi.vue";
import TwButtonSlots from "@/documents/subcomponents/tw-button-sub/TwButtonSlots.vue";

const currentSubComponent = shallowRef(TwButtonDescription)


</script>

<template>
    <div class="component">
        <sub-header
                @show-description="currentSubComponent = TwButtonDescription"
                @show-api="currentSubComponent = TwButtonApi"
                @show-slots="currentSubComponent = TwButtonSlots"
        />
        <transition name="subcomponent">
            <component class="sub_wrapper" :is="currentSubComponent"/>
        </transition>
    </div>
</template>
