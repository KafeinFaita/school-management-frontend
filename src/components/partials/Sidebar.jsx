import { AiOutlineIdcard } from 'react-icons/ai';
import { HiOutlineUserGroup,HiOutlineClipboardList } from 'react-icons/hi';
import { FaRegMoneyBillAlt } from 'react-icons/fa';
import { BsCalendarCheck,BsFilePerson } from 'react-icons/bs';
import { MdOutlineDashboardCustomize } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <nav className="h-screen fixed left-0 top-0 bg-blue-500 w-72">
        <h1 className="sidebar-title">School Management System</h1>
        
        <ul className="text-gray-100 flex flex-col gap-5">
          <li className="flex items-center justify-end">
            <Link to='/dashboard' className="sidebar-hover">
              <MdOutlineDashboardCustomize className="mr-5" />
              Dashboard
            </Link>
          </li>
          <li className="flex items-center justify-end">
            <Link to='/enrollment' className="sidebar-hover">
              <AiOutlineIdcard className="mr-5" />
              Enrollment
            </Link>
          </li>
          <li className="flex items-center justify-end">
            <Link to='/students' className="sidebar-hover">
              <BsFilePerson className="mr-5" />
              Students
            </Link>
          </li>
          {/* <li className="flex items-center justify-end">
            <Link to='/admission' className="sidebar-hover">
              <AiOutlineIdcard className="mr-5" />
              Admission
            </Link>
          </li> */}
          <li className="flex items-center justify-end">
            <Link to='/registrar' className="sidebar-hover">
              <HiOutlineUserGroup className="mr-5" />
              Registrar
            </Link>
          </li>
          <li className="flex items-center justify-end">
            <Link to='/finance' className="sidebar-hover">
              <FaRegMoneyBillAlt className="mr-5" />
              Finance
            </Link>
          </li>
          <li className="flex items-center justify-end">
            <Link to='/school-calendar' className="sidebar-hover">
              <BsCalendarCheck className="mr-5" />
              School Calendar
            </Link>
          </li>
          <li className="flex items-center justify-end">
            <Link to='/reports' className="sidebar-hover">
              <HiOutlineClipboardList className="mr-5" />
              Reports
            </Link>
          </li>
          <Link to='/login'>Login</Link>
        </ul>
    </nav>
  )
}

export default Sidebar