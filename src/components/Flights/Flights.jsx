import React from "react";
import getFlights from "../../requests/getFlights";
import displayLogo from "./displayLogo";

export default function Flights() {
    const flights = getFlights();
    return (
        <div className="space-y-5 bg-slate-200 pt-2">
            <h1 className="mx-3 text-lg font-medium">Vuelos</h1>
            <div className="bg-red-5 mx-3 flex flex-col items-center space-y-8">
                {flights.map((flight) => (
                    <div
                        key={flight.flight_id}
                        className="flex h-48 w-full flex-grow flex-col space-y-2 rounded-md border border-slate-300 bg-white p-3 md:w-[50%]"
                    >
                        <div>
                            <div className="mb-2 flex h-10 justify-between">
                                <div className="relative top-0 flex w-1/2 text-sm font-medium">
                                    {flight.departure_city},{" "}
                                    {flight.departure_country}
                                </div>
                                <div className="relative top-0 flex w-1/2 justify-end">
                                    {displayLogo(flight.airline_name)}
                                </div>
                            </div>
                            <div className="flex">
                                <div className="w-1/2">
                                    <div className="font-medium text-slate-600">
                                        IDA
                                    </div>
                                    <div className="font-medium">
                                        <div>
                                            {new Date(
                                                flight.departure_date,
                                            ).toLocaleString("es-ES", {
                                                weekday: "short",
                                                day: "numeric",
                                                month: "short",
                                                year: "numeric",
                                            })}
                                        </div>
                                        <div className="text-xs text-slate-500">
                                            {new Date(
                                                flight.departure_date,
                                            ).toLocaleString("es-ES", {
                                                hour: "numeric",
                                                minute: "numeric",
                                            })}
                                        </div>
                                    </div>
                                </div>
                                <div className="w-1/2">
                                    <div className="font-medium text-slate-600">
                                        LLEGADA
                                    </div>
                                    <div className="font-medium">
                                        <div>
                                            {new Date(
                                                flight.arrival_date,
                                            ).toLocaleString("es-ES", {
                                                weekday: "short",
                                                day: "numeric",
                                                month: "short",
                                                year: "numeric",
                                            })}
                                        </div>
                                        <div className="text-xs text-slate-500">
                                            {new Date(
                                                flight.arrival_date,
                                            ).toLocaleString("es-ES", {
                                                hour: "numeric",
                                                minute: "numeric",
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="border-t border-slate-300">
                            <div className="text-sm text-slate-600">Desde</div>
                            <div className="flex items-center space-x-1">
                                <div className="text-slate-600">$</div>
                                <div className="text-2xl">
                                    {flight.price}.000
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
