"use client"
import React, { useState , useEffect} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { DiVim } from 'react-icons/di'

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
  const [showModal, setShowModal] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  const [activeId, setActiveId]=useState<string>("");

  useEffect(() => {
    const sections=document.querySelectorAll("section[id]");
    const obserber = new IntersectionObserver((entries)=>{
      entries.forEach((entry)=>{
        if(entry.isIntersecting){
          setActiveId(`#${entry.target.id}`);
        }
      });
    }, {threshold: 0.2,});
    sections.forEach((section) => obserber.observe(section));
    return()=>obserber.disconnect();
  }, []);

  useEffect(() => {
    const handleTop=()=>{
      if(window.scrollY < 80){
        setActiveId("/");
      }
    };
    window.addEventListener("scroll", handleTop);
    return () => window.removeEventListener("scroll", handleTop);
  }, []);

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
              <Link key={link.label} href={link.href}
                onClick={()=>setActiveId(link.href)} className={`flex gap-2 text-lg transition-all ${activeId === link.href ? "font-semibold text-(--prim) border-b-2" : "text-black" } hover:text-(--prim)`}>
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-4 nav-right">
          <button onClick={()=>{
            setIsLogin(true);
            setShowModal(true);
          }}>
            <i className="bi bi-person w-10 h-10 flex justify-center items-center border border-gray-500 rounded-full hover:bg-white hover:border-white hover:shadow-lg transition-all duration-200 cursor-pointer"></i>
          </button>

          {/* {Mobile Hamburger} */}
          <button className='lg:hidden flex flex-col gap-[5px]' onClick={()=>setOpen(!open)}>
            <span className={`block w-6 h-[3px] bg-black transition-all ${open ? "rotate-45 translate-y-2" : ""}`}></span>
            <span className={`block w-6 h-[3px] bg-black transition-all ${open ? "opacity-0" : ""}`}></span>
            <span className={`block w-6 h-[3px] bg-black transition-all ${open ? "-rotate-45 -translate-y-2" : ""}`}></span>
          </button>
        </div>

        {/* {Mobile Menu} */}
        <div className={`lg:hidden fixed top-[60px] bg-white left-0 w-full z-50 transition-all duration-300 ${open ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"}`}>
          <div className="mx-[5%] rounded-2xl shadow-2xl border border-white/10">
            <nav className="flex flex-col px-6 py-6 gap-5">
              {navLinks.map((link)=>(
                <Link key={link.label} href={link.href}
                  onClick={()=>setOpen(false)} className="flex items-center justify-between text-black border-b border-black/10 text-lg tracking-wide hover:text-(--prim) transition-all Cirvuler-font">
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* {Login/Register Modal} */}
      {showModal && (
       <div className="fixed inset-0 z-50 h-screen flex items-center justify-center bg-black/80 backdrop-blur-sm">
        <div className="relative bg-purple-100 border border-white/10 rounded-x1 p-10 w-[450px] md:w-[500px] shadow-2xl animate-fadeIn">
          {/* {Close} */}
          <button className='absolute top-5 right-5 text-4xl cursor-pointer text-black hover:text-(--prim) transition-all duration-300' onClick={()=>setShowModal(false)}>
            ×
          </button>

          {/* {Title} */}
          <h2 className="clash-font text-3xl font-semibold mb-8 text-black">  
            {isLogin ? "Login to Your Account" : "Register Your Account"}
          </h2>

          {/* {Form} */}
          <form className="flex flex-col gap-4">
            {!isLogin && (
              <input type="text" placeholder='Full Name' className='w-full bg-gray-200/2- border border-black/20 text-black px-4 py-3 rounded-xl focus:outline-none focus:border-(--prim) transition-all'/>
            )}

            <input type="email" placeholder='Email Address' className='w-full bg-gray-200/2- border border-black/20 text-black px-4 py-3 rounded-xl focus:outline-none focus:border-(--prim) transition-all'/>
            <input type="password" placeholder='Password' className='w-full bg-gray-200/2- border border-black/20 text-black px-4 py-3 rounded-xl focus:outline-none focus:border-(--prim) transition-all'/>

            {/* {Submit} */}
            <button type='button' className='w-full mt-5 bg-(--prim) text-white text-xl py-3 rounded-xl font-semibold hover:bg-purple-600 transition-all cursor-pointer'>
              {isLogin ? "Login Now" : "Register Now"}

            </button>
          </form>
 
          {/* {Auth} */}
          <p className="text-center text-sm mt-4 text-black fonts-semibold">
            {isLogin ?(
              <> Don't have an account?{""}
              <button type='button' className='text-(--prim) cursor-pointer hover:underline transition-all' onClick={()=>setIsLogin(false)}>Register Here</button></>
            ):(
              <>Already have an account?{""}
              <button type='button' className='text-(--prim) cursor-pointer hover:underline transition-all' onClick={()=>setIsLogin(true)}>Login Here</button></>
            )}
          </p>
        </div>
       </div>)}
    </div>

    </>
  )
}
