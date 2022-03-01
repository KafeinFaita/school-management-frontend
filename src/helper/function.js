import axios from 'axios'

export const baseUrl = () => {
    if(!process.env.NODE_ENV || process.env.NODE_ENV === 'development') return "/"
    return "/api/"
}

export const fetchData = async (abort, verifiedState, authState, msgState) => {
    try { 
      const data = await axios.get(`${baseUrl()}auth_user_role`, abort)
      verifiedState(data.data.verified)
      authState(data.data.verified)
      msgState(data.data.msg)
    } 
    catch (error) {
      console.log(error)
    }
  }