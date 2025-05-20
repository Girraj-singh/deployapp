import React from 'react';
import Login from './components/Login';
import Profile from './components/Profile';
import Signin from './pages/Signin/Signin';
import Pagination from './pages/Pagination/Pagination';
import './App.css';
import { Route, Routes , Link , useNavigate , useLocation, useParams, useSearchParams, useMatch, useResolvedPath, useOutlet, useOutletContext} from 'react-router-dom';

function App() {
  return (
    <>
    <Routes>
        <Route path="/login"  element={<Login />} />
        <Route path="/signin"  element={<Signin />} />
        <Route path='/pagination' element={<Pagination />} />
    </Routes>
  

    </>
  );
}

export default App;
