import { Routes,Route } from 'react-router-dom';
import { useState } from 'react';
import DashboardLayout from './layouts/DashboardLayout';

import Signup from './pages/auth/Signup';
import Login from './pages/auth/Login';

import Dashboard from './pages/Dashboard';
import NotFound from './pages/NotFound';
import Reports from './pages/Reports';
import Profile from './pages/Profile';

import { GlobalContext } from './helper/Context';

function App() {

  const [mssg,setMssg] = useState('');
  console.log(mssg);

  return (
    <GlobalContext.Provider value={{ mssg,setMssg }}>
      <Routes>
        <Route path='/signup' element={ <Signup /> } />
        <Route path='/login' element={ <Login /> } />

        
        <Route element={ <DashboardLayout /> }>
          <Route path='/dashboard' element={ <Dashboard /> } />

          <Route path='/reports' element={ <Reports /> } />
          <Route path='/profile' element={ <Profile /> } />
        </Route>
        
        
        <Route path="*" element={ <NotFound /> } />
      </Routes>
    </GlobalContext.Provider>
    
  );
}

export default App;
