import Datetime from "../components/Datetime"
import { useState, useEffect } from 'react' 
import { Navigate } from 'react-router-dom';
import axios from 'axios'

const Dashboard = () => {

  const [ isVerified, setIsVerified ] = useState(false)
  const [ delayRender, setDelayRender ] = useState(<h1>Verifying user...</h1>)
  const [ msg, setMsg ] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await axios.get('dashboard')
        console.log(data)
        setIsVerified(data.data.verified)
        setMsg(data.data.msg)
      } catch (error) {
        console.log(error)
      }
    }

    (async() => {
      await fetchData()
      console.log('test')
      if (!isVerified) {
        const timeout = setTimeout(() => setDelayRender(<Navigate to='/login' msg={msg}/>), 2000)
        return () => clearTimeout(timeout)
      }
    })()
  }, [isVerified])  

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