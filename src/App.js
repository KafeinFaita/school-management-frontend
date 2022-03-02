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

  // Message for login page
  const [mssg,setMssg] = useState('');
  // For Navbar
  const [role, setRole] = useState('')
  const [user, setUser] = useState('')

  return (
    <GlobalContext.Provider value={{ mssg,setMssg, user, setUser, role, setRole }}>
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
