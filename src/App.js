import Home from './components/Home/Home.js';
import { Route, Routes } from 'react-router-dom';
import PetCare from './components/PetCare/PetCare';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import PetDetail from './components/PetDetail/PetDetail';
import Dashboard from './components/Dashboard/Dashboard.jsx';
import CreatePet from './components/CreatePet/CreatePet';




function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} /> 
        {/* <Route path='/about-us' element={<AboutUs />} /> */}
        <Route path='/register' element={<SignUp />} />
        <Route path='/login' element={<Login  />} />
        {/* <Route path='/searcher' element={<Searcher />} /> */}
        <Route path='/pet-care' element={<PetCare />} />
        <Route path='/pet-detail/:id' element={<PetDetail />} /> 
        {/* <Route path='/user' element={<User />} /> */}
        <Route path='/create-pet' element={<CreatePet />} /> 
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
