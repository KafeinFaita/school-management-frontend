import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

  const [isAuth] = useState(false);

  return (
    <nav className="p-4">
      { !isAuth ? 
      <div className="flex justify-between">
        <Link to='/profile' className="cursor-pointer">
          <h1 className="text-lg font-semibold text-gray-800">Hi, Sir Paul</h1>
          <h3 className="text-gray-400 text-sm">Teacher</h3>
        </Link>
        <input type="search" placeholder="Se arch something" className="font-light border border-gray-200 p-2 rounded outline-none" />
      </div> : 
      <div className="flex gap-10 p-2 bg-gray-100 rounded w-1/5 text-base">
        <button className="p-2 border-2 border-blue-500 rounded">Login</button>
        <button className="p-2 bg-blue-500 text-gray-100 rounded">Signup</button>
      </div>
      }
    </nav>
  )
}

export default Navbar