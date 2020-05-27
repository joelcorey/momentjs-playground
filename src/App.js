import React from 'react';
import logo from './logo.svg';
import './App.css';
import moment from 'moment';

function App() {
  //let momentTime = moment().format("YYYY M D");
  let momentTime = moment();

  let momentYear = momentTime.format("YYYY");
  let momentMonth = momentTime.format("M");
  let momentDay = momentTime.format("D");

  let exampleYear = "2020";
  let exampleMonth = "5";
  let exampleDay = "17";

  function compareDates() {
    let momentDate = moment([momentYear, momentMonth, momentDay]);
    let exampleDate = moment([exampleYear, exampleMonth, exampleDay]);

    let difference = momentDate.diff(exampleDate, 'days')

    return difference
  }

  // let differenceInDays = compareDates();

  return (
    <div className="App">
      <header className="App-header">
        <div className="funTimeContainer">
          <h4>Some fun playing with the Moment.js library</h4>
          <div>- An example of moment date data:</div>
          <div>{`momentYear: ${momentYear}, momentMonth: ${momentMonth}, momentDay: ${momentDay}`}</div>
          <div>- An example date in the past:</div>
          <div>{`exampleYear: ${exampleYear}, exampleMonth: ${exampleMonth}, exampleDay: ${exampleDay}`}</div>
          <div>- You brain knows that these dates are 10 days apart, but let's write a function for that!</div>
          <div>- And function compareDates() returns a difference of: {compareDates()}</div>
        </div>
      </header>
    </div>
  );
}

export default App;
