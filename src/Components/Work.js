import React from "react";
import { workCards } from "../Data";

export default function Work() {
    return (
        <section id="work" className=' sm:mt-20 md:mt-20 lg:mt-20 mb-5 sm:mb-10 md:mb-10 lg:mb-10 py-5 sm:h-[100vh] md:h-[100vh] lg:h-[100vh] h-[80vh]'>
            <div className="container min-w-full sm:min-h-full md:min-h-full lg:min-h-full flex">
                <div className="flex flex-wrap min-h-full min-w-full">
                    {workCards.map((card) => (
                        <a
                        href={card.page}
                        rel="noreferrer"
                        key={card.title}
                        className="sm:w-1/3 md:w-1/3 lg:w-1/3 w-1/2 h-full sm:h-1/2 md:h-1/2 lg:h-1/2">
                            <div className="flex relative min-h-full">
                                <img
                                alt={card.title}
                                className="absolute object-cover aspect-auto w-full h-full"
                                src={card.image}/>

                                <div className="relative min-w-full min-h-full bg-cyan-700 bg-opacity-90 md:opacity-0 lg:opacity-0 hover:opacity-100 items-center justify-center flex transition-all duration-500 ease-in-out">
                                    <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-4xl font-sans font-semibold text-yellow-400 text-center">{card.title}</h1>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>

        </section>
    );
}