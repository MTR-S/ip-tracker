import React from "react";
import { useState, createContext, Dispatch, SetStateAction } from "react";

import LocationInformation from "../LocationInformation/LocationInformation";
import MyInput from "../MyInput/MyInput";

import { LocationInformationProps } from "../LocationInformation/LocationInformationType";

import "./UpperContainer.css"


// UTILIZAR O USECONTEXT e retirar as props de myinput e upperCOntainernpm

interface UpperContainerProps {
    ipInfos: LocationInformationProps,
    setIpInfos: Dispatch<SetStateAction<LocationInformationProps>>,
    myInitialIp: string,
}

const UpperContainer = ( props: UpperContainerProps ) => {
    return(
        <div className="UpperContainer">
            <h1 className="Title">IP Address Tracker</h1>

            <MyInput setIpInfos={ props.setIpInfos } myInitialIp={props.myInitialIp}/>

            <LocationInformation 
                ipAddress={ props.ipInfos.ipAddress }
                location={ { region: props.ipInfos.location.region, country: props.ipInfos.location.country, lng: 0, lat: 0, } } 
                timezone={ props.ipInfos.timezone } 
                isp={ props.ipInfos.isp }
            />
        </div>
    );
}

export default UpperContainer;
