import { useState, useEffect } from "react";

const User = () =>{

    const users = [
        {id: 1, name: "bns"},
        {id: 2, name: "skg"}
    ]
    const [usersList, setUsers] = useState(users);
    const [refresh, setRefresh] = useState(true);

    function getUser(){
        const url = "https://jsonplaceholder.typicode.com/users";

        return fetch(url).then(data => data.json());
    }

    useEffect(() => {

        {refresh ? setUsers(users) : getUser().then(result => setUsers(result)) }

    }, [refresh])
    return(
        <div>
            <h5> User Component</h5>
            <button onClick={()=>setRefresh(value => !value)}>Refresh</button>
            {JSON.stringify(usersList)}

        </div>
    )
}

export default User;