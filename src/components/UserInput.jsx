import React from "react";
import { calculateInvestmentResults } from "../util/investment.js";

function UserInput({
  onInitialInvesment,
  onAnnualInvesment,
  onExpectedReturn,
  onDuration,
  initalValues,
}) {
  function handleInitialInvesment(event) {
    let value = event.target.value;
    onInitialInvesment(value);
  }

  function handleAnnualInvesment(event) {
    let value = event.target.value;
    onAnnualInvesment(value);
  }

  function handleExpectedReturn(event) {
    let value = event.target.value;
    onExpectedReturn(value);
  }

  function handleDuration(event) {
    let value = event.target.value;
    onDuration(value);
  }

  console.log("in uI");
  console.log(initalValues);

  return (
    <div id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Invesment</label>
          <input
            type="number"
            onChange={handleInitialInvesment}
            defaultValue={initalValues.initialInvestment}
          />
        </p>

        <p>
          <label>Annual Invesment</label>
          <input
            type="number"
            onChange={handleAnnualInvesment}
            defaultValue={initalValues.annualInvestment}
          />
        </p>
      </div>

      <div className="input-group">
        <p>
          <label>Expected return</label>
          <input
            type="number"
            onChange={handleExpectedReturn}
            defaultValue={initalValues.expectedReturn}
          />
        </p>

        <p>
          <label>Duration</label>
          <input
            type="number"
            onChange={handleDuration}
            defaultValue={initalValues.duration}
          />
        </p>
      </div>
    </div>
  );
}

export default UserInput;
