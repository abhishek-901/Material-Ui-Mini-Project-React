import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function InfoBox({info}){
      const INIT_URL =
       "https://images.unsplash.com/photo-1680352267694-a7fd4c33d4e1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGR1c3R5JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D"

      let HOT_URL = 
             "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGR1c3R5JTIwd2VhdGhlciUyMHN1bnxlbnwwfHwwfHx8MA%3D%3D";
      let COLD_URL = 
              "https://images.unsplash.com/photo-1477468572316-36979010099d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGR1c3R5JTIwd2VhdGhlciUyMGNvbGR8ZW58MHx8MHx8fDA%3D";
      let RAIN_URL = 
              "https://images.unsplash.com/photo-1520609798519-2e1e8c18df3a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGR1c3R5JTIwd2VhdGhlciUyMHJhaW58ZW58MHx8MHx8fDA%3D";

    return(
    <div className="InfoBox">
      <div className="cardContainer">
       <Card sx={{ maxWidth: 345 }}>
       <CardMedia
        sx={{ height: 140 }}
        image={info.humidity > 80 
            ? RAIN_URL 
            : info.temp > 15
            ? HOT_URL 
            : COLD_URL
        }
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}{
            info.humidity > 80 
            ? <ThunderstormIcon/> 
            : info.temp > 15
            ? <WbSunnyIcon/> 
            : <AcUnitIcon/>
        }
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
           <p>Temperature = {info.temp}&deg;C</p>
           <p>Humidity= {info.humidity}</p>
           <p>Min Temp = {info.tempMin}&deg;C</p>
           <p>Max Temp = {info.tempMax}&deg;C</p>
           <p>The weather can be described as <i>{info.weather}</i> and fills like = {info.feelslike}&deg;C</p>
        </Typography>
      </CardContent>
    </Card>
     </div>
    </div>
    );
}