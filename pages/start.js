import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Start() {
  const [showContinueButton, setShowContinueButton] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContinueButton(true);
    }, 30000); // 30 seconds

    // Start playing the background music
    const audioEl = document.getElementById("background-audio");
    audioEl.play();

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container">
      <audio id="background-audio" loop>
        <source src="/start-music.mp3" type="audio/mp3" />
      </audio>
      <h1>The Coastal Curse</h1>
      <p>Welcome back, Detective Johnson!</p>
      <p>It's another dark and stormy morning, a setting all too familiar for you. Your phone buzzes, snapping you out of your thoughts. It's a call from the local police department.</p>
      <p>"Detective, we've got another one. This time it's in Two Harbors. Captain Williams has been found dead. This makes it the third captain killed along the coastline, starting from Duluth. The crew is terrified, and rumors are spreading like wildfire about a coastal curse."</p>
      <p>You feel a chill run down your spine. Ever since the first murder on the SS William A. Irvin in Duluth, you've been chasing shadows. Two more captains have been killed in similar circumstances, each one further up the coast. The pattern is clear, but the motive and the killer remain elusive.</p>
      <p>As you drive towards Two Harbors, you can't shake off the feeling that you're running out of time. The stormy weather, the nervous glances from each new crew, and the haunting history of these ships tell you that you're in a race against time.</p>
      <p>Your mission, should you choose to accept it, is to navigate the eerie settings of each ship, interrogate a widening circle of suspects, and piece together the clues to solve a series of murders that have plagued the coastline. Time is of the essence, and every choice you make could lead you closer to the killer—or into a trap.</p>
      <p>Are you ready to unravel the mystery and put an end to the coastal curse?</p>


      {showContinueButton && (
        <Link href="/investigate">
          <button className="button">Continue</button>
        </Link>
      )}
    </div>
  );
}
