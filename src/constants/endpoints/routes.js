const { REACT_APP_BACKEND_URL } = process.env;
const baseUrl = `${REACT_APP_BACKEND_URL}/api/v1.0`

export const URL_GET_ALL_PETS = `${baseUrl}/pets/`
export const URL_GET_PET_DETAIL = `${baseUrl}/pets/`

export const URL_TYPE_FILTER = `${baseUrl}/pets`
export const URL_CITY_FILTER = `${baseUrl}/pets?`
export const URL_COUNTRY_FILTER = `${baseUrl}/pets?country=`

//Favs
export const URL_GET_FAVS = `${baseUrl}/pets/favourite/`
export const URL_GET_ALL_AND_FAVS = `${baseUrl}/pets`
export const URL_POST_FAVS = `${baseUrl}/pets/favourite/`
export const URL_DELETE_FAVS = `${baseUrl}/pets/favourite`