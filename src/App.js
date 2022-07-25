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
import DonationsConfirm from './components/Donations/DonationsConfirm.jsx';
import Searcher from './components/Searcher/Searcher';
import EmailConfirm from './components/EmailConfirm/EmailConfirm';
import EmailConfirmed from './components/EmailConfirmed/EmailConfirmed';
import Favorites from './components/Favorites/index.jsx';
import DashboardUser from './components/Dashboard/DashboardUser.jsx';
import DashboardFoundation from './components/Dashboard/DashboardFundation.jsx';
import DashboardUserDonations from './components/Dashboard/DashboardUserDonations.jsx'
import DashboardAdoptante from './components/Dashboard/DashboardAdoptante.jsx'
import PwReset from './components/PwReset/PwReset';
import PwResetConfirm from './components/PwResetConfirm/PwResetConfirm';
import Review  from './components/ReviewComponent/ReviewComponent.jsx'
import Foundations from './components/Foundations/Foundations'
import FoundationsDetail from './components/FoundationDetail/FoundationDetail.jsx'
import MatchTestQuizz from './components/MatchTestQuizz/MatchTestQuizz'

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
        <Route path='/searcher/:type/:item/:subItem' element={<Searcher />}/>
        <Route path='/sponsor' element={<Donations />}/>
        <Route path='/sponsor/confirm' element={<DonationsConfirm />}/>
        <Route path='/pet-care' element={<PetCare />} />
        <Route path='/pet-detail/:id' element={<PetDetail />} /> 
        {/* <Route path='/user' element={<User />} /> */}
        <Route path='/create-pet' element={user || Object.keys(usuario).length > 0? <CreatePet />: <Navigate replace to="/login"/>} /> 
        {/* <Route path='/dashboard' element={user || Object.keys(usuario).length > 0?  <Dashboard/> : <Navigate replace to="/login"/>} /> */}
        <Route path='/review/:id' element={<Review/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='/dashboard/mascotas' element={<DashboardUser/>} />
        <Route path='/dashboard/foundation' element={<DashboardFoundation/>} />
        <Route path='/dashboard/donations' element={<DashboardUserDonations/>} />
        <Route path='/dashboard/adoptante' element={<DashboardAdoptante/>} />
        <Route path='/email-confirmed/api/v1.0/verify/tk/:token' element={<EmailConfirmed />} />
        <Route path='/email-confirm' element={<EmailConfirm />} />
        <Route path='/favorites' element={<Favorites />} />
        <Route path='/foundations' element={<Foundations />} />
        <Route path='/foundation/:id' element={<FoundationsDetail />} />
        <Route path='/reset' element={<PwReset />} />
        <Route path='/reset/confirm/api/v1.0/verify/modpass/:token' element={<PwResetConfirm />} />
        <Route path='/quizz' element={<MatchTestQuizz />} />
        <Route path='*' element={<Navigate replace to="/"/>} />
      </Routes>
    </div>
  );
}

export default App;
