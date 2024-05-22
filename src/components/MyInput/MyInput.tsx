import { useState, Dispatch, SetStateAction } from "react";
import "./MyInput.css"
import Axios from "axios";
import { LocationInformationProps } from '../LocationInformation/LocationInformationType';
import { ReactSVG } from "react-svg";

interface MyInputProps {
    setIpInfos: Dispatch<SetStateAction<LocationInformationProps>>, 
}

function MyInput( props : MyInputProps ) {
    const [ipInput, setIpInput] = useState<string>();


    //apiKey=at_OpXhqLDEetLKpdJTgaQapxkUROA3r&
    const fetchIpData = (e:any) => {
        e.preventDefault();

            Axios.get(`https://geo.ipify.org/api/v2/country,city?apiKey=at_OpXhqLDEetLKpdJTgaQapxkUROA3r&ipAddress=${ ipInput }`)
            .then((response) => {
                console.log(response.data)
                console.log(response.data.ip)
                props.setIpInfos({ 
                    ipAddress:response.data.ip, 
                    location: {
                        region: response.data.location.region,
                        country: response.data.location.country,
                        lat: response.data.location.lat,
                        lng: response.data.location.lng,
                    },
                    timezone: response.data.location.timezone,
                    isp: response.data.isp,
                })
            })
            .catch((error:any) => {
                alert("Address not founded")
            })
    } 

    return (
        <form className="Input-Component">
            <input type="text" className="Input-Text" placeholder="Search for any IP address" onChange={(event) => setIpInput(event.target.value)} required/>
            <button 
                className="Input-Button"
                onClick={ (e) => fetchIpData(e) }
            >
                <ReactSVG src="/images/icon-arrow.svg"/>
            </button>
        </form>        
    );
}

export default MyInput;
