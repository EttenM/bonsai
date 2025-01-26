"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

type Props = {
  title: JSX.Element;
  subtitle: string;
};
gsap.registerPlugin(ScrollTrigger);
const SectionHeader = ({ title, subtitle }: Props) => {
  const section_header_lineRef = useRef(null);
  const section_header_subtitleRef = useRef(null);
  const titleRef = useRef(null);
  const section_headerRef = useRef(null);
  useGSAP(() => {
    const tlHeader = gsap.timeline({
      scrollTrigger: {
        trigger: section_headerRef.current,
        start: "+=15% bottom",
        scrub: false,
      },
    });
    tlHeader
      .from(
        section_header_lineRef.current,
        {
          delay: 0,
          width: 0,
          duration: 0.5,
          ease: "power1.out",
        },
        "tlHeader"
      )
      .from(
        section_header_subtitleRef.current,
        {
          delay: 0,

          yPercent: -100,
          duration: 0.5,
          ease: "power1.out",
        },
        "tlHeader"
      )
      .from(
        titleRef.current,
        {
          delay: 0,

          yPercent: 100,
          duration: 1,
          ease: "power1.out",
        },
        "tlHeader2"
      );
  }, []);

  return (
    <div className="section_header" ref={section_headerRef}>
      <div className="section_header_subtitle_wrapper">
        <div className="section_header_line" ref={section_header_lineRef}></div>
        <p className="section_header_subtitle" ref={section_header_subtitleRef}>
          {subtitle}
        </p>
      </div>
      <div className="section_header_title" ref={titleRef}>
        {title}
      </div>
    </div>
  );
};

export default SectionHeader;
