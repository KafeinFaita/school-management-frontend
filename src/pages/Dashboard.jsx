import Datetime from "../components/Datetime"
import { useState, useEffect } from 'react' 
import {Navigate} from 'react-router-dom';
import axios from 'axios'

const Dashboard = () => {

  const [ isVerified, setIsVerified ] = useState(false)

  useEffect(() => {
     const ac = new AbortController();

     axios.get('/dashboard')
     .then((data) => {
       console.log(data.data.verified)
       setIsVerified(data.data.verified)
     }).catch(err => console.log(err));

  
     return () => ac.abort;
  }, [])
  

  if (isVerified) {
    return (
      <div className="h-full px-10">
        <Datetime title='Dashboard' />
      </div>
    )
  }

  return <Navigate to='/login' />
  
}

export default Dashboard