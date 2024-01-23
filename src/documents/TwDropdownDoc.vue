<script setup lang="ts">
import {shallowRef} from "vue";
import SubHeader from "@/components/SubHeader.vue";
import TwDropdownDescription from "@/documents/subcomponents/tw-dropdown-sub/TwDropdownDescription.vue";
import TwDropdownSlots from "@/documents/subcomponents/tw-dropdown-sub/TwDropdownSlots.vue";
import TwDropdownApi from "@/documents/subcomponents/tw-dropdown-sub/TwDropdownApi.vue";


const currentSubComponent = shallowRef(TwDropdownDescription)


</script>

<template>
    <div class="component">
        <sub-header
                @show-description="currentSubComponent = TwDropdownDescription"
                @show-api="currentSubComponent = TwDropdownApi"
                @show-slots="currentSubComponent = TwDropdownSlots"
        />
        <transition name="subcomponent">
            <component class="sub_wrapper" :is="currentSubComponent"/>
        </transition>
    </div>
</template>
