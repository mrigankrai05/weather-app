
import TextField from "@mui/material/TextField";
import { useState } from "react";

import Button from "@mui/material/Button"


export default function search({update}) {

  let [city, setcity] = useState("");
  function change(event) {
    setcity(event.target.value);
  }

  let key = "e485f6491b82e62afd7accb602d8c32a";
  let URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;

  async function getinfo() {
    try{
    let data = await fetch(`${URL}`);
    let data1 = await data.json();
    console.log(data1);
    let result = {
      city: data1.name,
      temp: data1.main.temp,
      maxtemp: data1.main.temp_max,
      mintemp: data1.main.temp_min,
      humidity: data1.main.humidity,
      condition:data1.weather[0].main
    };
    return result;}
    catch(error){
      return {
        city: "NOT FOUND",
      };
    }
  }

  async function submit(event) {
    event.preventDefault();
    console.log(city);
    let info= await getinfo();
    update(info);
  }
  function cleared(){
    setcity("");
    update({});
  }
  return (
    <>
      <form onSubmit={submit}>
        <TextField
          id="standard-required"
          label="CITY"
          variant="standard"
          value={city}
          onChange={change}
          size="normal"
          placeholder="ENTER CITY NAME"
          margin="normal"
          color="secondary"
          style={{marginTop:"0px"}}
        />
        <br></br>
        <br></br>
        <Button
          variant="contained"
          type="submit"
          style={{ marginRight: "20px" }}
        >
          SEARCH
        </Button>
        <Button variant="contained" onClick={cleared}>
          CLEAR
        </Button>
      </form>
    </>
  );
}
