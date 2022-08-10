import {useState} from 'react'
import Head from 'next/head'

import Header from "../components/Header";
import Hero from "../components/Hero";
import Advantages from "../components/Advantages";
import Articles from "../components/Articles";
import Footer from "../components/Footer";
import Burgermenu from "../components/Burgermenu"


export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  }
  const handleClose = () => {
    setIsOpen(false);
  }
  
  return (
    <div className="wrapper">
      <Head>
        <title>Bank app</title>
      </Head>
      {isOpen && <Burgermenu />}
      <Header open={handleOpen} close={handleClose} isOpen={isOpen}/>
      <Hero />
      <Advantages />
      <Articles />
      <Footer />
    </div>
  )
}
