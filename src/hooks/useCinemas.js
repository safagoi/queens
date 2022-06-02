import { useEffect, useState } from "react";
import getCinemas from "../services/getCinemas";

export default function useCinemas({cinemaId} = {}) {
    const [cinemas, setCinemas] = useState({});
    const [loading, setLoading] = useState(false);
    
    useEffect(() => {
      setLoading(true);
      getCinemas({cinemaId: cinemaId})
        .then(data => {
          setCinemas(data);
          setLoading(false)
        });
        
    }, [cinemaId])

    return {loading, cinemas}
}
