import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import Spinner from '../components/Spinner';
import DropdownList from '../components/DropdownList';
import {getQueenById} from '../services/getQueens';


function QueenDetails(){
    let {id} = useParams();

    const [queen, setQueen] = useState({});
    const [loading, setLoading] = useState(false);

    useEffect(() => {
      setLoading(true);
      getQueenById(id)
          .then(queen => {
              console.log(queen.episodes);
              setQueen(queen);
              setLoading(false);
          });
    }, [id])

    if (loading) {
      return <Spinner />
    }

    return (
      <div className='QueenDetails'>
        <img alt='Foto principal de la queen' width="250" src={queen.image_url} />
        <p>{queen.name}</p>

        <h2>Episodios en los que sale</h2>

        <DropdownList episodes={queen.episodes} />

      </div>   
    ); 
    
}
  
export default QueenDetails;