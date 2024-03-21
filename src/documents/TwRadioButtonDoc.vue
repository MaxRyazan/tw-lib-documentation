<script setup lang="ts">
import SubHeader from "@/components/SubHeader.vue";
import {shallowRef} from "vue";
import TwRadioButtonDescription from "@/documents/subcomponents/tw-radiobutton/TwRadioButtonDescription.vue";
import TwRadioButtonApi from "@/documents/subcomponents/tw-radiobutton/TwRadioButtonApi.vue";
import TwRadioButtonSlots from "@/documents/subcomponents/tw-radiobutton/TwRadioButtonSlots.vue";

const currentSubComponent = shallowRef(TwRadioButtonDescription)
</script>

<template>
    <div class="component">
        <sub-header
                @show-description="currentSubComponent = TwRadioButtonDescription"
                @show-api="currentSubComponent = TwRadioButtonApi"
                @show-slots="currentSubComponent = TwRadioButtonSlots"
        />
        <transition name="subcomponent">
            <component class="sub_wrapper" :is="currentSubComponent"/>
        </transition>
    </div>
</template>
