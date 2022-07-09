import dogIcon from '../../assets/icons/DogIcon.svg'
import catIcon from '../../assets/icons/CatIcon.svg'
import animalsIcon from '../../assets/icons/AnimalsIcon.svg'
import sherlterIcon from '../../assets/icons/ShelterIcon.svg'
 

const filterDogs = () => {
  return
}

const filterCats = () => {
  return
}
const filterAnimals = () => {
  return
}
const filterShelters = () => {
  return
}

export const filtersInfo = [
  {
    icon: dogIcon,
    type: 'PERROS',
    handlerFunction: filterDogs
  },
  {
    icon: catIcon,
    type: 'GATOS',
    handlerFunction: filterCats
  },
  {
    icon: animalsIcon,
    type: 'OTROS ANIMALES',
    handlerFunction: filterAnimals
  },
  {
    icon: sherlterIcon,
    type: 'REFUGIOS',
    handlerFunction: filterAnimals
  }
]