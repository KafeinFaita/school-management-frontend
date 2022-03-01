import Datetime from "../components/Datetime"
import { useState, useEffect, useContext } from 'react' 
import { Navigate } from 'react-router-dom';
import axios from 'axios'
import { GlobalContext } from "../helper/Context";
import { baseUrl, fetchData } from "../helper/function";

const Dashboard = () => {
  const { setMssg,setIsAuth } = useContext(GlobalContext);
  const [ isVerified, setIsVerified ] = useState(false);
  const [ errMssg,setErrMssg ] = useState('');

  useEffect(() => {
    const abortCont = new AbortController();
    const test = baseUrl() 
    // const fetchData = async () => {
    //   try { 
    //     const data = await axios.get(`${baseUrl()}dashboard`,{ signal: abortCont.signal })
    //     setIsVerified(data.data.verified)
    //     setIsAuth(data.data.verified)
    //     setErrMssg(data.data.msg)
    //   } 
    //   catch (error) {
    //     console.log(error)
    //   }
    // }
    fetchData(baseUrl(), '/dashboard',{ signal: abortCont.signal }, setIsVerified, setIsAuth, setErrMssg)
    return () => abortCont.abort();
  }, [isVerified,setMssg])  

  useEffect(() => {
    setMssg(errMssg);
  },[errMssg,setMssg])
  
  if (isVerified) {
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