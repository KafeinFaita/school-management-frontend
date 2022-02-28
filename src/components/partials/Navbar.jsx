import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../../helper/Context';

const Navbar = () => {

  const { isAuth } = useContext(GlobalContext);
  console.log(isAuth);

  return (
    <nav className="p-4">
      { isAuth ? 
      <div className="flex justify-between">
        <Link to='/profile' className="cursor-pointer">
          <h1 className="text-lg font-semibold text-gray-800">Hi, Sir Paul</h1>
          <h3 className="text-gray-400 text-sm">Teacher</h3>
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