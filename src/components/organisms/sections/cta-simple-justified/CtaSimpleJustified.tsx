import Link from 'next/link'

import CONSTS from '~config/consts'

export default function CtaSimpleJustified() {
  return (
    <div className="bg-gray-50 py-12">
      <div className="mx-auto max-w-7xl py-12 px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          <span className="block">Ready to explore?</span>
          <span className="block text-indigo-600">Start your free board today.</span>
        </h2>

        <div className="mt-8 flex gap-4 lg:mt-0 lg:flex-shrink-0">
          <Link
            href={CONSTS.url.auth.login}
            className="inline-block rounded-lg bg-indigo-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-indigo-600 hover:bg-indigo-700 hover:ring-indigo-700"
          >
            Try Board Now
            <span className="ml-2 text-indigo-200" aria-hidden="true">
              &rarr;
            </span>
          </Link>

          <Link
            href={CONSTS.url.auth.login}
            className="inline-block rounded-lg px-4 py-1.5 text-base font-semibold leading-7 text-gray-900 ring-1 ring-gray-900/10 hover:ring-gray-900/20"
          >
            Our Motivation
          </Link>
        </div>
      </div>
    </div>
  )
}
