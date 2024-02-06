<script setup lang="ts">
import SubHeader from "@/components/SubHeader.vue";
import {shallowRef} from "vue";
import TwMultiDropdownDescription from "@/documents/subcomponents/tw-multi-dropdown/TwMultiDropdownDescription.vue";
import TwMultiDropdownApi from "@/documents/subcomponents/tw-multi-dropdown/TwMultiDropdownApi.vue";
import TwMultiDropdownSlots from "@/documents/subcomponents/tw-multi-dropdown/TwMultiDropdownSlots.vue";

const currentSubComponent = shallowRef(TwMultiDropdownDescription)
</script>

<template>
    <div class="component">
        <sub-header
                @show-description="currentSubComponent = TwMultiDropdownDescription"
                @show-api="currentSubComponent = TwMultiDropdownApi"
                @show-slots="currentSubComponent = TwMultiDropdownSlots"
        />
        <transition name="subcomponent">
            <component class="sub_wrapper" :is="currentSubComponent"/>
        </transition>
    </div>
</template>
