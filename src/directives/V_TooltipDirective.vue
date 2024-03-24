<script setup lang="ts">
import {shallowRef} from "vue";
import SubHeader from "@/components/SubHeader.vue";
import V_TooltipDescription from "@/directives/subcomponents/v_tooltip/V_TooltipDescription.vue";
import V_TooltipApi from "@/directives/subcomponents/v_tooltip/V_TooltipApi.vue";

const currentSubComponent = shallowRef(V_TooltipDescription)


</script>

<template>
    <div class="component">
        <sub-header
                directive
                @show-description="currentSubComponent = V_TooltipDescription"
                @show-api="currentSubComponent = V_TooltipApi"
        />
        <transition name="subcomponent">
            <component class="sub_wrapper" :is="currentSubComponent"/>
        </transition>
    </div>
</template>
