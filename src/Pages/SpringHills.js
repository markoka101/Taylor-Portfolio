import React from "react";
import { springFiles,springImages } from "../Data";

export default function SpringHills() {
    return (
        <section id="springhills" className="">
            <div className="container mx-auto flex flex-col px-10 py-15 items-center w-3/4 my-10 justify-center">
                <h1 className="font-semibold font-sans text-yellow-300 text-4xl text-center">
                    Pictures
                </h1>
                <div className="flex flex-col my-2 w-full">
                    {springImages.map((card) => (
                        <div key={card.title} className="flex flex-col my-2">
                            <div className="flex flex-col justify-center items-center">
                                <h2 className="text-xl font-sans font-bold text-yellow-300 text-center mt-3 mb-2">{card.title}</h2>

                                <img
                                alt={card.title}
                                className="relative object-scale-down w-5/12"
                                src={card.path}/>

                            </div>
                        </div>
                    ))}
                </div>

                <h1 className="font-semibold font-sans text-yellow-300 text-4xl text-center mt-10">
                    PDF Files
                </h1>
                <div className="flex flex-col my-2 w-full justify-center items-center">
                    {springFiles.map((card) => (
                        <a
                        key={card.title} 
                        className="flex flex-col my-2 hover:opacity-70 w-5/12 justify-center items-center"
                        href={card.path}
                        target="_blank"
                        rel="noreferrer">
                            <div className="flex flex-col justify-center items-center">
                                <h2 className="text-xl font-sans font-bold text-yellow-300 text-center mt-3 mb-2">{card.title}</h2>

                                <img
                                alt={card.image}
                                className="relative object-scale-down w-full"
                                src={card.image}/>
                            </div>
                        </a>
                    ))}
                </div>

            </div>
        </section>
    );
}