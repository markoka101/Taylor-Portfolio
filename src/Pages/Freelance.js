import React from "react";
import  {freelanceImages} from '../Data';

export default function Freelance() {
    return (
        <section id='freelance'>
            <div className="container mx-auto flex flex-col px-10 py-15 items-center w-3/4 my-10 justify-center">
                <h1 className="font-semibold font-sans text-white text-4xl text-center mt-10">
                    Images
                </h1>
                <div className="flex flex-wrap my-2 w-full justify-center">
                    {freelanceImages.map((card) => (
                        <div
                        key={card.title}
                        className="flex flex-col my-2 mx-2 sm:w-5/12 md:w-5/12 lg:w-5/12 w-full">
                            <div className="flex flex-col justify-center items-center">
                                <img
                                alt={card.title}
                                className="relative object-scale-down"
                                src={card.path}/>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}