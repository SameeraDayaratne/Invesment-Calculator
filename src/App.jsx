import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";
import {calculateInvestmentResults} from './util/investment.js'
import { useState } from "react";

const obj = {
  initialInvestment:15000,
  annualInvestment:1200,
  expectedReturn:6,
  duration:10
}

function App() {

 const [inputs , setInputs] = useState(obj);

 console.log(inputs);
 function handleInitialInvesment(value){
  setInputs(prev => {
    let newInput = {
      ...prev,
      initialInvestment:parseInt(value)
    }

    return newInput;
  });
 }

 function handleAnnualInvesment(value){
  setInputs(prev => {
    let newInput = {
      ...prev,
      annualInvestment:parseInt(value)
    }

    return newInput;
  });
 }

 function handleExpectedReturn(value){
  setInputs(prev => {
    let newInput = {
      ...prev,
      expectedReturn:parseInt(value)
    }

    return newInput;
  });
 }

 function handleDuration(value){
  setInputs(prev => {
    let newInput = {
      ...prev,
      duration:parseInt(value)
    }

    return newInput;
  });
 }

 let annDataCopy;
 if(inputs.duration > 0){
  const anndata = calculateInvestmentResults(inputs);

  let totalInterest = 0;
  annDataCopy = [...anndata.map(data => {
    totalInterest += data.interest;
    let investedCap = data.valueEndOfYear - totalInterest;
    data = {
        ...data,
        total : Math.ceil(totalInterest),
        investedCapital : Math.ceil(investedCap)
    }
    return data;
  })]
 
 }
 
 

  return (
    <div>
      <Header></Header>
      <UserInput initalValues={inputs} onInitialInvesment={handleInitialInvesment} onAnnualInvesment={handleAnnualInvesment} onExpectedReturn={handleExpectedReturn} onDuration={handleDuration}></UserInput>
      {inputs.duration > 0 ? <Results annualData={annDataCopy}></Results> : <p className="center">Please enter a Duration greater than zero</p>}
    </div>
  );
}

export default App;
