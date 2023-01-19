import { useState, useEffect } from "react";

const useFetch = (endPoints) => {
    const [data, setData] = useState([]);

    useEffect( () => {
        async function fetchData() {
            const response = await fetch(endPoints);
            const data = await response.json();
            setData(data);
        }
        fetchData();
    }, [endPoints]);
    
    return data;
};

export default useFetch;