import React,{useSatate, useState} from "react";

function User(){
    const usersList = [
        {id: 1, name: "bns"},
        {id: 2, name: "skg"}
    ]

    const [users, addUsers] = useState(usersList);

    function handleNewUser(e){
        const newUser = e.target.value;
        e.preventDefault();
        console.log(newUser);
        addUsers([
            ...users,
            {
                id: users.length+1,
                name: newUser
            }
        ])
    }
    return(
        <>
        <h3>useState hook with array type. </h3>
        <form>
            <label>
                Add New User:
                <input type="text" name="name" onBlur={handleNewUser} />
            </label>
        </form>
        <p>{JSON.stringify(users)}</p>
        </>
    )
}

export default User;