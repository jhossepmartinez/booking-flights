import React from 'react'

export default function PopularDestinations() {
    return (
        <div>
            <div className="font-semibold text-lg">
                <h2>Popular</h2>
            </div>
            <div className="flex space-x-3 overflow-x-auto snap-x snap-mandatory">
                <div className="shrink-0 w-36 space-y-3">
                    <div className="snap-start">
                        <img className="rounded-md object-cover w-36 h-48" width="144" height="144" src="https://denomades.s3.us-west-2.amazonaws.com/blog/wp-content/uploads/2020/05/11141948/ca-times.brightspotcdn.com_.jpg" alt="" />
                    </div>
                    <div className="text-sm h-10 font-semibold overflow-hidden">
                        <h3 className="">Cartagena de Indias, colombia</h3>
                    </div>
                </div>
                <div className="shrink-0 w-36 space-y-3">
                    <div className="snap-start">
                        <img className="rounded-md object-cover w-36 h-48" width="144" height="144" src="https://upload.wikimedia.org/wikipedia/commons/6/69/Los_Angeles_with_Mount_Baldy.jpg" alt="" />
                    </div>
                    <div className="text-sm h-10 font-semibold overflow-hidden">
                        <h3 className="">Los Angeles, Estados Unidos</h3>
                    </div>
                </div>
                <div className="shrink-0 w-36 space-y-3">
                    <div className="snap-start">
                        <img className="rounded-md object-cover w-36 h-48" width="144" height="144" src="https://www.travelandleisure.com/thmb/Fxte9fmDYrzqPWzRp8UkLLjuG4A=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/TAL-lead-image-BUENOSAIRES1123-2bf4e4bbceb54d29bbe7de401e68fdc6.jpg" alt="" />
                    </div>
                    <div className="text-sm h-10 font-semibold overflow-hidden">
                        <h3 className="">Buenos Aires, Argentina</h3>
                    </div>
                </div>
                <div className="shrink-0 w-36 space-y-3">
                    <div className="snap-start">
                        <img className="rounded-md object-cover w-36 h-48" width="144" height="144" src="https://cometeelmundo.net/sites/default/files/styles/max_1300x1300/public/media/blog/arc-de-triomphe-en-paris.jpg?itok=eqa3jjR4" alt="" />
                    </div>
                    <div className="text-sm h-10 font-semibold overflow-hidden">
                        <h3 className="">Paris, Francia</h3>
                    </div>
                </div>
                <div className="shrink-0 w-36 space-y-3">
                    <div className="snap-start">
                        <img className="rounded-md object-cover w-36 h-48" width="144" height="144" src="https://cdn.inteligenciaviajera.com/wp-content/uploads/2020/04/mejores-sitios-turisticos.jpg" alt="" />
                    </div>
                    <div className="text-sm h-10 font-semibold overflow-hidden">
                        <h3 className="">La Piramide del Sol, Mexico</h3>
                    </div>
                </div>
                <div className="shrink-0 w-36 space-y-3">
                    <div className="snap-start">
                        <img className="rounded-md object-cover w-36 h-48" width="144" height="144" src="https://cdn.inteligenciaviajera.com/wp-content/uploads/2020/04/mejores-lugares-turisticos.jpg" alt="" />
                    </div>
                    <div className="text-sm h-10 font-semibold overflow-hidden">
                        <h3 className="">Mezquita Azul, Estambul</h3>
                    </div>
                </div>
                <div className="shrink-0 w-36 space-y-3">
                    <div className="w-36 h-48">
                    </div>
                    <div className="text-sm h-10 font-semibold overflow-hidden">
                        <h3 className=""></h3>
                    </div>
                </div>
                <div className="shrink-0 w-36 space-y-3">
                    <div className=" w-36 h-48">
                    </div>
                    <div className="text-sm h-10 font-semibold overflow-hidden">
                        <h3 className=""></h3>
                    </div>
                </div>
            </div>
        </div>
    )
}
