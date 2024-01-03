import {defineStore} from "pinia";
import {Themes} from "./themes";

export const useStore = defineStore('store', {
    state: () => ({
        theme: Themes.dark as Themes
    })
})