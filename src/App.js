import { Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home';
import PetCare from './components/PetCare/PetCare';
import Login from './components/Login/Login';


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} /> 
        {/* <Route path='/about-us' element={<AboutUs />} /> */}
        {/* <Route path='/register' element={<Register />} /> */}
        <Route path='/login' element={<Login  />} />
        {/* <Route path='/searcher' element={<Searcher />} /> */}
        <Route path='/pet-care' element={<PetCare />} />
        {/* <Route path='/pet-detail' element={<PetDetail />} /> */} 
        {/* <Route path='/user' element={<User />} /> */}
      </Routes>
    </div>
  );
}

export default App;
