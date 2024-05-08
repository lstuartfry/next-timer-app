"use client";

import { useEffect } from "react";
import { useTimer } from "react-timer-hook";
import InputMask from "react-input-mask";
import Image from "next/image";
import pause from "/public/pause.svg";
import play from "/public/play.svg";

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

const Pause = <Image src={pause} alt="pause" width={20} height={20} />;
const Play = <Image src={play} alt="play" width={20} height={20} />;

export default function Timer({ expiryTimestamp, onChange }: Props) {
  const { isRunning, minutes, pause, restart, resume, seconds } = useTimer({
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

  const handleAddMinute = () => {
    onChange({ minutes: minutes + 1, seconds });
  };

  // format the value to match the desired input mask
  const formattedValue = `${minutes > 9 ? minutes : `0${minutes}`}${seconds > 9 ? seconds : `0${seconds}`}`;

  return (
    <div className="flex h-full flex-col">
      <div className="flex grow">
        <InputMask
          className="bg-transparent text-center text-4xl"
          mask="99:99"
          onChange={handleChange}
          value={formattedValue}
        />
      </div>
      <div className="flex justify-center py-6">
        <button onClick={handleAddMinute}>+1:00</button>
        <button onClick={() => (isRunning ? pause() : resume())}>
          {isRunning ? Pause : Play}
        </button>
      </div>
    </div>
  );
}
