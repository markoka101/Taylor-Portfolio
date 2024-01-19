import React from "react";

export default function Intro() {
    return (
        <section id="intro">
            <div className="container mx-auto flex px-10 py-15 items-center w-3/4 my-10">
                <p className="font-mono font-bold text-4xl text-white text-left my-10">
                I am Taylor Morales. I am a Training and Development specialist working on Learning Management Systems, 
                Articulate Courses, and content creation based in New Jersey.

                </p>
                <img
                alt="me"
                className="ml-10 h-1/6 w-1/6"
                src="./Images/stick-taylor.png"
                />

            </div>
        </section>
    );
}