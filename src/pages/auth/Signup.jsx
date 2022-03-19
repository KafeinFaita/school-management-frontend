import { useState } from 'react';
import axios from 'axios';
import { useNavigate,Link } from 'react-router-dom';
import { AiOutlineUser,AiOutlineLock } from 'react-icons/ai';
import { baseUrl } from '../../helper/function';

const Signup = () => {
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const [role,setRole] = useState('');

    const navigate = useNavigate();
    const onSignup = (e) => {
        e.preventDefault();

       if (password.length < 8) {
           alert('password must be greater than 8 characters');
       } else {
        axios.post(`${baseUrl()}signup`,{ username, password, role })
        .then((data) => {
            console.log(data)
            navigate('/login');
        })
        .catch(err => console.log(err))
       }
    }
  return (
    <div className="flex justify-center h-screen">
        <div className="max-w-7xl flex items-center justify-center w-full">
            <form className="bg-gray-100 rounded shadow-lg w-1/3 p-10" onSubmit={onSignup}>
                <h1 className="font-bold text-4xl text-gray-800 text-center">Signup</h1>
                <div className="flex flex-col mt-10">
                    <label className="text-sm text-gray-800" htmlFor="username">Username:</label>
                    <div className="flex items-center gap-2">
                        <AiOutlineUser className="text-gray-400" />
                        <input className="bg-transparent w-full border-b border-gray-500 outline-none p-2" type="text" required onChange={(e) => setUsername(e.target.value)} value={username} />
                        <select className="bg-transparent w-1/2 border-b border-gray-500 outline-none p-2" value={role} onChange={(e) => setRole(e.target.value)} required>
                            <option value="" disabled selected hidden>Role</option>
                            <option value="Teacher">Teacher</option>
                            <option value="Student">Student</option>
                            <option value="Admin">Admin</option>
                        </select>
                    </div>
                </div>
                <div className="flex flex-col mt-10">
                    <label className="text-sm text-gray-800" htmlFor="username">Password:</label>
                    <div className="flex gap-2 items-center">
                        <AiOutlineLock className="text-gray-400" />
                        <input className="bg-transparent w-full border-b border-gray-500 outline-none p-2" type="password" required onChange={(e) => setPassword(e.target.value)} value={password} />
                    </div>
                </div>
                <div className="flex flex-col gap-5 mt-5">
                    <button className="p-2 bg-blue-500 rounded text-gray-100">Signup</button>
                    <Link className="text-sm text-blue-500 text-center" to='/login'>Back to login</Link>
                </div>
            </form>
        </div>
    </div>
  );
};

export default Signup;
