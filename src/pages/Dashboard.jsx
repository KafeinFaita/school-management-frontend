import Datetime from "../components/Datetime"
import { useState, useEffect, useContext } from 'react' 
import { Navigate } from 'react-router-dom';
import { GlobalContext } from "../helper/Context";
import { fetchData } from "../helper/function";

const Dashboard = () => {
  const { setMssg } = useContext(GlobalContext);
  const [ isVerified, setIsVerified ] = useState(false);
  const [ isAuth, setIsAuth ] = useState(false);
  const [ errMssg,setErrMssg ] = useState(''); 

  useEffect(() => {
    const abortCont = new AbortController();
    fetchData({ signal: abortCont.signal }, setIsVerified, setIsAuth, setErrMssg)
    return () => abortCont.abort();
  }, [isAuth,setMssg])  

  useEffect(() => {
    setMssg(errMssg);
  },[errMssg,setMssg])
  
  if (isVerified && isAuth) {
    return (
      <div className="h-full px-10">
        <Datetime title='Dashboard' />
      </div>
    )
  }
  
  if (errMssg === "You don't have enough privilege to view this page.") return <Navigate to={`/profile`} />
  if (errMssg === 'Please log in.') return <Navigate to='/login' />

  return <>
    <h1 className="font-semibold mt-10 px-10">Please wait</h1>
  </>

}



export default Dashboard