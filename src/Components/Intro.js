import React from "react";

export default function Intro() {
    return (
        <section id="intro">
            <div className="container mx-auto flex px-10 py-15 items-center w-3/4 my-10">
                <p className="font-mono font-bold text-4xl text-yellow-200 text-left my-10">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
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