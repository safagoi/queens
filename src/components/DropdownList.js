import { useState } from 'react';

export default function DropdownList(props) {
    
    let episodes = props.episodes;
    const [opened, setOpened] = useState(false)



    return (
        <div className="DropdownList">
            {
                opened ?
                    <ul>
                    {
                        episodes !== undefined ?
                        episodes.map(episode => 
                            <div key={episode.id}>
                                {episode.title}
                            </div>) 
                            : 
                            "No sale en ningun episodio"
                    } 
                    </ul>
                    :
                    ""
            }

            <button onClick={() => setOpened(!opened)}>
                {
                    opened ?
                    "Cerrar"
                    :
                    "Abrir" 
                }
            </button>
        </div>
    )
}