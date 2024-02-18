<script setup lang="ts">
import {shallowRef} from "vue";
import SubHeader from "@/components/SubHeader.vue";
import TwCheckboxDescription from "@/documents/subcomponents/tw-checkbox/TwCheckboxDescription.vue";
import TwCheckboxApi from "@/documents/subcomponents/tw-checkbox/TwCheckboxApi.vue";
import TwCheckboxSlots from "@/documents/subcomponents/tw-checkbox/TwCheckboxSlots.vue";

const currentSubComponent = shallowRef(TwCheckboxDescription)


</script>

<template>
    <div class="component">
        <sub-header
                @show-description="currentSubComponent = TwCheckboxDescription"
                @show-api="currentSubComponent = TwCheckboxApi"
                @show-slots="currentSubComponent = TwCheckboxSlots"
        />
        <transition name="subcomponent">
            <component class="sub_wrapper" :is="currentSubComponent"/>
        </transition>
    </div>
</template>
