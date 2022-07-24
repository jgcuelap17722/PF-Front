import { dogBreeds } from "../petsBreeds/dogBreeds"
import { catBreeds } from "../petsBreeds/catBreeds"
import { foundations } from "../organizations/spanishOrganizations"
import { colorsFavs } from "../petsBreeds/colorsAndSizes"
import { mixedBreeds } from "../petsBreeds/mixedBreeds"

const dogsB = dogBreeds.map(e => e.name)
const catsB = catBreeds.map(e => e.name)
const organizationsNames = foundations.map(e => e.name)


export const filtersOptionsDogs = [
  {
    type: 'Raza',
    options: dogsB,
  },
  {
    type: 'Edad',
    options: ['Cachorro', 'Joven', 'Adulto', 'Adulto Mayor'],

  },
  {
    type: 'Tamaño',
    options: ['Pequeño (0-25 lbs)', 'Mediano (26-60 lbs)', 'Grande (61-100 lbs)', 'Extra Grande (101 lbs o más)'], 
  },
  {
    type: 'Sexo',
    options: ['Macho', 'Hembra'],
  },
  {
    type: 'Afinidad con',
    options: ['Niños', 'Perros', 'Gatos'],
  },
  {
    type: 'Pelaje',
    options: ['Sin pelo', 'Corto', 'Mediano', 'Largo', 'Ondulado', 'Rizado'],
  },
  {
    type: 'Color',
    options: ['Amarillo / Bronceado / Rubio /', 'Arlequín', 'Atigrado', 'Beige', 'Bicolor', 'Blanco / Crema', 'Golden', 'Gris / Azulado / Plata', 'Marrón / Chocolate', 'Merlé (Azul)', 'Merlé (Rojo)', 'Negro', 'Rojo / Castaño / Naranja', 'Sable', 'Tricolor (Marrón, Negro y Blanco)'],
  },
  {
    type: 'Cuidado y Comportamiento',
    options: ['Hogareño', 'Cuidados Especiales'],
  },
  {
    type: 'Tiempo en Adopción',
    options: ['Más Reciente', 'Más Antiguo'],
  },
  {
    type: 'Refugios',
    options: organizationsNames,
  }
]

export const filtersOptionsCats = [
  {
    type: 'Raza',
    options: catsB,
  },
  {
    type: 'Edad',
    options: ['Cachorro', 'Joven', 'Adulto', 'Adulto Mayor'],
  },
  {
    type: 'Tamaño',
    options: ['Pequeño (0-6 lbs)', 'Mediano (7-11 lbs)', 'Grande (12-16 lbs)', 'Extra Grande (17 lbs o más)'],
  },
  {
    type: 'Sexo',
    options: ['Macho', 'Hembra'],
  },
  {
    type: 'Afinidad con',
    options: ['Niños', 'Perros', 'Otros Gatos'],
  },
  {
    type: 'Pelaje',
    options: ['Sin pelo', 'Corto', 'Mediano', 'Largo', 'Ondulado', 'Rizado'],
  },
  {
    type: 'Color',
    options: ['Ante / Bronceado / Beige', 'Ante y Blanco', 'Azul Crema', 'Blanco', 'Calicó', 'Siamés Crema', 'Crema / Marfil', 'Dilute Calicó', 'Dilute Tortoiseshell', 'Gris / Azulado / Plata', 'Gris y Blanco', 'Lilac Point', 'Marrón / Chocolate', 'Naranja y Blanco', 'Naranja y Rojo', 'Persa Smoke', 'Siamés ', 'Siamés Chocolate', 'Siamés Red Point', 'Siamés Seal Point', 'Tabby (Ante / Bronceado / Beige)', 'Tabby (Atigrado)', 'Tabby (Gris / Azulado / Plata)', 'Tabby (Leopardo / Manchado)', 'Tabby (Marrón / Chocolate)', 'Tabby (Naranja / Rojo)', 'Torbie', 'Tortoiseshell', 'Banco y Negro'],
  },
  {
    type: 'Cuidado y Comportamiento',
    options: ['Hogareño', 'Cuidados Especiales'],
  },
  {
    type: 'Tiempo en Adopción',
    options: ['Más Reciente', 'Más Antiguo'],
  },
  {
    type: 'Refugios',
    options: organizationsNames,
  }
]

export const filtersOptionsFavs = [
  {
    type: 'Raza',
    options: mixedBreeds,
  },
  {
    type: 'Edad',
    options: ['Cachorro', 'Joven', 'Adulto', 'Adulto Mayor'],
  },
  {
    type: 'Tamaño',
    options: ['Pequeño (0-6 lbs)', 'Mediano (7-11 lbs)', 'Grande (12-16 lbs)', 'Extra Grande (17 lbs o más)'],
  },
  {
    type: 'Sexo',
    options: ['Macho', 'Hembra'],
  },
  {
    type: 'Afinidad con',
    options: ['Niños', 'Perros', 'Otros Gatos'],
  },
  {
    type: 'Pelaje',
    options: ['Sin pelo', 'Corto', 'Mediano', 'Largo', 'Ondulado', 'Rizado'],
  },
  {
    type: 'Color',
    options: colorsFavs,
  },
  {
    type: 'Cuidado y Comportamiento',
    options: ['Hogareño', 'Cuidados Especiales'],
  },
  {
    type: 'Tiempo en Adopción',
    options: ['Más Reciente', 'Más Antiguo'],
  },
  {
    type: 'Refugios',
    options: organizationsNames,
  }
]


