import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";

export default function Hero() {
  const wrapperRef = useRef(null);   
  const headRef = useRef(null);     
  const leftPupilRef = useRef(null);
  const rightPupilRef = useRef(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const head = headRef.current;
    const left = leftPupilRef.current;
    const right = rightPupilRef.current;

    if (!wrapper || !head || !left || !right) return;

    const maxPupil = 10;   
    const maxHeadX = 28;   
    const maxHeadY = 16;   

    function onMove(e) {
      const rect = wrapper.getBoundingClientRect();

      // compute pointer position relative to wrapper, center = 0
      let xPct = (e.clientX - rect.left) / rect.width - 0.5;
      let yPct = (e.clientY - rect.top) / rect.height - 0.5;

      // clamp so head never goes wild or leaves its area
      xPct = Math.max(-0.5, Math.min(0.5, xPct));
      yPct = Math.max(-0.5, Math.min(0.5, yPct));

      // animate pupils (small movement)
      gsap.to([left, right], {
        x: xPct * maxPupil,
        y: yPct * maxPupil,
        duration: 0.18,
        ease: "power2.out",
      });

      // animate head group (parallax inside wrapper)
      gsap.to(head, {
        x: xPct * maxHeadX,
        y: yPct * maxHeadY,
        duration: 0.6,
        ease: "power3.out",
      });
    }

    // attach listener to window,
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section className="pt-20 md:pt-0 min-h-screen flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-16 bg-[#f6fbfd]">
      <div className="max-w-xl text-center md:text-left mb-8 md:mb-0">
        <h1 className="text-4xl md:text-5xl font-bold text-[#0b1d3a] leading-snug">
          Hi, my <br />
          name is <span className="text-tealishGreen">YourName</span>.
        </h1>

        <p className="mt-4 text-base md:text-lg text-tealishGreen">
          I&apos;m an <span className="font-semibold">independent frontend developer</span>
          {" "}who builds clean, interactive, responsive web experiences.
        </p>

        <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <Link
            to="/about"
            className="w-full sm:w-auto inline-block bg-tealishGreen text-white font-medium px-6 py-3 rounded-xl shadow-md hover:bg-tealishGreen transition text-center"
          >
            About Me
          </Link>

          <Link
            to="/projects"
            className="w-full sm:w-auto inline-block border-2 border-tealishGreen text-tealishGreen font-medium px-6 py-3 rounded-xl hover:bg-tealishGreen hover:text-white transition text-center"
          >
            View Projects
          </Link>
        </div>
      </div>

      {/* AVATAR */}
      <div
        ref={wrapperRef}
        className="w-full md:w-[520px] flex justify-center relative mb-6 md:mb-0"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 900 700"
          className="w-[300px] sm:w-[360px] md:w-[520px] h-auto"
          aria-labelledby="avatarTitle avatarDesc"
        >
          <title id="avatarTitle">Avatar with striped panel</title>
          <desc id="avatarDesc">Cartoon avatar whose head follows the cursor</desc>

          <defs>
            {/* diagonal stripe*/}
            <pattern id="diagStripes" patternUnits="userSpaceOnUse" width="18" height="18" patternTransform="rotate(-25)">
              <rect width="18" height="18" fill="#eaf6fb" />
              <path d="M0 0 L0 5 L18 5 L18 0 Z" fill="#d2ecf6" />
            </pattern>

            {/* subtle dot*/}
            <pattern id="dots" x="0" y="0" width="6" height="6" patternUnits="userSpaceOnUse">
              <circle cx="1.5" cy="1.5" r="0.9" fill="#bfe8f5" />
            </pattern>
          </defs>

          {/* stable diagonal */}
          <rect x="260" y="120" width="520" height="420" rx="12" fill="url(#diagStripes)" />

          {/* wrapper positions the whole avatar center*/}
          <g transform="translate(460,340)">

            {/* MOVING HEAD GROUP (only this group moves) */}
            <g ref={headRef} transform="translate(0,-150)">
              {/* head */}
              <ellipse cx="0" cy="55" rx="150" ry="180" fill="#f2c9a0" stroke="#6a3b86" strokeWidth="8" />

              {/* ears */}
              <path d="M-170 50 C-190 50 -190 90 -170 100 C-150 90 -150 60 -170 50 Z" fill="#f2c9a0" stroke="#6a3b86" strokeWidth="5" />
              <path d="M170 50 C190 50 190 90 170 100 C150 90 150 60 170 50 Z" fill="#f2c9a0" stroke="#6a3b86" strokeWidth="5" />

              {/* glasses */}
              <g stroke="#1c3d7c" strokeWidth="10" fill="none">
                <rect x="-110" y="10" width="95" height="80" rx="18" />
                <rect x="15" y="10" width="95" height="80" rx="18" />
                <path d="M-15 50 L15 50" strokeWidth="8" />
              </g>

              {/* lenses */}
              <g fill="#f6fdff" opacity="0.9">
                <rect x="-104" y="14" width="83" height="72" rx="14" />
                <rect x="21" y="14" width="83" height="72" rx="14" />
              </g>

              {/* eyes (white) */}
              <circle cx="-62" cy="40" r="16" fill="#fff" />
              <circle cx="62" cy="40" r="16" fill="#fff" />

              {/* pupils (refs for GSAP) */}
              <circle ref={leftPupilRef} cx="-62" cy="40" r="9" fill="#3b1f7a" />
              <circle ref={rightPupilRef} cx="62" cy="40" r="9" fill="#3b1f7a" />

              {/* nose */}
              <path d="M12 60 Q0 85 -12 60" fill="none" stroke="#6a3b86" strokeWidth="4" strokeLinecap="round" />

              {/* mouth */}
              <path d="M-60 100 Q0 130 60 100" stroke="#6a3b86" strokeWidth="5" fill="none" strokeLinecap="round" />

              {/* chin shadow */}
              <ellipse cx="0" cy="130" rx="55" ry="20" fill="url(#dots)" opacity="0.5" />

              {/* eyebrows */}
              <path d="M-100 28 Q-60 0 -40 20" stroke="#1c3d7c" strokeWidth="10" strokeLinecap="round" fill="none" />
              <path d="M40 20 Q60 0 100 28" stroke="#1c3d7c" strokeWidth="10" strokeLinecap="round" fill="none" />
            </g>
          </g>
        </svg>
      </div>
    </section>
  );
}
