import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faLinkedin} from '@fortawesome/free-brands-svg-icons'

export default function Contact() {
    return (
        <section id="contact">
            <div className="container pb-16 flex flex-row min-w-full justify-center items-center">
                <p className="text-yellow-200 text-xl font-mono font-bold text-center">
                    example@email.com | 123-456-7890
                </p>
                <div className="flex items-center">
                    <a href="https://www.linkedin.com/in/taylor-morales-71125a201/"
                    className="ml-4 text-slate-300 hover:text-white">
                        <FontAwesomeIcon icon={faLinkedin} size='2x'/>
                    </a>
                </div>
            </div>
        </section>
    );
}