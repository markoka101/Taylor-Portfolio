import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';

//import pages
import About from './Pages/About';
import Awards from './Pages/Awards';
import Freelance from './Pages/Freelance';
import Images from './Pages/Images';
import Origins from './Pages/Origins';
import Outer from './Pages/Outer';
import Home from './Pages/Home';

//import components
import Intro from './Components/Intro';
import Work from './Components/Work';
import Contact from './Components/Contact';
import Navbar from './Components/Navbar';

export default function App() {
    return (
        <main className='bg-slate-800'>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path='/' element={<><Intro /><Work /><Contact /></>} />
                    <Route path='/About' element={<About />} />
                    <Route path='/Awards' element={<Awards />} />
                    <Route path='/Freelance' element={<Freelance />} />
                    <Route path='/Images' element={<Images />} />
                    <Route path='/Origins' element={<Origins />} />
                    <Route path='/Outer' element={<Outer />} />
                </Routes>
            </BrowserRouter>
        </main>
    )
}