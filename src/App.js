import React from 'react';
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom';

//import pages
import About from './Pages/About';
import Lms from './Pages/Lms';
import Freelance from './Pages/Freelance';
import Origins from './Pages/Origins';
import Outer from './Pages/Outer';
import Vids from './Pages/Vids';
import SpringHills from './Pages/SpringHills';
import Home from './Pages/Home';

//import components
import Intro from './Components/Intro';
import Work from './Components/Work';
import Contact from './Components/Contact';
import Navbar from './Components/Navbar';

/*
I have router set up in case of need
*/
export default function App() {
    return (
        <main className='bg-custom-bg min-h-screen'>
            <BrowserRouter className="">
                <Navbar />

                <Routes>
                    <Route path='/' element={<><Intro /><Work /></>} />
                    <Route path='/About' element={<About />} />
                    <Route path='/Lms' element={<Lms />} />
                    <Route path='/Freelance' element={<Freelance />} />
                    <Route path='/SpringHills' element={<SpringHills />} />
                    <Route path='/Origins' element={<Origins />} />
                    <Route path='/Outer' element={<Outer />} />
                    <Route path='/Videos' element={<Vids />} />

                    <Route path='*' element={<Navigate to='/' />} />
                </Routes>

                <Contact />
            </BrowserRouter>
        </main>
    )
}