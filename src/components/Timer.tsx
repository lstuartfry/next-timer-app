"use client";

import { useEffect } from "react";
import { useTimer } from "react-timer-hook";
import InputMask from "react-input-mask";
import Image from "next/image";

import Radial from "./Radial";
import pause from "/public/pause.svg";
import play from "/public/play.svg";
import "./timer.css";

interface Props {
  expiryTimestamp: Date;
  onChange: ({ minutes, seconds }: { minutes: number; seconds: number }) => void;
  totalTimerSeconds: number;
}

const PauseImage = <Image src={pause} alt="pause" width={20} height={20} />;
const PlayImage = <Image src={play} alt="play" width={20} height={20} />;

export default function Timer({ expiryTimestamp, onChange, totalTimerSeconds }: Props) {
  const {
    isRunning,
    minutes,
    pause,
    restart,
    resume,
    seconds,
    totalSeconds: totalRemainingSeconds,
  } = useTimer({
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

  const handleReset = () => {
    onChange({ minutes: 0, seconds: 0 });
  };

  // format the value to match the desired input mask
  const formattedValue = `${minutes > 9 ? minutes : `0${minutes}`}${seconds > 9 ? seconds : `0${seconds}`}`;

  return (
    <div className="flex h-full w-full flex-col">
      <div className="flex grow items-center">
        <Radial
          totalTimerSeconds={totalRemainingSeconds}
          totalRemainingSeconds={totalRemainingSeconds}
        >
          <InputMask
            className="z-10 w-full bg-transparent text-center text-4xl"
            mask="99:99"
            onChange={handleChange}
            value={formattedValue}
          />
        </Radial>
      </div>
      <div className="flex justify-around p-6 text-lg">
        <button onClick={handleAddMinute}>+1:00</button>
        <button
          className="rounded-full bg-dark-gray-800 p-4"
          onClick={() => (isRunning ? pause() : resume())}
          data-testid="timerActionButton"
        >
          {isRunning ? PauseImage : PlayImage}
        </button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}
