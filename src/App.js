import Home from './components/Home/Home.js';
import { Route, Routes, Navigate  } from 'react-router-dom';
import PetCare from './components/PetCare/PetCare';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import PetDetail from './components/PetDetail/PetDetail';
import Dashboard from './components/Dashboard/Dashboard.jsx';
import CreatePet from './components/CreatePet/CreatePet';
import Searcher from './components/Searcher/Searcher'
import { useState } from 'react';
import { useSelector } from 'react-redux';



function App() {
  const [user, setUser] = useState(localStorage.getItem('user'))
  const usuario = useSelector((state)=> state.userLogged)

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} /> 
        {/* <Route path='/about-us' element={<AboutUs />} /> */}
        <Route path='/register' element={<SignUp />} />
        <Route path='/login' element={<Login  />} />

        {/* SEARCHER: SOLO FUNCIONA CON 2 PETTYPE Dog Y Cat */}
        <Route path='/searcher/:petType' element={<Searcher />}/>
        <Route path='/pet-care' element={<PetCare />} />
        <Route path='/pet-detail/:id' element={<PetDetail />} /> 
        {/* <Route path='/user' element={<User />} /> */}
        <Route path='/create-pet' element={user || Object.keys(usuario).length > 0? <CreatePet />: <Navigate replace to="/login"/>} /> 
        <Route path='/dashboard' element={user || Object.keys(usuario).length > 0?  <Dashboard/> : <Navigate replace to="/login"/>} />
        <Route path='*' element={<Navigate replace to="/"/>} />
      </Routes>
    </div>
  );
}

export default App;
