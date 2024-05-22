import React, { useEffect, useState } from 'react';

import { MyMapProps } from "./MyMapType"; 

import Map, { Marker } from 'react-map-gl';
import ReactMapGL from "react-map-gl";

import 'mapbox-gl/dist/mapbox-gl.css';

interface MyMapViewType {
  longitude: number,
  latitude: number,
  zoom: number
}

function MyMap( props : MyMapProps ) {

  useEffect(() => {
    setViewState({
      longitude: props.longitude,
      latitude: props.latitude,
      zoom: 15,
    });
  }, [props.longitude, props.latitude]);
  
  const [viewState, setViewState] = useState<MyMapViewType>({
    longitude: props.longitude,
    latitude: props.latitude,
    zoom: 15,
  });
  
  return (
    <ReactMapGL  // HIDE THE API KEY
      {...viewState}
      style={ { width: "100%", height: "100%" } }
      mapStyle={props.mapStyle}
      mapboxAccessToken="pk.eyJ1IjoibXRyLXMiLCJhIjoiY2x2d3p1MmZ1MGR3ZDJxbzBlZmJxbmIxbiJ9.Sdk_8kjaGYVk9fQlrVdI3Q" 
    >
      <Marker
        longitude = { props.longitude }
        latitude = { props.latitude }
      >
      </Marker>
   </ ReactMapGL>  
  );
}

// IFCE: longitude: -38.537350 & latitude: -3.745670,

export default MyMap;