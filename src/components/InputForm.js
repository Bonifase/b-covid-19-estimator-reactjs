import React from 'react'

const InputForm = ({ data, onChange, onSubmit, onRegionChange }) => {
    
  return (
    <form onSubmit={onSubmit}>
      Region:
      <div className="form-row">
        <div className="form-col-6">
          <div className="form-group">
            <label htmlFor="inputName">Name</label>
            <input
              type="text"
              className="form-control"
              value={data.name}
              onChange={onRegionChange}
              name="name"
            />
          </div>
        </div>
        <div className="form-col-4">
          <div className="form-group">
            <label htmlFor="inputEmail4">Avg Age</label>
            <input
              type="number"
              className="form-control"
              value={data.avgAge}
              onChange={onRegionChange}
              name="avgAge"
            />
          </div>
        </div>
        <div className="form-col-6">
          <div className="form-group">
            <label htmlFor="inputEmail4">Avg Daily Income In USD</label>
            <input
              type="number"
              className="form-control"
              value={data.avgDailyIncomeInUSD}
              onChange={onRegionChange}
              name="avgDailyIncomeInUSD"
            />
          </div>
        </div>
        <div className="form-col-4">
          <div className="form-group">
            <label htmlFor="inputEmail4">Avg Daily Income Population</label>
            <input
              type="number"
              className="form-control"
              value={data.avgDailyIncomePopulation}
              onChange={onRegionChange}
              name="avgDailyIncomePopulation"
            />
          </div>
        </div>
      </div>
      <hr />
      Details:
      <div className="form-row">
        <div className="form-col-6">
          <div className="form-group">
            <label htmlFor="inputEmail4">Period Type</label>
            <input
              type="text"
              className="form-control"
              value={data.periodType}
              onChange={onChange}
              name="periodType"
            />
          </div>
        </div>
        <div className="form-col-4">
          <div className="form-group">
            <label htmlFor="inputEmail4">Time To Elapse</label>
            <input
              type="number"
              className="form-control"
              value={data.timeToElapse}
              onChange={onChange}
              name="timeToElapse"
            />
          </div>
        </div>
        <div className="form-col-6">
          <div className="form-group">
            <label htmlFor="inputEmail4">Reported Cases</label>
            <input
              type="number"
              className="form-control"
              value={data.reportedCases}
              onChange={onChange}
              name="reportedCases"
            />
          </div>
        </div>
        <div className="form-col-4">
          <div className="form-group">
            <label htmlFor="inputEmail4">Population</label>
            <input
              type="number"
              className="form-control"
              value={data.population}
              onChange={onChange}
              name="population"
            />
          </div>
        </div>
        <div className="form-col-6">
          <div className="form-group">
            <label htmlFor="inputEmail4">Total Hospital Beds</label>
            <input
              type="number"
              className="form-control"
              value={data.totalHospitalBeds}
              onChange={onChange}
              name="totalHospitalBeds"
            />
          </div>
        </div>
      </div>
      <button type="submit" className="btn btn-primary">
        Get Impact
      </button>
    </form>
  );
};

export default InputForm;