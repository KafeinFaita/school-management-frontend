import Datetime from "../components/Datetime"
import { useState, useEffect } from 'react' 
import axios from 'axios'

const Dashboard = () => {

  const [ isVerified, setIsVerified ] = useState(false)

  useEffect(() => {
    axios.get('/dashboard')
        .then((data) => {
          console.log(data.data.verified)
          setIsVerified(data.data.verified)
        }).catch(err => console.log(err));
  }, [isVerified])
  

  if (isVerified) {
    return (
      <div className="h-full px-10">
        <Datetime title='Dashboard' />
      </div>
    )
  }

  return (
    <h1>NOT LOGGED IN :(</h1>
  )
  
}

export default Dashboard