import { useContext,useState } from 'react';
import axios from 'axios';
import { IoMdArrowDropdown } from 'react-icons/io';
import { BiLogOut } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../../helper/Context';
import { baseUrl } from '../../helper/function';

const Navbar = () => {

  const { role, user } = useContext(GlobalContext);
  const [showLogout,setShowLogout] = useState(false);

  const onLogout = async () => {
      try {
        const data = await axios.get(`${baseUrl()}logout`);
        console.log(data);
        localStorage.removeItem('username');
        localStorage.removeItem('role');
      }
      catch(err) {
        console.log(err);
      }
  }

  return (
    <nav className="p-4">
      { user ? 
      <div className="flex justify-between">
        <Link to='/profile' className="cursor-pointer">
          <h1 className="text-lg font-semibold text-gray-800">Hi, {user}</h1>
          <h3 className="text-gray-400 text-sm">{role}</h3>
        </Link>
        <div className="flex items-center gap-2 relative">
          <input type="search" placeholder="Search something" className="font-light border border-gray-200 p-2 rounded outline-none" />
          <IoMdArrowDropdown onClick={() => setShowLogout(!showLogout)} className="border border-gray-300 rounded-md p-2 shadow-md text-4xl text-gray-800 font-semibold cursor-pointer" />
          { showLogout && 
          <div className="absolute w-full h-auto z-50 p-5 rounded shadow-lg top-12 right-0 bg-white border border-gray-300"> 
            <button className="flex items-center gap-2" onClick={onLogout}><BiLogOut />Logout</button>
          </div> }
        </div>
      </div> : 
      <div className="flex gap-10 p-2 rounded w-1/5 text-base">
        <h1 className="font-semibold text-xl text-gray-800">Verifying user...</h1>
      </div>
      }
    </nav>
  )
}

export default Navbar