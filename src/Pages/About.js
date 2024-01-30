import React from "react";

export default function About() {
    return (
        <section id="about">
            <div className="container flex flex-col min-h-[87vh]">
                <div className="h-[11vh] w-screen flex relative">
                    <img
                    alt='banner'
                    className="absolute object-none h-full w-full opacity-70"
                    src='./Images/banner.jpg'/>
                </div>
                
                <div className="flex-col px-4 py-15 my-12 sm:w-7/12 md:w-7/12 lg:w-7/12 w-full">
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
                    <h2 className="font-sans text-white text-xl text-left my-4">
                        Tel: 848-468-9174
                    </h2>
                </div>
            </div>
        </section>
    );
}