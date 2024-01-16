import React from "react";

import Intro from '../Components/Intro';
import Work from '../Components/Work';

export default function Home() {
    return (
        <section id='home' className="h-screen">
            <Intro />
            <Work />
        </section>
    );
}