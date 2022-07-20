import { dogBreeds } from "./dogBreeds";
import { catBreeds } from "./catBreeds";

const dogsB = dogBreeds.map(e => e.name)
const catsB = catBreeds.map(e => e.name)

const mix = [...dogsB, ...catsB]

const mixAndSort = mix.sort()

const mixAndFilter = new Set(mixAndSort)

export const mixedBreeds = [...mixAndFilter]