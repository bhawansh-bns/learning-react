import React, {useState} from "react";

function UserForm(){
    const inititalObject = {
        username:"",
        password:""
    }
    const [user, setUser] = useState({});

    function handleChange(e){
        
        setUser({
            ...user,
            [e.target.name]: e.target.value, //e is the event, which in this case is change, 
            // target is the element that triggered the event, which in this case is the input, 
            // and value is the value of the input element

        })
        
    }


    return(
        <>
        <h3> UseState with Object Type.</h3>
        <p>{JSON.stringify(user)}</p>
        <form> 
            <label> Username: 
                <input type="text" name="username" onChange={handleChange}/>
            </label>
            <br/>
            <label> Password: 
                <input type="text" name="password" onChange={handleChange}/>
            </label>
        </form>
        </>
    )

}

export default UserForm;
