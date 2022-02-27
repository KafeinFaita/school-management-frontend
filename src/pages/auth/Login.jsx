import { useState,useContext } from 'react';
import axios from 'axios';
import { useNavigate,Link } from 'react-router-dom';
import { AiOutlineUser,AiOutlineLock } from 'react-icons/ai';
import { GlobalContext } from '../../helper/Context';
import { baseUrl } from '../../helper/constant';

const Login = () => {
    const { mssg } = useContext(GlobalContext);
    
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const [passErr,setPassErr] = useState('');
    const [userErr,setUserErr] = useState('');
 
    const navigate = useNavigate();
    
    const onLogin= (e) => {
        e.preventDefault();
        
        axios.post(`/login`,{ username,password })
        .then((data) => {
            navigate(data.data.redirect);
        })
        .catch(err => {
            setUserErr(err.response.data.userErr);
            setPassErr(err.response.data.passErr);
        });
    }
   
  return (
    <div className="flex justify-center h-screen">
        <div className="max-w-7xl flex items-center justify-center w-full">
            <form className="bg-gray-100 rounded shadow-lg w-1/3 p-10" onSubmit={onLogin}>
                <h1 className="font-bold text-4xl text-gray-800 text-center">Login</h1>
                <h2 className="text-red-500 text-sm text-center absolute">{ mssg }</h2>
                <div className="flex flex-col mt-10">
                    <label className="text-sm text-gray-800" htmlFor="username">Username:</label>
                    <div className="flex items-center gap-2 relative">
                        <AiOutlineUser className="text-gray-400" />
                        <input onChange={(e) => setUsername(e.target.value)} value={username} className="bg-transparent w-full border-b border-gray-500 outline-none p-2" type="text" required />
                        <span className="text-red-500 text-sm absolute -bottom-5 left-6">{userErr}</span>
                    </div>
                </div>
                <div className="flex flex-col mt-10">
                    <label className="text-sm text-gray-800" htmlFor="username">Password:</label>
                    <div className="flex gap-2 items-center relative">
                        <AiOutlineLock className="text-gray-400" />
                        <input onChange={(e) => setPassword(e.target.value)} value={password} className="bg-transparent w-full border-b border-gray-500 outline-none p-2" type="password" required />
                        <span className="text-red-500 text-sm absolute -bottom-5 left-6">{passErr}</span>
                    </div>
                </div>
                <div className="flex flex-col gap-5 mt-10">
                    <Link className="text-xs text-blue-500 text-center" to='/forgot-password'>Forgot Password?</Link>
                    <button className="p-2 bg-blue-500 rounded text-gray-100">Login</button>
                    <Link className="text-sm text-blue-500 text-center" to='/'>Back to dashboard</Link>
                </div>
            </form>
        </div>
    </div>
  );
};

export default Login;
