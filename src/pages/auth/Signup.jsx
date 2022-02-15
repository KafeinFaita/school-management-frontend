import { useState } from 'react';
import axios from 'axios';


const Signup = () => {
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');

    const onSignup = (e) => {
        e.preventDefault();
        axios.post('/student',{ username, password })
        .then((data) => {
            console.log(data);
        }).catch(err => console.log(err))
    }
  return (
    <div className="flex justify-center items-center h-screen">
        <div className="max-w-7xl flex flex-col items-center w-full">
            <h1 className="text-4xl text-gray-800 p-5">Signup</h1>
            <form onSubmit={onSignup} className="shadow-lg border rounded border-gray-300 p-10 flex flex-col gap-5 items-center w-1/2">
                <label htmlFor="username">Username</label>
                <input type="text"
                    className="border-2 border-gray-300 rounded outline-none p-2 w-1/2" 
                    value={username}  
                    onChange={(e) => setUsername(e.target.value)}
                />

                <label htmlFor="password">Password</label>
                <input type="text"
                    className="border-2 border-gray-300 rounded outline-none p-2 w-1/2"  
                    value={password}  
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button className="bg-green-500 text-gray-100 rounded p-2">Submit</button>
            </form>
        </div>
    </div>
  );
};

export default Signup;
