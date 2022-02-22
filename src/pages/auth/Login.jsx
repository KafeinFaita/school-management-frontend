import { useState,useContext } from 'react';
import axios from 'axios';
import { useNavigate,Link,useLocation } from 'react-router-dom';
import { AiOutlineUser,AiOutlineLock } from 'react-icons/ai';
import { GlobalContext } from '../../helper/Context';

const Login = () => {
<<<<<<< HEAD

=======
    const {mssg} = useContext(GlobalContext);
>>>>>>> e45d14b7348c78771c67724bf6c78a2c073ce4d5
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    console.log(mssg);
    
    const navigate = useNavigate();
    const { state } = useLocation()

    console.log(state)

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
