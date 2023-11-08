import React from "react";

function Results({annualData}) {
  return (
    <div>
      <table id="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Invesment Value</th>
            <th>Interest(Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
            {annualData.map(data => 
            {return (<tr key={data.year}>
                <td>{data.year}</td>
                <td>{Math.ceil(data.valueEndOfYear)}</td>
                <td>{Math.ceil(data.interest)}</td>
                <td>{data.total}</td>
                <td>{data.investedCapital}</td>
            </tr>)})}
        </tbody>
      </table>
    </div>
  );
}

export default Results;
