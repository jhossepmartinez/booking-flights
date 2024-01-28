import React from 'react'

export default function SearchForm() {
    return (
        <div className="flex-cols pt-4 space-y-2 font-medium text-slate-600">
            <div className="grid grid-cols-1 space-y-1">
                <div className="bg-slate-200 rounded-t-lg p-3">
                    Desde
                </div>
                <div className="bg-slate-200 rounded-b-lg p-3">
                    Hacia donde viajas
                </div>
            </div>
            <div className="flex flex-grow">
                <div className="bg-slate-200 rounded-l-lg p-3 w-[50%] border-r border-slate-400">
                    Ida
                </div>
                <div className="bg-slate-200 rounded-r-lg p-3 w-[50%] border-l border-slate-400">
                    Llegada
                </div>
            </div>
            <div className="flex flex-grow">
                <div className="bg-slate-200 rounded-l-lg p-3 w-[50%] border-r border-slate-400">
                    Pasajeros
                </div>
                <div className="bg-slate-200 rounded-r-lg p-3 w-[50%] border-l border-slate-400">
                    Clase
                </div>
            </div>
        </div>
    )
}
