import { Outlet } from 'react-router-dom';
import Sidebar from '../components/partials/Sidebar';
import Navbar from '../components/partials/Navbar';

const DashboardLayout = () => {
  return (
    <>  
        <Sidebar />
        <div className="ml-72 h-full overflow-hidden select-none">
            <Navbar />
            <Outlet />
        </div>
    </>
  )
}

export default DashboardLayout