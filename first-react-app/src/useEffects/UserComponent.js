import { useEffect } from "react";
import { DBconnection } from "./DBconnection";

const User = (props) =>{
    const {count} = props;
    const connection = DBconnection();

    // console.log('outside useEffect.');

    
    useEffect(() => {
        connection.connect();
        console.log(count);
        return()=>{
            console.log('unmounting', count);
            connection.disconnect();
        }
    }, [])

    // [] -> mounting phase -> execute only once during first render
    // [state, prop] -> during first rendering, and everytime there is a 
    //  change in the state/prop that is passed in the array
    
    return(
        <div>
            <h5> User Component.</h5>
        </div>
    )
}

export default User;