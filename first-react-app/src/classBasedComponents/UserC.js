import React from 'react';
class UserC extends React.Component{
    constructor(props){
        super(props); //required hota hai 
        console.log(this.props);
    }
    render(){
        
        const {user} = this.props;
        return(
            <h1>This is a class based component. {user}</h1>
        )
    }
}

export default UserC;