import React from "react";
import { workCards } from "../Data";

export default function Work() {
    return (
        <section id="work" className='mt-20 mb-10 py-5 h-[80vh]'>
            <div className="container min-w-full min-h-full flex">
                <div className="flex flex-wrap min-h-full min-w-full">
                    {workCards.map((card) => (
                        <a
                        href={card.page}
                        rel="noreferrer"
                        key={card.title}
                        className="w-1/3 min-h-1/2 bg-white">
                            <div className="flex relative min-h-full">
                                <img
                                alt={card.title}
                                className="absolute object-none w-full h-full"
                                src={card.image}/>

                                <div className="relative w-full min-h-full bg-red-400 opacity-0 hover:opacity-100 items-center justify-center flex text-center">
                                    <h1 className="text-4xl font-mono font-bold text-yellow-300 text-center">{card.title}</h1>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>

        </section>
    );
}