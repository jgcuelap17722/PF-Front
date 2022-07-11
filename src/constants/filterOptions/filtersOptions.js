import { dogBreeds } from "../petsBreeds/dogBreeds"
import { catBreeds } from "../petsBreeds/catBreeds"
import { organizations } from "../organizations/organizations"

const dogsB = dogBreeds.map(e => e.name)
const catsB = catBreeds.map(e => e.name)
const organizationsNames = organizations.map(e => e.name)


export const filtersOptionsDogs = [
  {
    type: 'Raza',
    options: dogsB,
  },
  {
    type: 'Edad',
    options: ['Puppy', 'Young', 'Adult', 'Senior'],

  },
  {
    type: 'Tamaño',
    options: ['Small (0-25 lbs)', 'Medium (26-60 lbs)', 'Large (61-100 lbs)', 'Extra Large (101 lbs or more)'],

  },
  {
    type: 'Sexo',
    options: ['Male', 'Female'],
  },
  {
    type: 'Afinidad con',
    options: ['Kids', 'Other dogs', 'Cats'],
  },
  {
    type: 'Pelaje',
    options: ['Hairless', 'Short', 'Medium', 'Long', 'Wire','Curly' ],
    },
  {
    type: 'Color',
    options: ['Apricot / Beige', 'Bicolor', 'Black', 'Brindle', 'Brown / Chocolate', 'Golden', 'Gray / Blue / Silver', 'Harlequin', 'Merle (Blue)', 'Merle (Red)', 'Red / Chestnut / Orange', 'Sable', 'Tricolor (Brown, Black, & White)', 'White / Cream', 'Yellow / Tan / Blond / Fawn'],
  },
  {
    type: 'Cuidado y Comportamiento',
    options: ['House-trained', 'Special Needs'],
  },
  {
    type: 'Tiempo en Adopción',
    options: ['1', '7', '14', '+30'],
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
    options: ['Kitten', 'Young', 'Adult', 'Senior'],
  },
  {
    type: 'Tamaño',
    options: ['Small (0-6 lbs)', 'Medium (7-11 lbs)', 'Large (12-16 lbs)', 'Extra Large (17 lbs or more)'],
  },
  {
    type: 'Sexo',
    options: ['Male', 'Female'],
  },
  {
    type: 'Afinidad con',
    options: ['Kids', 'Dogs', 'Other cats'],
  },
  {
    type: 'Pelaje',
    options: ['Hairless', 'Short', 'Medium', 'Long'],
  },
  {
    type: 'Color',
    options: ['Black & White / Tuxedo', 'Blue Cream', 'Blue Point', 'Brown / Chocolate', 'Buff & White', 'Buff / Tan / Fawn', 'Calico', 'Chocolate Point', 'Cream / Ivory', 'Cream Point', 'Dilute Calico', 'Dilute Tortoiseshell', 'Flame Point', 'Gray & White', 'Gray / Blue / Silver', 'Lilac Point', 'Orange & White', 'Orange / Red', 'Seal Point', 'Smoke', 'Tabby (Brown / Chocolate)', 'Tabby (Buff / Tan / Fawn)', 'Tabby (Gray / Blue / Silver)', 'Tabby (Leopard / Spotted)', 'Tabby (Orange / Red)', 'Tabby (Tiger Striped)', 'Torbie', 'Tortoiseshell', 'White'],
  },
  {
    type: 'Cuidado y Comportamiento',
    options: ['House-trained', 'Declawed', 'Special Needs'],
  },
  {
    type: 'Tiempo en Adopción',
    options: ['1', '7', '14', '+30'],
  },
  {
    type: 'Refugios',
    options: organizationsNames,
  }
]