import React from "react";

export default function About() {
    return (
        <section id="about">
            <div className="container px-4 py-15 items-center flex flex-row my-10 min-w-full">
                <div className="flex-col w-7/12">
                    <h1 className="font-semibold font-sans text-yellow-300 text-3xl text-left">
                        About Me
                    </h1>
                    <p className="font-sans text-yellow-300 text-xl text-left">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    </p>
                </div>
                <div className="flex-col w-5/12 justify-end">
                    <img
                    alt="me"
                    className=""
                    src="./Images/stick-taylor.png"></img>
                </div>
            </div>
        </section>
    );
}