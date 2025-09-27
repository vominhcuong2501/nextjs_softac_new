'use client'
import Link from 'next/link'
import React, { useContext, useEffect, useRef } from 'react'
import { AppContext } from '@/context'
import { useDisplay } from '@/hooks'
import { DISPLAY_DEVICE } from '@/constants'

export const AnimateMouse = () => {

  const { isEnter } = useContext(AppContext);

  const eRef = useRef<HTMLDivElement | null>(null);

  const tRef = useRef<HTMLDivElement | null>(null);


  let n,
    i = 0,
    o = false;

  useEffect(() => {
    interface MouseEventWithCoordinates extends MouseEvent {
      clientX: number;
      clientY: number;
    }

    const handleMouseMove = (s: MouseEventWithCoordinates) => {
      if (!o) {
        if (tRef.current) {
          tRef.current.style.transform = `translate(${s.clientX}px, ${s.clientY}px)`;
        }
      }
      if (eRef.current) {
        eRef.current.style.transform = `translate(${s.clientX}px, ${s.clientY}px)`;
      }
      n = s.clientY;
      i = s.clientX;
    };
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <React.Fragment>
      <div
        ref={eRef}
        className={`mouseCursor cursor-outer ${isEnter ? "cursor-big !m-0" : ""}`}
      ></div>
      <div
        ref={tRef}
        className={`mouseCursor cursor-inner ${isEnter ? "cursor-big !m-0" : ""}`}
      >
        <Link href="#" target='_blank' className={`${isEnter && '!opacity-100 !visible'}`} ><i className="fas fa-play"></i></Link>
      </div>
    </React.Fragment>
  );
}
