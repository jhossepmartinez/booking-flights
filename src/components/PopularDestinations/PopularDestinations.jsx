import React, { useEffect, useState } from "react";
import getDestinations from "../../requests/getDestinations";
import "./PopularDestinations.css";

export default function PopularDestinations() {
    const data = getDestinations();

    return (
        <div className="">
            <div className="text-lg font-semibold">
                <h2>Popular</h2>
            </div>
            <div className="popular-destinations-scroll flex snap-x snap-mandatory space-x-3 overflow-x-auto">
                <div className="w-48 shrink-0 space-y-3">
                    <div className="h-48 w-36"></div>
                    <div className="h-10 overflow-hidden text-sm font-semibold">
                        <h3 className=""></h3>
                    </div>
                </div>
                {data.map((destination) => (
                    <div
                        key={destination.destination_id}
                        className="w-36 shrink-0 space-y-3"
                    >
                        <div className="snap-start">
                            <img
                                className="h-48 w-36 rounded-md object-cover"
                                width="144"
                                height="144"
                                src={destination.image_link}
                                alt=""
                            />
                        </div>
                        <div className="h-10 overflow-hidden text-sm font-semibold">
                            <h3 className="">
                                {destination.city}, {destination.country}
                            </h3>
                        </div>
                    </div>
                ))}

                <div className="w-48 shrink-0 space-y-3">
                    <div className=" h-48 w-36"></div>
                    <div className="h-10 overflow-hidden text-sm font-semibold">
                        <h3 className=""></h3>
                    </div>
                </div>
            </div>
        </div>
    );
}
