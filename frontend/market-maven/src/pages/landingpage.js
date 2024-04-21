import Navbar from "../Components/Navbar"
import React from 'react';
import { TypeAnimation } from 'react-type-animation';


export default function Landing() {

  const sequences = [
    { text: 'Shop for produce', wait: 1500 },
    { text: 'Shop for art', wait: 1500 },
    { text: 'Shop for jewelry', wait: 1500 },
    { text: 'Shop for clothes', wait: 1500 }
  ];

  return (
    <div>
      <Navbar />
      <div className="Landing-Page" style={{ paddingLeft: '1em', paddingTop: '16em', flexDirection: 'column', alignItems: 'flex-start'}}>
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
