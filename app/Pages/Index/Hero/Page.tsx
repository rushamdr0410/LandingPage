"use client"

import Image from 'next/image'
import HeroImg from "@/public/Hero.webp"
import clutchImg from "@/public/clutch.svg"
import arrowImg from "@/public/arrow-shape-1.svg"
import { BsArrow90DegDown} from 'react-icons/bs'

import CountUp from 'react-countup';

export default function Hero() {
  return (
    <>
        <div className='hero-header flex items-center relative'>
            <div className='ps-[8%] lg:ps-[16%] pe-[8%] md:pe-0 py-10'>
                <div className='w-full flex flex-col lg:flex-row justify-between items-center gap-3'>
                    <div className='w-full lg:w-1/2'>
                        <div className="hero-content w-full">
                            <h1 className="Syne text-6xl md:text-7xl tracking-wider font-bold">AGENCY</h1>
                            <h1 className="Syne text-6xl md:text-7xl tracking-wider font-bold">OFFERING</h1>
                            <h1 className="Syne text-6xl md:text-7xl tracking-wider font-bold">LEAD CAPTURE</h1>
                            <h1 className="Syne text-6xl md:text-7xl tracking-wider font-bold">SOFTWARE</h1>
                            <p className="mt-5 text-xl">Success in marketing comes from well-synchronised and steady tactics</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    
  )
}
