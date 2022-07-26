
export const breed = (data, param) =>{
  data = data.filter(e => e.breed === param)
}
export const age = (data, param) =>{
  data = data.filter(e => e.age === param)
}
export const size = (data, param) =>{
  data = data.filter(e => e.size.split(' ')[0] === param)
}
export const genre = (data, param) =>{
  data = data.filter(e => e.size.split(' ')[0] === param)
}
export const environment = (data, param) =>{
  data = data.filter(e => e.size.split(' ')[0] === param)
}
export const coat = (data, param) =>{
  data = data.filter(e => e.size.split(' ')[0] === param)
}
export const color = (data, param) =>{
  data = data.filter(e => e.size.split(' ')[0] === param)
}
export const attributes = (data, param) =>{
  data = data.filter(e => e.size.split(' ')[0] === param)
}
export const days = (data, param) =>{
  data = data.filter(e => e.size.split(' ')[0] === param)
}
export const shelter = (data, param) =>{
  data = data.filter(e => e.size.split(' ')[0] === param)
}


// case BREED_FILTER:
//   return {
//     ...state,
//     petsFiltered: state.filterActive[0] === "Raza" ? state.petsAvailables.filter(e => e.breed === action.payload) : state.petsFiltered.filter(e => e.breed === action.payload),
//     filterActive: state.filterActive.filter(e => e === 'Raza').length < 1 ? [...state.filterActive, 'Raza'] : state.filterActive,
//     filterDisplayed: state.filterActive[0] === "Raza" ? [action.payload] : [...state.filterDisplayed, action.payload]
//   }
// case AGE_FILTER:
//   return {
//     ...state,
//     petsFiltered: state.filterActive[0] === 'Edad' ? state.petsAvailables.filter(e => e.age === action.payload) : state.petsFiltered.filter(e => e.age === action.payload),
//     filterActive: state.filterActive.filter(e => e === 'Edad').length < 1 ? [...state.filterActive, 'Edad'] : state.filterActive,
//     filterDisplayed: state.filterActive[0] === "Edad" ? [action.payload] : [...state.filterDisplayed, action.payload]
//   }

// case SIZE_FILTER:

//   return {
//     ...state,
//     petsFiltered: state.filterActive[0] === 'Tamaño' ? state.petsAvailables.filter(e => e.size.split(' ')[0] === action.payload) : state.petsFiltered.filter(e => e.size.split(' ')[0] === action.payload),
//     filterActive: state.filterActive.filter(e => e === 'Tamaño').length < 1 ? [...state.filterActive, 'Tamaño'] : state.filterActive,
//     filterDisplayed: state.filterActive[0] === "Tamaño" ? [action.payload] : [...state.filterDisplayed, action.payload]
//   }

// case GENRE_FILTER:
//   return {
//     ...state,
//     petsFiltered: state.filterActive[0] === "Sexo" ? state.petsAvailables.filter(e => e.gender === action.payload) : state.petsFiltered.filter(e => e.gender === action.payload),
//     filterActive: state.filterActive.filter(e => e === 'Sexo').length < 1 ? [...state.filterActive, 'Sexo'] : state.filterActive,
//     filterDisplayed: state.filterActive[0] === "Sexo" ? [action.payload] : [...state.filterDisplayed, action.payload]
//   }

// case ENVIRONMENT_FILTER:

//   const enviromentDisplayed = action.payload === 'dogs' ? 'Perros' : action.payload === 'cats' ? 'Gatos' : 'Niños'

//   return {
//     ...state,
//     petsFiltered: state.filterActive[0] === 'Afinidad Con' ? state.petsAvailables.filter(e => e.environment[`${action.payload}`] === true) : state.petsFiltered.filter(e => e.environment[`${action.payload}`] === true),
//     filterActive: state.filterActive.filter(e => e === 'Afinidad Con').length < 1 ? [...state.filterActive, 'Afinidad Con'] : state.filterActive,
//     filterDisplayed: state.filterActive[0] === "Afinidad Con" ? [enviromentDisplayed] : [...state.filterDisplayed, enviromentDisplayed]
//   }

// case COAT_FILTER:
//   return {
//     ...state,
//     petsFiltered: state.filterActive[0] === "Pelaje" ? state.petsAvailables.filter(e => e.coat === action.payload) : state.petsFiltered.filter(e => e.coat === action.payload),
//     filterActive: state.filterActive.filter(e => e === 'Pelaje').length < 1 ? [...state.filterActive, 'Pelaje'] : state.filterActive,
//     filterDisplayed: state.filterActive[0] === "Pelaje" ? [action.payload] : [...state.filterDisplayed, action.payload]
//   }

// case COLOR_FILTER:
//   return {
//     ...state,
//     petsFiltered: state.filterActive[0] === "Color" ? state.petsAvailables.filter(e => e.color.toLowerCase() === action.payload.toLowerCase()) : state.petsFiltered.filter(e => e.color.toLowerCase() === action.payload.toLowerCase()),
//     filterActive: state.filterActive.filter(e => e === 'Color').length < 1 ? [...state.filterActive, 'Color'] : state.filterActive,
//     filterDisplayed: state.filterActive[0] === "Color" ? [action.payload] : [...state.filterDisplayed, action.payload]
//   }

// case ATTRIBUTES_FILTER:

//   let attributeDisplated = action.payload.toLowerCase() === 'house_trained' ? 'Hogareño' : 'Cuidados Especiales'


//   return {
//     ...state,
//     petsFiltered: state.filterActive[0] === "Cuidado y Comportamiento" ? state.petsAvailables.filter(e => e.attributes[`${action.payload}`] === true) : state.petsFiltered.filter(e => e.attributes[`${action.payload}`] === true),
//     filterActive: state.filterActive.filter(e => e === 'Cuidado y Comportamiento').length < 1 ? [...state.filterActive, 'Cuidado y Comportamiento'] : state.filterActive,
//     filterDisplayed: state.filterActive[0] === "Cuidado y Comportamiento" ? [attributeDisplated] : [...state.filterDisplayed, attributeDisplated]
//   }
// case DAYS_FILTER:

//   const petsIteratedByDays = state.filterActive[0] === "Tiempo en Adopción" ? state.petsAvailables : state.petsFiltered

//   return {
//     ...state,
//     petsFiltered: petsIteratedByDays.sort((a, b) => {
//       if (action.payload === 'older') {
//         return a.status_changed_at - b.status_changed_at
//       } else {
//         return b.status_changed_at - a.status_changed_at
//       }
//     }),
//     filterActive: state.filterActive.filter(e => e === 'Tiempo en Adopción').length < 1 ? [...state.filterActive, 'Tiempo en Adopción'] : state.filterActive,
//     filterDisplayed: state.filterActive[0] === "Tiempo en Adopción" ? [action.payload] : [...state.filterDisplayed, action.payload]
//   }


// case SHELTER_FILTER:

//   const petsIteratedByShelter = state.filterActive[0] === "Refugios" ? state.petsAvailables : state.petsFiltered
//   const [shelterId] = organizations.filter(e => e.name === action.payload)

//   return {
//     ...state,
//     petsFiltered: petsIteratedByShelter.filter(e => e.organization_id === shelterId.id),
//     filterActive: state.filterActive.filter(e => e === 'Refugios').length < 1 ? [...state.filterActive, 'Refugios'] : state.filterActive,
//     filterDisplayed: state.filterActive[0] === "Refugios" ? [action.payload] : [...state.filterDisplayed, action.payload]
//   }
