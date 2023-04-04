import { useState } from "react";
import User from "./UserComponent";


function Effectmain(){
    const [counter, setCounter] = useState(0);

    

    return(
        <div className="App">
            <h1> useEffect Hook</h1>
            <h4>Counter {counter}</h4>
            <button onClick={() => setCounter(value => value+1)}>INCREASE COUNT</button>
            {counter<5 && <User count={counter}/>}
        </div>
    )
}

export default Effectmain;