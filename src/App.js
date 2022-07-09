import Home from './components/Home/Home.js';
import { Route, Routes } from 'react-router-dom';
import PetCare from './components/PetCare/PetCare';
import Login from './components/Login/Login';

import PetDetail from './components/PetDetail/PetDetail';
import CreatePet from './components/CreatePet/CreatePet';



function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} /> 
        {/* <Route path='/about-us' element={<AboutUs />} /> */}
        {/*<Route path='/register' element={<Register />} />*/}
        <Route path='/login' element={<Login  />} />
        {/* <Route path='/searcher' element={<Searcher />} /> */}
        <Route path='/pet-care' element={<PetCare />} />
        <Route path='/pet-detail' element={<PetDetail />} /> 
        {/* <Route path='/user' element={<User />} /> */}
        <Route path='/create-pet' element={<CreatePet />} /> 
      </Routes>
    </div>
  );
}

export default App;
