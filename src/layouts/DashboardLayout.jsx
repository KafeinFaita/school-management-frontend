import Sidebar from '../components/partials/Sidebar';
import Navbar from '../components/partials/Navbar';
import Datetime from "../components/Datetime"
import { useState, useEffect, useContext } from 'react' 
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { GlobalContext } from "../helper/Context";
import { fetchData } from "../helper/function";

const DashboardLayout = () => {

  const location = useLocation()

  const { mssg, setMssg } = useContext(GlobalContext);
  const [ isVerified, setIsVerified ] = useState(false);
  const [ isAuth, setIsAuth ] = useState(false);
  const [ errMssg,setErrMssg ] = useState('');
  const [ loc, setLoc ] = useState(location.pathname) 

  // useEffect(() => {
  //   setLoading(false)
  // }, [location])

  useEffect(() => {
    const waitData = async() => {
      const abortCont = new AbortController();
      await fetchData({ signal: abortCont.signal }, location.pathname, setIsVerified, setIsAuth, setErrMssg)
      setLoc(location.pathname)
      return () => abortCont.abort();
    }

    waitData()
    
  }, [location])  

  useEffect(() => {
    setMssg(errMssg);
    console.log('2nd useEffect')
  },[errMssg, setMssg])

  console.log(loc)
  console.log(mssg)


  const render = () => {
    if (isVerified && isAuth) {
      if (loc === location.pathname) return <Outlet/>
      return <h1>Please wait</h1>
    }
     
    if (errMssg === "You don't have enough privilege to view this page.") return <h1>Not allowed</h1> //return <Navigate to={`/profile`} /> 
    if (errMssg === 'Please log in.') return <Navigate to='/login' />
  
  }

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