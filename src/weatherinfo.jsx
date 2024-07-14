import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function Info({ weather }) {
  let hot =
    "https://media.istockphoto.com/id/537794281/photo/panoramic-sunset.jpg?s=1024x1024&w=is&k=20&c=ics8JccpizV9AIzJFK457fKljpfNizNSvtFL-fNPhH4=";
  let cold =
    "https://media.istockphoto.com/id/1428401936/photo/beautifull-background-on-a-christmas-theme-with-snowdrifts-snowfall-and-a-blurred-background.jpg?s=612x612&w=0&k=20&c=msIbZYv4J7aplO6SnkoseIEi43W2Ej1BFLpccOOfw6E=";
  let rain =
    "https://media.istockphoto.com/id/1257951336/photo/transparent-umbrella-under-rain-against-water-drops-splash-background-rainy-weather-concept.jpg?s=612x612&w=0&k=20&c=lNvbIw1wReb-owe7_rMgW8lZz1zElqs5BOY1AZhyRXs=";
  let arrlen = Object.keys(weather).length;
  return (
    <>
      {arrlen ? (
        <Card
          sx={{ maxWidth: 500 }}
          style={{ height: "450px", width: "400px" }}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              height="170px"
              image={
                weather.humidity > 80 ? rain : weather.temp >= 25 ? hot : cold
              }
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {weather.city}
              </Typography>
              <Typography color="text.secondary" component={"span"}>
                <p>CURRENT :- {weather.temp}&deg; C</p>
                <p>MAX-CURRENT :- {weather.maxtemp}&deg; C</p>
                <p>MIN-CURRENT :- {weather.mintemp}&deg; C</p>
                <p>HUMIDITY :- {weather.humidity}</p>
                <p>CONDITION :- {weather.condition}</p>
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ) : null}
    </>
  );
}
