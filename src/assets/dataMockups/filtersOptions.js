import { breedFilter } from "../../redux/actions"

import { dogBreeds } from "../petsBreeds/dogBreeds"
import { catBreeds } from "../petsBreeds/catBreeds"

const dogsB = dogBreeds.map(e => e.name)
const catsB = catBreeds.map(e => e.name)


export const breedHandler =(value)=>{
  breedFilter(value)
}



export const filtersOptionsDogs = [
  {
    type: 'Raza',
    options: dogsB,
    handlerFunction: breedHandler
  },
  {
    type: 'Edad',
    options: ['Puppy', 'Young', 'Adult', 'Senior'],
    handlerFunction: null
  },
  {
    type: 'Tamaño',
    options: ['Small (0-25 lbs)', 'Medium (26-60 lbs)', 'Large (61-100 lbs)', 'Extra Large (101 lbs or more)'],
    handlerFunction: null
  },
  {
    type: 'Sexo',
    options: ['Male', 'Female'],
    handlerFunction: null
  },
  {
    type: 'Afinidad con',
    options: ['Niños', 'Otros perros', 'Gatos'],
    handlerFunction: null
  },
  {
    type: 'Pelaje',
    options: ['Sin pelo', 'Corto', 'Mediano', 'Largo', 'Ondulado','Enrulado' ],
    handlerFunction: null
  },
  {
    type: 'Color',
    options: ['Beige', 'Bicolor', 'Negro'],
    handlerFunction: null
  },
  {
    type: 'Cuidado y \nComportamiento',
    options: ['Hogareño', 'Necesidades Especiales'],
    handlerFunction: null
  },
  {
    type: 'Tiempo en Adopción',
    options: ['1', '7', '14', '+30'],
    handlerFunction: null
  },
  {
    type: 'Refugios',
    options: ['Prueba1', 'Prueba2'],
    handlerFunction: null
  }
]

export const filtersOptionsCats = [
  {
    type: 'Raza',
    options: catsB,
    handlerFunction: null
  },
  {
    type: 'Edad',
    options: ['Kitten', 'Young', 'Adult', 'Senior'],
    handlerFunction: null
  },
  {
    type: 'Tamaño',
    options: ['Small (0-6 lbs)', 'Medium (7-11 lbs)', 'Large (12-16 lbs)', 'Extra Large (17 lbs or more)'],
    handlerFunction: null
  },
  {
    type: 'Sexo',
    options: ['Male', 'Female'],
    handlerFunction: null
  },
  {
    type: 'Afinidad con',
    options: ['Niños', 'Perros', 'Otros gatos'],
    handlerFunction: null
  },
  {
    type: 'Pelaje',
    options: ['Sin pelo', 'Corto', 'Mediano', 'Largo'],
    handlerFunction: null
  },
  {
    type: 'Color',
    options: ['Black & White / Tuxedo', 'Blue Cream', 'Blue Point', 'Brown / Chocolate', 'Buff & White', 'Buff / Tan / Fawn', 'Calico', 'Chocolate Point', 'Cream / Ivory', 'Cream Point', 'Dilute Calico', 'Dilute Tortoiseshell', 'Flame Point', 'Gray & White', 'Gray / Blue / Silver', 'Lilac Point', 'Orange & White', 'Orange / Red', 'Seal Point', 'Smoke', 'Tabby (Brown / Chocolate)', 'Tabby (Buff / Tan / Fawn)', 'Tabby (Gray / Blue / Silver)', 'Tabby (Leopard / Spotted)', 'Tabby (Orange / Red)', 'Tabby (Tiger Striped)', 'Torbie', 'Tortoiseshell', 'White'],
    handlerFunction: null
  },
  {
    type: 'Cuidado y Comportamiento',
    options: ['Hogareño', 'Necesidades Especiales'],
    handlerFunction: null
  },
  {
    type: 'Tiempo en Adopción',
    options: ['1', '7', '14', '+30'],
    handlerFunction: null
  },
  {
    type: 'Refugios',
    options: ['Prueba1', 'Prueba2'],
    handlerFunction: null
  }
]