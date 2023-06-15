import { proxy } from "valtio";

const state = proxy({
    intro : true,
    color : "#9AFEFF",
    isLogoTexture : true,
    isFullTexture : false,
    logoDecal : './threejs.png',
    fullDecal : './threejs.png'

})

export default state