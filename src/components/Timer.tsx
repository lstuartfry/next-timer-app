"use client";

import { useEffect } from "react";
import { useTimer } from "react-timer-hook";
import InputMask from "react-input-mask";

interface Props {
  expiryTimestamp: Date;
  onChange: ({
    minutes,
    seconds,
  }: {
    minutes: number;
    seconds: number;
  }) => void;
}

export default function Timer({ expiryTimestamp, onChange }: Props) {
  const { seconds, minutes, pause, restart } = useTimer({
    expiryTimestamp,
    autoStart: false,
  });

  // reset the timer every time the expiryTimestamp is updated
  useEffect(() => {
    restart(expiryTimestamp, false);
  }, [expiryTimestamp, restart]);

  // parse the masked input prior to invoking the 'onChange' callback
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const [minutes, seconds] = e.target.value.split(":");
    onChange({ minutes: Number(minutes), seconds: Number(seconds) });
  };

  // format the value to match the desired input mask
  const formattedValue = `${minutes > 9 ? minutes : `0${minutes}`}${seconds > 9 ? seconds : `0${seconds}`}`;

  return (
    <InputMask
      className="bg-transparent text-center text-4xl"
      mask="99:99"
      onChange={handleChange}
      value={formattedValue}
    />
  );
}
