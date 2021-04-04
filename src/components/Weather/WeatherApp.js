import React from 'react';
import Weather from "./Weatherdata";
import "./Weather.css";
import WeatherForm from './WeatherForm';


const apiKey = "25e79ea94dba8c093f1a62a7775280f4";

class WeatherApp extends React.Component {
  constructor(){
    super();
    this.state = {
      temperature: undefined,
      city: undefined,
      country: undefined,
      mintemperature: undefined,
      maxtemperature: undefined,
      description: undefined,
      icon:undefined,
      error: undefined
    };
    // this.getWeather();
    this.weatherIcon ={
      Thunderstrom:"fa-bolt",
      Drizzel:"fa-cloud-rain",
      Rain:"fa-cloud-showers-heavy",
      Snow:"fa-snowflake",
      Atmoshpere:"fa-smog",
      Clear:"fa-sun",
      Clouds:"fa-cloud",
    };
    this.countryname =[

    ];
  }

  calCelcius(temperature){
    let cel=Math.floor(temperature-273.15);
    return cel;
  }

  getWeatherIcon(icons, rangeId){
    switch(true){
      case rangeId >= 200 && rangeId <=232:
      this.setState({icon:this.weatherIcon.Thunderstrom});
      break;

      case rangeId >= 300 && rangeId <=321:
      this.setState({icon:this.weatherIcon.Drizzel});
      break;

      case rangeId >= 500 && rangeId <=531:
      this.setState({icon:this.weatherIcon.Rain});
      break;

      case rangeId >= 600 && rangeId <=622:
      this.setState({icon:this.weatherIcon.Snow});
      break;

      case rangeId >= 701 && rangeId <=781:
      this.setState({icon:this.weatherIcon.Atmoshpere});
      break;

      case rangeId === 800:
      this.setState({icon:this.weatherIcon.Clear});
      break;

      case rangeId >= 801 && rangeId <=804:
      this.setState({icon:this.weatherIcon.Clouds});
      break;
      default:
      this.setState({icon:this.weatherIcon.Clouds});
    }
  }

  getWeather = async (e) => {

    e.preventDefault();
    const city=e.target.elements.city.value;
    const country=e.target.elements.country.value;
    // const iconurl ="https://openweathermap.org/img/wn/" + `${props.weather[0].icon}` + ".png";

    if(city && country){
      const apiCall = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${apiKey} `
      );
    

    const response = await apiCall.json(); 
    if(response.sys && response.sys.country){
      this.setState({
        city:`${response.name}`,
        country:`${response.sys.country}`,
        temperature:this.calCelcius(response.main.temp),
        mintemperature:this.calCelcius(response.main.temp_min),
        maxtemperature:this.calCelcius(response.main.temp_max),
        description:response.weather[0].description,
        // icon: "http://openweathermap.org/img/wn/" + `${response.weather[0].icon}` + ".png",
        error:false
      });
      this.getWeatherIcon(this.weatherIcon, response.weather[0].id);
    }
    else{
      this.setState({error : '!! Country Name Not Match',
        temperature: undefined,
        city: undefined,
        country: undefined,
        mintemperature: undefined,
        maxtemperature: undefined,
        description: undefined,
      
      });
    }
    console.log("=====>",this.state.icon);

  

    }else{
      this.setState({error : 'Please Check City and Country Name',
        temperature: undefined,
        city: undefined,
        country: undefined,
        mintemperature: undefined,
        maxtemperature: undefined,
        description: undefined,
      
      });

    }

  };
  

  render(){
    return(
      <div className="weather">
        <WeatherForm loadweather={this.getWeather } error={this.state.error} countryname={this.countryname} />
        <Weather 
          weatherIcon={this.state.icon}
          city={this.state.city} 
          country={this.state.country}
          temperature={this.state.temperature}
          mintemperature={this.state.mintemperature}
          maxtemperature={this.state.maxtemperature}
          description={this.state.description} 
        />
      </div>
    );
  }
}










































// const apiKey = "8ddceeacaf8b95fe943c88fc8389dee0";

// const Title = () => {
//   return (
//     <div>
//       <h1 className="title-container__title">Weather Finder</h1>
//       <h3 className="title-container__subtitle">
//         Find out temperature, conditions and more...
//       </h3>
//     </div>
//   );
// };

// const Form = ({ onWeather }) => {
//   return (
//     <form onSubmit={e => onWeather(e)}>
//       <input type="text" name="city" placeholder="City..." />
//       <input type="text" name="country" placeholder="Country..." />
//       <button className="form-button">get Weather</button>
//     </form>
//   );
// };

// const WeatherApp = () => {
//   const [weather, getWeather]= useState([
//     {
//       temperature: undefined,
//       city: undefined,
//       country: undefined,
//       humidity: undefined,
//       description: undefined,
//       error: undefined
//     }
//   ]);
  
//   getWeather = async e => {
//     e.preventDefault();
//     const city = e.currentTarget.elements.city.value;
//     const country = e.currentTarget.elements.country.value;
//     if (city && country) {
//       try {
//         const apiCall = await fetch(
//           `https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiKey}&units=metric`
//         );
//         const { main, sys, name, weather } = await apiCall.json();
//         this.setState({
//           temperature: main.temp,
//           city: name,
//           country: sys.country,
//           humidity: main.humidity,
//           description: weather[0].description,
//           error: ""
//         });
//       } catch (ex) {
//         console.log(ex.message);
//       }
//     } else {
//       this.setState({
//         temperature: undefined,
//         city: undefined,
//         country: undefined,
//         humidity: undefined,
//         description: undefined,
//         error: "please enter a valid values."
//       });
//     }
//   };
  
//     return (
//       <div className="wrapper">
//         <div className="main">
//           <div className="container" style={{ width: "100%" }}>
//             <div className="row">
//               <div className="col-xs-5 title-container">
//                 <Title />
//               </div>
//               <div className="col-xs-7 form-container">
//                 <Form onWeather={this.getWeather} />
//                 <Weather
//                   temperature={this.state.temperature}
//                   city={this.state.city}
//                   country={this.state.country}
//                   humidity={this.state.humidity}
//                   description={this.state.description}
//                   error={this.state.error}
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
  
// }

export default WeatherApp;