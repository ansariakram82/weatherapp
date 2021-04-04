import React from "react";



const Weatherdata =(props) => {
  console.log("props", props)
  // const iconurl ="http://openweathermap.org/img/wn/" + `${props.weather[0].icon}` + ".png";
    return(
      <>
      
      {props.country ?  (<div className="container">
      <div className="api-data" >
        <h1>{props.city} <span className="countrybox">{props.country}</span> </h1>
        {/* <img src={props.icon} alt="weathericon" className="icon" /> */}
        {console.log(props.weatherIcon)}
        {props.temperature ?(
         <> <h3 >{props.temperature}<sup>oC</sup></h3>
              <i class={`fas ${props.weatherIcon}`}></i>
              <p className="">{props.description}</p>
         </>
          ):null
        }
         
        
        <div className="minmax">
          {props.mintemperature ?(
            <h5 >Min {props.mintemperature}&deg;<sup>C</sup></h5>
            ):null
          }
          {props.maxtemperature ?(
            <h5 className="max">Max {props.maxtemperature}&deg;<sup>C</sup></h5>
            ):null
          }
        </div>
        <p>As of {new Date().toLocaleTimeString() } IST {new Date().toLocaleDateString()}</p>
      </div>
      {/* <img src={Wimg} alt="Weatherimage" /> */}
    </div>): ''}
    </>
        
    );
}

export default Weatherdata;