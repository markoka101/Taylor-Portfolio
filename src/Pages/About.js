import React from "react";

export default function About() {
    return (
        <section id="about">
            <div className="container px-4 py-15 flex flex-row my-10 min-h-[78vh]">
                <div className="flex-col w-7/12">
                    <h1 className="font-semibold font-sans text-white text-4xl text-left pb-2 border-b-2">
                        About Me
                    </h1>
                    <p className="font-sans text-white text-xl text-left mt-4">
                    I am Taylor Morales. 
                    I am a Training and Development specialist working on Learning Management Systems, 
                    Articulate Courses, and content creation based in New Jersey. 
                    Many of my skills extend into video production and editing, instructional design, graphic design, and project management! 
                    I've done a great deal of work managing invoices, setting up vendors, and general admin work. 
                    </p>

                    <h1 className="font-semibold font-sans text-white text-4xl text-left mt-20 pb-2 border-b-2">
                        Contact
                    </h1>
                    <h2 className="font-sans text-white text-xl text-left my-4">
                        Email: trmorales1013@gmail.com
                    </h2>
                    <h2 className="font-sans text-white text-xl text-left  my-4">
                        Tel: 848-468-9174
                    </h2>
                </div>
            </div>
        </section>
    );
}