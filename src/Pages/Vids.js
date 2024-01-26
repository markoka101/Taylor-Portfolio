import React from 'react';
import { freelanceVideos, originsVideos} from '../Data';
//import mmfe from '../../public/Videos/or_vid/mmfe.mp4';

export default function Vids() {
    return (
        <section id='vids'>
            <div className='container mx-auto flex flex-col sm:px-10  md:px-10 lg:px-10 py-15 items-center w-3/4 my-10 justify-center'>
                <h1 className='font-semibold font-sans text-white text-4xl text-center my-10'>
                    Videos
                </h1>
                
                <h2 className='font-semibold font-sans text-white text-3xl text-center'>
                    Origins
                </h2>

                <div className='flex flex-wrap my-2 w-full justify-center items-center'>
                    {originsVideos.map((card)=>(
                        <div key={card.title} className='flex flex-col my-2 mx-2 sm:w-5/12 md:w-5/12 lg:w-5/12 w-full'>
                            <video width='auto' height='auto' controls autoPlay={false}>
                                
                                <source src={card.path} type='video/mp4' />
                            </video>
                        </div>
                    ))}
                </div>

                <h2 className='font-semibold font-sans text-white text-3xl text-center mt-20'>
                    Freelance
                </h2>
                <div className='flex flex-wrap my-2 w-full justify-center items-center'>
                    {freelanceVideos.map((card)=>(
                        <div key={card.title} className='flex flex-col my-2 mx-2 sm:w-5/12 md:w-5/12 lg:w-5/12 w-full'>
                            <video width='auto' height='auto' controls autoPlay={false}>
                                <source src={card.path} type='video/mp4' />
                            </video>
                    </div>
                    ))}
                </div>
            </div>

            
        </section>
    )
}