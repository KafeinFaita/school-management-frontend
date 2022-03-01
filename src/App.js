import { Routes,Route,Navigate } from 'react-router-dom';
import { useState } from 'react';
import { GlobalContext } from './helper/Context';

import DashboardLayout from './layouts/DashboardLayout';

import Signup from './pages/auth/Signup';
import Login from './pages/auth/Login';

import Dashboard from './pages/Dashboard';
import NotFound from './pages/NotFound';
import Reports from './pages/Reports';
import Profile from './pages/Profile';
import Admission from './pages/Admission';
import Enrollment from './pages/Enrollment';
import Registrar from './pages/Registrar';
import Finance from './pages/Finance';
import SchoolCalendar from './pages/SchoolCalendar';

function App() {

  // For protecting pages and allowing users to view certain page
  const [ isVerified, setIsVerified ] = useState(false);
  const [isAuthenticated,setIsAuthenticated] = useState(false);

  // Message for login page
  const [mssg,setMssg] = useState('');
  const [ errMssg,setErrMssg ] = useState('');
  // For Navbar
  const [isAuth,setIsAuth] = useState(false);

  return (
    <GlobalContext.Provider value={{ mssg,setMssg,isAuth,setIsAuth,isVerified, setIsVerified,isAuthenticated,setIsAuthenticated,errMssg,setErrMssg }}>
      <Routes>
        <Route path='/' element={ <Navigate to='/dashboard' /> } />
        <Route path='/signup' element={ <Signup /> } />
        <Route path='/login' element={ <Login /> } />
        
        <Route element={ <DashboardLayout /> }>
          <Route path='/dashboard' element={ <Dashboard /> } />
          <Route path='/reports' element={ <Reports /> } />
          <Route path='/profile' element={ <Profile /> } />
          <Route path='/admission' element={ <Admission /> } />
          <Route path='/enrollment' element={ <Enrollment /> } />
          <Route path='/registrar' element={ <Registrar /> } />
          <Route path='/finance' element={ <Finance /> } />
          <Route path='/school-calendar' element={ <SchoolCalendar /> } />
        </Route>
        
        
        <Route path="*" element={ <NotFound /> } />
      </Routes>
    </GlobalContext.Provider>
    
  );
}

export default App;
