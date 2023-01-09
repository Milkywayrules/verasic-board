import { Inter } from '@next/font/google'
import Head from 'next/head'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [run, runSet] = useState(false)

  const handle = () => runSet(s => !s)

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={inter.className}>
        <h1 className="text-2xl font-black text-blue-800">Title here</h1>
        <p className="text-lg font-medium text-blue-600">Description here</p>

        <button
          type="button"
          onClick={handle}
          className="rounded bg-indigo-400 px-2 py-1 text-gray-100"
        >
          toggle
        </button>

        <p>{run ? 'run' : 'walk'}</p>
      </main>
    </>
  )
}