function App() {
  return (
    <>
      <div className="h-screen flex flex-col items-center justify-center gap-5 bg-amber-50">
        <h1 className="text-3xl font-semibold">0</h1>
        <div className="flex items-center justify-center gap-2">
          <button className="py-2 px-4 text-white rounded-md font-semibold hover:bg-green-700 bg-green-500">
            Increment
          </button>
          <button className="py-2 px-4 text-white rounded-md font-semibold hover:bg-red-700 bg-red-500">
            Decrement
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
