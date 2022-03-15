import Sidebar from '../components/partials/Sidebar';
import Navbar from '../components/partials/Navbar';
import Datetime from "../components/Datetime"
import { useState, useEffect, useContext } from 'react' 
import { Navigate, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { GlobalContext } from "../helper/Context";
import { fetchData, baseUrl } from "../helper/function";
import axios from 'axios';

const DashboardLayout = () => {

  const navigate = useNavigate()
  const location = useLocation()

  const { mssg, setMssg } = useContext(GlobalContext);
  const [ isVerified, setIsVerified ] = useState(false);
  const [ isAuth, setIsAuth ] = useState(false);
  const [ errMssg,setErrMssg ] = useState('');
  const [ loc, setLoc ] = useState(location.pathname) 

  useEffect(() => {
    const waitData = async() => {
      try {
        const data = await axios.get(`${baseUrl()}${location.pathname}`)
        console.log(data)
        setLoc(location.pathname)
      } catch (error) {
        console.log(error.response)
        if (error.response.status === 401 ) return navigate(`${baseUrl()}login`)
        if (error.response.status === 403) return navigate(`${baseUrl()}profile`)
      }
                  
    }

    waitData()
    
  }, [location, navigate])  

  useEffect(() => {
    setMssg(errMssg);
    console.log('2nd useEffect')
  },[errMssg, setMssg])

  console.log(loc)
  console.log(mssg)


  const render = () => {
    
    if (loc === location.pathname) return <Outlet/>
    return <h1>Please wait</h1>
  }
  //   // if (errMssg === "You don't have enough privilege to view this page.") return <h1 className="text-center text-3xl font-semibold mt-5 text-gray-800">{ errMssg }</h1> //return <Navigate to={`/profile`} /> 
  //   // if (errMssg === 'Please log in.') return <Navigate to='/login' />
  // }

  return (
    <>  
      <Sidebar />
      <div className="ml-72 h-auto select-none">
          <Navbar />
          {render()}
          
      </div>
    </>
  )
  
}

export default DashboardLayout