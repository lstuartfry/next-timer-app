export default function App() {
  return (
    <main className="font-roboto flex h-screen min-h-screen items-center justify-center bg-darkerGray text-white">
      <div className="flex h-2/3 w-1/3 min-w-[300px] flex-col overflow-hidden rounded-md bg-red-50">
        <div className="flex justify-center bg-darkGray py-6">Timer</div>
        <div className="flex-1 bg-mediumGray">clock</div>
        <div className="flex justify-center bg-mediumGray px-4 py-6">
          footer
        </div>
      </div>
    </main>
  );
}
