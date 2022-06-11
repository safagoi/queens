import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import Spinner from '../components/Spinner'
import {getQueens, getQueensByName} from '../services/getQueens';

function Home() {
    
    const [queens, setQueens] = useState([]);
    const [loading, setLoading] = useState(false);

    const [keyword, setKeyword] = useState("");
    const [searchResults, setSearchResults] = useState([]);


    // Controla el submit del formulario
    function handleSearchSubmit(event) {
        event.preventDefault();

        if (keyword !== "") {
            let result = getQueensByName(queens, keyword);
            setSearchResults(result)
        } else {
            setSearchResults([])
        }

    }

    // Setea el valor del estado keyword cuando
    // se produce un cambio en el input
    function handleSearchInputChange(event) {
        setKeyword(event.target.value);
    }

    // Llamada API para obtener todas las queens
    // y mostrarlas en lista
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
            <div className='queens-search'>
                <h2>Buscador por nombre</h2>
                <form id='search-form' onSubmit={handleSearchSubmit}>
                    <input onChange={handleSearchInputChange} type="text" value={keyword} />
                    <button type='submit'>Buscar</button>
                </form>
                <p>Resultados:</p>
                {
                    searchResults.length !== 0 ? searchResults.map(queen => 
                        <Link key={queen.id} to={`queen/${queen.id}`}>
                            {queen.name}
                        </Link>
                    )
                    :
                    "No hay resultados"
                }
            </div>
            
            <div className='queens-list'>
                <h2>Lista de Queens</h2>
                {
                    queens.slice(0,10).map(queen => 
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