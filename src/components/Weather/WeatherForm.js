import React from "react";

const WeatherForm = (props) => {
  function error() {
    return (
      <div className="alert alert-danger mx-5" role="alert">
        {props.error}
      </div>
    );
  }
  return (
    <div className="container">
      <div className="title">
        <h1>Simple Weather App</h1>
      </div>
      <div className="error-msg"> {props.error ? error() : null} </div>
      <form onSubmit={props.loadweather}>
        <div className="form-data">
          <div>
            <input
              type="text"
              className="form-control"
              name="city"
              autoComplete="off"
              placeholder="City"
            />
          </div>
          <div className="inp">
            <input
              type="text"
              className="form-control"
              name="country"
              autoComplete="off"
              placeholder="Country"
            />
            {/* <ul>
                                {props.countryname.map( (countryname) => <li> {countryname} </li>)}
                            </ul> */}
          </div>
          <div className="inp">
            <button className="btn"> SUBMIT</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default WeatherForm;
