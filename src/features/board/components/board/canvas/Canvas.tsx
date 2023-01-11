import { ReactNode } from 'react'

interface Props {
  children: ReactNode[] | ReactNode
}

export default function Canvas({ children }: Props) {
  return (
    <div className="rounded border-2 border-dashed border-zinc-400 bg-zinc-900">
      <div className="flex overflow-x-auto">{children}</div>
    </div>
  )
}
