import axios from 'axios'

export const baseUrl = () => {
    if(!process.env.NODE_ENV || process.env.NODE_ENV === 'development') return "/"
    return "/api/"
}

export const fetchData = async (abort, verifiedState, authState, msgState, allowedState) => {
    try { 
      const data = await axios.get(`${baseUrl()}auth_user_role`, abort)
      verifiedState(data.data.verified)
      authState(data.data.verified)
      msgState(data.data.msg)
      allowedState(data.data.authenticated);
    } 
    catch (error) {
      console.log(error)
    }
  }