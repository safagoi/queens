import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import Spinner from '../components/Spinner';
import useCinemas from '../hooks/useCinemas';

function CinemaDetails(){
    let {cinemaId} = useParams();

    const { loading, cinemas } = useCinemas({cinemaId: cinemaId})

    if (loading) {
      return <Spinner />
    }

    return (
      <div className='CinemaDetails'>
          Nombre: {cinemas.name} <br/>
          Ciudad: {cinemas.city} <br/>
          Dirección: {cinemas.address}
      </div>   
    ); 
    
}
  
export default CinemaDetails;