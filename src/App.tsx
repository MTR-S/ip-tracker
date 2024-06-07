import React, { useEffect, useState } from 'react';
import './App.css';

import MyMap from './components/MyMap';
import UpperContainer from './components/UpperContainer/UpperContainer';

import Axios from 'axios';
import { LocationInformationProps } from './components/LocationInformation/LocationInformationType';

function App() {
  const [apiIpfyData, setApiIpfyData] = useState<LocationInformationProps>({
    ipAddress: "",
    location: {
        region: "",
        country: "",
        lat: 0,
        lng: 0,
    },
    timezone: "",
    isp: ""
  });
  const [myIp, setMyIp] = useState<string>("");

  const getMyInicialIp = () => {
    Axios.get("https://api.ipify.org?format=json")
    .then((response:any) => {
      setMyIp(response.data.ip);
    })
  }

  useEffect(() => {
    getMyInicialIp();
  }, []);

  return (
    <div className="Ip-Tracker">
      <div className="Infos"> 
        <UpperContainer ipInfos={ apiIpfyData } setIpInfos={ setApiIpfyData } myInitialIp={myIp}/>
      </div>
     <div className="Map">
        <MyMap 
        longitude={ apiIpfyData.location.lng }  
        latitude={ apiIpfyData.location.lat }
        mapStyle="mapbox://styles/mapbox/satellite-streets-v12"
        />
     </div>
    </div>
  );
}

export default App;
