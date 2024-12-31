import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export const Hero = () => {
  const headingRef = useRef(null);
  const descriptionRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    
    tl.from(titleRef.current, {
      y: 100,
      opacity: 0,
      duration: 1.5,
      ease: "power3.out"
    })
    .from(headingRef.current, {
      y: 50,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out"
    }, "-=1")
    .from(descriptionRef.current, {
      y: 30,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    }, "-=0.8");
  }, []);

  return (
    <div className="text-center py-20 px-6 max-w-4xl mx-auto relative">
      {/* Background element for flair */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 opacity-10 blur-3xl"></div>
      
      {/* Title */}
      <h1 
        ref={titleRef}
        className="text-5xl md:text-7xl font-extrabold mb-8 gradient-text bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600"
      >
        CareerDive
      </h1>

      {/* Heading */}
      <h2
        ref={headingRef}
        className="text-3xl md:text-5xl font-bold mb-6 text-grey-400 dark:text-green-600"
      >
        DiveInto Your Tech  Career
      </h2>

      {/* Description */}
      <p 
        ref={descriptionRef}
        className="text-lg md:text-xl text-muted-foreground leading-relaxed"
      >
      Your go-to platform for curated resources designed to enhance your technical expertise and accelerate career growth.
       Take the leap today and transform your professional journey with CareerDive!
      </p>

      {/* Call to Action
      <div className="mt-10">
        <a 
          href="#resources"
          className="inline-block px-8 py-3 text-lg font-semibold text-white bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg shadow-lg hover:opacity-90 focus:ring-4 focus:ring-blue-400 focus:outline-none"
        >
          Get Started
        </a>
      </div> */}
    </div>
  );
};
