import Datetime from "../components/Datetime"
import { useState, useEffect } from 'react' 
import { Navigate } from 'react-router-dom';
import axios from 'axios'

const Dashboard = () => {

  const [ isVerified, setIsVerified ] = useState(false)
  const [ delayRender, setDelayRender ] = useState(<h1>Not logged in. Redirecting...</h1>)

  useEffect(async () => {
    try {
      const data = await axios.get('dashboard')
      setIsVerified(data.data.verified)
    } catch (error) {
      console.log(error)
    }
  }, [])

  useEffect(() => {
    const timeout = setTimeout(() => setDelayRender(<Navigate to='/login'/>), 2000)
    return () => clearTimeout(timeout)
  },[])
  

  if (isVerified) {
    return (
      <div className="h-full px-10">
        <Datetime title='Dashboard' />
      </div>
    )
  }
  return delayRender
}

export default Dashboard