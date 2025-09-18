import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Text from "../global/Text";

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
    <section className="h-full flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-16 mt-8">
      <div className="max-w-xl text-center md:text-left mb-4 md:mb-0">

        <Text
          as="h1"
          size="3xl"
          className="text-[#0b1d3a]"
        >
          Hi, I'm a <br />
          Frontend <span className="text-tealishGreen">developer</span>.
        </Text>

        <Text
          as="p"
          size="base"
          className="mt-4 text-tealishGreen"
        >
           with 1+ year of experience using React, JavaScript, HTML5, and TailwindCSS and other 
           frameworks to build all aspects of the user experience and user interface
            for client-facing landing pages.
        </Text>

        <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <Link
            to="/about"
            className="group inline-flex justify-center items-center gap-3 px-6 py-3 rounded-xl border-2 border-tealishGreen shadow-md font-medium transition-colors duration-300 overflow-hidden text-tealishGreen"
            style={{
              backgroundImage:
                "repeating-linear-gradient(150deg, #e6fffa 0 4px, #b0f5edff 4px 6px)"

            }}
          >
            <span className="transition-all duration-300 origin-center group-hover:scale-115 ">
              About Me
            </span>
          </Link>

          <Link
            to="/project"
            className="group inline-flex justify-center items-center gap-3 px-6 py-3 rounded-xl border-2 border-tealishGreen shadow-md font-medium transition-colors duration-300 overflow-hidden text-tealishGreen"
            style={{
              backgroundImage:
                "repeating-linear-gradient(150deg, #e6fffa 0 4px, #b0f5edff 4px 6px)"

            }}
          >
            <span className="transition-all duration-300 origin-center group-hover:scale-115">
              View Projects
            </span>
          </Link>
        </div>
      </div>

      {/* AVATAR */}
      <div
        ref={wrapperRef}
        className="w-full md:w-[480px] flex justify-center relative mb-6 md:mb-0"
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
              <ellipse cx="0" cy="55" rx="150" ry="180" fill="#e6fffa" stroke="#14b8a6" strokeWidth="8" />

              {/* ears */}
              <path d="M-170 50 C-190 50 -190 90 -170 100 C-150 90 -150 60 -170 50 Z" fill="#e2eceaff" stroke="#49bf9d" strokeWidth="5" />
              <path d="M170 50 C190 50 190 90 170 100 C150 90 150 60 170 50 Z" fill="#e2eceaff" stroke="#49bf9d" strokeWidth="5" />

              {/* glasses */}
              <g stroke="#49bf9d" strokeWidth="10" fill="none">
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
              <circle ref={leftPupilRef} cx="-62" cy="40" r="9" fill="#0b1d3a" />
              <circle ref={rightPupilRef} cx="62" cy="40" r="9" fill="#0b1d3a" />

              {/* nose */}
              <path d="M12 60 Q0 85 -12 60" fill="none" stroke="#0f766e" strokeWidth="4" strokeLinecap="round" />

              {/* mouth */}
              <path d="M-60 100 Q0 130 60 100" stroke="#0b1d3a" strokeWidth="5" fill="none" strokeLinecap="round" />

              {/* chin shadow */}
              <ellipse cx="0" cy="130" rx="55" ry="20" fill="url(#dots)" opacity="0.5" />

              {/* eyebrows */}
              <path d="M-100 28 Q-60 0 -40 20" stroke="#0b1d3a" strokeWidth="10" strokeLinecap="round" fill="none" />
              <path d="M40 20 Q60 0 100 28" stroke="#0b1d3a" strokeWidth="10" strokeLinecap="round" fill="none" />
            </g>
          </g>
        </svg>
      </div>
    </section>
  );
}
