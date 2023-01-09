export default function Analytics() {
  return (
    <div className="mx-auto px-6 py-12 sm:py-16 md:max-w-full md:px-24 lg:px-8 lg:py-20">
      <div className="row-gap-8 grid gap-5 lg:grid-cols-2">
        <div className="flex flex-col justify-center">
          <div className="mb-6 max-w-xl">
            <div>
              <p className="mb-4 inline-block rounded-full bg-teal-300 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-teal-900">
                Enhance
              </p>
            </div>
            <h2 className="mb-6 max-w-lg font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              Collaborate lively <br className="hidden md:block" />
              and <span className="inline-block text-indigo-600">enhance</span> your works
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
              Open new possibilities with Verasic Board, live collaborate with your team and do your
              work like playing multiplayer games. Increase productivity and decrease your work
              effort and time.
            </p>
          </div>
          <div className="flex">
            <a
              href="/"
              aria-label=""
              className="inline-flex items-center font-semibold text-indigo-600 transition-colors duration-200 hover:text-indigo-400"
            >
              Try Board Now
              <svg className="ml-2 inline-block w-3" fill="currentColor" viewBox="0 0 12 12">
                <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
              </svg>
            </a>
          </div>
        </div>
        <div className="relative">
          <svg className="absolute w-full text-teal-300" fill="currentColor" viewBox="0 0 600 392">
            <rect x="0" y="220" width="75" height="92" rx="8" />
            <rect x="105" y="83" width="75" height="309" rx="8" />
            <rect x="210" y="155" width="75" height="237" rx="8" />
            <rect x="315" y="211" width="75" height="181" rx="8" />
            <rect x="420" y="129" width="75" height="263" rx="8" />
            <rect x="525" y="0" width="75" height="392" rx="8" />
          </svg>
          <svg
            className="relative w-full text-indigo-500"
            fill="currentColor"
            viewBox="0 0 600 392"
          >
            <rect x="0" y="301" width="75" height="91" rx="8" />
            <rect x="105" y="176" width="75" height="216" rx="8" />
            <rect x="210" y="237" width="75" height="155" rx="8" />
            <rect x="315" y="311" width="75" height="81" rx="8" />
            <rect x="420" y="205" width="75" height="187" rx="8" />
            <rect x="525" y="83" width="75" height="309" rx="8" />
          </svg>
        </div>
      </div>
    </div>
  )
}
