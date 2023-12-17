import {ScreenSizes} from "../ScreenSizes";

export function getScreenSize():ScreenSizes{
    const width: number = window.innerWidth
    if(width > ScreenSizes.s1600) return ScreenSizes.s1900
    if(width >= ScreenSizes.s1600) return ScreenSizes.s1600
    if(width >= ScreenSizes.s1440) return ScreenSizes.s1440
    if(width >= ScreenSizes.s1280) return ScreenSizes.s1280
    if(width >= ScreenSizes.s1150) return ScreenSizes.s1150
    if(width >= ScreenSizes.s1024) return ScreenSizes.s1024
    if(width >= ScreenSizes.s900) return ScreenSizes.s900
    if(width >= ScreenSizes.s800) return ScreenSizes.s800
    if(width >= ScreenSizes.s640) return ScreenSizes.s640
    if(width >= ScreenSizes.s480) return ScreenSizes.s480
    if(width >= ScreenSizes.s320) return ScreenSizes.s320
    if(width >= ScreenSizes.s320) return ScreenSizes.s320
}