"use client"
import React, { useState , useEffect} from 'react'
import Image from 'next/image'
import Link from 'next/link'

type NavLink = {
  label: string;
  href: string;
  dropdown?: {label: string; href: string}[];
}

const navLinks: NavLink[] = [
  { label: 'Home', href: '/' },
  {label: 'About', href: '#about'},
  {label: 'Services', href: '#service'},
  {label: 'Testimonial', href: '#testimonial'},
  {label: 'Pricing Plan', href: '#pricing'},
  {label: 'Blogs', href: '#blog' },
  {label: 'FAQ', href: '#faq' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    }
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  // Login & Register Modal
  
  return (
    <>
    {/* Navbar */}
    <div className={`px-[8%] lg:px-[10%] fixed top-0 left-0w-full z-50 navbar transition-all duration-300 ${scrolled ? 'bg-white backdrop-blur-md shadow-lg px-[8%] lg:px-[16%]' : 'bg-transparent'}`}>
      <div className="flex justify-between items-center gap-5 py-5">
        <div className="flex items-center gap-8">
          <Link href="/">
            <div className="flex items-center gap-2 overflow-hidden">
              <h1 className="Merriweather text-4xl font-bold tracking-wider text-purple-700">Core <span className='text-[#000000]'>Bridge</span></h1>
            </div>
          </Link>
        </div>

        <div className='hidden lg:flex items-center gap-3'>
          <nav className="hidden lg:flex space-x-6 menu-link relative z-40">
            {navLinks.map((link)=>(
              <Link key={link.label} href={link.href}>
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-4 nav-right">
            <button>
              <i className="bi bi-person w-10 h-10 flex justify-center items-center border border-gray-500 rounded-full hover:bg-white hover:border-white hover:shadow-lg transition-all duration-200 cursor-pointer"></i>
            </button>
        </div>
      </div>
    </div>

    </>
  )
}
