import React from "react"
import { useEffect } from "react"
import WeatherSummary from "../components/WeatherSummary";
import WeatherRow from "../components/WeatherRow";

const fetchCoordinates = (callback)=>{
    navigator.geolocation.getCurrentPosition(
        ({ coords: { latitude, longitude }})=>{
            callback(latitude, longitude)
        },
        (err)=> console.log(err)
    );
}


const WeatherApp=()=>{
    const isDay = false;

    useEffect(()=>{
        fetchCoordinates((latitude, longitude)=>{
            console.log(latitude, longitude);
        })
    },[])

    return(
        <div className={isDay ? "app" : "app dark"}>
            <h1 className="my-heading">Weather</h1>
            <button
            className="ui icon button"
            onClick={()=>{
                console.log("temperature unit button was clicked")
            }}
            style={{float: "right"}}
            >
                F
            </button>
            <div>
                <WeatherSummary/>
                <table className={`ui very basic table${!isDay ? " dark" : ""}`}>
                    <thead className={`table-custom${!isDay ? " dark" : ""}`}>
                        <tr>
                            <td>Date</td>
                            <td>Temperature</td>
                            <td>Type</td>
                        </tr>
                    </thead>

                    <tbody className="table-custom">
                        <WeatherRow/>
                        <WeatherRow/>
                        <WeatherRow/>
                        <WeatherRow/>
                        <WeatherRow/>
                        <WeatherRow/>
                        <WeatherRow/>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
export default WeatherApp;
