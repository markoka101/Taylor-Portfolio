import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faLinkedin} from '@fortawesome/free-brands-svg-icons'

export default function Contact() {
    return (
        <footer id="contact">
            <div className="container py-5 flex flex-row min-w-full justify-center items-center bg-black bg-opacity-50 bottom-0">
                <p className="text-white text-xl font-sans font-bold text-center">
                    trmorales1013@gmail.com
                </p>
                <div className="flex items-center">
                    <a href="https://www.linkedin.com/in/taylor-morales-71125a201/"
                    className="ml-4 text-slate-300 hover:text-white">
                        <FontAwesomeIcon icon={faLinkedin} size='2x'/>
                    </a>
                </div>
            </div>
        </footer>
    );
}