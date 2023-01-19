import Section from "../components/Section"
import Text from "../components/Text"

// dont forget to add .env to gitignore
const getData = async () => {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=sydney&appid=${process.env.APP_ID}&units=metric`);
  const data = await response.json();

  return data;
}

export default function Home() {    
    return(
    <div>
    <div style={{display: 'flex', justifyContent: 'center'}}>
        <h1>Weather for Sydney!</h1>
      </div>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <button style={{
          padding: '8px',
          borderRadius: '8px',
          border: '1px solid black',
          cursor: 'pointer',
        }}
       
        >Ok</button>
      </div>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <div>
          <p style={{color: 'blue', textAlign: 'center'}}>
            {temp}
          </p>
          <p>More data</p>
          <p>Windspeed: {windspeed}kts</p>
        </div>
      </div>
      <div>
        <p>terms and conditions, disclaimers and all that</p>
      </div>
    </div>
  )
}