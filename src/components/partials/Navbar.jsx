import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../../helper/Context';

const Navbar = () => {

  const { isAuth } = useContext(GlobalContext);
  const username = localStorage.getItem('username').charAt(0).toUpperCase() + localStorage.getItem('username').slice(1);
  const role = localStorage.getItem('role');

  return (
    <nav className="p-4">
      { isAuth ? 
      <div className="flex justify-between">
        <Link to='/profile' className="cursor-pointer">
          <h1 className="text-lg font-semibold text-gray-800">Hi, { username }</h1>
          <h3 className="text-gray-400 text-sm">{ role }</h3>
        </Link>
        <input type="search" placeholder="Search something" className="font-light border border-gray-200 p-2 rounded outline-none" />
      </div> : 
      <div className="flex gap-10 p-2 rounded w-1/5 text-base">
        <h1 className="font-semibold text-xl text-gray-800">Verifying user...</h1>
      </div>
      }
    </nav>
  )
}

export default Navbar