import Link from 'next/link'

export default function Header() {
  return (
    <div className="overflow-hidden bg-gray-900">
      <div className="mx-auto flex min-h-screen justify-center px-4 py-24 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:py-20">
        <div className="flex flex-col items-center justify-center xl:flex-row">
          <div className="mb-12 w-full max-w-xl xl:mb-0 xl:w-7/12 xl:pr-16">
            <h2 className="mb-6 max-w-lg font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-10">
              Board to ease your team <br className="hidden md:block" />
              work routine, <span className="text-teal-400">Verasic Board</span>
            </h2>
            <p className="mb-4 max-w-xl text-base text-gray-400 md:text-lg">
              Verasic Board will ease those tasks and projects your team currently do by enabling
              multiplayer collaboration on the board.
            </p>
            <Link
              href="/"
              aria-label=""
              className="inline-flex items-center font-semibold tracking-wider text-teal-400 transition-colors duration-200 hover:text-teal-600"
            >
              Landing page
              <svg className="ml-2 inline-block w-3" fill="currentColor" viewBox="0 0 12 12">
                <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
              </svg>
            </Link>
          </div>

          <div className="w-full max-w-xl xl:w-6/12 xl:px-8">
            <div className="relative">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute bottom-0 right-0 z-0 -mb-8 -mr-20 hidden w-32 text-teal-400 sm:block lg:-mr-16 lg:w-32"
              >
                <defs>
                  <pattern
                    id="766323e1-e594-4ffd-a688-e7275079d540"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect fill="url(#766323e1-e594-4ffd-a688-e7275079d540)" width="52" height="24" />
              </svg>
              <div className="relative rounded bg-white p-7 shadow-2xl sm:p-10">
                <h3 className="mb-4 text-xl font-semibold sm:mb-6 sm:text-center sm:text-2xl">
                  Welcome back 👋
                </h3>
                <form>
                  <div className="mb-1 sm:mb-2">
                    {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                    <label htmlFor="email" className="mb-1 inline-block font-medium">
                      E-mail
                    </label>
                    <input
                      placeholder="bonjour@dioilham.com"
                      required
                      type="text"
                      className="focus:shadow-outline mb-2 h-12 w-full flex-grow appearance-none rounded border border-gray-300 bg-white px-4 shadow-sm transition duration-200 focus:border-indigo-400 focus:outline-none disabled:cursor-not-allowed"
                      id="email"
                      name="email"
                      disabled
                    />
                  </div>
                  <div className="mb-1 sm:mb-2">
                    {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                    <label htmlFor="secret-code" className="mb-1 inline-block font-medium">
                      Secret Code
                    </label>
                    <input
                      placeholder="12ga86v5"
                      required
                      type="text"
                      className="focus:shadow-outline mb-2 h-12 w-full flex-grow appearance-none rounded border border-gray-300 bg-white px-4 shadow-sm transition duration-200 focus:border-indigo-400 focus:outline-none disabled:cursor-not-allowed"
                      id="secret-code"
                      name="secret-code"
                      disabled
                    />
                  </div>
                  <div className="mt-4 mb-2 sm:mb-4">
                    <button
                      type="submit"
                      className="focus:shadow-outline hover:bg-indigo-700s inline-flex h-12 w-full items-center justify-center rounded bg-indigo-600 px-6 font-medium tracking-wide text-white shadow-md transition duration-200 focus:outline-none disabled:cursor-not-allowed"
                      disabled
                    >
                      Login
                    </button>
                  </div>
                  <p className="text-xs text-gray-600 sm:text-sm">
                    Currently we closed this form and will be back soon
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
