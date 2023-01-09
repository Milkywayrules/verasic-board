import { FormEvent } from 'react'

export default function Subscribe() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <div className="relative bg-gradient-to-b from-indigo-700 to-indigo-500 py-12">
      <div className="absolute inset-x-0 bottom-0">
        <svg
          viewBox="0 0 224 12"
          fill="currentColor"
          className="-mb-1 w-full text-white"
          preserveAspectRatio="none"
        >
          <path d="M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z" />
        </svg>
      </div>

      <div className="mx-auto px-4 py-16 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:py-20">
        <div className="relative max-w-2xl sm:mx-auto sm:max-w-xl sm:text-center md:max-w-2xl">
          <h2 className="mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
            Verasic Board almost ready, <br className="hidden md:block" />
            your{' '}
            <span className="relative inline-block px-2">
              <div className="absolute inset-0 -skew-x-12 transform bg-teal-400" />
              <span className="relative text-teal-900">feedbacks</span>
            </span>{' '}
            are very welcome{' '}
          </h2>

          <p className="mb-6 text-base text-indigo-100 md:text-lg">
            For that, you can subscribe to our newsletter, there will be updates about how
            Verasic&nbsp;Board progresses. Maybe we&apos;ll email you 2x a month, we&apos;ll not be
            spamming, we hate that too, really 🤞
          </p>

          <form
            onSubmit={handleSubmit}
            className="mb-4 flex w-full flex-col items-center md:flex-row md:px-16"
          >
            <input
              placeholder="Email"
              required
              type="email"
              className="focus:shadow-outline mb-3 h-12 w-full flex-grow appearance-none rounded border-2 border-transparent bg-indigo-900 px-4 text-white transition duration-200 focus:border-teal-700 focus:outline-none disabled:cursor-not-allowed md:mr-2 md:mb-0"
              disabled
            />
            <button
              type="submit"
              className="focus:shadow-outline hover:bg-teal-500s inline-flex h-12 w-full items-center justify-center rounded bg-teal-400 px-6 font-semibold tracking-wide text-teal-900 shadow-md transition duration-200 hover:text-indigo-900 focus:outline-none disabled:cursor-not-allowed md:w-auto"
              disabled
            >
              Subscribe
            </button>
          </form>

          <p className="mb-10 max-w-md text-xs tracking-wide text-indigo-100 sm:mx-auto sm:text-sm md:mb-16">
            Thank you for your excitement and curiousity 🙌
            <br />
            Currently we closed this form and will be back soon
          </p>

          <a
            href="/"
            aria-label="Scroll down"
            className="mx-auto flex h-10 w-10 transform items-center justify-center rounded-full border border-gray-400 text-white duration-300 hover:scale-110 hover:border-teal-400 hover:text-teal-400 hover:shadow"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="currentColor"
            >
              <path d="M10.293,3.293,6,7.586,1.707,3.293A1,1,0,0,0,.293,4.707l5,5a1,1,0,0,0,1.414,0l5-5a1,1,0,1,0-1.414-1.414Z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}
