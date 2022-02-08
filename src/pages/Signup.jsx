import { useState } from 'react';
import axios from 'axios';


const Signup = () => {
    const [firstname,setFirstname] = useState('');
    const [lastname,setLastname] = useState('');

    const onSignup = (e) => {
        e.preventDefault();
        axios.post('/student',{ fname: firstname, lname: lastname })
        .then((data) => {
            console.log(data);
        }).catch(err => console.log(err))
    }
  return (
    <form onSubmit={onSignup}>
        <label htmlFor="">First name</label>
        <input type="text" 
            value={firstname}  
            onChange={(e) => setFirstname(e.target.value)}
        />

        <label htmlFor="">Last name</label>
        <input type="text" 
            value={lastname}  
            onChange={(e) => setLastname(e.target.value)}
        />

        <button>Submit</button>
    </form>
  );
};

export default Signup;
