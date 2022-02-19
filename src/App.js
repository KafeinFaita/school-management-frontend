import { Routes,Route } from 'react-router-dom';

import DashboardLayout from './layouts/DashboardLayout';

import Signup from './pages/auth/Signup';
import Login from './pages/auth/Login';

import Dashboard from './pages/Dashboard';
import NotFound from './pages/NotFound';
import Reports from './pages/Reports';
import ProtectedRoute from './routes/ProtectedRoute';
import Profile from './pages/Profile';


function App() {

  return (
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
  );
}

export default App;
