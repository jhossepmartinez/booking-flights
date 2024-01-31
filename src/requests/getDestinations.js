import { useState, useEffect } from "react";

export default function getDestinations() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:3000/destinations")
                if (!response.ok) {
                    throw new Error("Failed fetch!")
                }

                const jsonData = await response.json();
                setData(jsonData)
            } catch (error) {
                console.error("Error:", error)
            }
        }
        fetchData();
    }, [])
    
    return data
}
