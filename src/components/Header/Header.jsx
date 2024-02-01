import React from 'react'
import { GiCommercialAirplane } from "react-icons/gi";
import { BiSolidPackage } from "react-icons/bi";
import { Link } from "react-router-dom"

export default function Header() {
    return (
        <div className="flex flex-col font-semibold gap-4">
            <div className="flex gap-4">
                <div className="flex items-center gap-2 bg-slate-200 rounded-md px-3 py-2">
                    <div className="">
                        <BiSolidPackage />
                    </div>
                    <div className="">
                        Paquetes
                    </div>
                </div>
                <div className="flex items-center gap-2 bg-slate-200 rounded-md px-3 py-2">
                    <div>
                        <GiCommercialAirplane />
                    </div>
                    <div>
                        <Link to="flights">Vuelos</Link>
                    </div>
                </div>
            </div>
            <div className="border-b border-slate-300">
            </div>
        </div>
    )
}
