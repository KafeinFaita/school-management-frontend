import Datetime from "../components/Datetime"
import { useContext,useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { GlobalContext } from "../helper/Context";
import { fetchData } from "../helper/function";

const Profile = () => {

 const { isVerified,setIsVerified,setIsAuth,setErrMssg,setIsAuthenticated,isAuthenticated } = useContext(GlobalContext);

 useEffect(() => {
   const abortCont = new AbortController();

   fetchData({ signal:abortCont.signal },setIsVerified,setIsAuth,setErrMssg,setIsAuthenticated);
   
   return () => abortCont.abort();
 }, [isVerified,isAuthenticated]);


 if(isVerified === true && isAuthenticated === false || isVerified === true && isAuthenticated === true) {
    return (
      <div className="px-10 h-full">
        <Datetime title="Profile" />
      </div>
    )
 }
  
  return <Navigate to='/login' />
}

export default Profile