import Navbar from "../Components/Navbar"
import React from 'react';
import { TypeAnimation } from 'react-type-animation';


export default function Landing() {

  const sequences = [
    { text: 'Shop for Fresh Produce', wait: 1500 },
    { text: 'Shop for Artwork', wait: 1500 },
    { text: 'Shop for Baked Goods', wait: 1500 },
    { text: 'Shop for Personalized Gifts', wait: 1500 }
  ];

  return (
    <div>
      <Navbar />
      <div className="Landing-Page" style={{ paddingTop: '20vh', flexDirection: 'column', alignItems: 'center'}}>
        <h1 className="">
          <TypeAnimation
            sequence={sequences.flatMap(({ text, wait }) => [text, wait])}
            wrapper="span"
            speed={20}
            style={{ fontSize: '80px', display: 'inline-block' }}
            repeat={Infinity}
          />
        </h1>
        
        <h4 className="text-white pl-1 pt-2">search and shop from farmers, artists, and crafts people. support local businesses.</h4>
      </div>
    </div>
  )
}
