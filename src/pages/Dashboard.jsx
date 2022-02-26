import Datetime from "../components/Datetime"
import { useState, useEffect, useContext } from 'react' 
import { Navigate } from 'react-router-dom';
import axios from 'axios'
import { GlobalContext } from "../helper/Context";
import { baseUrl } from "../helper/constant";

const Dashboard = () => {
  const { setMssg } = useContext(GlobalContext);
  const [ isVerified, setIsVerified ] = useState(false);
  const [errMssg,setErrMssg] = useState('');

  useEffect(() => {
    const abortCont = new AbortController();
    const fetchData = async () => {

      try {
        const data = await axios.get(`dashboard`,{ signal: abortCont.signal })
        setIsVerified(data.data.verified)
        setErrMssg(data.data.msg)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
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

  if (errMssg) return <Navigate to='/login' />

  return <>
    <h1>Verifying user...</h1>
  </>

}



export default Dashboard