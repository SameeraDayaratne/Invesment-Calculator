import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";
import {calculateInvestmentResults} from './util/investment.js'

const obj = {
  initialInvestment:15000,
  annualInvestment:1200,
  expectedReturn:6,
  duration:10
}

const anndata = calculateInvestmentResults(obj);

let totalInterest = 0;
const annDataCopy = [...anndata.map(data => {
  totalInterest += data.interest;
  let investedCap = data.valueEndOfYear - totalInterest;
  data = {
      ...data,
      total : Math.ceil(totalInterest),
      investedCapital : Math.ceil(investedCap)
  }

  return data;
})]
    console.log(anndata);

function App() {
  return (
    <div>
      <Header></Header>
      <UserInput></UserInput>
      <Results annualData={annDataCopy}></Results>
    </div>
  );
}

export default App;
