export default function userpage() {
    return (
      <div className="flex flex-col items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] relative bg-white">
        <header className="absolute top-0 left-0 p-4 flex gap-4">
          <button className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center bg-gray-200 text-black gap-2 text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5">
            Admin Login
          </button>
          <button className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center bg-gray-200 text-black gap-2 text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5">
            Add Article
          </button>
        </header>
  
        <main className="flex flex-col items-center gap-8">
          {/* Main Title */}
          <h1 className="text-4xl font-bold text-black">SPEED</h1>
          
          <form className="flex flex-col text-black gap-4 w-full sm:w-96">
            <input
              type="text"
              placeholder="Article Title"
              className="border border-grey-300 rounded p-2"
            />
            <input
              type="text"
              placeholder="Authors"
              className="border border-grey-300 rounded p-2"
            />
            <input
              type="text"
              placeholder="Journal Name"
              className="border border-gray-300 rounded p-2"
            />
            <div className="flex gap-4">
              <input
                type="date"
                placeholder="Year of Publication"
                className="border border-gray-300 rounded p-2 flex-1"
              />
              <input
                type="text"
                placeholder="Volume"
                className="border border-gray-300 rounded p-2 flex-1"
              />
            </div>
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="Number"
                className="border border-gray-300 rounded p-2 flex-1"
              />
              <input
                type="text"
                placeholder="Pages"
                className="border border-gray-300 rounded p-2 flex-1"
              />
            </div>
            <input
              type="text"
              placeholder="DOI"
              className="border border-gray-300 rounded p-2"
            />
            <button
              type="submit"
              className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center bg-gray-200 text-black gap-2 text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full"
            >
              Submit Article
            </button>
          </form>
        </main>
      </div>
    );
  }
  