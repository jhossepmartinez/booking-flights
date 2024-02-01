import React from "react";

export default function renderAirlineLogo(airlineName) {
    if (airlineName === "Air France") {
        return (
            <img
                className="absolute top-0"
                src="../../../public/air-france.svg"
            />
        );
    } else if (airlineName === "United Airlines") {
        return (
            <img
                className=" absolute top-0 flex-shrink-0"
                src="../../../public/united-airlines.svg"
            />
        );
    } else {
        return (
        <div className="text-sm font-medium">
                {airlineName}
            </div>
        )
    }
}
