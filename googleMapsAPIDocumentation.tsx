// Google Maps API Documentation

// Descripition: 
// Este arquivo simplifica a API do google maps para redirecionamento 
// por URL. Não precisa de API Key. 

// Crédito de API: https://developers.google.com/maps/documentation/urls/get-started
// Author: Ryan Galvão

// For search with Latitude and Longitude

import React, { useState } from 'react'


export function GoInPointWithLatitudeAndLongitude() {

    //baseURLAPISearch: https://www.google.com/maps/search/?api=1&query=47.5951518,-122.3316393 


    const [latitude, setLatitude] = useState()
    const [longitude, setLongitude] = useState()
    
    setLatitude(-3.0018182)
    setLongitude(-47.3565362)

    return (
        <a 
        target="_blank" 
        rel="noopener noreferrer" 
        href={`https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`}
        >
            Ver rotas no Google Maps
        </a>

    )
}

export function SearchAndGetTheRouteWithLatitudeAndLongitude(){
   
   //baseURLAPISearch: https://www.google.com/maps/dir/?api=1&destination=47.5951518,-122.3316393 


    const [latitude, setLatitude] = useState()
    const [longitude, setLongitude] = useState()
    
    setLatitude(-3.0018182)
    setLongitude(-47.3565362)

    return(
        <a 
        target="_blank" 
        rel="noopener noreferrer" 
        href={`https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`}
        >
            Ver rotas no Google Maps
        </a>
    )
}