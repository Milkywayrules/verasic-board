import Link from 'next/link'
import { Dashboard } from '~commons/components'
import CONSTS from '~config/consts'

export default function IndexBoardDashboardPage() {
  const className = 'bg-indigo-700 px-2 py-0.5 hover:bg-indigo-800 rounded text-gray-200'

  return (
    <Dashboard pageTitle="My Project" siteTitle="My Project">
      {/* canvas */}
      <div className="bg-zinc-800">
        <p>some tes movement right here and there ohya</p>
        <div className="my-4 flex flex-col gap-2">
          <div className="flex">
            <Link href={`${CONSTS.url.board}/some-long-board-id-here`} className={className}>
              Board with ID
            </Link>
          </div>
          <div className="flex">
            {/* issue w/ rbd when client side navigation */}
            <a href={`${CONSTS.url.board}/dnd`} className={className}>
              Drag n Drop Board
            </a>
          </div>
        </div>
      </div>
    </Dashboard>
  )
}
