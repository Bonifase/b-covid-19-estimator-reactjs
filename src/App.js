import React, { useState } from 'react';
import InputForm from './components/InputForm';
import axios from 'axios';

function App() {
  const [estimate, setEstimate] = useState({});
  const [region, setRegion] = useState({
     name: "",
     avgAge: '',
     avgDailyIncomeInUSD: '',
     avgDailyIncomePopulation: ''
  })
  let [data, setData] = useState({
    region: {},
    periodType: '',
    timeToElapse: '',
    reportedCases: '',
    population: '',
    totalHospitalBeds: ''
  })
  
  const onRegionChange = (e) => {
    e.preventDefault();
    setRegion({...region, [e.target.name]: e.target.value } );
  };
  const onChange = (e) => {
    e.preventDefault();
    data.region = region;
    setData({ ...data, [e.target.name]: e.target.value }, );
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    let res = await axios.post("http://127.0.0.1:5000/api/v1/on-covid-19", {
      data,
    });
    setEstimate(res.data)

  }
  console.log(estimate);
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-8">
          <h2>Cases</h2>
          <InputForm
            data={region}
            onChange={onChange}
            onSubmit={onSubmit}
            onRegionChange={onRegionChange}
          />
        </div>
        <div className="col-4">
          <h2>Impact</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
