import React, { useState } from 'react';

function Loading(){
    const [isLoading, setLoading] = useState(false);
    return(
        <>
        <h1 style={{textAlign: 'center'}}> useSate Hook in React.</h1>
        <h3>useState hook with boolean type.</h3>
        <button onClick={() => setLoading((prevState) => !prevState)}>Toggle Loading</button>
        {isLoading ? <p>Loading.....</p> : <h3>Data will be displayed here.</h3>}
        
        
        </>

    )
}

export default Loading;