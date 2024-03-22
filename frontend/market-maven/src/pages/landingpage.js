import Navbar from "../Components/Navbar"

export default function Landing() {
  return (
    <div>
      <Navbar />
      <div className="Landing-Page" >
        <h1>Crafted with skill, grown with dedication</h1>
      </div>
    </div>
  )
}




{/*
import React, { useEffect, useState } from 'react';
import TextTransition, { presets } from 'react-text-transition';

const TEXTS = ['Forest', 'Building', 'Tree', 'Color'];

const Landing = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000, // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <div>
      <h1>
        <TextTransition springConfig={presets.wobbly}>
          {TEXTS[index % TEXTS.length]}
        </TextTransition>
      </h1>
    </div>
  );
};

export default Landing;


Market Maven
One stop shop for all local shoppes(farmers, gardeners, artisans, )
 
*/}