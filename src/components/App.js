import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    constructor(props){
        super(props)
        this.state={
            time:'',
            interval:''
        }
        this.handleTime=this.handleTime.bind(this);
    }
    componentDidMount(){
     this.setState(
        { time: (new Date).toLocaleTimeString(),interval:setInterval(() => {
            
        this.handleTime}, 1000)}
     )
    }
    handleTime(){
    this.setState({ time: (new Date).toLocaleTimeString() })
    }
    componentWillUnmount(){
      clearInterval(this.state.interval);
    }
    render() {

        return(
            <>
               <div> <h3 id>="time"{this.state.time}</h3></div>
            </>
        )
    }
}


export default App;
