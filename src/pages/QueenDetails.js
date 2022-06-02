import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import Spinner from '../components/Spinner';
import {getQueenById} from '../services/getQueens';


function QueenDetails(){
    let {id} = useParams();

    const [queen, setQueen] = useState({});
    const [loading, setLoading] = useState(false);

    useEffect(() => {
      setLoading(true);
      getQueenById(id)
          .then(queen => {
              setQueen(queen);
              setLoading(false);
          });
    }, [])

    if (loading) {
      return <Spinner />
    }

    return (
      <div className='QueenDetails'>
        <img width="250" src={queen.image_url} />
        <p>{queen.name}</p>
      </div>   
    ); 
    
}
  
export default QueenDetails;