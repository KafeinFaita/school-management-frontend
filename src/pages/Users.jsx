import Datetime from "../components/Datetime"
import { useContext } from 'react';
import { GlobalContext } from "../helper/Context";
import { baseUrl } from "../helper/function";
import axios from "axios";

const Users = () => {

    const { usersList } = useContext(GlobalContext);

    const verifyUser = async (id,verify) => {
      const checkUser = !verify;
      try {
        const data = await axios.patch(`${baseUrl}user`,{ id, checkUser });
        console.log(data);
      }
      catch(err) {
        console.log(err);
      }
    } 

  return (
    <div className="h-full px-10">
        <Datetime title='Users' />
        <div className="py-10">
        { usersList && usersList.map((user) => (
          <div className="flex gap-10" key={user._id}>
            <h2>Username: {user.username}</h2>
            <span>Role: {user.role}</span>
            <input type="checkbox" checked={console.log(user.isVerified)} onChange={() => verifyUser(user._id,user.isVerified)} />
          </div>
        )) }
      </div>
    </div>
  )
}

export default Users