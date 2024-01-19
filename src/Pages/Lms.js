import React from "react";
import { lmsPDF } from "../Data";

export default function Lms() {
    return (
        <section id="lms">
            <div className="container mx-auto flex flex-col px-10 py-15 items-center w-3/4 my-10 justify-center">
                <h1 className="font-semibold font-sans text-white text-4xl text-center mt-10">
                    PDF
                </h1>
                <a 
                className="flex flex-col my-2 mx-2 w-5/12 justify-center items-center border-2 border-transparent hover:border-teal-100"
                href={lmsPDF.path}
                target="_blank"
                rel="noreferrer">
                    <div className="flex flex-col justify-center items-center">
                        <h2 className="text-xl font-sans  font-bold text-white text-center mt-3 mb-2">{lmsPDF.title}</h2>

                        <img
                        alt="Learning Management System PDF"
                        className="relative object-scale-down"
                        src={lmsPDF.image}/>
                    </div>
                </a>
            </div>
        </section>
    );
}