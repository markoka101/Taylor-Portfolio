import React from "react";
import { originsFiles } from "../Data";

export default function Origins() {
    return (
        <section id="origins">
            <div className="container mx-auto flex flex-col px-10 py-15 items-center w-3/4 my-10 justify-center">
                <h1 className="font-semibold font-sans text-white text-4xl text-center mt-10">
                    PDFs    
                </h1>"
                <div className="flex flex-wrap my-2 w-full justify-center items-center">
                    {originsFiles.map((card) => (
                        <a
                        key={card.title}
                        className="flex flex-col my-2 mx-2 w-5/12 justify-center items-center border-2 border-transparent hover:border-teal-100"
                        href={card.path}
                        target="_blank"
                        rel="noreferrer">
                            <div className="flex flex-col justify-center items-center">
                                <h2 className="text-xl font-sans font-bold text-white text-center mt-3 mb-2">{card.title}</h2>

                                <img
                                alt={card.title}
                                className="relative object-scale-down w-11/12 mb-8"
                                src={card.image}/>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}