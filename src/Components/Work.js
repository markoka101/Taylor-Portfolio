import React from "react";
import { workCards } from "../Data";

export default function Work() {
    return (
        <section id="work" className=' sm:mt-20 md:mt-20 lg:mt-20 mb-10 py-5 sm:h-[100vh] md:h-[100vh] lg:h-[100vh] h-[70vh]'>
            <div className="container min-w-full sm:min-h-full md:min-h-full lg:min-h-full flex">
                <div className="flex flex-wrap min-h-full min-w-full">
                    {workCards.map((card) => (
                        <a
                        href={card.page}
                        rel="noreferrer"
                        key={card.title}
                        className="sm:w-1/3 md:w-1/3 lg:w-1/3 w-1/2 h-5/6 sm:h-1/2 md:h-1/2 lg:h-1/2 bg-cyan-700">
                            <div className="flex relative min-h-full">
                                <img
                                alt={card.title}
                                className="absolute object-none w-full h-full"
                                src={card.image}/>

                                <div className="relative min-w-full min-h-full bg-cyan-700 bg-opacity-95 md:bg-opacity-95 lg:bg-opacity-95 md:opacity-0 lg:opacity-0 hover:opacity-100 items-center justify-center flex text-center">
                                    <h1 className="text-4xl font-sans font-semibold text-yellow-400 text-center">{card.title}</h1>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>

        </section>
    );
}