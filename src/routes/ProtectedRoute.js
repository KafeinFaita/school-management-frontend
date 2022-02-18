import axios from 'axios';
import { Navigate,Outlet } from 'react-router-dom';
import { useState,useEffect } from 'react';

const ProtectedRoute = () => {

    const [isAuth,setIsAuth] = useState(false)

    useEffect(() => {
        axios.get('/test')
        .then((data) => {
            console.log(data);
        }).catch(err => console.log(err));
    })

  return isAuth ? <Outlet /> : <Navigate to='/login' />
}

export default ProtectedRoute