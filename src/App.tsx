import React, { useState } from 'react';
import './App.css';

import MyMap from './components/MyMap';
import UpperContainer from './components/UpperContainer/UpperContainer';

import Axios from 'axios';
import { LocationInformationProps } from './components/LocationInformation/LocationInformationType';

// criar pop up para tratar o erro caso a requisição dê erro
// add pesquisar por dominio e lat e lng
// ajustar responsividade para o celular
// 3$c0nd3r 4p1 k3y mapboxe  api do ip

function App() {
  const [apiIpfyData, setApiIpfyData] = useState<LocationInformationProps>({
    ipAddress: "",
    location: {
        region: "",
        country: "",
        lat: -3.71839,
        lng: -38.5434,
    },
    timezone: "",
    isp: ""
  });

  return (
    <div className="Ip-Tracker">
      <div className="Infos"> 
        <UpperContainer ipInfos={ apiIpfyData } setIpInfos={ setApiIpfyData }/>
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
