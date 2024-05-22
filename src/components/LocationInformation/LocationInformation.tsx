import React from "react";

import "./LocationInformation.css"
import { LocationInformationProps } from "./LocationInformationType";

const LocationInformation = ( props : LocationInformationProps ) => {
    return(
        <div className="Container-Info">

            <div className="Info">
                <label className="Info-Title">IP ADDRESS</label>
                <h1 className="Info-Text">{ props.ipAddress }</h1>
            </div>

            <hr  className="Info-Separator"/>

            <div className="Info">
                <label className="Info-Title">LOCATION</label>
                {props.timezone!= "" && <h1 className="Info-Text">{ `${props.location.region}, ${props.location.country}` }</h1>}
            </div>

            <hr  className="Info-Separator"/>

            <div className="Info">
                <label className="Info-Title">TIMEZONE</label>
                {props.timezone!= "" && <h1 className="Info-Text">{ `UTC ${ props.timezone }` }</h1>}
            </div>

            <hr  className="Info-Separator"/>

            <div className="Info">
                <label className="Info-Title">ISP</label>
                <h1 className="Info-Text">{ props.isp }</h1>
            </div>

        </div>
    );
}

export default LocationInformation;