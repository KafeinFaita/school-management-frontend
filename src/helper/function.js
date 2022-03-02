import axios from 'axios'

export const baseUrl = () => {
    if(!process.env.NODE_ENV || process.env.NODE_ENV === 'development') return ""
    return "/api/"
}

export const fetchData = async (abort, currentLocation, verifiedState, authState, msgState) => {
    try { 
      const data = await axios.get(`${baseUrl()}${currentLocation}`, abort)
      verifiedState(data.data.verified)
      authState(data.data.authorized)
      msgState(data.data.msg)
      console.log(data.data)
    } 
    catch (error) {
      console.log(error)
    }
  }