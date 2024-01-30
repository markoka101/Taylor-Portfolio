import React from "react";

export default function Intro() {
    return (
        <section id="intro">
            <div className="container mx-auto flex px-3 sm:px-2 md:px-2 lg:px-2 py-5 sm:py-15 md:py-15 lg:py-15 items-center sm:w-3/4 md:w-3/4 lg:w-3/4 w-full my-10">
                <p className="font-sans font-bold sm:text-4xl md:text-4xl lg:text-4xl text-xl text-white text-left sm:my-10 md:my-10 lg:my-10">
                I am Taylor Morales. I am a Training and Development specialist working on Learning Management Systems, 
                Articulate Courses, and content creation based in New Jersey.

                </p>
                <img
                alt="me"
                className="ml-20 h-1/6 w-1/6 hidden lg:block lg:ring-4 lg:ring-slate-700 rounded-xl"
                src="./Images/tay-2.jpg"
                />

            </div>
        </section>
    );
}