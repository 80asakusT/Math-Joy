"use client";

import React, { useEffect } from "react";

export function CircleTextAnimation() {
  const textRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (textRef.current) {
      textRef.current.innerHTML = textRef.current.innerText
        .split("")
        .map(
          (char, i) =>
            `<span style="transform:rotate(${i * 15.3}deg)">${char}</span>`,
        )
        .join("");
    }
  }, [textRef]);

  return (
    <div className="bg-[#CBBEF5] relative w-[136px] h-[136px] border-white rounded-full flex items-center justify-center">
      <div className="absolute">
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M29.15 16L9.33329 27.95C8.16663 28.65 6.66663 27.8167 6.66663 26.45V13.1167C6.66663 7.30002 12.95 3.66669 18 6.56669L25.65 10.9667L29.1333 12.9667C30.2833 13.65 30.3 15.3167 29.15 16Z"
            fill="#DCFFBD"
          />
          <path
            d="M30.15 25.7666L23.4 29.6666L16.6667 33.5499C14.25 34.9333 11.5167 34.6499 9.53334 33.2499C8.56668 32.5833 8.68334 31.0999 9.70001 30.4999L30.8833 17.7999C31.8833 17.1999 33.2 17.7666 33.3833 18.9166C33.8 21.4999 32.7333 24.2833 30.15 25.7666Z"
            fill="#DCFFBD"
          />
        </svg>

        {/*<Image className="rounded-full" src="/images/home/img_4.png" alt="" width={48} height={48} />*/}
      </div>
      <div
        ref={textRef}
        className="text text-lg absolute w-full h-full text-primary-contrastText "
      >
        <p>MATHJOY MATHJOY MATHJOY</p>
      </div>
    </div>
  );
}