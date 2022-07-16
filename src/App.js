import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes, Navigate  } from 'react-router-dom';
import Home from './components/Home/Home.js';
import PetCare from './components/PetCare/PetCare';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import PetDetail from './components/PetDetail/PetDetail';
import Dashboard from './components/Dashboard/Dashboard.jsx';
import CreatePet from './components/CreatePet/CreatePet';
import Donations from './components/Donations/Donations.jsx';
import Searcher from './components/Searcher/Searcher';
import EmailConfirm from './components/EmailConfirm/EmailConfirm';
import EmailConfirmed from './components/EmailConfirmed/EmailConfirmed';
import Favorites from './components/Favorites/Favorites.jsx';
import DashboardUser from './components/Dashboard/DashboardUser.jsx';
import DashboardFoundation from './components/Dashboard/DashboardFundation.jsx'
import PwReset from './components/PwReset/PwReset'
import PwResetConfirm from './components/PwResetConfirm/PwResetConfirm';


function App() {
  const [user, setUser] = useState(localStorage.getItem('user'))
  const usuario = useSelector((state)=> state.reducer.userLogged)

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} /> 
        {/* <Route path='/about-us' element={<AboutUs />} /> */}
        <Route path='/register' element={<SignUp />} />
        <Route path='/login' element={<Login  />} />
        {/* SEARCHER: SOLO FUNCIONA CON 2 PETTYPE Dog Y Cat */}
        <Route path='/searcher/:petType' element={<Searcher />}/>
        <Route path='/searcher/:type/:item' element={<Searcher />}/>
        <Route path='/sponsor' element={<Donations />}/>
        <Route path='/pet-care' element={<PetCare />} />
        <Route path='/pet-detail/:id' element={<PetDetail />} /> 
        {/* <Route path='/user' element={<User />} /> */}
        <Route path='/create-pet' element={user || Object.keys(usuario).length > 0? <CreatePet />: <Navigate replace to="/login"/>} /> 
        {/* <Route path='/dashboard' element={user || Object.keys(usuario).length > 0?  <Dashboard/> : <Navigate replace to="/login"/>} /> */}
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='/dashboard/mascotas' element={<DashboardUser/>} />
        <Route path='/dashboard/foundation' element={<DashboardFoundation/>} />
        <Route path='/email-confirmed/api/v1.0/verify/tk/:token' element={<EmailConfirmed />} />
        <Route path='/email-confirm' element={!user || !Object.keys(usuario).length < 1? <EmailConfirm />: <Navigate replace to="/"/>} />
        <Route path='/favorites' element={<Favorites />} />
        <Route path='/reset' element={<PwReset />} />
        <Route path='/reset/confirm/api/v1.0/verify/modpass/:token' element={<PwResetConfirm />} />
        <Route path='*' element={<Navigate replace to="/"/>} />
      </Routes>
    </div>
  );
}

export default App;
