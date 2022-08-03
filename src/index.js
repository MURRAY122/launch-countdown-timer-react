import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import Countdown from './Components/Countdown/Countdown';
import moment from 'moment';

class App extends Component { 
  //Set Default launch date on first load
  setLaunchDate(launch){
    const dateFormat = moment(launch).format('yyyy-MM-DD')
    const [year, month, day] = dateFormat.split('-');
    const defaultDate = new Date(year, month - 1, day, 0,0,0);
    //Add 14 days
    defaultDate.setDate(defaultDate.getDay()+14);
    return defaultDate;
  }

  render(){
    return(
    <div className="App">
      <h1>WE'RE LAUNCHING SOON</h1>
      <Countdown
      CountdownTime={this.setLaunchDate(new Date())}/>
    </div>
    );
  }
}

  // ========================================
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
    <React.StrictMode>
      <div className='stars'></div>
      <div className='mountains'></div>
      <App />
    </React.StrictMode>
  );