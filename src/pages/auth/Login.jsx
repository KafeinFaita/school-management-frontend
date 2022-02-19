import { useState } from 'react';
import axios from 'axios';
import { useNavigate,Link } from 'react-router-dom';
import { AiOutlineUser,AiOutlineLock } from 'react-icons/ai';

const Login = () => {

    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const [role,setRole] = useState('');

    const navigate = useNavigate();

    const onLogin= (e) => {
        e.preventDefault();
        axios.post('/login',{ username,password })
        .then((data) => {
            navigate(data.data.redirect);
        })
    }
   
  return (
    <div className="flex justify-center h-screen">
        <div className="max-w-7xl flex items-center justify-center w-full">
            <form className="bg-gray-100 rounded shadow-lg w-1/3 p-10" onSubmit={onLogin}>
                <h1 className="font-bold text-4xl text-gray-800 text-center">Login</h1>
                <div className="flex flex-col mt-10">
                    <label className="text-sm text-gray-800" htmlFor="username">Username:</label>
                    <div className="flex items-center gap-2">
                        <AiOutlineUser className="text-gray-400" />
                        <input onChange={(e) => setUsername(e.target.value)} value={username} className="bg-transparent w-full border-b border-gray-500 outline-none p-2" type="text" required />
                        <select className="bg-transparent w-1/2 border-b border-gray-500 outline-none p-2" value={role} onChange={(e) => setRole(e.target.value)}>
                            <option value="teacher">Teacher</option>
                            <option value="student">Student</option>
                            <option value="admin">Admin</option>
                        </select>
                    </div>
                </div>
                <div className="flex flex-col mt-10">
                    <label className="text-sm text-gray-800" htmlFor="username">Password:</label>
                    <div className="flex gap-2 items-center">
                        <AiOutlineLock className="text-gray-400" />
                        <input onChange={(e) => setPassword(e.target.value)} value={password} className="bg-transparent w-full border-b border-gray-500 outline-none p-2" type="password" required />
                    </div>
                </div>
                <div className="flex flex-col gap-5 mt-5">
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
