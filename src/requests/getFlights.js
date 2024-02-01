import { useState, useEffect } from "react";

export default function getDestinations() {
    const [flights, setFlights] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:3000/flights")
                if (!response.ok) {
                    throw new Error("Failed fetch!")
                }

                const jsonData = await response.json();
                setFlights(jsonData)
            } catch (error) {
                console.error("Error:", error)
            }
        }
        fetchData();
    }, [])
    
    return flights
}
