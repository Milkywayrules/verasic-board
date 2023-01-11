import Head from 'next/head'
import { ReactNode } from 'react'
import AppBar from './AppBar'
import PageHeader from './PageHeader'

interface Props {
  siteTitle: string
  pageTitle: string
  children: ReactNode | ReactNode[]
}

/**
 * ? \
 * heading: gray 100 \
 * non heading: gray 200
 * sub non heading: gray 400/300
 *
 * bg zinc 900 \
 * bg zinc 800
 */
export default function Dashboard({ children, pageTitle, siteTitle }: Props) {
  return (
    <>
      <Head>
        <title>{siteTitle} · Dashboard · Verasic Board</title>
      </Head>

      <div className="min-h-screen bg-zinc-900 text-sm text-gray-200">
        <div className="flex min-h-screen flex-col">
          <AppBar
            // position="top"
            navigationMain={[
              { name: 'Dashboard', href: '#', current: false },
              { name: 'My Project', href: '#', current: true },
            ]}
            navigationUser={[{ name: 'Landing Page', href: '#' }]}
            user={{
              name: 'Tom Cook',
              email: 'tom@example.com',
              urlImage:
                'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            }}
          />

          <PageHeader pageTitle={pageTitle} />

          <main className="flex-1">
            <div className="mx-auto max-w-7xl bg-blue-900/20 py-6 sm:px-6 lg:px-8">
              <div className="bg-blue-400/20 px-4 py-2 sm:px-0">{children}</div>
            </div>
          </main>
        </div>
      </div>
    </>
  )
}
