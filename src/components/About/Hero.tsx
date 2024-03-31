"use client";
import React, { useState, useRef, useEffect } from "react";

const Hero = () => {
  const [isFlipping, setIsFlipping] = useState(false);
  // if our component rerendered for some reason flipInterval.current will be untouched
  let flipInterval = useRef<ReturnType<typeof setInterval>>();
  useEffect(() => {
    startAnimation();
    return () => flipInterval.current && clearInterval(flipInterval.current);
  }, []);

  const startAnimation = () => {
    flipInterval.current = setInterval(() => {
      setIsFlipping((prevFlipping) => !prevFlipping);
    }, 10000);
  };
  return (
    <section className="hero-section">
      <div className="rotating-image">
        <div className={`flipper ${isFlipping ? "isFlipping" : ""}`}>
          <div className="front">
            <div className="image image-1">
              <h1 className="frontend text-4xl">Front End</h1>
            </div>
          </div>
          <div className="back">
            <div className="image image-2">
              <h1 className="backend text-4xl"> Back End</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
