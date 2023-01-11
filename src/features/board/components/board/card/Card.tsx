import { CardType } from '.hierarchy'

interface Props {
  text: string
  type: CardType
}

/**
 * some desc here to be checked on the imported file card
 */
export default function Card({ text, type }: Props) {
  const date = Intl.DateTimeFormat('id').format(Date.now())

  return (
    <button
      type="button"
      className="min-h-[4rem] rounded bg-zinc-700/75 px-3 py-2 text-gray-200 outline-none transition-colors hover:bg-zinc-700/50 focus-visible:ring-2 focus-visible:ring-indigo-700 active:bg-zinc-700/25"
    >
      <div className="flex flex-col gap-4">
        <p className="text-left">{text}</p>

        <div className="my-1 flex items-center justify-between gap-2 text-xs">
          <div className="flex gap-1">
            {/* eslint-disable-next-line no-nested-ternary */}
            {type === 'bug' ? (
              <div className="pys-0.5 rounded-sm bg-red-600/50 px-1 leading-normal">Bug</div>
            ) : // eslint-disable-next-line no-nested-ternary
            type === 'story' ? (
              <div className="pys-0.5 rounded-sm bg-emerald-600/50 px-1 leading-normal">Story</div>
            ) : type === 'task' ? (
              <div className="pys-0.5 rounded-sm bg-blue-600/50 px-1 leading-normal">Task</div>
            ) : null}
          </div>
          <div className="">{date}</div>
        </div>
      </div>
    </button>
  )
}
