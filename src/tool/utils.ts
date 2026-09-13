import { Random } from "./random";

export const Utils = {
    
    getRandomInt(min : number, max : number) {
        const minCeil = Math.ceil(min);
        const maxFloor= Math.floor(max);
        return Math.floor(Math.random() * (maxFloor - minCeil) + minCeil);
    },
    getSeedRandomInt(min : number, max : number, seed : bigint) {
        const minCeil = Math.ceil(min);
        const maxFloor= Math.floor(max);
        return Math.floor(Random.random(seed) * (maxFloor - minCeil) + minCeil);
    },

    getRandomFloat(min : number, max : number) {
        return (Math.random() * (max - min) + min);
    },
    getSeedRandomFloat(min : number, max : number, seed : bigint) {
        return (Random.random(seed) * (max - min) + min);
    },
    getSeedRandomFloatDistribute(min : number, max : number, seed : bigint, fn : (x : number) => number) {
        return (fn(Random.random(seed)) * (max - min) + min);
    }
}