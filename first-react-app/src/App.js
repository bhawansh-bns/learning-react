import React from 'react';
import './App.css';
import Link from './props&PropTypes/Link';
import UserC from './classBasedComponents/UserC';
import Comment from './UseStates/Comment';
import Loading from './UseStates/Loading';
import UserForm from './UseStates/UserForm';
import User from './UseStates/User';

// function App() {
//   // const element = <h1> React app with Bhawansh Narain Saxena</h1>;
//   // console.log(element);

//   const appName = "react application"; // variables
//   const user = {
//     name: "bhawansh"
//   }

//   const handle = () => {
//     console.log('button is clicked...');
//   }
//   return(
//     <>
//       <h1 id="bns" className='BNS'>this is our simple React component. {appName} </h1>
//       <p>this is the second element in the return. </p>
//       <p>Not possible as we need to wrap in a react fragment.</p>
//       <p> user name is {user.name}</p>
//       <p>using className as an attribute rather than class as class is a reserved keyword in js.</p>
//       <button onClick={handle}>CLICK ME</button>
//     </>
    
//   )
// }
function App(){
  const users = ['bhawansh', 'vaishnavi'];
  return(
    <>
    <h1 style={{textAlign: 'center'}}> useSate Hook in React.</h1>
      {/* <Link 
      title="React"
      content="content1"
      href="https://react.dev/"
      users={users}
      />
      <User 
      user="bhawansh"/> */}
    {/* <Comment />
    <Loading /> */}
    {/* <UserForm /> */}
    <User />
    </>
    
  )
}

export default App;
