<script setup>
import {Themes} from "@/themes.ts";
import {useStore} from "@/store.ts";

const store = useStore()
</script>

<template>
    <div>
        <div class="component">
            <p :class="{'dark_text_shadow': store.theme === Themes.dark}" class="component__title">
                <slot name="description" />
            </p>
            <slot name="exampleAndCode"/>
        </div>
    </div>
</template>
