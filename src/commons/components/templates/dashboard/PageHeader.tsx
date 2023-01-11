interface Props {
  pageTitle: string
}

export default function PageHeader({ pageTitle }: Props) {
  return (
    <header className="bg-zinc-800 text-gray-100 shadow">
      <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-bold tracking-tight text-gray-100">{pageTitle}</h1>
      </div>
    </header>
  )
}
