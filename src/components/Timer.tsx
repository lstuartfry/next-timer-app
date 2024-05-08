"use client";

import { useTimer } from "react-timer-hook";
import InputMask from "react-input-mask";

export default function Timer({ expiryTimestamp }: { expiryTimestamp: Date }) {
  const { seconds, minutes } = useTimer({
    expiryTimestamp,
    autoStart: true,
  });
  const formattedValue = `${minutes > 9 ? minutes : `0${minutes}`}${seconds}`;

  return (
    <InputMask
      className="bg-transparent text-center"
      mask="99:99"
      value={formattedValue}
    />
  );
}
