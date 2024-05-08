"use client";

import Timer from "@/components/Timer";
import { useCallback, useState } from "react";

export default function App() {
  const time = new Date();

  // default the timer to 60 seconds.
  time.setSeconds(time.getSeconds() + 60);

  const [timer, setTimer] = useState<Date>(time);

  const handleChange = useCallback(
    ({ minutes, seconds }: { minutes: number; seconds: number }) => {
      const newTime = new Date();
      newTime.setMinutes(newTime.getMinutes() + minutes);
      newTime.setSeconds(newTime.getSeconds() + seconds);
      setTimer(newTime);
    },
    [],
  );

  return (
    <main className="flex h-screen min-h-screen items-center justify-center bg-dark-gray-800 font-roboto text-white">
      <div className="flex h-2/3 w-1/3 min-w-[300px] flex-col overflow-hidden rounded-md bg-red-50">
        <div className="flex justify-center bg-dark-gray-700 py-6">Timer</div>
        <div className="flex flex-1 items-center justify-center bg-dark-gray-500">
          <Timer expiryTimestamp={timer} onChange={handleChange} />
        </div>
      </div>
    </main>
  );
}
