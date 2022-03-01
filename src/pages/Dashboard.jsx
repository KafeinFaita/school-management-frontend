import Datetime from "../components/Datetime"
import { useEffect, useContext } from 'react' 
import { Navigate } from 'react-router-dom';
// import axios from 'axios'
import { GlobalContext } from "../helper/Context";
import { fetchData } from "../helper/function";

const Dashboard = () => {
  const { setMssg,setIsAuth,isAuthenticated,setIsAuthenticated,isVerified,setIsVerified,setErrMssg,errMssg } = useContext(GlobalContext);
  
  useEffect(() => {
    const abortCont = new AbortController();

    fetchData({ signal: abortCont.signal }, setIsVerified, setIsAuth, setErrMssg, setIsAuthenticated)

    return () => abortCont.abort();
  }, [isVerified,setMssg])  

  useEffect(() => {
    setMssg(errMssg);
  },[errMssg,setMssg,isVerified])

  if (isVerified && isAuthenticated) {
    return (
      <div className="h-full px-10">
        <Datetime title='Dashboard' />
      </div>
    )
  }
  
  if (errMssg === "You don't have enough privilege to view this page.") return <Navigate to={`/profile`} />
  if(errMssg === "Please log in.") {
    setTimeout(() => {
      return <Navigate to='/login' />
    },2000)
  }

  return <>
    <h1 className="font-semibold mt-10 px-10">Please wait</h1>
  </>

}



export default Dashboard