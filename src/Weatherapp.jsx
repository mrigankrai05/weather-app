import Search from "./search.jsx"
import Info from "./weatherinfo.jsx"
import "./main.css"
import { useState } from "react";
export default function Weatherapp() {
    let [weatherinfo,setinfo]=useState({});
    function update(result){
        setinfo(result);
    }
  return (
    <>
      <div className="base">
        <h1>WEATHER APP</h1>
        <div className="search">
          <Search update={update}/>
        </div>
        <div className="info">
          <Info weather={weatherinfo}/>
        </div>
      </div>
    </>
  );
}
