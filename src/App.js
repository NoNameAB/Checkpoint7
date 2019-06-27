import React from 'react';
import './App.css';
import './style.css';
import { CustomButton } from './Components/CustomButton';


class App extends React.Component {
render(){
    return(
        <div>
            <p>This is the homepage</p>
        </div>
 )
 
}
 componentWillMount(){  
    setTimeout(() => {
        alert("Hello");
    },2000)
 }
}

export default App;
