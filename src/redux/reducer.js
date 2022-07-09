import {} from './actions';

const initialState={
	allPets: [],
	petDetail: {},
	petsFiltered: [],
	newUser: {},
	userDetail: {},
	userLogged: {},
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    
    default:
      return state;
  }

}
