import React from "react";

export default function Navbar() {

    return (
        <header className="bg-stone-300 sm:sticky md:sticky lg:sticky top-0 z-10">
            <div className="container flex flex-wrap py-3 px-4 items-center justify-between min-w-full text-black">
                <a className="font-medium border-b-2 border-transparent hover:border-b-2 hover:border-black text-xl" href="/">
                    Taylor Morales
                </a>
                <nav className="flex flex-wrap text-xl font-medium">
                    <a className="mx-2 border-b-2 border-transparent hover:border-b-2 hover:border-black hidden sm:block md:block lg:block" href="/#work">
                        Work
                    </a>
                    <a className="mx-2 border-b-2 border-transparent hover:border-b-2 hover:border-black" href="/about">
                        About
                    </a>
                    <a className="ml-2 border-b-2 border-transparent hover:border-b-2 hover:border-black" href="#contact">
                        Contact
                    </a>
                </nav>
            </div>
        </header>
    );
}