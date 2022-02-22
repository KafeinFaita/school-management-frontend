import Datetime from "../components/Datetime"
import { useState, useEffect } from 'react' 
import { Navigate } from 'react-router-dom';
import axios from 'axios'

const Dashboard = () => {

  const [ isVerified, setIsVerified ] = useState(false)
  const [ msg, setMsg ] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await axios.get('dashboard')
        console.log(data.data.msg)
        setIsVerified(data.data.verified)
        setMsg(data.data.msg)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [isVerified])  

  if (isVerified) {
    return (
      <div className="h-full px-10">
        <Datetime title='Dashboard' />
      </div>
    )
  }

  if (msg) return <Navigate to='/login' state={ {msg: msg} }/>

  return <>
    <h1>Verifying user...</h1>
  </>

}



export default Dashboard