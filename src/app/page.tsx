import Timer from "@/components/Timer";

export default function App() {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 60);
  return (
    <main className="flex h-screen min-h-screen items-center justify-center bg-dark-gray-800 font-roboto text-white">
      <div className="flex h-2/3 w-1/3 min-w-[300px] flex-col overflow-hidden rounded-md bg-red-50">
        <div className="flex justify-center bg-dark-gray-700 py-6">Timer</div>
        <div className="flex flex-1 items-center justify-center bg-dark-gray-500">
          <Timer expiryTimestamp={time} />
        </div>
        <div className="flex justify-center bg-dark-gray-500 px-4 py-6">
          footer
        </div>
      </div>
    </main>
  );
}
