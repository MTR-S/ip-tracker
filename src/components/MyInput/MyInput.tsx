import { useState, Dispatch, SetStateAction, useEffect } from "react";
import "./MyInput.css"
import Axios from "axios";
import { LocationInformationProps } from '../LocationInformation/LocationInformationType';
import { ReactSVG } from "react-svg";
import swal from "sweetalert";

interface MyInputProps {
    setIpInfos: Dispatch<SetStateAction<LocationInformationProps>>,
    myInitialIp: string, 
}

function MyInput( props : MyInputProps ) {
    const [ipInput, setIpInput] = useState<string>("");

    useEffect(() => {
        if(props.myInitialIp !== "") {
            setIpInput(props.myInitialIp);
            fetchIpData(props.myInitialIp);
        }
    }, [props.myInitialIp]);

    const fetchIpData = (inputRequest:string, e?:any) => {
        e && e.preventDefault();
            Axios.get(`https://geo.ipify.org/api/v2/country,city?apiKey=${ process.env.REACT_APP_IPIFY_KEY }&domain=${ inputRequest }&ipAddress=${ inputRequest }`)
            .then((response) => {
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
                swal("Address not found", "Try another address or verify your input", "error");
            })
    } 

    return (
        <form className="Input-Component">
            <input type="text" className="Input-Text" placeholder="Search for any IP address or domain" onChange={(event) => setIpInput(event.target.value)} required/>
            <button 
                className="Input-Button"
                onClick={ (e) => fetchIpData(ipInput, e) }
            >
                <ReactSVG src="/images/icon-arrow.svg"/>
            </button>
        </form>        
    );
}

export default MyInput;
