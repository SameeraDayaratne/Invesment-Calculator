import React from 'react';
import {calculateInvestmentResults} from '../util/investment.js'

function UserInput(props) {

    const obj = {
        initialInvestment:15000,
        annualInvestment:1200,
        expectedReturn:6,
        duration:10
    }

    let totalInterest = 0;
    const anndata = calculateInvestmentResults(obj);
    const annDataCopy = [...anndata.map(data => {
        totalInterest += data.interest;
        let investedCap = data.valueEndOfYear - totalInterest;
        data = {
            ...data,
            total : totalInterest,
            investedCapital : investedCap
        }

        return data;
    })]


    console.log(annDataCopy);
    
    return (
        <div id='user-input'>
        
        <div className="input-group">
        <label>Initial Invesment</label>
        <input type="number" /> 

        <label>Annual Invesment</label>
        <input type="number" /> 

        </div>
<br />

        <div className="input-group">
        <label>Expected return</label>
        <input type="number" /> 

        <label>Duration</label>
        <input type="number" /> 

        </div>

        

        
            
        </div>
    );
}

export default UserInput;