import { baseUrl } from "../../helper/function";
import { useState } from 'react';
import axios from "axios";

const UserModal = ({setApprove,userDetail}) => {  

    const [isLoading,setIsLoading] = useState(true);

    const verifyUser = async (id,verify) => {
        const checkUser = !verify;
        setIsLoading(!isLoading);
        try {
            const data = await axios.patch(`${baseUrl()}users/${id}`,{ id, checkUser });
            setIsLoading(!isLoading);
            setApprove(false);
          }
        catch(err) {
          console.log(err);
        }
      } 

  return (
    <div className="absolute top-0 h-4/5 w-full left-0 flex items-center justify-center">
        <div className="bg-gray-100 p-20 shadow-lg rounded-md z-50">
            <p className="font-semibold text-xl">Do you want to { userDetail.isVerified ? 'unverify' : 'verify' } { userDetail.username }?</p>
            <div className="flex justify-center gap-2 p-2">
                <button onClick={() => verifyUser(userDetail._id,userDetail.isVerified)} className="bg-green-500 text-gray-100 p-2 rounded">{!isLoading ? 'Verifying' : 'Yes'}</button>
                <button className="bg-red-500 text-gray-100 p-2 rounded" onClick={() => setApprove(false)}>Close</button>
            </div>
        </div>
    </div>
  )
}

export default UserModal