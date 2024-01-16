import React from "react";

export default function Navbar() {

    return (
        <header className="bg-slate-800 sticky top-0 z-10">
            <div className="container flex flex-wrap py-3 px-4 items-center justify-between min-w-full">
                <a className="font-medium text-slate-200 hover:text-yellow-200 text-xl" href="/#intro">
                    Taylor Morales
                </a>
                <nav className="flex flex-wrap text-xl font-medium">
                    <a className="text-slate-100 hover:text-yellow-200 mx-2" href="/#work">
                        Work
                    </a>
                    <a className="text-slate-100 hover:text-yellow-200 mx-2" href="/About">
                        About
                    </a>
                    <a className="text-slate-100 hover:text-yellow-200 ml-2" href="/#contact">
                        Contact
                    </a>
                </nav>
            </div>
        </header>
    );
}