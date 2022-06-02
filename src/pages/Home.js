import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import CinemaDetails from './CinemaDetails';
import Spinner from '../components/Spinner'
import getCinemas from '../services/getCinemas';
import useCinemas from '../hooks/useCinemas';

function Home() {
    // const { loading, cinemas } = useCinemas()
    // console.log(cinemas);
    
    const [cinemas, setCinemas] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        console.log("home renderizado");
        setLoading(true)
        getCinemas()
            .then(data => {
                setCinemas(data)
                setLoading(false)
            })
    }, [])

    if (loading) {
        return <Spinner />
    }

    return (
        <div className="Home">

            <div className='local-cinemas'>
                <h2>Cines en Cádiz</h2>

                {
                    cinemas.map(cinema => 
                        <Link key={cinema.id} to={`cinema/${cinema.id}`} className='local-cinema' element={<CinemaDetails />}>
                            {cinema.name}
                        </Link>
                    )
                }
            </div>

            
        </div>
    ); 
    
}
  
export default Home;