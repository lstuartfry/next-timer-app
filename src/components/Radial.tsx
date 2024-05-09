"use client";

import { useMemo } from "react";
import "./radial.css";

interface Props {
  totalTimerSeconds: number;
  totalRemainingSeconds: number;
  children?: React.ReactElement;
}

export default function Radial({ totalTimerSeconds, totalRemainingSeconds, children }: Props) {
  // animate the radial progress as the timer is updated.
  const radialPercentage = useMemo(() => {
    if (!totalTimerSeconds) return null;
    const percentage = (totalRemainingSeconds / totalTimerSeconds) * 100;
    // when the timer is reset, the totalTimerSeconds variable will equal '0';
    // when this occurs, we will not display any radial in the UI.
    if (percentage >= 50) {
      return `white ${percentage}%, rgb(89 109 120) ${100 - percentage}%`;
    }
    return `white ${percentage}%, rgb(89 109 120) ${percentage}%`;
  }, [totalRemainingSeconds, totalTimerSeconds]);

  return (
    <div
      className={`radial ${radialPercentage ? `bg-[conic-gradient(${radialPercentage})]` : "bg-none"}`}
    >
      {children}
    </div>
  );
}
