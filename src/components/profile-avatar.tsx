"use client";

import Image from "next/image";
import { useState } from "react";

export function ProfileAvatar() {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="transition-transform duration-200"
    >
      <Image
        src={isHovering ? "/profile.jpg" : "/avatar.jpg"}
        width={44}
        height={44}
        alt="Tom Heaton"
        priority
        className="h-11 w-11 rounded-full object-cover transition-all duration-200"
      />
    </div>
  );
}
