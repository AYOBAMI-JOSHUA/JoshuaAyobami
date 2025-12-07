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
      <div className="max-w-xl text-center lg:text-left mb-4 md:mb-0">


        <Text
          as="h1"
          size="3xl"
          className="text-darkNavy dark:text-offWhite"
        >
          Hi, I'm a <br />
          Frontend & Mobile <span className="text-tealishGreen">Developer</span>.
        </Text>

        <Text
          as="p"
          size="base"
          className="mt-4 text-tealishGreen dark:text-offWhite"
        >
          with 1+ year of experience building responsive web interfaces and mobile apps
          using Next.js, React, React Native, JavaScript, TailwindCSS, and Convex.
          I focus on creating smooth, scalable, and user-centered experiences across both
          web and mobile platforms.
        </Text>


        <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <Link
            to="/about"
            className="group inline-flex justify-center items-center gap-3 px-6 py-3 rounded-xl border-2 border-tealishGreen shadow-md font-medium transition-colors duration-300 overflow-hidden text-tealishGreen dark:text-[#0000FF] dark:border-[#0000FF]"
            style={{
              backgroundImage:
                "repeating-linear-gradient(150deg, #e6fffa 0 4px, #b1b1f1ff 4px 6px)"

            }}
          >
            <span className="transition-all duration-300 origin-center group-hover:scale-115 ">
              About Me
            </span>
          </Link>

          <Link
            to="/projects"
            className="group inline-flex justify-center items-center gap-3 px-6 py-3 rounded-xl border-2 border-tealishGreen shadow-md font-medium transition-colors duration-300 overflow-hidden text-tealishGreen dark:text-[#0000FF] dark:border-[#0000FF]"
            style={{
              backgroundImage:
                "repeating-linear-gradient(150deg, #e6fffa 0 4px, #b1b1f1ff 4px 6px)"

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
              <path d="M0 0 L0 5 L18 5 L18 0 Z" fill="#b1b1f1ff" />
            </pattern>

            {/* subtle dot*/}
            <pattern id="dots" x="0" y="0" width="6" height="6" patternUnits="userSpaceOnUse">
              <circle cx="1.5" cy="1.5" r="0.9" fill="#b1b1f1ff" className="dark:fill-[#0000FF]" />
            </pattern>
          </defs>

          {/* stable diagonal */}
          <rect x="260" y="120" width="520" height="420" rx="12" fill="url(#diagStripes)" />

          {/* wrapper positions the whole avatar center*/}
          <g transform="translate(460,340)">

            {/* MOVING HEAD GROUP (only this group moves) */}
            <g ref={headRef} transform="translate(0,-150)">
              {/* head */}
              <ellipse cx="0" cy="55" rx="150" ry="180" fill="#e6fffa" stroke="#0000FF" strokeWidth="8" className="dark:fill-[#b1b1f1ff] dark:stroke-[#0000FF]"/>

              {/* ears */}
              <path d="M-170 50 C-190 50 -190 90 -170 100 C-150 90 -150 60 -170 50 Z" fill="#e2eceaff" stroke="#0000FF" strokeWidth="5" className="dark:fill-[#2c4a7f] dark:stroke-[#0000FF]"/>
              <path d="M170 50 C190 50 190 90 170 100 C150 90 150 60 170 50 Z" fill="#e2eceaff" stroke="#0000FF" strokeWidth="5" className="dark:fill-[#2c4a7f] dark:stroke-[#0000FF]"/>

              {/* glasses */}
              <g stroke="#0000FF" strokeWidth="10" fill="none" className="dark:stroke-[#0000FF]">
                <rect x="-110" y="10" width="95" height="80" rx="18" />
                <rect x="15" y="10" width="95" height="80" rx="18" />
                <path d="M-15 50 L15 50" strokeWidth="8" />
              </g>

              {/* lenses */}
              <g fill="#f6fdff" opacity="0.9" className="dark:fill-[#b1b1f1ff]">
                <rect x="-104" y="14" width="83" height="72" rx="14" />
                <rect x="21" y="14" width="83" height="72" rx="14" />
              </g>

              {/* eyes (white) */}
              <circle cx="-62" cy="40" r="16" fill="#fff" className="dark:fill-[#0f172a]" />
              <circle cx="62" cy="40" r="16" fill="#fff" className="dark:fill-[#0f172a]" />

              {/* pupils (refs for GSAP) */}
              <circle ref={leftPupilRef} cx="-62" cy="40" r="9" fill="#0b1d3a" className="dark:fill-[#f1f5f9]"/>
              <circle ref={rightPupilRef} cx="62" cy="40" r="9" fill="#0b1d3a" className="dark:fill-[#f1f5f9]" />

              {/* nose */}
              <path d="M12 60 Q0 85 -12 60" fill="none" stroke="#0f766e" strokeWidth="4" strokeLinecap="round" className="dark:stroke-[#0000FF]" />

              {/* mouth */}
              <path d="M-60 100 Q0 130 60 100" stroke="#0b1d3a" strokeWidth="5" fill="none" strokeLinecap="round" className="dark:stroke-[#f1f5f9]"/>

              {/* chin shadow */}
              <ellipse cx="0" cy="130" rx="55" ry="20" fill="url(#dots)" opacity="0.5" />

              {/* eyebrows */}
              <path d="M-100 28 Q-60 0 -40 20" stroke="#0b1d3a" strokeWidth="10" strokeLinecap="round" fill="none" className="dark:stroke-[#f1f5f9]" />
              <path d="M40 20 Q60 0 100 28" stroke="#0b1d3a" strokeWidth="10" strokeLinecap="round" fill="none" className="dark:stroke-[#f1f5f9]" />
            </g>
          </g>
        </svg>
      </div>
    </section>
  );
}
