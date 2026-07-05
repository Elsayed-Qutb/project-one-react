import React from 'react'
import Header from './Header'
import Section1 from './Section1'
import Section2 from './Section2'
import Section3 from './Section3'
import Section4 from './Section4'
import Section5 from './Section5'
import Section6 from './Section6'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";



export default function App() {
	useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
	<div className="min-h-screen bg-white text-black">
	  <Header></Header>
	  <Section1></Section1>
	  <Section2></Section2>
	  <Section3></Section3>
	  <Section4></Section4>
	  <Section5></Section5>
	 <Section6></Section6>
	</div>
  )
}
