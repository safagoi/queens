import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import Spinner from '../components/Spinner'
import {getQueens} from '../services/getQueens';

function Home() {
    
    const [queens, setQueens] = useState([]);
    const [loading, setLoading] = useState(false);;

    useEffect(() => {
        setLoading(true);
        getQueens()
            .then(queens => {
                setQueens(queens);
                setLoading(false);
            });
    }, [])

    if (loading) {
        return <Spinner />
    }

    return (
        <div className="Home">
            <div className='local-cinemas'>
                <h2>Lista de Queens</h2>
                {
                    queens.map(queen => 
                        <Link key={queen.id} to={`queen/${queen.id}`}>
                            {queen.name}
                        </Link>
                    )
                }
            </div>
        </div>
    ); 
    
}
  
export default Home;